"use strict";(self.webpackChunkdoc_pokemon_theme=self.webpackChunkdoc_pokemon_theme||[]).push([[2540],{7666:(e,i,a)=>{a.r(i),a.d(i,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>d,metadata:()=>o,toc:()=>g});const o=JSON.parse('{"id":"parametrizador/elegibilidade","title":"Elegibilidade (PA)","description":"const showToast = (msg) => {","source":"@site/docs/parametrizador/elegibilidade.mdx","sourceDirName":"parametrizador","slug":"/parametrizador/elegibilidade","permalink":"/doc-pokemon-theme/docs/parametrizador/elegibilidade","draft":false,"unlisted":false,"editUrl":"https://github.com/Boddenberg/doc-pokemon-theme/edit/main/docs/parametrizador/elegibilidade.mdx","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3,"title":"Elegibilidade (PA)","hide_table_of_contents":true},"sidebar":"tutorialSidebar","previous":{"title":"jornadas","permalink":"/doc-pokemon-theme/docs/parametrizador/jornadas"},"next":{"title":"produtos","permalink":"/doc-pokemon-theme/docs/parametrizador/produtos"}}');var r=a(4848),t=a(6540),n=a(6406);const d={sidebar_position:3,title:"Elegibilidade (PA)",hide_table_of_contents:!0},l=void 0,s={},c=function(){const e=(0,t.useRef)(null),i=(0,t.useRef)({drag:!1,sx:0,sy:0}),[a,o]=(0,t.useState)(""),d=(0,t.useRef)(null),l=String.raw`%%{init: {"sequence":{"showSequenceNumbers":true,"mirrorActors":false}}}%%
sequenceDiagram
  title Elegibilidade PA

  participant MotorOfertas as Motor Ofertas
  participant ElegibilidadePA as Elegibilidade PA
  participant DisponibilidadePUC as Disponibilidade PUC

  MotorOfertas->>ElegibilidadePA: Executar(idCliente, idConta, parametrosJornada, listaCartoesCliente, dadosRendaCliente)

  Note over ElegibilidadePA: Etapa 1: Regras de triagem

  break Não foi possível carregar a parametrização da jornada, a lista de cartões do cliente ou a renda do cliente? (obrigatórios p/ PA)
    ElegibilidadePA->>MotorOfertas: Retorna não elegível
  end

  Note right of ElegibilidadePA: Verifica se o cliente possui renda suficiente para contratar o produto,<br/>caso contrário será considerado não elegível
  Note right of ElegibilidadePA: Verifica se o cliente já possui o produto,<br/>caso positivo, será considerado não elegível

  Note over ElegibilidadePA: Etapa 2: Consulta da elegibilidade
  ElegibilidadePA->>DisponibilidadePUC: Consultar elegibilidade na PUC (idCliente, idConta)
  DisponibilidadePUC-->>ElegibilidadePA: Retorna {dadosElegibilidadePUC}

  Note over ElegibilidadePA: Etapa 3: Regras pós-elegibilidade
  alt Cliente aprovado no crédito e limite disponível >= limite mínimo do produto?
    Note right of ElegibilidadePA: Ajusta o limite disponível com base no limite máximo do produto<br/>Cliente considerado elegível
  else
    Note right of ElegibilidadePA: Cliente considerado não elegível
  end

  ElegibilidadePA->>MotorOfertas: Retorna {elegibilidadePA}
`,s=String.raw`sequenceDiagram
  title Elegibilidade PA

  participant MotorOfertas as Motor Ofertas
  participant ElegibilidadePA as Elegibilidade PA
  participant DisponibilidadePUC as Disponibilidade PUC

  MotorOfertas->>ElegibilidadePA: Executar(idCliente, idConta, parametrosJornada,<br> listaCartoesCliente, dadosRendaCliente)

  Note over ElegibilidadePA: Etapa 1: Regras de triagem

  break Não foi possível carregar a parametrização da jornada, a lista de cartões do cliente ou a renda do cliente, que são informações obrigatórias para a elegibilidade do PA?
    ElegibilidadePA->>MotorOfertas: Retorna não elegível
  end

  Note right of ElegibilidadePA: Verifica se o cliente possui renda suficiente para contratar o produto, <br> caso contrário, ele será considerado não elegível
  Note right of ElegibilidadePA: Verifica se o cliente já possui o produto, <br> caso positivo, ele será considerado não elegível

  Note over ElegibilidadePA: Etapa 2: Consulta da elegibilidade

  ElegibilidadePA->>DisponibilidadePUC: Consultar elegibilidade na PUC (idCliente, idConta)
  DisponibilidadePUC-->>ElegibilidadePA: Retorna {dadosElegibilidadePUC}

  Note over ElegibilidadePA: Etapa 3: Regras pós-elegibilidade

  alt Cliente aprovado na análise de crédito e possui limite disponível maior ou igual ao limite mínimo do produto?
    Note right of ElegibilidadePA: Ajusta o limite disponível do cliente com base no limite máximo permitido para o produto
    Note right of ElegibilidadePA: Cliente considerado elegível
  else
    Note right of ElegibilidadePA: Cliente considerado não elegível
  end

  ElegibilidadePA->>MotorOfertas: Retorna {elegibilidadePA}
`,c=async(i=1)=>{const a=e.current?.querySelector("svg");if(!a)return;const o=a.viewBox&&a.viewBox.baseVal?{w:a.viewBox.baseVal.width,h:a.viewBox.baseVal.height}:null,r=o?null:a.getBBox(),t=o?.w||Math.ceil(r?.width||a.clientWidth||1200),n=o?.h||Math.ceil(r?.height||a.clientHeight||600),d=document.createElement("canvas");d.width=Math.max(1,Math.floor(t*i)),d.height=Math.max(1,Math.floor(n*i));const l=d.getContext("2d");l.fillStyle="#ffffff",l.fillRect(0,0,d.width,d.height);const s=(new XMLSerializer).serializeToString(a),c=URL.createObjectURL(new Blob([s],{type:"image/svg+xml"}));await new Promise(e=>{const i=new Image;i.onload=()=>{l.drawImage(i,0,0,d.width,d.height),URL.revokeObjectURL(c),e()},i.src=c});const g=d.toDataURL("image/png"),b=document.createElement("a");b.href=g,b.download=2===i?"elegibilidade-pa@2x.png":"elegibilidade-pa.png",b.click()};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("style",{children:'\n        .diagram-card {\n          position: relative;\n          background: linear-gradient(135deg,#e3f2fd 0%,#e8f5e9 50%,#fff3e0 100%);\n          border-radius: 20px;\n          padding: 1.25rem;\n          box-shadow: 0 8px 24px rgba(0,0,0,.08);\n          border: 1px solid rgba(13,71,161,.12);\n        }\n        .diagram-frame {\n          background: rgba(255,255,255,.75);\n          backdrop-filter: blur(6px);\n          border-radius: 16px;\n          border: 1px solid #e0e0e0;\n          padding: 1rem;\n          overflow: auto;\n        }\n        .diagram-frame svg { max-width: 100%; height: auto; }\n        .diagram-actions {\n          display: flex;\n          justify-content: flex-end;\n          gap: .5rem;\n          margin-top: .75rem;\n        }\n        .btn {\n          appearance: none;\n          border: 1px solid transparent;\n          padding: .6rem .9rem;\n          border-radius: .75rem;\n          font-weight: 600;\n          font-size: .95rem;\n          cursor: pointer;\n          transition: transform .12s ease, box-shadow .2s ease, filter .2s ease;\n          box-shadow: 0 6px 16px rgba(0,0,0,.08);\n          outline: none;\n        }\n        .btn:focus { box-shadow: 0 0 0 3px rgba(124,58,237,.25); }\n        .btn:hover { transform: translateY(-1px); filter: brightness(1.02); }\n        .btn-primary {\n          color: #fff;\n          background: linear-gradient(135deg,#7c3aed 0%,#0ea5e9 100%);\n          border: 1px solid rgba(255,255,255,.18);\n        }\n        .btn-outline {\n          color: #0d47a1;\n          background: rgba(255,255,255,.85);\n          border: 1px solid rgba(13,71,161,.2);\n        }\n        .toast {\n          position: absolute;\n          right: 12px;\n          bottom: 12px;\n          padding: .45rem .7rem;\n          border-radius: 999px;\n          background: rgba(29,35,50,.92);\n          color: #fff;\n          font-weight: 700;\n          font-size: .9rem;\n          box-shadow: 0 8px 22px rgba(0,0,0,.2);\n          opacity: 0;\n          transform: translateY(6px);\n          pointer-events: none;\n          transition: opacity .2s ease, transform .2s ease;\n        }\n        .toast[data-show="1"] { opacity: 1; transform: translateY(0); }\n      '}),(0,r.jsxs)("div",{className:"diagram-card",children:[(0,r.jsx)("div",{ref:e,className:"diagram-frame",style:{cursor:"grab"},onMouseDown:e=>{const a=e.currentTarget;i.current={drag:!0,sx:e.pageX+a.scrollLeft,sy:e.pageY+a.scrollTop},a.style.cursor="grabbing"},onMouseUp:e=>{i.current.drag=!1,e.currentTarget.style.cursor="grab"},onMouseLeave:e=>{i.current.drag=!1,e.currentTarget.style.cursor="grab"},onMouseMove:e=>{const a=e.currentTarget,o=i.current;o.drag&&(a.scrollLeft=o.sx-e.pageX,a.scrollTop=o.sy-e.pageY)},children:(0,r.jsx)(n.A,{value:l})}),(0,r.jsxs)("div",{className:"diagram-actions",children:[(0,r.jsx)("button",{className:"btn btn-primary",onClick:()=>{const i=e.current?.querySelector("svg");if(!i)return;const a=(new XMLSerializer).serializeToString(i),o=new Blob([a],{type:"image/svg+xml"}),r=URL.createObjectURL(o),t=document.createElement("a");t.href=r,t.download="elegibilidade-pa.svg",t.click(),URL.revokeObjectURL(r)},children:"Exportar SVG"}),(0,r.jsx)("button",{className:"btn btn-outline",onClick:()=>c(1),children:"PNG"}),(0,r.jsx)("button",{className:"btn btn-outline",onClick:()=>c(2),children:"PNG HD"}),(0,r.jsx)("button",{className:"btn btn-outline",onClick:async()=>{try{await navigator.clipboard.writeText(s),o("Mermaid copiado \u2713"),d.current&&clearTimeout(d.current),d.current=setTimeout(()=>o(""),1800)}catch{}},children:"Copiar Mermaid"})]}),(0,r.jsx)("div",{className:"toast","data-show":a?"1":"0",children:a})]})]})},g=[];function b(e){return(0,r.jsx)(r.Fragment,{})}function p(e={}){return(0,r.jsx)(c,{...e,children:(0,r.jsx)(b,{...e})})}}}]);