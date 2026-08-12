import type { CSSProperties } from "react";
import Link from "next/link";
import Script from "next/script";
import { siteConfig } from "@/lib/constants/site-config";

const trailPhotos = [
  "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=560&q=82",
  "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=560&q=82",
  "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=560&q=82",
  "https://images.unsplash.com/photo-1516841273335-e39b37888115?auto=format&fit=crop&w=560&q=82",
  "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=560&q=82",
];

const services = [
  {
    number: "01",
    label: "See deeper",
    title: "Advanced diagnostics",
    copy: "3 Tesla MRI, multislice CT, ultrasound, Doppler, digital X-ray, OPG and CBCT—read with radiologist-led precision.",
    href: "/diagnostics",
    image: "https://images.unsplash.com/photo-1516841273335-e39b37888115?auto=format&fit=crop&w=1400&q=86",
    color: "#d9f5e9",
  },
  {
    number: "02",
    label: "Know sooner",
    title: "Laboratory medicine",
    copy: "Routine, specialised and molecular testing supported by modern infrastructure and thoughtful patient guidance.",
    href: "/laboratory",
    image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=1400&q=86",
    color: "#f1e8ff",
  },
  {
    number: "03",
    label: "Move forward",
    title: "Specialist care",
    copy: "Experienced specialists working alongside diagnostics for coordinated decisions and a clearer care journey.",
    href: "/specialties",
    image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=1400&q=86",
    color: "#e8efff",
  },
  {
    number: "04",
    label: "Stay ahead",
    title: "Preventive health",
    copy: "Thoughtful health checks for individuals, families, women and organisations—made practical, personal and easy to access.",
    href: "/health-packages",
    image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=1400&q=86",
    color: "#fff1dc",
  },
  {
    number: "05",
    label: "Care at every stage",
    title: "Women’s imaging",
    copy: "Dedicated women’s imaging and fetal medicine services delivered with privacy, sensitivity and specialist insight.",
    href: "/diagnostics",
    image: "https://images.unsplash.com/photo-1579684453423-f84349ef60b0?auto=format&fit=crop&w=1400&q=86",
    color: "#f8e5eb",
  },
];

const specialists = [
  ["Radiology", "Precision imaging", "01"],
  ["Internal medicine", "Whole-person care", "02"],
  ["Cardiology", "Heart health", "03"],
  ["Women’s health", "Care through every stage", "04"],
  ["Orthopaedics", "Movement restored", "05"],
  ["Neurology", "Expert perspective", "06"],
];

const visualAssets = [
  ...trailPhotos,
  ...services.map((service) => service.image),
  "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=2200&q=88",
];

