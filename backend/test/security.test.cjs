const { test } = require('node:test');
const assert = require('node:assert/strict');
const { mkdtempSync, rmSync, statSync } = require('node:fs');
const { tmpdir } = require('node:os');
const { join } = require('node:path');
const { randomBytes, scryptSync } = require('node:crypto');
const { once } = require('node:events');
const { io } = require('socket.io-client');
const dir = mkdtempSync(join(tmpdir(), 'magnus-security-'));
const password = randomBytes(20).toString('hex'), salt = randomBytes(16).toString('hex');
process.env.JWT_SECRET = randomBytes(32).toString('hex');
process.env.ADMIN_EMAIL = 'synthetic-admin@example.invalid';
process.env.ADMIN_PASSWORD_HASH = `scrypt$${salt}$${scryptSync(password,salt,64).toString('hex')}`;
process.env.DATA_DIR = dir;
process.env.CORS_ORIGIN = 'http://localhost:3000';
const { NestFactory } = require('@nestjs/core');
const { JwtService } = require('@nestjs/jwt');
const { AppModule } = require('../dist/app.module');
const { configureApp } = require('../dist/security/setup');
const { validateSecurityConfig } = require('../dist/security/config');
const { StaffGuard } = require('../dist/modules/auth/guards/staff.guard');
let app, base, token, record;
async function start(){app=await NestFactory.create(AppModule,{logger:false,bodyParser:false});configureApp(app);await app.listen(0,'127.0.0.1');base=await app.getUrl();}
async function call(path,body,auth,headers={}){return fetch(base+'/api'+path,{method:body?'POST':'GET',headers:{...(body?{'Content-Type':'application/json'}:{}),...(auth?{Authorization:'Bearer '+auth}:{}),...headers},...(body?{body:JSON.stringify(body)}:{})});}
const valid={patientName:'Synthetic Audit',phone:'+91 90000 00000',department:'mri',preferredDate:'2030-01-01',preferredTime:'10:00',notes:'Synthetic test only'};
test('security regression suite',async t=>{
 try {
 await start();
 await t.test('rejects missing and placeholder signing configuration',()=>{for(const secret of [undefined,'dev-secret-change-me','short'])assert.throws(()=>validateSecurityConfig({JWT_SECRET:secret}));});
 await t.test('requires production persistence and explicit CORS',()=>assert.throws(()=>validateSecurityConfig({JWT_SECRET:process.env.JWT_SECRET,NODE_ENV:'production'})));
 await t.test('health and private response headers',async()=>{const r=await call('/health');assert.equal(r.status,200);assert.equal((await r.json()).status,'ok');assert.equal(r.headers.get('cache-control'),'no-store');assert.equal(r.headers.get('x-content-type-options'),'nosniff');});
 await t.test('public appointment callback persists',async()=>{const r=await call('/appointments',valid);assert.equal(r.status,201);record=await r.json();});
 await t.test('anonymous list and detail denied',async()=>{for(const route of ['/appointments','/appointments/'+record.id])assert.equal((await call(route)).status,401);});
 await t.test('demo/unknown account login denied',async()=>assert.equal((await call('/auth/login',{email:'admin@magnusdc.com',password:'not-a-valid-account-password'})).status,401));
 await t.test('configured hashed account can login',async()=>{const r=await call('/auth/login',{email:process.env.ADMIN_EMAIL,password});assert.equal(r.status,201);token=(await r.json()).accessToken;assert.ok(token);});
 await t.test('authorized staff can read',async()=>{const r=await call('/appointments',undefined,token);assert.equal(r.status,200);assert.equal((await r.json())[0].id,record.id);assert.equal((await call('/appointments/'+record.id,undefined,token)).status,200);});
 await t.test('patient role fails staff authorization',()=>assert.throws(()=>new StaffGuard().canActivate({switchToHttp:()=>({getRequest:()=>({user:{role:'patient'}})})})));
 await t.test('bad signature, issuer, audience, expiry and unknown user denied',async()=>{const jwt=app.get(JwtService);for(const opts of [{secret:'not-the-secret'},{issuer:'other'},{audience:'other'},{expiresIn:-1}]){const bad=await jwt.signAsync({id:'clinic-admin'},opts);assert.equal((await call('/auth/me',undefined,bad)).status,401);}assert.equal((await call('/auth/me',undefined,await jwt.signAsync({id:'1'}))).status,401);});
 await t.test('invalid fields and mass assignment rejected',async()=>{for(const change of [{phone:'abcdefgh'},{department:'unknown'},{preferredDate:'2030-02-31'},{preferredTime:'25:00'},{patientName:'x'.repeat(101)},{notes:'x'.repeat(2001)},{role:'admin'}])assert.equal((await call('/appointments',{...valid,...change})).status,400);});
 await t.test('callback without scheduling fields accepted',async()=>{const r=await call('/appointments',{patientName:'Callback Test',phone:'9000000000'});assert.equal(r.status,201);assert.equal((await r.json()).department,'general');});
 await t.test('contact and corporate callback forms remain compatible',async()=>{assert.equal((await call('/contact',{name:'Synthetic Contact',phone:'9000000000',email:'',subject:'',message:''})).status,201);assert.equal((await call('/corporates/inquiry',{contactPerson:'Synthetic Corporate',phone:'9000000000',companyName:'',email:'',message:''})).status,201);});
 await t.test('oversized body rejected',async()=>assert.equal((await call('/appointments',{...valid,notes:'x'.repeat(20000)})).status,413));
 await t.test('untrusted CORS origin not echoed',async()=>{const r=await call('/health',undefined,undefined,{Origin:'https://untrusted.invalid'});assert.notEqual(r.headers.get('access-control-allow-origin'),'https://untrusted.invalid');});
 await t.test('anonymous WebSocket denied',async()=>{const s=io(base+'/queue',{transports:['websocket'],reconnection:false,timeout:2000});try{const [error]=await once(s,'connect_error');assert.match(error.message,/Unauthorized/);}finally{s.close();}});
 await t.test('staff WebSocket validates department',async()=>{const s=io(base+'/queue',{auth:{token},transports:['websocket'],reconnection:false,timeout:2000});try{await once(s,'connect');const bad=once(s,'exception');s.emit('joinDepartment','unknown');assert.equal((await bad)[0].message,'Invalid department');assert.equal((await s.timeout(2000).emitWithAck('joinDepartment','mri')).joined,'mri');}finally{s.close();}});
 await t.test('login is throttled',async()=>{let blocked=false;for(let i=0;i<6;i++){if((await call('/auth/login',{email:process.env.ADMIN_EMAIL,password:'wrong-but-long-password'})).status===429){blocked=true;break;}}assert.ok(blocked);});
 await t.test('forwarded header cannot bypass IP rate limit',async()=>{let blocked=false;for(let i=0;i<32;i++){if((await call('/health',undefined,undefined,{'X-Forwarded-For':`192.0.2.${i}`})).status===429){blocked=true;break;}}assert.ok(blocked);});
 await t.test('private durable database survives restart',async()=>{assert.equal(statSync(join(dir,'requests.sqlite')).mode&0o777,0o600);await app.close();await start();const r=await call('/appointments/'+record.id,undefined,token);assert.equal(r.status,200);assert.equal((await r.json()).notes,valid.notes);});
 await t.test('list bounded to 100 records',async()=>{const {RecordsService}=require('../dist/storage/records.service');const store=app.get(RecordsService);for(let i=0;i<110;i++)store.insert('appointment',{...valid,id:randomBytes(16).toString('hex'),createdAt:new Date().toISOString()});assert.equal((await (await call('/appointments',undefined,token)).json()).length,100);});
 await t.test('staff pagination and query validation',async()=>{assert.equal((await (await call('/appointments?offset=100',undefined,token)).json()).length,12);assert.equal((await call('/appointments?offset=-1',undefined,token)).status,400);});
 await t.test('capacity overflow fails rather than silently losing requests',()=>{const {RecordsService}=require('../dist/storage/records.service');const store=app.get(RecordsService);store.db.prepare("WITH RECURSIVE n(x) AS (SELECT 1 UNION ALL SELECT x+1 FROM n WHERE x<10000) INSERT OR IGNORE INTO records SELECT 'capacity-'||x,'test','{}','2030-01-01' FROM n").run();assert.throws(()=>store.insert('appointment',{...valid,id:'over-cap',createdAt:new Date().toISOString()}),/capacity reached/);});
 } finally {if(app)await app.close();rmSync(dir,{recursive:true,force:true});}
});
