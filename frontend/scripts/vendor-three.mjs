import { mkdir, copyFile } from 'node:fs/promises';
await mkdir('public/assets/vendor', { recursive: true });
for (const file of ['three.module.js', 'three.core.js']) {
  await copyFile(`node_modules/three/build/${file}`, `public/assets/vendor/${file}`);
}
await copyFile('node_modules/three/LICENSE', 'public/assets/vendor/THREE-LICENSE.txt');