const css = String.raw`
@import url('https://fonts.googleapis.com/css2?family=Google+Sans+Flex:GRAD,ROND,wdth,wght@0,0,100,100..900&display=swap');
.dantora-home{--ink:#112b73;--mint:#dff5ff;--acid:#f5cf48;--paper:#f7f9fc;--blue:#142f86;--sky:#31b4f4;--red:#da1c29;position:relative;isolation:isolate;overflow:clip;background:var(--paper);color:var(--ink);font-family:'Google Sans Flex',var(--font-lato),sans-serif}.dantora-home *{box-sizing:border-box}.dantora-home .dh-sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}.dantora-home a{color:inherit;text-decoration:none}.dantora-home button,.dantora-home input,.dantora-home select,.dantora-home textarea{font:inherit}.dantora-home .dh-shell{width:min(100% - 40px,1420px);margin-inline:auto}.dantora-home .dh-kicker{display:flex;align-items:center;gap:10px;font-size:12px;font-weight:750;letter-spacing:.13em;text-transform:uppercase}.dantora-home .dh-kicker:before{content:'';width:8px;height:8px;border-radius:50%;background:currentColor}.dantora-home .dh-pill{display:inline-flex;align-items:center;justify-content:center;gap:12px;min-height:52px;padding:0 22px;border-radius:999px;border:1px solid rgba(8,47,39,.35);font-size:14px;font-weight:780;transition:transform .35s,background .35s,color .35s}.dantora-home .dh-pill:hover{transform:translateY(-3px);background:var(--ink);color:white}.dantora-home .dh-pill--light{border-color:rgba(255,255,255,.45)}.dantora-home .dh-pill--light:hover{background:white;color:var(--ink)}.dantora-home .dh-word{display:inline-block;overflow:hidden;vertical-align:bottom}.dantora-home .dh-word>span{display:inline-block;transform:translateY(115%);transition:transform .8s cubic-bezier(.16,1,.3,1);transition-delay:calc(var(--word-i,0)*45ms)}.dantora-home .dh-reveal.is-visible .dh-word>span{transform:translateY(0)}.dantora-home [data-rise]{opacity:1;transform:none}.dantora-home.has-motion [data-rise]{opacity:0;transform:translateY(35px);transition:opacity .8s,transform .8s cubic-bezier(.16,1,.3,1)}.dantora-home.has-motion [data-rise].is-visible{opacity:1;transform:none}
.dantora-home .dh-preloader{position:fixed;inset:0;z-index:9999;display:grid;place-items:center;background:#112b73;color:#dff5ff;transition:visibility 0s 1.1s;animation:dh-loader-failsafe .01s 7s forwards}.dantora-home .dh-preloader:before,.dantora-home .dh-preloader:after{content:'';position:absolute;inset:0;background:#112b73;transform-origin:bottom;transition:transform 1.05s cubic-bezier(.76,0,.24,1)}.dantora-home .dh-preloader:after{background:#dff5ff;transition-delay:.09s}.dantora-home .dh-preloader__core{position:relative;z-index:2;display:grid;place-items:center;width:170px;height:170px}.dantora-home .dh-preloader__ring{position:absolute;inset:0;border:1px solid rgba(186,244,221,.25);border-top-color:#dff5ff;border-radius:50%;animation:dh-spin 1.5s linear infinite}.dantora-home .dh-preloader__mark{width:48px;height:72px;border-left:5px solid currentColor;transform:skew(-23deg)}.dantora-home .dh-preloader__percent{position:absolute;bottom:16px;font-size:12px;letter-spacing:.14em}.dantora-home.is-ready .dh-preloader{visibility:hidden}.dantora-home.is-ready .dh-preloader:before,.dantora-home.is-ready .dh-preloader:after{transform:scaleY(0)}.dantora-home.is-ready .dh-preloader__core{opacity:0;transition:opacity .25s}.dantora-home .dh-asset-error{position:fixed;left:50%;bottom:18px;z-index:9998;display:block;max-width:calc(100% - 32px);transform:translateX(-50%);padding:11px 16px;border-radius:999px;background:#ffdccf;color:#642313;box-shadow:0 10px 35px #0002;font-size:12px;font-weight:750;opacity:0;visibility:hidden;animation:dh-asset-failsafe .01s 7s forwards}.dantora-home .dh-asset-error.is-visible{opacity:1;visibility:visible;animation:none}.dantora-home.is-ready .dh-asset-error:not(.is-visible){animation:none}@keyframes dh-spin{to{transform:rotate(360deg)}}@keyframes dh-loader-failsafe{to{visibility:hidden;pointer-events:none}}@keyframes dh-asset-failsafe{to{opacity:1;visibility:visible}}
.dantora-home .dh-hero{position:relative;min-height:min(890px,calc(100svh - 20px));overflow:hidden;border-radius:0 0 48px 48px;background:var(--mint)}.dantora-home .dh-hero__inner{display:grid;grid-template-columns:minmax(0,1.04fr) minmax(430px,.96fr);align-items:center;min-height:min(890px,calc(100svh - 20px));padding-block:70px 56px}.dantora-home .dh-hero__copy{position:relative;z-index:3;max-width:850px}.dantora-home .dh-hero h1{margin:25px 0 29px;max-width:900px;font-size:clamp(62px,7.5vw,132px);font-weight:540;line-height:.84;letter-spacing:-.075em}.dantora-home .dh-hero h1 em{font-family:Georgia,serif;font-weight:400}.dantora-home .dh-hero__bottom{display:flex;align-items:flex-end;gap:28px;max-width:700px}.dantora-home .dh-hero__bottom p{max-width:490px;margin:0;font-size:clamp(17px,1.4vw,21px);line-height:1.5}.dantora-home .dh-hero__scene{position:absolute;z-index:1;right:-5%;top:0;width:61%;height:100%;pointer-events:none;background:radial-gradient(ellipse at 62% 50%,rgba(49,180,244,.17),transparent 48%)}.dantora-home .dh-hero__scene canvas,.dantora-home .dh-contact__scene canvas{position:absolute;inset:0;width:100%;height:100%;display:block}.dantora-home .dh-dna-fallback{z-index:0;opacity:.98;filter:contrast(1.06) saturate(.92)}.dantora-home .dh-hero__scene>canvas:not(.dh-dna-fallback),.dantora-home .dh-contact__scene>canvas:not(.dh-dna-fallback){z-index:1;opacity:.52;mix-blend-mode:multiply}.dantora-home .dh-hero__orbit{position:absolute;right:4.5%;bottom:7%;z-index:2;width:112px;height:112px;border:1px solid rgba(8,47,39,.3);border-radius:50%;display:grid;place-items:center;font-size:11px;font-weight:800;letter-spacing:.12em;text-align:center;animation:dh-orbit 14s linear infinite}@keyframes dh-orbit{to{transform:rotate(360deg)}}
.dantora-home .dh-why{position:relative;z-index:2;padding:145px 0 175px;background:#fff}.dantora-home .dh-why__head{display:grid;grid-template-columns:.55fr 1.45fr;gap:40px}.dantora-home .dh-why h2{margin:0;max-width:1040px;font-size:clamp(52px,7.3vw,120px);font-weight:500;line-height:.93;letter-spacing:-.07em}.dantora-home .dh-why h2 em{font-family:Georgia,serif;font-weight:400;color:#315f54}.dantora-home .dh-why__foot{display:grid;grid-template-columns:.55fr 1.45fr;gap:40px;margin-top:74px}.dantora-home .dh-why__foot p{grid-column:2;max-width:670px;margin:0;font-size:21px;line-height:1.55}.dantora-home .dh-trail-layer{position:absolute;inset:0;z-index:4;pointer-events:none;overflow:hidden}.dantora-home .dh-trail-photo{position:absolute;width:180px;height:225px;border:7px solid white;border-radius:3px;background-size:cover;background-position:center;box-shadow:0 18px 50px #112b7340;transform:translate(-50%,-50%) scale(.55) rotate(var(--r));opacity:0;animation:dh-photo 1.45s cubic-bezier(.16,1,.3,1) forwards}@keyframes dh-photo{15%,70%{opacity:1;transform:translate(-50%,-50%) scale(1) rotate(var(--r))}100%{opacity:0;transform:translate(-50%,-70%) scale(.94) rotate(var(--r))}}
.dantora-home .dh-services{position:relative;height:500lvh;background:#0f2868;color:#f8fbff}.dantora-home .dh-services__sticky{position:sticky;top:0;height:100lvh;overflow:hidden}.dantora-home .dh-services__intro{position:absolute;z-index:5;left:20px;top:24px}.dantora-home .dh-services__track{display:flex;width:500vw;height:100%;will-change:transform}.dantora-home .dh-service{position:relative;display:grid;grid-template-columns:1fr 1fr;align-items:center;width:100vw;height:100%;flex:none;padding:100px max(20px,calc((100vw - 1420px)/2)) 55px;overflow:hidden;background:var(--card);color:var(--ink)}.dantora-home .dh-service__copy{position:relative;z-index:2;max-width:620px}.dantora-home .dh-service__num{font-size:13px;font-weight:800;letter-spacing:.16em}.dantora-home .dh-service h3{margin:30px 0 24px;font-size:clamp(58px,6.6vw,112px);font-weight:520;line-height:.9;letter-spacing:-.07em}.dantora-home .dh-service p{max-width:520px;margin:0 0 35px;font-size:19px;line-height:1.55}.dantora-home .dh-service__visual{position:relative;justify-self:end;width:min(44vw,650px);aspect-ratio:4/5;border-radius:240px 240px 26px 26px;background-size:cover;background-position:center;box-shadow:0 40px 100px #112b7335}.dantora-home .dh-service__visual:after{content:'';position:absolute;inset:0;border-radius:inherit;background:linear-gradient(180deg,transparent 45%,rgba(8,47,39,.28))}.dantora-home .dh-service__tag{position:absolute;right:-25px;bottom:55px;z-index:2;padding:17px 24px;border-radius:999px;background:#fff;color:#112b73;font-size:13px;font-weight:800;transform:rotate(-6deg)}
.dantora-home .dh-about{position:relative;z-index:5;margin-top:-100lvh;padding:145px 0 0;border-radius:48px 48px 0 0;background:var(--paper)}.dantora-home .dh-about__lead{display:grid;grid-template-columns:.58fr 1.42fr;gap:40px}.dantora-home .dh-about h2{margin:0;font-size:clamp(55px,7.2vw,116px);font-weight:500;line-height:.91;letter-spacing:-.07em}.dantora-home .dh-about h2 em{font-family:Georgia,serif;font-weight:400}.dantora-home .dh-about__copy{grid-column:2;display:grid;grid-template-columns:1fr 1fr;gap:40px;margin-top:66px}.dantora-home .dh-about__copy p{margin:0;font-size:18px;line-height:1.6}.dantora-home .dh-banner{position:relative;height:75lvh;min-height:620px;margin-top:120px;overflow:hidden;background-image:linear-gradient(0deg,#112b7366,#112b7305),url('https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=2200&q=88');background-size:cover;background-position:center calc(50% + var(--banner-y,0px))}.dantora-home .dh-banner__phrase{position:absolute;inset:auto 20px 28px;color:white;font-size:clamp(54px,10vw,170px);font-weight:500;line-height:.83;letter-spacing:-.075em;white-space:nowrap}.dantora-home .dh-stats{display:grid;grid-template-columns:repeat(4,1fr);border-bottom:1px solid #112b7330;background:var(--paper)}.dantora-home .dh-stat{min-height:310px;padding:65px 28px;border-right:1px solid #112b7330}.dantora-home .dh-stat:last-child{border-right:0}.dantora-home .dh-stat strong{display:block;font-size:clamp(58px,6.3vw,100px);font-weight:500;line-height:1;letter-spacing:-.07em}.dantora-home .dh-stat span{display:block;margin-top:27px;font-size:14px;font-weight:750;letter-spacing:.1em;text-transform:uppercase}.dantora-home .dh-rhythm{padding:140px 20px 175px;text-align:center;background:var(--paper)}.dantora-home .dh-rhythm p{margin:0;font-size:clamp(42px,6.5vw,105px);line-height:1.08;letter-spacing:-.065em;color:#a4aea8}.dantora-home .dh-rhythm span{color:var(--ink)}
.dantora-home .dh-team{position:relative;z-index:4;height:300lvh;background:#0f2868;color:white}.dantora-home .dh-team__sticky{position:sticky;top:0;height:100lvh;overflow:hidden;padding-top:48px}.dantora-home .dh-team__head{display:flex;align-items:end;justify-content:space-between}.dantora-home .dh-team h2{margin:14px 0 0;font-size:clamp(58px,8vw,128px);font-weight:500;line-height:.9;letter-spacing:-.07em}.dantora-home .dh-team__hint{font-size:12px;font-weight:750;letter-spacing:.13em;text-transform:uppercase}.dantora-home .dh-team__rail{display:flex;gap:18px;width:max-content;margin-top:55px;padding:0 20px;cursor:grab;will-change:transform;touch-action:none}.dantora-home .dh-team__rail.is-dragging{cursor:grabbing}.dantora-home .dh-person{position:relative;width:min(33vw,470px);height:48lvh;min-height:390px;overflow:hidden;border-radius:22px;background:#dff5ff;color:#112b73;user-select:none}.dantora-home .dh-person:nth-child(2n){background:#e8efff}.dantora-home .dh-person:nth-child(3n){background:#fff1dc}.dantora-home .dh-person__index{position:absolute;right:20px;top:18px;font-size:13px;font-weight:800}.dantora-home .dh-person__halo{position:absolute;left:50%;top:45%;width:72%;aspect-ratio:1;border:1px solid currentColor;border-radius:50%;transform:translate(-50%,-50%);opacity:.25}.dantora-home .dh-person__glyph{position:absolute;left:50%;top:42%;font-family:Georgia,serif;font-size:clamp(100px,12vw,180px);transform:translate(-50%,-50%);opacity:.85}.dantora-home .dh-person__copy{position:absolute;left:25px;right:25px;bottom:24px;border-top:1px solid #112b7350;padding-top:18px}.dantora-home .dh-person__copy strong{font-size:22px}.dantora-home .dh-person__copy span{display:block;margin-top:6px;font-size:14px}.dantora-home .dh-team__progress{position:absolute;left:20px;right:20px;bottom:25px;height:2px;background:#ffffff2a}.dantora-home .dh-team__progress span{display:block;width:20%;height:100%;background:var(--acid);transform-origin:left}
.dantora-home .dh-contact{position:relative;z-index:6;min-height:100lvh;margin-top:-100lvh;display:grid;align-items:center;overflow:hidden;border-radius:48px 48px 0 0;background:#dff5ff}.dantora-home .dh-contact__scene{position:absolute;inset:0 0 0 38%;opacity:.78;pointer-events:none}.dantora-home .dh-contact__inner{position:relative;z-index:2;display:grid;grid-template-columns:.8fr 1.2fr;gap:70px;align-items:center;padding-block:100px}.dantora-home .dh-contact h2{margin:18px 0 25px;font-size:clamp(59px,7.4vw,122px);font-weight:500;line-height:.84;letter-spacing:-.075em}.dantora-home .dh-contact__details{font-size:17px;line-height:1.7}.dantora-home .dh-contact__details a{text-decoration:underline;text-underline-offset:4px}.dantora-home .dh-form{padding:35px;border:1px solid rgba(255,255,255,.65);border-radius:28px;background:rgba(255,255,255,.48);box-shadow:0 35px 100px rgba(8,47,39,.16);backdrop-filter:blur(24px)}.dantora-home .dh-form h3{margin:0;font-size:30px;line-height:1.05;letter-spacing:-.04em}.dantora-home .dh-form>p{margin:12px 0 24px;line-height:1.55}.dantora-home .dh-form__choices{display:grid;grid-template-columns:1fr 1fr;gap:10px}.dantora-home .dh-form__choice{display:flex;align-items:center;justify-content:space-between;min-height:58px;padding:13px 15px;border:1px solid rgba(8,47,39,.22);border-radius:12px;background:rgba(255,255,255,.62);font-size:13px;font-weight:750;transition:background .3s,transform .3s}.dantora-home .dh-form__choice:hover{background:white;transform:translateY(-2px)}.dantora-home .dh-form__grid{display:grid;grid-template-columns:1fr 1fr;gap:15px}.dantora-home .dh-field{display:flex;flex-direction:column;gap:8px}.dantora-home .dh-field--wide{grid-column:1/-1}.dantora-home .dh-field label{font-size:11px;font-weight:800;letter-spacing:.11em;text-transform:uppercase}.dantora-home .dh-field input,.dantora-home .dh-field select,.dantora-home .dh-field textarea{width:100%;min-height:54px;padding:13px 15px;border:1px solid rgba(8,47,39,.22);border-radius:12px;outline:none;background:rgba(255,255,255,.68);color:#112b73}.dantora-home .dh-field textarea{height:92px;resize:vertical}.dantora-home .dh-field input:focus,.dantora-home .dh-field select:focus,.dantora-home .dh-field textarea:focus{border-color:#112b73}.dantora-home .dh-form__submit{display:flex;align-items:center;justify-content:center;width:100%;min-height:56px;margin-top:17px;border:0;border-radius:999px;background:#112b73;color:white;font-weight:800;cursor:pointer;transition:transform .3s,background .3s}.dantora-home .dh-form__submit:hover{transform:translateY(-2px);background:#142f86}.dantora-home .dh-form__note{margin:13px 0 0;font-size:11px;line-height:1.5;opacity:.75}.dantora-home :is(a,button):focus-visible{outline:3px solid var(--red);outline-offset:4px}
@media(min-width:1024px) and (max-width:1279px){.dantora-home .dh-services__sticky,.dantora-home .dh-team__sticky{top:84px;height:calc(100lvh - 84px)}.dantora-home .dh-services__intro{top:18px}.dantora-home .dh-team__sticky{padding-top:32px}}
@media(min-width:1280px){.dantora-home .dh-services__sticky,.dantora-home .dh-team__sticky{top:128px;height:calc(100lvh - 128px)}.dantora-home .dh-services__intro{top:18px}.dantora-home .dh-team__sticky{padding-top:28px}.dantora-home .dh-team__rail{margin-top:35px}.dantora-home .dh-person{height:44lvh}}
@media(max-width:1023px){.dantora-home .dh-shell{width:min(100% - 32px,760px)}.dantora-home .dh-hero,.dantora-home .dh-hero__inner{min-height:800px}.dantora-home .dh-hero__inner{display:block;padding-top:70px}.dantora-home .dh-hero__copy{max-width:680px}.dantora-home .dh-hero h1{font-size:clamp(58px,13vw,94px)}.dantora-home .dh-hero__bottom{display:block}.dantora-home .dh-hero__bottom .dh-pill{margin-top:25px}.dantora-home .dh-hero__scene{right:-24%;top:33%;width:90%;height:70%;opacity:.8}.dantora-home .dh-hero__orbit{display:none}.dantora-home .dh-why{padding:100px 0 120px}.dantora-home .dh-why__head,.dantora-home .dh-why__foot,.dantora-home .dh-about__lead{grid-template-columns:1fr}.dantora-home .dh-why__foot p,.dantora-home .dh-about__copy{grid-column:1}.dantora-home .dh-services{height:auto}.dantora-home .dh-services__sticky{position:relative;height:auto;overflow:visible;padding:90px 0}.dantora-home .dh-services__intro{left:16px}.dantora-home .dh-services__track{display:grid;width:auto;height:auto;gap:16px;padding:0 16px;transform:none!important}.dantora-home .dh-service{width:100%;height:auto;min-height:620px;padding:80px 30px 30px;border-radius:25px;grid-template-columns:1fr}.dantora-home .dh-service h3{font-size:clamp(54px,11vw,84px)}.dantora-home .dh-service__visual{width:100%;height:280px;aspect-ratio:auto;border-radius:150px 150px 18px 18px;margin-top:38px}.dantora-home .dh-service__tag{right:15px}.dantora-home .dh-about{margin-top:0;padding-top:100px}.dantora-home .dh-about__copy{grid-template-columns:1fr;margin-top:45px}.dantora-home .dh-banner{height:62lvh;min-height:480px;margin-top:80px}.dantora-home .dh-stats{grid-template-columns:1fr 1fr}.dantora-home .dh-stat{min-height:230px;border-bottom:1px solid #112b7330}.dantora-home .dh-stat:nth-child(2){border-right:0}.dantora-home .dh-rhythm{padding:100px 16px 120px}.dantora-home .dh-team{height:auto;padding:90px 0}.dantora-home .dh-team__sticky{position:relative;height:auto;overflow:hidden;padding:0}.dantora-home .dh-team__head{align-items:start;flex-direction:column}.dantora-home .dh-team__hint{margin-top:20px}.dantora-home .dh-team__rail{overflow-x:auto;width:auto;padding-bottom:30px;scroll-snap-type:x mandatory;transform:none!important}.dantora-home .dh-person{flex:0 0 min(75vw,430px);width:auto;height:520px;scroll-snap-align:center}.dantora-home .dh-team__progress{display:none}.dantora-home .dh-contact{margin-top:0;border-radius:36px 36px 0 0}.dantora-home .dh-contact__scene{inset:25% -30% 0 0;opacity:.48}.dantora-home .dh-contact__inner{grid-template-columns:1fr;padding-block:90px}.dantora-home .dh-form{margin-top:20px}}
@media(max-width:600px){.dantora-home .dh-shell{width:calc(100% - 28px)}.dantora-home .dh-hero{border-radius:0 0 30px 30px}.dantora-home .dh-hero,.dantora-home .dh-hero__inner{min-height:760px}.dantora-home .dh-hero h1{font-size:clamp(54px,17vw,76px)}.dantora-home .dh-hero__scene{right:-48%;top:38%;width:135%}.dantora-home .dh-why h2,.dantora-home .dh-about h2{font-size:clamp(48px,14vw,69px)}.dantora-home .dh-trail-photo{width:125px;height:155px}.dantora-home .dh-service{padding-inline:22px}.dantora-home .dh-service__visual{height:240px}.dantora-home .dh-about{border-radius:30px 30px 0 0}.dantora-home .dh-stats{grid-template-columns:1fr}.dantora-home .dh-stat{min-height:190px;border-right:0}.dantora-home .dh-rhythm p{font-size:42px}.dantora-home .dh-team h2{font-size:65px}.dantora-home .dh-person{flex-basis:84vw;height:470px}.dantora-home .dh-contact h2{font-size:63px}.dantora-home .dh-contact__inner{gap:25px}.dantora-home .dh-form{padding:24px 18px}.dantora-home .dh-form__choices,.dantora-home .dh-form__grid{grid-template-columns:1fr}.dantora-home .dh-field--wide{grid-column:auto}}
@media(prefers-reduced-motion:reduce){.dantora-home *{scroll-behavior:auto!important;animation-duration:.01ms!important;animation-iteration-count:1!important}.dantora-home .dh-word>span,.dantora-home [data-rise]{opacity:1!important;transform:none!important;transition:none!important}.dantora-home .dh-hero__orbit,.dantora-home .dh-preloader__ring{animation:none}.dantora-home .dh-preloader,.dantora-home .dh-trail-layer,.dantora-home .dh-hero__scene>canvas:not(.dh-dna-fallback),.dantora-home .dh-contact__scene>canvas:not(.dh-dna-fallback){display:none}.dantora-home .dh-services,.dantora-home .dh-team{height:auto}.dantora-home .dh-services__sticky,.dantora-home .dh-team__sticky{position:relative;top:0;height:auto;overflow:hidden}.dantora-home .dh-services__track{display:grid;width:auto;transform:none!important}.dantora-home .dh-service{width:100%;min-height:75svh}.dantora-home .dh-about,.dantora-home .dh-contact{margin-top:0}.dantora-home .dh-team{padding-block:80px}.dantora-home .dh-team__rail{overflow-x:auto;max-width:100%;transform:none!important;touch-action:auto}.dantora-home .dh-team__progress{display:none}}
`;

