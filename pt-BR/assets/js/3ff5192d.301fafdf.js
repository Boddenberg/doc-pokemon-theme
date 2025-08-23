"use strict";(self.webpackChunkdoc_pokemon_theme=self.webpackChunkdoc_pokemon_theme||[]).push([[5847],{21911:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>v,contentTitle:()=>j,default:()=>y,frontMatter:()=>f,metadata:()=>i,toc:()=>w});const i=JSON.parse('{"id":"parametrizador/testes","title":"x tud\xe3o recursos visuais","description":"Template interativo e colorido para se inspirar e adaptar \xe0s suas docs.","source":"@site/docs/parametrizador/testes.mdx","sourceDirName":"parametrizador","slug":"/parametrizador/testes","permalink":"/doc-pokemon-theme/pt-BR/docs/parametrizador/testes","draft":false,"unlisted":false,"editUrl":"https://github.com/Boddenberg/doc-pokemon-theme/edit/main/docs/parametrizador/testes.mdx","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1,"title":"x tud\xe3o recursos visuais","description":"Template interativo e colorido para se inspirar e adaptar \xe0s suas docs."},"sidebar":"tutorialSidebar","previous":{"title":"parametrizador","permalink":"/doc-pokemon-theme/pt-BR/docs/parametrizador/"},"next":{"title":"jornadas","permalink":"/doc-pokemon-theme/pt-BR/docs/parametrizador/jornadas"}}');var s=r(74848),o=r(96540),t=r(66406),d=r(11470),n=r(19365),c=r(64907),l=r(27293),p=r(44653),m=r(34440),x=r(69107),h=r(77984),u=r(28645),b=r(70968),g=r(75345);const f={sidebar_position:1,title:"x tud\xe3o recursos visuais",description:"Template interativo e colorido para se inspirar e adaptar \xe0s suas docs."},j=void 0,v={},k=function(){const[e,a]=(0,o.useState)(""),r=(0,o.useRef)(null),i=e=>{a(e),clearTimeout(r.current),r.current=setTimeout(()=>a(""),1700)},[f,j]=(0,o.useState)(!1),[v,k]=(0,o.useState)("violet"),w=(0,o.useRef)(null),N=String.raw`%%{init: {"sequence":{"mirrorActors":false,"showSequenceNumbers":true}}}%%
sequenceDiagram
  title Jornada (exemplo inspiracional)
  participant U as Usuário
  participant Doc as Documentação
  participant S as Serviço
  U->>Doc: Acessa página
  Note over Doc: Conteúdo visual • próximos passos claros
  Doc-->>U: Mostra guia breve
  U->>S: Executa tarefa
  S-->>U: Retorna resultado
  Note right of U: Usuário entende o que fazer em seguida`,y=String.raw`sequenceDiagram
  title Jornada (exemplo inspiracional)
  participant U as Usuário
  participant Doc as Documentação
  participant S as Serviço
  U->>Doc: Acessa página
  Note over Doc: Conteúdo visual • próximos passos claros
  Doc-->>U: Mostra guia breve
  U->>S: Executa tarefa
  S-->>U: Retorna resultado
  Note right of U: Usuário entende o que fazer em seguida`,C=String.raw`flowchart LR
  A[Entrada] --> B{Tem dados?}
  B -- Não --> N[Exibir mensagem e encerrar]
  B -- Sim --> C[Aplicar regras]
  C -->|OK| D[Consultar serviço externo]
  D -->|Aprovado| E[Concluir com sucesso]
  D -->|Reprovado| R[Explicar próximo passo]`,S=String.raw`
    :root {
      --acc-violet: #7c3aed;
      --acc-teal:   #0ea5e9;
      --acc-orange: #fb8c00;
    }
    .page {
      --acc: var(--acc-violet);
    }
    .page[data-accent="teal"]   { --acc: var(--acc-teal); }
    .page[data-accent="orange"] { --acc: var(--acc-orange); }

    .hero {
      position: relative;
      border-radius: 18px;
      padding: 1.2rem 1.2rem 1rem;
      background: linear-gradient(135deg,#e3f2fd 0%,#e8f5e9 50%,#fff3e0 100%);
      border: 1px solid rgba(13,71,161,.12);
      box-shadow: 0 10px 28px rgba(0,0,0,.08);
      overflow: hidden;
    }
    .hero h1 { margin: .2rem 0 .15rem 0; line-height: 1.05; }
    .hero .sub { opacity: .85; max-width: 70ch; }
    .blob {
      position: absolute; inset:auto -60px -60px auto; width: 240px; height: 240px; border-radius: 999px;
      background: radial-gradient(closest-side, var(--acc) 0%, transparent 70%);
      opacity:.18; filter: blur(12px);
      transform: translate(0,0); animation: float 6s ease-in-out infinite alternate;
    }
    @keyframes float { to { transform: translate(-18px,-14px); } }

    .controls {
      display:flex; gap:.5rem; flex-wrap:wrap; align-items:center; margin-top:.6rem;
    }
    .segmented { display:inline-flex; background:#fff; border:1px solid #e5eaf2; border-radius: 999px; overflow:hidden; box-shadow:0 6px 14px rgba(16,24,40,.06); }
    .segmented button {
      padding:.4rem .75rem; font-weight:700; font-size:.9rem; border:none; background:transparent; cursor:pointer;
    }
    .segmented button[data-active="1"] { background: var(--acc); color:#fff; }

    .grid { display:grid; grid-template-columns: repeat(auto-fit,minmax(240px,1fr)); gap: .75rem; margin: 1rem 0; }
    .card {
      border-radius:14px; padding: var(--pad, 1rem); background:#fff; border:1px solid #eaeef4;
      box-shadow: 0 8px 16px rgba(16,24,40,.06);
    }
    .card.gradient {
      position:relative; border:1px solid transparent;
      background:
        linear-gradient(#fff,#fff) padding-box,
        linear-gradient(135deg, var(--acc), #0ea5e9) border-box;
    }
    .pill { display:inline-flex; align-items:center; gap:.45rem; padding:.35rem .6rem; border-radius:999px; background:#eef7ff; color:#0d3b66; border:1px solid #cfe6ff; font-weight:800; font-size:.8rem; }

    .kpi { display:grid; grid-template-columns: repeat(auto-fit,minmax(180px,1fr)); gap:.6rem; }
    .kpi > div { background:#fff; border:1px solid #eaeef4; border-radius:12px; padding:.7rem .85rem; }
    .kpi .n { font-weight:900; font-size:1.25rem; color: var(--acc); }

    .wrap { background: rgba(255,255,255,.75); backdrop-filter: blur(6px); border-radius: 16px; border: 1px solid #e0e0e0; padding: 1rem; overflow:auto; }
    .wrap svg { max-width:100%; height:auto; }

    .actions { display:flex; gap:.5rem; flex-wrap:wrap; justify-content:flex-end; margin-top:.6rem; }
    .btn { appearance:none; border:1px solid rgba(13,71,161,.25); background:#fff; color:#0d47a1; border-radius:.8rem; padding:.6rem .9rem; font-weight:800; cursor:pointer; box-shadow:0 6px 12px rgba(0,0,0,.06); transition:transform .12s ease, filter .2s ease; }
    .btn:hover { transform: translateY(-1px); filter: brightness(1.02); }
    .btn.primary { background: linear-gradient(135deg, var(--acc) 0%, #0ea5e9 100%); color:#fff; border:1px solid rgba(255,255,255,.18); }

    .timeline { position:relative; display:grid; gap:.75rem; padding-left: .6rem; }
    .timeline:before { content:""; position:absolute; left: 8px; top:0; bottom:0; width: 2px; background: linear-gradient(var(--acc), transparent); opacity:.35; }
    .timeline .item { position:relative; background:#fff; border:1px solid #eaeef4; border-radius:12px; padding:.8rem 1rem .75rem 1rem; }
    .timeline .item:before { content:""; position:absolute; left:-.53rem; top:.9rem; width:12px; height:12px; border-radius:999px; background: var(--acc); box-shadow:0 0 0 3px rgba(14,165,233,.15); }

    .zebra table { width:100%; border-collapse: collapse; }
    .zebra th, .zebra td { padding:.6rem .5rem; border:1px solid #eaeef4; }
    .zebra tbody tr:nth-child(odd) { background:#fafcff; }

    .toast { position: fixed; right: 16px; bottom: 16px; z-index: 60; padding:.45rem .7rem; border-radius: 999px; background: rgba(28,32,48,.8); backdrop-filter: blur(8px); color: #f8fafc; font-weight: 800; font-size: .85rem; border: 1px solid rgba(255,255,255,.12); box-shadow: 0 10px 30px rgba(0,0,0,.18); opacity: 0; transform: translateY(6px) scale(.98); pointer-events: none; transition: opacity .18s ease, transform .18s ease; }
    .toast[data-show="1"] { opacity:.95; transform: translateY(0) scale(1); }

    .page[data-compact="1"] .card { --pad: .75rem; }
    .page[data-compact="1"] .hero { padding: .9rem 1rem; }

    @media (prefers-color-scheme: dark) {
      .card, .timeline .item, .kpi > div { background:#0f172a; border-color:#15213a; }
      .wrap { background:rgba(2,6,23,.6); border-color:#1b2b4b; }
      .zebra th, .zebra td { border-color:#1b2b4b; }
      .zebra tbody tr:nth-child(odd) { background:#0b1223; }
      .segmented { background:#0b1223; border-color:#1b2b4b; }
      .btn { background:#0b1223; color:#e2e8f0; border-color:#1b2b4b; }
      .pill { background:#0b1223; border-color:#1b2b4b; color:#9ec9ff; }
      .hero { background: linear-gradient(135deg,#0b1223 0%,#0e1b2e 50%,#1a1f2c 100%); }
      .blob { opacity:.25; }
    }
  `,z=async(e=1)=>{const a=w.current?.querySelector("svg");if(!a)return;const r=a.viewBox?.baseVal??null,s=r?null:a.getBBox?.(),o=r?.width||Math.ceil(s?.width||a.clientWidth||1200),t=r?.height||Math.ceil(s?.height||a.clientHeight||600),d=document.createElement("canvas");d.width=Math.max(1,Math.floor(o*e)),d.height=Math.max(1,Math.floor(t*e));const n=d.getContext("2d");n.fillStyle="#fff",n.fillRect(0,0,d.width,d.height);const c=(new XMLSerializer).serializeToString(a),l=URL.createObjectURL(new Blob([c],{type:"image/svg+xml"}));await new Promise(e=>{const a=new Image;a.onload=()=>{n.drawImage(a,0,0,d.width,d.height),URL.revokeObjectURL(l),e()},a.src=l});const p=d.toDataURL("image/png"),m=document.createElement("a");m.href=p,m.download=2===e?"diagrama@2x.png":"diagrama.png",m.click(),i(2===e?"PNG HD exportado \u2713":"PNG exportado \u2713")};return(0,s.jsxs)("div",{className:"page","data-compact":f?"1":"0","data-accent":v,children:[(0,s.jsx)("style",{children:S}),(0,s.jsxs)("section",{className:"hero",children:[(0,s.jsx)("span",{className:"pill",children:"Showcase \u2022 Vers\xe3o Turbo"}),(0,s.jsx)("h1",{children:"Documenta\xe7\xe3o bonita, clara e interativa"}),(0,s.jsx)("p",{className:"sub",children:"Um template com visual moderno, blocos reaproveit\xe1veis e micro-intera\xe7\xf5es. Copie os peda\xe7os que gostar e adapte ao seu contexto."}),(0,s.jsxs)("div",{className:"controls",children:[(0,s.jsxs)("div",{className:"segmented",role:"tablist","aria-label":"Tema de destaque",children:[(0,s.jsx)("button",{onClick:()=>k("violet"),"data-active":"violet"===v?"1":"0",children:"Violeta"}),(0,s.jsx)("button",{onClick:()=>k("teal"),"data-active":"teal"===v?"1":"0",children:"Ciano"}),(0,s.jsx)("button",{onClick:()=>k("orange"),"data-active":"orange"===v?"1":"0",children:"Laranja"})]}),(0,s.jsxs)("div",{className:"segmented",role:"tablist","aria-label":"Densidade",children:[(0,s.jsx)("button",{onClick:()=>j(!1),"data-active":f?"0":"1",children:"Conforto"}),(0,s.jsx)("button",{onClick:()=>j(!0),"data-active":f?"1":"0",children:"Compacto"})]})]}),(0,s.jsx)("div",{className:"blob","aria-hidden":"true"})]}),(0,s.jsxs)("div",{className:"grid",children:[(0,s.jsxs)("div",{className:"card gradient",children:[(0,s.jsx)("h3",{children:"\ud83c\udfaf Prop\xf3sito"}),(0,s.jsxs)("p",{children:["Dizer claramente o ",(0,s.jsx)("b",{children:"ganho do leitor"})," ao terminar a leitura. Menos ansiedade, mais fluxo."]})]}),(0,s.jsxs)("div",{className:"card gradient",children:[(0,s.jsx)("h3",{children:"\ud83e\udded Orienta\xe7\xe3o"}),(0,s.jsx)("p",{children:"Mostre pr\xf3ximos passos, atalhos e alternativas. Use abas/accordion para n\xe3o poluir."})]}),(0,s.jsxs)("div",{className:"card gradient",children:[(0,s.jsx)("h3",{children:"\ud83e\uddf1 Blocos"}),(0,s.jsx)("p",{children:"Cards, tabela, timeline, diagrama e KPIs prontos para copiar e colar."})]}),(0,s.jsxs)("div",{className:"card gradient",children:[(0,s.jsx)("h3",{children:"\ud83c\udfa8 Consist\xeancia"}),(0,s.jsx)("p",{children:"Estilo sob medida do tema, suporte a escuro e paleta de destaque vari\xe1vel."})]})]}),(0,s.jsxs)("div",{className:"card",children:[(0,s.jsx)("h2",{children:"Varia\xe7\xf5es por p\xfablico"}),(0,s.jsxs)(d.A,{children:[(0,s.jsx)(n.A,{value:"leigo",label:"Leigo",children:(0,s.jsxs)("ul",{children:[(0,s.jsxs)("li",{children:["Use frases curtas e verbos de a\xe7\xe3o (",(0,s.jsx)("i",{children:"clique"}),", ",(0,s.jsx)("i",{children:"escolha"}),", ",(0,s.jsx)("i",{children:"confirme"}),")."]}),(0,s.jsx)("li",{children:"Explique jarg\xf5es em 1 linha quando inevit\xe1veis."})]})}),(0,s.jsx)(n.A,{value:"negocio",label:"Neg\xf3cio",children:(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{children:"Traga objetivos, riscos e crit\xe9rios de sucesso."}),(0,s.jsx)("li",{children:"Liste pr\xe9-requisitos e regras de decis\xe3o com clareza."})]})}),(0,s.jsx)(n.A,{value:"tecnico",label:"T\xe9cnico",children:(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{children:"Mostre diagramas e contratos m\xednimos, por\xe9m \xfateis."}),(0,s.jsx)("li",{children:"Linke para refer\xeancias, pain\xe9is e playbooks."})]})})]})]}),(0,s.jsxs)("div",{className:"card",children:[(0,s.jsx)("h2",{children:"Mapa visual (Mermaid)"}),(0,s.jsxs)(l.A,{type:"info",title:"Dica de diagrama",children:["Prefira ",(0,s.jsx)("b",{children:"um objetivo"})," por diagrama. Se virar \u201ccheat sheet\u201d, quebre em partes."]}),(0,s.jsx)("div",{className:"wrap",ref:w,children:(0,s.jsx)(t.A,{value:N})}),(0,s.jsxs)("div",{className:"actions",children:[(0,s.jsx)("button",{className:"btn primary",onClick:()=>{const e=w.current?.querySelector("svg");if(!e)return;const a=(new XMLSerializer).serializeToString(e),r=new Blob([a],{type:"image/svg+xml"}),s=URL.createObjectURL(r),o=document.createElement("a");o.href=s,o.download="diagrama.svg",o.click(),URL.revokeObjectURL(s),i("SVG exportado \u2713")},children:"Exportar SVG"}),(0,s.jsx)("button",{className:"btn",onClick:()=>z(1),children:"PNG"}),(0,s.jsx)("button",{className:"btn",onClick:()=>z(2),children:"PNG HD"}),(0,s.jsx)("button",{className:"btn",onClick:async()=>{await navigator.clipboard.writeText(y),i("Mermaid copiado \u2713")},children:"Copiar Mermaid"})]}),(0,s.jsxs)("details",{style:{marginTop:".75rem"},children:[(0,s.jsxs)("summary",{children:[(0,s.jsx)("b",{children:"Alternativa:"})," fluxo de decis\xe3o"]}),(0,s.jsx)("div",{className:"wrap",children:(0,s.jsx)(t.A,{value:C})})]})]}),(0,s.jsxs)("div",{className:"grid",children:[(0,s.jsxs)("div",{className:"card",children:[(0,s.jsx)("h2",{children:"Timeline"}),(0,s.jsxs)("div",{className:"timeline",children:[(0,s.jsxs)("div",{className:"item",children:[(0,s.jsx)("b",{children:"1) Contexto curto"})," \u2014 1\u20132 frases explicando o porqu\xea desta p\xe1gina."]}),(0,s.jsxs)("div",{className:"item",children:[(0,s.jsx)("b",{children:"2) Passo a passo"})," \u2014 objetivos micro (4\u20136 bullets, no m\xe1x.)."]}),(0,s.jsxs)("div",{className:"item",children:[(0,s.jsx)("b",{children:"3) Decis\xf5es"})," \u2014 \u201cse A ent\xe3o B\u201d; use callouts ou detalhes colaps\xe1veis."]}),(0,s.jsxs)("div",{className:"item",children:[(0,s.jsx)("b",{children:"4) Pr\xf3ximos passos"})," \u2014 para onde o leitor vai agora?"]})]})]}),(0,s.jsxs)("div",{className:"card zebra",children:[(0,s.jsx)("h2",{children:"Comparativo r\xe1pido"}),(0,s.jsxs)("table",{children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:"Op\xe7\xe3o"}),(0,s.jsx)("th",{children:"Pr\xf3s"}),(0,s.jsx)("th",{children:"Contras"})]})}),(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Guia curto"}),(0,s.jsx)("td",{children:"F\xe1cil de ler"}),(0,s.jsx)("td",{children:"Pode faltar detalhe"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Guia completo"}),(0,s.jsx)("td",{children:"Menos d\xfavidas"}),(0,s.jsx)("td",{children:"Mais denso"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Abas por p\xfablico"}),(0,s.jsx)("td",{children:"Enfoque correto"}),(0,s.jsx)("td",{children:"Exige curadoria"})]})]})]})]})]}),(0,s.jsxs)("div",{className:"card",children:[(0,s.jsx)("h2",{children:"Indicadores (exemplo)"}),(0,s.jsxs)("div",{className:"kpi",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("div",{className:"n",children:"\u2191 24%"}),(0,s.jsx)("small",{children:"Leitura at\xe9 o fim"})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("div",{className:"n",children:"-18%"}),(0,s.jsx)("small",{children:"D\xfavidas recorrentes"})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("div",{className:"n",children:"+32%"}),(0,s.jsx)("small",{children:"Clique em pr\xf3ximos passos"})]})]}),(0,s.jsx)("div",{style:{width:"100%",height:240},children:(0,s.jsx)(p.u,{children:(0,s.jsxs)(m.Q,{data:[{m:"Jan",visitas:1200},{m:"Fev",visitas:1500},{m:"Mar",visitas:1800},{m:"Abr",visitas:1300},{m:"Mai",visitas:2200},{m:"Jun",visitas:1950}],margin:{left:8,right:8,top:8,bottom:8},children:[(0,s.jsx)("defs",{children:(0,s.jsxs)("linearGradient",{id:"g",x1:"0",y1:"0",x2:"0",y2:"1",children:[(0,s.jsx)("stop",{offset:"0%",stopColor:"var(--acc)",stopOpacity:.5}),(0,s.jsx)("stop",{offset:"100%",stopColor:"var(--acc)",stopOpacity:.05})]})}),(0,s.jsx)(x.d,{strokeDasharray:"3 3"}),(0,s.jsx)(h.W,{dataKey:"m"}),(0,s.jsx)(u.h,{}),(0,s.jsx)(b.m,{}),(0,s.jsx)(g.Gk,{type:"monotone",dataKey:"visitas",stroke:"var(--acc)",fill:"url(#g)"})]})})})]}),(0,s.jsxs)("div",{className:"grid",children:[(0,s.jsxs)("div",{className:"card",children:[(0,s.jsx)("h2",{children:"FAQ r\xe1pido"}),(0,s.jsxs)("details",{open:!0,children:[(0,s.jsx)("summary",{children:(0,s.jsx)("b",{children:"Como adapto esta p\xe1gina?"})}),(0,s.jsx)("p",{children:"Duplique o arquivo e troque os blocos/cores conforme seu tema."})]}),(0,s.jsxs)("details",{children:[(0,s.jsx)("summary",{children:(0,s.jsx)("b",{children:"Posso dividir em v\xe1rias p\xe1ginas?"})}),(0,s.jsx)("p",{children:"Sim \u2014 quando o conte\xfado ficar heterog\xeaneo ou longo."})]}),(0,s.jsxs)("details",{children:[(0,s.jsx)("summary",{children:(0,s.jsx)("b",{children:"Como manter vivo?"})}),(0,s.jsx)("p",{children:"Atualize com pequenos increments e registre \u201cpr\xf3ximos passos\u201d."})]})]}),(0,s.jsxs)("div",{className:"card",children:[(0,s.jsx)("h2",{children:"Snippet \xfatil (copiar)"}),(0,s.jsx)(c.A,{language:"md",children:"> Pro tip: se ficar longo, quebre em blocos curtos e linke para continuidade."}),(0,s.jsx)("div",{className:"actions",children:(0,s.jsx)("button",{className:"btn",onClick:async()=>{await navigator.clipboard.writeText("> Pro tip: se ficar longo, quebre em blocos curtos e linke para continuidade."),i("Snippet copiado \u2713")},children:"Copiar"})})]})]}),(0,s.jsxs)("div",{className:"card",children:[(0,s.jsx)("h2",{children:"Pr\xf3ximos passos"}),(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{children:"Transforme os blocos que mais gostou em componentes (reuso total)."}),(0,s.jsx)("li",{children:"Defina 1\u20132 diagramas por p\xe1gina \u2014 e sempre com a\xe7\xe3o final clara."}),(0,s.jsx)("li",{children:"Evite \u201cmuro de texto\u201d: prefira grids, listas e detalhes colaps\xe1veis."})]}),(0,s.jsx)(l.A,{type:"tip",title:"Mantenha simples",children:"\xc9 melhor publicar pequeno e iterar constantemente do que esperar o perfeito."})]}),(0,s.jsx)("div",{className:"toast","data-show":e?"1":"0",children:e})]})},w=[];function N(e){return(0,s.jsx)(s.Fragment,{})}function y(e={}){return(0,s.jsx)(k,{...e,children:(0,s.jsx)(N,{...e})})}}}]);