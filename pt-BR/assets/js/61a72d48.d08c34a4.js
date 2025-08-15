"use strict";(self.webpackChunkdoc_pokemon_theme=self.webpackChunkdoc_pokemon_theme||[]).push([[9706],{4673:(e,r,a)=>{a.r(r),a.d(r,{CouponCopy:()=>l,PasswordGate:()=>p,assets:()=>c,contentTitle:()=>d,default:()=>b,frontMatter:()=>s,metadata:()=>t,toc:()=>m});const t=JSON.parse('{"id":"boas-ferias/presente","title":"presente","description":"return (","source":"@site/docs/boas-ferias/presente.mdx","sourceDirName":"boas-ferias","slug":"/boas-ferias/presente","permalink":"/doc-pokemon-theme/pt-BR/docs/boas-ferias/presente","draft":false,"unlisted":false,"editUrl":"https://github.com/Boddenberg/doc-pokemon-theme/edit/main/docs/boas-ferias/presente.mdx","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1,"hide_title":true,"hide_table_of_contents":true},"sidebar":"tutorialSidebar","previous":{"title":"Translate your site","permalink":"/doc-pokemon-theme/pt-BR/docs/tutorial-extras/translate-your-site"}}');var o=a(4848),n=a(8453),i=a(6540);const s={sidebar_position:1,hide_title:!0,hide_table_of_contents:!0},d=void 0,c={},l=({code:e})=>{const[r,a]=(0,i.useState)(!1);return(0,o.jsxs)("div",{className:"coupon",role:"group","aria-label":"Cupom Z\xe9 Delivery",children:[(0,o.jsx)("code",{id:"coupon-code",children:e}),(0,o.jsx)("button",{className:"copy-btn",onClick:async()=>{try{await navigator.clipboard.writeText(e),a(!0),setTimeout(()=>a(!1),2e3)}catch(r){const e=document.getElementById("coupon-code");if(e){const r=document.createRange();r.selectNodeContents(e);const a=window.getSelection();a.removeAllRanges(),a.addRange(r)}}},"aria-live":"polite",children:r?"Copiado!":"Copiar"})]})},p=({children:e})=>{const[r,a]=(0,i.useState)(!1),[t,n]=(0,i.useState)(""),[s,d]=(0,i.useState)("");(0,i.useEffect)(()=>{if("undefined"!=typeof window){"1"===localStorage.getItem("gift_gate_ok")&&a(!0)}},[]);return r?e:(0,o.jsx)("div",{className:"gate-wrap",children:(0,o.jsxs)("div",{className:"gate-card",role:"dialog","aria-modal":"true","aria-labelledby":"gate-title",children:[(0,o.jsx)("h1",{id:"gate-title",children:"\ud83d\udd10 Acesso restrito"}),(0,o.jsx)("p",{className:"gate-sub",children:"Digite a senha para ver o presente."}),(0,o.jsxs)("form",{onSubmit:e=>{e.preventDefault(),"squirtle"===t.trim().toLowerCase()?(a(!0),"undefined"!=typeof window&&localStorage.setItem("gift_gate_ok","1")):d("Senha incorreta.")},className:"gate-form",children:[(0,o.jsx)("input",{type:"password",className:"gate-input",placeholder:"senha",autoFocus:!0,value:t,onChange:e=>{n(e.target.value),d("")},"aria-label":"Senha"}),(0,o.jsx)("button",{className:"gate-btn",type:"submit",children:"Entrar"})]}),s&&(0,o.jsx)("div",{className:"gate-err",role:"alert",children:s}),(0,o.jsx)("p",{className:"gate-tip",children:"Dica: \xe9 o nome do seu pok\xe9mon starter preferido \ud83d\udc22"})]})})},m=[];function g(e){const r={p:"p",...(0,n.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("style",{children:String.raw`
:root {
  --bg-grad: linear-gradient(
    135deg,
    #fce0d8 0%,
    #fce3ec 25%,
    #e7d7f8 50%,
    #d5e4fa 75%,
    #d6f4f9 100%
  );
  --panel: #ffffff;
  --ink: #0b1324;
  --ink-subtle: #4b5563;
  --accent: #fbbf24;
  --accent-strong: #f59e0b;
  --primary: #7c3aed;
}

.gift-shell {
  background: var(--bg-grad);
  border-radius: 24px;
  padding: clamp(1.25rem, 2vw, 2rem);
  box-shadow: 0 8px 20px rgba(0,0,0,0.08);
  max-width: 980px;
  margin: 0 auto;
}

.panel {
  position: relative;
  border-radius: 20px;
  padding: clamp(1.5rem, 3vw, 2.25rem);
  background: linear-gradient(180deg, rgba(255,255,255,0.82), rgba(255,255,255,0.72));
  backdrop-filter: blur(8px);
  border: 1px solid rgba(0,0,0,0.06);
  box-shadow: 0 10px 30px rgba(16,24,40,0.08);
  overflow: hidden;
}

.panel::before {
  content: '';
  position: absolute;
  inset: -1px;
  padding: 1px;
  border-radius: 22px;
  background: conic-gradient(from 180deg at 50% 50%, #ffffff 0deg, #a78bfa 120deg, #fbbf24 240deg, #ffffff 360deg);
  -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
  -webkit-mask-composite: xor;
          mask-composite: exclude;
  pointer-events: none;
}

.badge-ze {
  display: inline-flex;
  align-items: center;
  gap: .5rem;
  background: var(--accent);
  color: #111827;
  font-weight: 700;
  padding: .5rem .85rem;
  border-radius: 999px;
  box-shadow: inset 0 0 0 1px rgba(0,0,0,0.08);
  margin-bottom: .75rem;
}

.title {
  margin: 0 0 .25rem 0;
  font-size: clamp(1.75rem, 3.6vw, 2.6rem);
  line-height: 1.2;
  color: var(--ink);
}

.subtitle {
  margin: 0 0 1.25rem 0;
  color: var(--ink-subtle);
  font-size: clamp(1rem, 2vw, 1.125rem);
}

.coupon {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: .75rem;
  margin: 1rem 0 0.5rem 0;
}

.coupon code {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;
  font-size: clamp(1rem, 3vw, 1.125rem);
  letter-spacing: 0.08em;
  background: #111827;
  color: #fff;
  padding: .85rem 1rem;
  border-radius: 12px;
  user-select: all;
  box-shadow: 0 6px 18px rgba(17,24,39,0.18);
}

.copy-btn {
  appearance: none;
  border: none;
  cursor: pointer;
  border-radius: 12px;
  padding: .8rem 1rem;
  font-weight: 700;
  background: linear-gradient(180deg, var(--primary), #6d28d9);
  color: #fff;
  box-shadow: 0 8px 20px rgba(124,58,237,0.25);
  transition: transform .15s ease, box-shadow .15s ease, filter .15s ease;
}
.copy-btn:hover { transform: translateY(-2px); box-shadow: 0 12px 26px rgba(124,58,237,0.35); }
.copy-btn:active { transform: translateY(0); filter: brightness(.96); }

.note {
  margin-top: .25rem;
  color: var(--ink-subtle);
  font-size: .95rem;
}

.footer-line {
  margin-top: 1.25rem;
  display: flex;
  gap: .5rem;
  align-items: center;
  color: var(--ink-subtle);
  font-size: .9rem;
}

.gate-wrap {
  min-height: 60vh;
  display: grid;
  place-items: center;
  background: var(--bg-grad);
  border-radius: 24px;
  padding: 2rem 1.25rem;
}
.gate-card {
  width: min(560px, 92vw);
  background: rgba(255,255,255,0.75);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(0,0,0,0.06);
  border-radius: 20px;
  padding: 1.5rem;
  box-shadow: 0 10px 30px rgba(16,24,40,0.10);
  text-align: center;
}
.gate-card h1 { margin: 0 0 .25rem 0; color: var(--ink); font-size: clamp(1.5rem, 4vw, 2rem); }
.gate-sub { margin: 0 0 1rem 0; color: var(--ink-subtle); }
.gate-form { display: flex; gap: .5rem; justify-content: center; }
.gate-input {
  border-radius: 12px; border: 1px solid #e5e7eb; padding: .8rem 1rem; min-width: 0; width: 60%;
  font-size: 1rem; box-shadow: 0 1px 0 rgba(0,0,0,0.02) inset;
}
.gate-btn {
  border: none; cursor: pointer; border-radius: 12px; padding: .8rem 1rem; font-weight: 700;
  background: linear-gradient(180deg, var(--primary), #6d28d9); color: white;
}
.gate-err { margin-top: .75rem; color: #b91c1c; font-weight: 600; }
.gate-tip { margin-top: .5rem; color: var(--ink-subtle); font-size: .9rem; }
`}),"\n",(0,o.jsx)(p,{children:(0,o.jsx)("div",{className:"gift-shell",children:(0,o.jsxs)("div",{className:"panel",children:[(0,o.jsx)("div",{className:"badge-ze",children:"\ud83c\udf7b Z\xe9 Delivery"}),(0,o.jsx)("h1",{className:"title",children:"boas f\xe9rias, tech!"}),(0,o.jsx)("p",{className:"subtitle",children:(0,o.jsxs)(r.p,{children:["Pra come\xe7ar o descanso do jeito certo: aqui vai um vale de ",(0,o.jsx)("strong",{children:"R$100"})," pra usar no app."]})}),(0,o.jsx)(l,{code:"IWEN8K7OABB274LPQOLSYQ3GA"}),(0,o.jsx)("p",{className:"note",children:"Cole o c\xf3digo no checkout do app Z\xe9 Delivery e aproveite. Se der qualquer coisa, me chama! \ud83d\ude04"}),(0,o.jsx)("div",{className:"footer-line"})]})})})]})}function b(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(g,{...e})}):g(e)}},8453:(e,r,a)=>{a.d(r,{R:()=>i,x:()=>s});var t=a(6540);const o={},n=t.createContext(o);function i(e){const r=t.useContext(n);return t.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function s(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),t.createElement(n.Provider,{value:r},e.children)}}}]);