const helixVertex = String.raw`
precision highp float;
uniform float uTime;
uniform float uWallTime;
uniform float uPixelScale;
uniform vec2 uCursor;
attribute float aSeed;
attribute float aKind;
varying float vAlpha;
varying float vKind;
vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x,289.0);}
vec4 taylorInvSqrt(vec4 r){return 1.79284291400159-.85373472095314*r;}
float snoise(vec3 v){const vec2 C=vec2(1.0/6.0,1.0/3.0);const vec4 D=vec4(0.0,.5,1.0,2.0);vec3 i=floor(v+dot(v,C.yyy));vec3 x0=v-i+dot(i,C.xxx);vec3 g=step(x0.yzx,x0.xyz);vec3 l=1.0-g;vec3 i1=min(g.xyz,l.zxy);vec3 i2=max(g.xyz,l.zxy);vec3 x1=x0-i1+C.xxx;vec3 x2=x0-i2+C.yyy;vec3 x3=x0-D.yyy;i=mod(i,289.0);vec4 p=permute(permute(permute(i.z+vec4(0.0,i1.z,i2.z,1.0))+i.y+vec4(0.0,i1.y,i2.y,1.0))+i.x+vec4(0.0,i1.x,i2.x,1.0));float n_=1.0/7.0;vec3 ns=n_*D.wyz-D.xzx;vec4 j=p-49.0*floor(p*ns.z*ns.z);vec4 x_=floor(j*ns.z);vec4 y_=floor(j-7.0*x_);vec4 x=x_*ns.x+ns.yyyy;vec4 y=y_*ns.x+ns.yyyy;vec4 h=1.0-abs(x)-abs(y);vec4 b0=vec4(x.xy,y.xy);vec4 b1=vec4(x.zw,y.zw);vec4 s0=floor(b0)*2.0+1.0;vec4 s1=floor(b1)*2.0+1.0;vec4 sh=-step(h,vec4(0.0));vec4 a0=b0.xzyw+s0.xzyw*sh.xxyy;vec4 a1=b1.xzyw+s1.xzyw*sh.zzww;vec3 p0=vec3(a0.xy,h.x);vec3 p1=vec3(a0.zw,h.y);vec3 p2=vec3(a1.xy,h.z);vec3 p3=vec3(a1.zw,h.w);vec4 norm=taylorInvSqrt(vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3)));p0*=norm.x;p1*=norm.y;p2*=norm.z;p3*=norm.w;vec4 m=max(.6-vec4(dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3)),0.0);m=m*m;return 42.0*dot(m*m,vec4(dot(p0,x0),dot(p1,x1),dot(p2,x2),dot(p3,x3)));}
void main(){
  vec3 p=position;float t=uTime*.09;float wobble=snoise(vec3(p.xy*.32,aSeed+t));
  p.x+=wobble*(aKind<.5?.16:.52);p.y+=sin(t+aSeed*21.0)*.08;
  p.xy+=uCursor*(aKind<.5?.08:.025)*(1.0+sin(aSeed*40.0));
  vec4 mv=modelViewMatrix*vec4(p,1.0);gl_Position=projectionMatrix*mv;
  float base=aKind<.5?2.1:1.25;gl_PointSize=clamp(base*uPixelScale*(9.0/-mv.z),1.0,7.0);
  vAlpha=(aKind<.5?.78:.22)*(0.65+0.35*sin(aSeed*40.0+uTime+uWallTime*.03));vKind=aKind;
}`;

const helixFragment = String.raw`
precision highp float;
uniform vec3 uHelixColor;
uniform vec3 uInkColor;
varying float vAlpha;
varying float vKind;
void main(){vec2 q=gl_PointCoord-.5;float d=dot(q,q);if(d>.25)discard;float soft=smoothstep(.25,.03,d);vec3 c=mix(uHelixColor,uInkColor,vKind);gl_FragColor=vec4(c,soft*vAlpha);}
`;

const atmoVertex = String.raw`
precision highp float;
uniform float uTime;
uniform float uPixelScale;
uniform float uAtmoSize;
attribute float aSeed;
varying float vAlpha;
void main(){vec3 p=position;p.y+=sin(uTime*.11+aSeed*18.0)*.12;vec4 mv=modelViewMatrix*vec4(p,1.0);gl_Position=projectionMatrix*mv;gl_PointSize=uAtmoSize*uPixelScale;vAlpha=uAtmoSize;}
`;

const atmoFragment = String.raw`
precision highp float;varying float vAlpha;void main(){gl_FragColor=vec4(1.0,1.0,1.0,vAlpha);}
`;

const interactiveScript = String.raw`
async function initClarusHome(root){
  if(root.dataset.dhInitialized==='true')return;
  root.dataset.dhInitialized='true';
  const reducedMotion=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(!reducedMotion)root.classList.add('has-motion');
  const state={sceneReady:reducedMotion,docReady:document.readyState==='complete',fontsReady:false,minReady:reducedMotion};
  const pct=root.querySelector('[data-load-percent]');
  let displayed=0;
  const gate=()=>{
    if(!root.isConnected)return;
    const target=[state.docReady,state.fontsReady,state.minReady,state.sceneReady].filter(Boolean).length*25;
    displayed+=(target-displayed)*.16;if(pct)pct.textContent=String(Math.min(100,Math.round(displayed))).padStart(2,'0')+'%';
    if(target===100&&displayed>98){root.classList.add('is-ready');return;}requestAnimationFrame(gate);
  };
  gate();
  if(!state.docReady)window.addEventListener('load',()=>state.docReady=true,{once:true});
  Promise.resolve(document.fonts&&document.fonts.ready).then(()=>state.fontsReady=true).catch(()=>state.fontsReady=true);
  setTimeout(()=>state.minReady=true,1100);
  setTimeout(()=>{state.docReady=true;state.fontsReady=true;state.minReady=true;state.sceneReady=true;},6500);

  const subscribers=new Set();const cleaners=[];let last=performance.now();let rafId=0;
  const tick=now=>{if(!root.isConnected){cleaners.forEach(fn=>fn());subscribers.clear();return;}const gap=Math.min(.05,Math.max(0,(now-last)/1000));last=now;if(!document.hidden)subscribers.forEach(fn=>fn(now,gap));rafId=requestAnimationFrame(tick);};rafId=requestAnimationFrame(tick);
  cleaners.push(()=>cancelAnimationFrame(rafId));
  const subscribe=fn=>{subscribers.add(fn);return()=>subscribers.delete(fn);};
  const spring=(value=0)=>({value,target:value,velocity:0,step(dt,k=150,d=22){const a=(this.target-this.value)*k-this.velocity*d;this.velocity+=a*dt;this.value+=this.velocity*dt;return this.value;}});

  const revealEls=[...root.querySelectorAll('.dh-reveal')];
  revealEls.forEach(el=>{let wordIndex=0;const walker=document.createTreeWalker(el,NodeFilter.SHOW_TEXT);const nodes=[];while(walker.nextNode())nodes.push(walker.currentNode);nodes.forEach(node=>{if(!(node.nodeValue||'').trim())return;const fragment=document.createDocumentFragment();(node.nodeValue||'').split(/(\s+)/).forEach(word=>{if(/^\s+$/.test(word)){fragment.appendChild(document.createTextNode(word));return;}const outer=document.createElement('span');const inner=document.createElement('span');outer.className='dh-word';outer.style.setProperty('--word-i',String(wordIndex++));inner.textContent=word;outer.appendChild(inner);fragment.appendChild(outer);});node.replaceWith(fragment);});});
  const io=new IntersectionObserver(entries=>entries.forEach(entry=>entry.target.classList.toggle('is-visible',entry.isIntersecting)),{threshold:.18});cleaners.push(()=>io.disconnect());
  revealEls.forEach(el=>io.observe(el));root.querySelectorAll('[data-rise]').forEach(el=>io.observe(el));

  const assetBanner=root.querySelector('.dh-asset-error');
  const photos=JSON.parse(root.dataset.photos||'[]');
  photos.forEach(src=>{const image=new Image();image.onerror=()=>assetBanner&&assetBanner.classList.add('is-visible');image.src=src;});
  const why=root.querySelector('.dh-why');const trailLayer=root.querySelector('.dh-trail-layer');let lastTrail={x:0,y:0};let photoIndex=0;
  if(!reducedMotion&&why&&trailLayer)why.addEventListener('pointermove',event=>{const rect=why.getBoundingClientRect();const x=event.clientX-rect.left,y=event.clientY-rect.top;if(Math.hypot(x-lastTrail.x,y-lastTrail.y)<90)return;lastTrail={x,y};const card=document.createElement('span');card.className='dh-trail-photo';card.style.left=x+'px';card.style.top=y+'px';card.style.backgroundImage='url("'+photos[photoIndex%photos.length]+'")';card.style.setProperty('--r',(-10+Math.random()*20)+'deg');trailLayer.appendChild(card);photoIndex++;setTimeout(()=>card.remove(),1500);});

  const servicesSection=root.querySelector('.dh-services');const servicesTrack=root.querySelector('.dh-services__track');
  const serviceSpring=spring(0);subscribe((now,dt)=>{if(!servicesSection||!servicesTrack||reducedMotion||innerWidth<1024)return;const rect=servicesSection.getBoundingClientRect();serviceSpring.target=Math.min(1,Math.max(0,-rect.top/Math.max(1,rect.height-innerHeight)));const p=serviceSpring.step(dt,120,25);servicesTrack.style.transform='translate3d('+(-p*400)+'vw,0,0)';});

  const banner=root.querySelector('.dh-banner');subscribe(()=>{if(!banner)return;const r=banner.getBoundingClientRect();if(r.bottom<0||r.top>innerHeight)return;const p=(innerHeight-r.top)/(innerHeight+r.height);banner.style.setProperty('--banner-y',((p-.5)*130)+'px');});
  const counters=[...root.querySelectorAll('[data-count]')];const counted=new WeakSet();const countIO=new IntersectionObserver(entries=>entries.forEach(entry=>{if(!entry.isIntersecting||counted.has(entry.target))return;counted.add(entry.target);const el=entry.target;const end=Number(el.dataset.count);const suffix=el.dataset.suffix||'';el.textContent='0';const start=performance.now();const run=now=>{const p=Math.min(1,(now-start)/1500);el.textContent=Math.round(end*(1-Math.pow(1-p,3)))+suffix;if(p<1)requestAnimationFrame(run);};requestAnimationFrame(run);}),{threshold:.35});cleaners.push(()=>countIO.disconnect());if(!reducedMotion)counters.forEach(el=>countIO.observe(el));

  const team=root.querySelector('.dh-team');const rail=root.querySelector('.dh-team__rail');const progress=root.querySelector('.dh-team__progress span');
  const railSpring=spring(0);let drag=false,dragStart=0,startOffset=0,dragOffset=0,previousX=0,previousAt=0,glideVelocity=0;
  const maxRail=()=>rail?Math.max(0,rail.scrollWidth-innerWidth+40):0;const teamScrollTarget=()=>{if(!team)return 0;const r=team.getBoundingClientRect();const p=Math.min(1,Math.max(0,-r.top/Math.max(1,r.height-innerHeight)));return-p*maxRail();};
  if(rail){rail.addEventListener('pointerdown',e=>{if(reducedMotion||innerWidth<1024)return;drag=true;rail.classList.add('is-dragging');rail.setPointerCapture(e.pointerId);dragStart=e.clientX;startOffset=dragOffset;previousX=e.clientX;previousAt=performance.now();glideVelocity=0;});rail.addEventListener('pointermove',e=>{if(!drag)return;const now=performance.now();dragOffset=startOffset+e.clientX-dragStart;glideVelocity=(e.clientX-previousX)/Math.max(1,now-previousAt)*1000;previousX=e.clientX;previousAt=now;const base=teamScrollTarget();const bounded=Math.min(0,Math.max(-maxRail(),base+dragOffset));dragOffset=bounded-base;railSpring.target=bounded;});const release=e=>{if(!drag)return;drag=false;rail.classList.remove('is-dragging');if(rail.hasPointerCapture(e.pointerId))rail.releasePointerCapture(e.pointerId);};rail.addEventListener('pointerup',release);rail.addEventListener('pointercancel',release);}
  subscribe((now,dt)=>{if(!team||!rail||reducedMotion||innerWidth<1024)return;const base=teamScrollTarget();if(!drag){dragOffset+=glideVelocity*dt;glideVelocity*=Math.pow(.035,dt);}const bounded=Math.min(0,Math.max(-maxRail(),base+dragOffset));dragOffset=bounded-base;railSpring.target=bounded;const x=railSpring.step(dt,130,23);rail.style.transform='translate3d('+x+'px,0,0)';if(progress)progress.style.transform='scaleX('+(maxRail()?Math.abs(x)/maxRail():0)+')';});

  function createCanvasDna(container,isHero){
    const canvas=container&&container.querySelector('[data-dna-fallback]');if(!canvas)return null;const ctx=canvas.getContext('2d');if(!ctx)return null;
    const amount=isHero?1450:1000;const particles=Array.from({length:amount},(_,i)=>{const a=positive(seeded(i,21)),b=positive(seeded(i,22)),c=positive(seeded(i,23)),d=positive(seeded(i,24));return{y:a*2-1,strand:i%2,jitter:(b-.5),depth:c,size:d,cloud:i%7===0};});
    let width=0,height=0,dpr=1,pointerX=0,pointerY=0;
    const onPointer=e=>{pointerX=(e.clientX/innerWidth-.5)*2;pointerY=(e.clientY/innerHeight-.5)*2;};window.addEventListener('pointermove',onPointer,{passive:true});
    const paint=seconds=>{const rect=container.getBoundingClientRect();if(rect.width<2||rect.height<2)return;if(rect.bottom<0||rect.top>innerHeight)return;const nextDpr=Math.min(devicePixelRatio||1,1.5),w=Math.round(rect.width),h=Math.round(rect.height);if(w!==width||h!==height||nextDpr!==dpr){width=w;height=h;dpr=nextDpr;canvas.width=Math.round(w*dpr);canvas.height=Math.round(h*dpr);canvas.style.width=w+'px';canvas.style.height=h+'px';}ctx.setTransform(dpr,0,0,dpr,0,0);ctx.clearRect(0,0,width,height);const cx=width*(isHero?.56:.61)+pointerX*10,cy=height*.5+pointerY*7;const radius=Math.min(width*.27,height*.2);const phase=seconds*.22;ctx.globalCompositeOperation='multiply';
      for(let i=0;i<18;i++){const f=i/17,y=cy+(f-.5)*height*.94;const wave=f*Math.PI*5.4+phase;const x=cx+Math.cos(wave)*radius;const spread=radius*(1.25+positive(seeded(i,31))*.8);const grad=ctx.createRadialGradient(x,y,0,x,y,spread);grad.addColorStop(0,i%3===0?'rgba(49,180,244,.085)':'rgba(20,47,134,.07)');grad.addColorStop(.45,'rgba(20,47,134,.025)');grad.addColorStop(1,'rgba(20,47,134,0)');ctx.fillStyle=grad;ctx.beginPath();ctx.arc(x,y,spread,0,Math.PI*2);ctx.fill();}
      for(let i=0;i<19;i++){const f=i/18,y=cy+(f-.5)*height*.88;const wave=(f*2-1)*Math.PI*2.7+phase;const depth=Math.sin(wave);const x1=cx+Math.cos(wave)*radius,x2=cx-Math.cos(wave)*radius;for(let j=0;j<32;j++){const q=j/31,x=x1+(x2-x1)*q+Math.sin(j*2.1+i)*.8;const fade=Math.sin(Math.PI*q);ctx.fillStyle='rgba(20,47,134,'+(.035+.12*fade*(.65+.35*depth))+')';ctx.beginPath();ctx.arc(x,y+Math.sin(q*Math.PI)*2,Math.max(.55,1.45*fade),0,Math.PI*2);ctx.fill();}}
      particles.forEach((p,i)=>{const wave=p.y*Math.PI*2.7+phase+p.strand*Math.PI;let localRadius=radius;if(p.cloud)localRadius*=1.25+p.depth*1.25;const z=Math.sin(wave),perspective=.76+(z+1)*.12;const x=cx+Math.cos(wave)*localRadius*perspective+p.jitter*(p.cloud?90:15);const y=cy+p.y*height*.47+Math.sin(seconds*.3+i)*3*p.depth;const alpha=p.cloud?.018+p.depth*.04:.16+p.depth*.42;const size=p.cloud?.7+p.size*2.2:.85+p.size*2.8+(z+1)*.55;ctx.fillStyle=p.cloud?'rgba(49,180,244,'+alpha+')':'rgba(12,39,101,'+alpha+')';ctx.beginPath();ctx.arc(x,y,size,0,Math.PI*2);ctx.fill();});
      ctx.globalCompositeOperation='source-over';if(isHero)state.sceneReady=true;};
    paint(0);const unsubscribe=reducedMotion?null:subscribe(now=>paint(now*.001));return()=>{if(unsubscribe)unsubscribe();window.removeEventListener('pointermove',onPointer);};
  }
  const heroDnaCleanup=createCanvasDna(root.querySelector('[data-scene="hero"]'),true);if(heroDnaCleanup)cleaners.push(heroDnaCleanup);const contactDnaCleanup=createCanvasDna(root.querySelector('[data-scene="contact"]'),false);if(contactDnaCleanup)cleaners.push(contactDnaCleanup);

  if(reducedMotion)return;
  let THREE,EffectComposer,RenderPass,ShaderPass;
  try{
    const modules=await Promise.all([
      import('https://unpkg.com/three@0.185.0/build/three.module.js'),
      import('https://unpkg.com/three@0.185.0/examples/jsm/postprocessing/EffectComposer.js?module'),
      import('https://unpkg.com/three@0.185.0/examples/jsm/postprocessing/RenderPass.js?module'),
      import('https://unpkg.com/three@0.185.0/examples/jsm/postprocessing/ShaderPass.js?module')
    ]);
    THREE=modules[0];EffectComposer=modules[1].EffectComposer;RenderPass=modules[2].RenderPass;ShaderPass=modules[3].ShaderPass;
  }catch(error){console.warn('Three.js enhancement unavailable; using canvas DNA',error);state.sceneReady=true;return;}

  const grainShader={uniforms:{tDiffuse:{value:null},uAmount:{value:.025}},vertexShader:'varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}',fragmentShader:'uniform sampler2D tDiffuse;uniform float uAmount;varying vec2 vUv;float h(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}void main(){vec4 c=texture2D(tDiffuse,vUv);float g=(h(gl_FragCoord.xy)-.5)*uAmount;gl_FragColor=vec4(c.rgb+g,c.a);}'};
  const shaderNodes=['#dh-helix-v','#dh-helix-f','#dh-atmo-v','#dh-atmo-f'].map(selector=>document.querySelector(selector));if(shaderNodes.some(node=>!node)){state.sceneReady=true;return;}const [vHelix,fHelix,vAtmo,fAtmo]=shaderNodes.map(node=>node.textContent||'');

  function seeded(i,salt){return (Math.sin(i*12.9898+salt*78.233)*43758.5453)%1;}
  function positive(v){return v<0?v+1:v;}
  function makeCloud(count,kind){const pos=new Float32Array(count*3);const seeds=new Float32Array(count);const kinds=new Float32Array(count);for(let i=0;i<count;i++){const r1=positive(seeded(i,kind+1)),r2=positive(seeded(i,kind+2)),r3=positive(seeded(i,kind+3));if(kind===0){const y=(r1-.5)*8.4;const strand=i%2===0?0:Math.PI;const turn=y*1.9+strand;const radius=1.34+(r2-.5)*.18;pos[i*3]=Math.cos(turn)*radius+(r3-.5)*.07;pos[i*3+1]=y+(r2-.5)*.06;pos[i*3+2]=Math.sin(turn)*radius+(r3-.5)*.07;}else{const y=(r3-.5)*8.8;const turn=y*1.9+r1*Math.PI*2.0;const radius=1.2+Math.pow(r2,.65)*3.1;pos[i*3]=Math.cos(turn)*radius;pos[i*3+1]=y;pos[i*3+2]=Math.sin(turn)*radius*.66;}seeds[i]=r1;kinds[i]=kind;}const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.BufferAttribute(pos,3));g.setAttribute('aSeed',new THREE.BufferAttribute(seeds,1));g.setAttribute('aKind',new THREE.BufferAttribute(kinds,1));return g;}
  function makeRungs(count){const pos=new Float32Array(count*3),seeds=new Float32Array(count),kinds=new Float32Array(count);const levels=19,perLevel=Math.ceil(count/levels);for(let i=0;i<count;i++){const level=i%levels,q=Math.floor(i/levels)/Math.max(1,perLevel-1),y=-4.05+level/18*8.1,turn=y*1.9,across=1-2*q,jitter=(positive(seeded(i,41))-.5)*.045;pos[i*3]=Math.cos(turn)*1.34*across+jitter;pos[i*3+1]=y+(positive(seeded(i,42))-.5)*.04;pos[i*3+2]=Math.sin(turn)*1.34*across+jitter;seeds[i]=positive(seeded(i,43));kinds[i]=0;}const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.BufferAttribute(pos,3));g.setAttribute('aSeed',new THREE.BufferAttribute(seeds,1));g.setAttribute('aKind',new THREE.BufferAttribute(kinds,1));return g;}
  function makeAtmosphere(){const count=1500,pos=new Float32Array(count*3),seeds=new Float32Array(count);for(let i=0;i<count;i++){pos[i*3]=(positive(seeded(i,9))-.5)*11;pos[i*3+1]=(positive(seeded(i,10))-.5)*11;pos[i*3+2]=(positive(seeded(i,11))-.5)*8;seeds[i]=positive(seeded(i,12));}const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.BufferAttribute(pos,3));g.setAttribute('aSeed',new THREE.BufferAttribute(seeds,1));return g;}

  function createInkScene(container,isHero){
    if(!container)return null;
    const renderer=new THREE.WebGLRenderer({alpha:true,antialias:false,premultipliedAlpha:true,powerPreference:'high-performance'});renderer.setPixelRatio(Math.min(devicePixelRatio,1.5));renderer.setClearColor(0x000000,0);renderer.outputColorSpace=THREE.SRGBColorSpace;container.appendChild(renderer.domElement);
    const scene=new THREE.Scene();const camera=new THREE.PerspectiveCamera(38,1,.1,100);camera.position.set(0,0,10.8);
    const atmoSize=isHero?.65:.45;const spin=0;
    const common={uTime:{value:0},uWallTime:{value:performance.now()*.001},uPixelScale:{value:Math.min(devicePixelRatio,1.5)},uCursor:{value:new THREE.Vector2()},uHelixColor:{value:new THREE.Color().setRGB(.02,.08,.34)},uInkColor:{value:new THREE.Color().setRGB(.04,.22,.45)}};
    const material=new THREE.ShaderMaterial({vertexShader:vHelix,fragmentShader:fHelix,uniforms:common,transparent:true,depthWrite:false,blending:THREE.MultiplyBlending,premultipliedAlpha:true});
    const compact=innerWidth<768||navigator.hardwareConcurrency&&navigator.hardwareConcurrency<=4;const helixCount=compact?14000:32000;const rungCount=compact?7000:18000;const inkCount=compact?28000:72000;
    const helix=new THREE.Points(makeCloud(helixCount,0),material);const rungs=new THREE.Points(makeRungs(rungCount),material);const ink=new THREE.Points(makeCloud(inkCount,1),material);helix.frustumCulled=false;rungs.frustumCulled=false;ink.frustumCulled=false;scene.add(ink,rungs,helix);
    const atmoMat=new THREE.ShaderMaterial({vertexShader:vAtmo,fragmentShader:fAtmo,uniforms:{uTime:common.uTime,uPixelScale:common.uPixelScale,uAtmoSize:{value:atmoSize}},transparent:true,depthWrite:false,blending:THREE.MultiplyBlending,premultipliedAlpha:true});const atmo=new THREE.Points(makeAtmosphere(),atmoMat);atmo.frustumCulled=false;scene.add(atmo);
    const composer=new EffectComposer(renderer);composer.addPass(new RenderPass(scene,camera));composer.addPass(new ShaderPass(grainShader));
    let width=0,height=0,elapsed=0,first=true;const pointerNdc=new THREE.Vector2(),worldCursor=new THREE.Vector2(),worldTarget=new THREE.Vector2(),rayPoint=new THREE.Vector3();let lastPointer=performance.now();
    const move=e=>{const rect=container.getBoundingClientRect();pointerNdc.set(THREE.MathUtils.clamp((e.clientX-rect.left)/rect.width*2-1,-1,1),THREE.MathUtils.clamp(-((e.clientY-rect.top)/rect.height*2-1),-1,1));lastPointer=performance.now();};window.addEventListener('pointermove',move,{passive:true});
    const unsubscribe=subscribe((now,dt)=>{const rect=container.getBoundingClientRect();const visible=rect.bottom>0&&rect.top<innerHeight&&rect.right>0&&rect.left<innerWidth;if(!visible){elapsed=Math.max(0,elapsed-dt*2.2);common.uTime.value=elapsed;return;}const w=Math.max(1,Math.round(rect.width)),h=Math.max(1,Math.round(rect.height));if(w!==width||h!==height){width=w;height=h;renderer.setSize(w,h,false);composer.setSize(w,h);camera.aspect=w/h;camera.updateProjectionMatrix();common.uPixelScale.value=Math.min(devicePixelRatio,1.5)*(h/900);}
      elapsed=Math.min(120,elapsed+Math.min(dt,.033));common.uTime.value=elapsed;common.uWallTime.value=now*.001;if(now-lastPointer>1900)pointerNdc.set(Math.sin(now*.00031)*.22,Math.cos(now*.00023)*.16);rayPoint.set(pointerNdc.x,pointerNdc.y,.5).unproject(camera).sub(camera.position).normalize();const rayDistance=-camera.position.z/rayPoint.z;rayPoint.multiplyScalar(rayDistance).add(camera.position);worldTarget.set(THREE.MathUtils.clamp(rayPoint.x/5,-1,1),THREE.MathUtils.clamp(rayPoint.y/5,-1,1));worldCursor.lerp(worldTarget,.045);common.uCursor.value.copy(worldCursor);helix.rotation.y=(isHero ? .12 : -.18)+spin;rungs.rotation.y=helix.rotation.y;ink.rotation.z=(isHero ? -.12 : .08)+spin;composer.render();if(first){first=false;if(isHero)state.sceneReady=true;}
    });return()=>{unsubscribe();window.removeEventListener('pointermove',move);helix.geometry.dispose();rungs.geometry.dispose();ink.geometry.dispose();atmo.geometry.dispose();material.dispose();atmoMat.dispose();composer.dispose();renderer.dispose();renderer.domElement.remove();};
  }
  try{const heroCleanup=createInkScene(root.querySelector('[data-scene="hero"]'),true);if(heroCleanup)cleaners.push(heroCleanup);const contactCleanup=createInkScene(root.querySelector('[data-scene="contact"]'),false);if(contactCleanup)cleaners.push(contactCleanup);}catch(error){console.warn('Interactive WebGL enhancement unavailable; using canvas DNA',error);state.sceneReady=true;}
}
if(!window.__clarusHomeBoot){
  const boot=()=>{const root=document.querySelector('.dantora-home');if(root)initClarusHome(root);};
  const navigationObserver=new MutationObserver(boot);
  navigationObserver.observe(document.documentElement,{childList:true,subtree:true});
  window.__clarusHomeBoot={boot,navigationObserver};
  boot();
}else{
  window.__clarusHomeBoot.boot();
}
`;

export default function HomePage() {
  return (
    <div className="dantora-home" data-photos={JSON.stringify(visualAssets)}>
      <style>{css}</style>
      <script
        type="importmap"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            imports: {
              three: "https://unpkg.com/three@0.185.0/build/three.module.js",
              "three/addons/": "https://unpkg.com/three@0.185.0/examples/jsm/",
            },
          }),
        }}
      />
      <script id="dh-helix-v" type="x-shader/x-vertex">{helixVertex}</script>
      <script id="dh-helix-f" type="x-shader/x-fragment">{helixFragment}</script>
      <script id="dh-atmo-v" type="x-shader/x-vertex">{atmoVertex}</script>
      <script id="dh-atmo-f" type="x-shader/x-fragment">{atmoFragment}</script>

      <div className="dh-preloader" aria-hidden="true">
        <div className="dh-preloader__core">
          <span className="dh-preloader__ring" />
          <span className="dh-preloader__mark" />
          <span className="dh-preloader__percent" data-load-percent>00%</span>
        </div>
      </div>
      <div className="dh-asset-error" role="status">Some visual assets could not load. Core healthcare information remains available.</div>

      <section className="dh-hero" aria-labelledby="dh-hero-title">
        <div className="dh-shell dh-hero__inner">
          <div className="dh-hero__copy">
            <p className="dh-kicker" data-rise>Radiologist-led care · Koramangala</p>
            <h1 id="dh-hero-title" className="dh-reveal">Clarity, <em>alive</em> in every detail.</h1>
            <div className="dh-hero__bottom" data-rise>
              <p>Advanced diagnostics, laboratory medicine and multispecialty care—connected by precision, transparency and genuine care.</p>
              <Link className="dh-pill" href="/patient-info/appointment-booking">Book a visit <span aria-hidden="true">↗</span></Link>
            </div>
          </div>
          <div className="dh-hero__scene" data-scene="hero" aria-hidden="true"><canvas className="dh-dna-fallback" data-dna-fallback /></div>
          <div className="dh-hero__orbit" aria-hidden="true">24/7 MRI · CT ·</div>
        </div>
      </section>

      <section className="dh-why" aria-labelledby="dh-why-title">
        <div className="dh-trail-layer" aria-hidden="true" />
        <div className="dh-shell">
          <div className="dh-why__head">
            <p className="dh-kicker" data-rise>Why Clarus Magnus</p>
            <h2 id="dh-why-title" className="dh-reveal">Because a clear answer can change <em>everything.</em></h2>
          </div>
          <div className="dh-why__foot">
            <p data-rise>For more than 18 years, people across Bengaluru have trusted us to turn uncertainty into an informed next step. We bring advanced technology, expert interpretation and compassionate guidance together under one roof.</p>
          </div>
        </div>
      </section>

      <section className="dh-services" aria-labelledby="dh-services-title">
        <h2 id="dh-services-title" className="dh-sr-only">Our healthcare services</h2>
        <div className="dh-services__sticky">
          <p className="dh-services__intro dh-kicker">Explore care</p>
          <div className="dh-services__track">
            {services.map((service) => (
              <article className="dh-service" key={service.title} style={{ "--card": service.color } as CSSProperties}>
                <div className="dh-service__copy">
                  <span className="dh-service__num">{service.number} · {service.label}</span>
                  <h3>{service.title}</h3>
                  <p>{service.copy}</p>
                  <Link className="dh-pill" href={service.href}>Discover service <span aria-hidden="true">↗</span></Link>
                </div>
                <div className="dh-service__visual" style={{ backgroundImage: `url("${service.image}")` }} aria-hidden="true">
                  <span className="dh-service__tag">Clarity in motion</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="dh-about" aria-labelledby="dh-about-title">
        <div className="dh-shell">
          <div className="dh-about__lead">
            <p className="dh-kicker" data-rise>18+ years of trust</p>
            <h2 id="dh-about-title" className="dh-reveal">Deep expertise. <em>Human</em> perspective.</h2>
          </div>
          <div className="dh-about__copy">
            <p data-rise>Clarus Magnus is a modern, radiologist-led healthcare destination in Koramangala, Bengaluru—built around clinically meaningful answers, not disconnected appointments.</p>
            <p data-rise>From a 3 Tesla MRI to preventive health and multispecialty consultation, every service is designed to help patients understand what comes next.</p>
          </div>
        </div>
        <div className="dh-banner" role="img" aria-label="A modern clinical environment">
          <p className="dh-banner__phrase">Closer to answers.</p>
        </div>
        <div className="dh-stats">
          <div className="dh-stat"><strong data-count="18" data-suffix="+">18+</strong><span>Years of trusted care</span></div>
          <div className="dh-stat"><strong data-count="24" data-suffix="/7">24/7</strong><span>MRI &amp; CT access</span></div>
          <div className="dh-stat"><strong data-count="3" data-suffix="T">3T</strong><span>Advanced MRI</span></div>
          <div className="dh-stat"><strong>4.8/5</strong><span>Google review rating</span></div>
        </div>
        <div className="dh-rhythm">
          <p className="dh-reveal">Technology that sees. <span>Experts who listen.</span> Care that stays human.</p>
        </div>
      </section>

      <section className="dh-team" aria-labelledby="dh-team-title">
        <div className="dh-team__sticky">
          <div className="dh-shell dh-team__head">
            <div><p className="dh-kicker">Our specialists</p><h2 id="dh-team-title">One connected team.</h2></div>
            <Link className="dh-team__hint" href="/specialties">Explore all specialties ↗</Link>
          </div>
          <div className="dh-team__rail">
            {specialists.map(([name, focus, index]) => (
              <Link className="dh-person" href="/specialties" key={name}>
                <span className="dh-person__index">{index}</span>
                <span className="dh-person__halo" />
                <span className="dh-person__glyph" aria-hidden="true">{name.charAt(0)}</span>
                <span className="dh-person__copy"><strong>{name}</strong><span>{focus}</span></span>
              </Link>
            ))}
          </div>
          <div className="dh-team__progress" aria-hidden="true"><span /></div>
        </div>
      </section>

      <section className="dh-contact" aria-labelledby="dh-contact-title">
        <div className="dh-contact__scene" data-scene="contact" aria-hidden="true"><canvas className="dh-dna-fallback" data-dna-fallback /></div>
        <div className="dh-shell dh-contact__inner">
          <div>
            <p className="dh-kicker" data-rise>Your next clear step</p>
            <h2 id="dh-contact-title" className="dh-reveal">Let’s make health feel <em>clearer.</em></h2>
            <p className="dh-contact__details" data-rise>
              <strong>{siteConfig.address.line1}</strong><br />
              Call <a href={siteConfig.phone.href}>{siteConfig.phone.display}</a><br />
              <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a><br />
              {siteConfig.address.line2}<br />{siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.zip}<br />
              {siteConfig.hours.imaging}<br />
              <a href={siteConfig.address.mapsHref}>Open in Google Maps ↗</a><br />
              <Link href="/contact">Contact our care team ↗</Link>
            </p>
          </div>
          <div className="dh-form" data-rise>
            <h3>Choose the right starting point.</h3>
            <p>Explore care now, or continue to our appointment page to share your details securely.</p>
            <div className="dh-form__choices">
              <Link className="dh-form__choice" href="/diagnostics">Diagnostics <span aria-hidden="true">↗</span></Link>
              <Link className="dh-form__choice" href="/laboratory">Laboratory <span aria-hidden="true">↗</span></Link>
              <Link className="dh-form__choice" href="/specialties">Specialists <span aria-hidden="true">↗</span></Link>
              <Link className="dh-form__choice" href="/health-packages">Health packages <span aria-hidden="true">↗</span></Link>
            </div>
            <Link className="dh-form__submit" href="/patient-info/appointment-booking">Continue to appointment booking ↗</Link>
            <p className="dh-form__note">No medical or contact details are collected on this page. For urgent assistance, please call our care team.</p>
          </div>
        </div>
      </section>

      <Script
        id="clarus-home-interactions"
        type="module"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: interactiveScript }}
      />
    </div>
  );
}
