import{d,i as _,a as p,u as h,b as u,c as m,e as f,f as n,g as t,t as s,h as o,F as g,r as v,n as y,j as b,o as l,k as x,l as k,m as N,p as j,q as w,_ as P}from"./index-3a64bdf0.js";import{N as S}from"./NoteDisplay-53b283c4.js";const V={class:"m-4"},z={class:"mb-10"},L={class:"text-4xl font-bold mt-2"},T={class:"opacity-50"},B={class:"text-lg"},C={class:"font-bold flex gap-2"},D={class:"opacity-50"},H=t("div",{class:"flex-auto"},null,-1),F={key:0,class:"border-gray-400/50 mb-8"},M=d({__name:"PresenterPrint",setup(q){_(p),h(`
@page {
  size: A4;
  margin-top: 1.5cm;
  margin-bottom: 1cm;
}
* {
  -webkit-print-color-adjust: exact;
}
html,
html body,
html #app,
html #page-root {
  height: auto;
  overflow: auto !important;
}
`),u({title:`Notes - ${m.title}`});const c=f(()=>b.slice(0,-1).map(a=>{var r;return(r=a.meta)==null?void 0:r.slide}).filter(a=>a!==void 0&&a.noteHTML!==""));return(a,r)=>(l(),n("div",{id:"page-root",style:y(o(w))},[t("div",V,[t("div",z,[t("h1",L,s(o(m).title),1),t("div",T,s(new Date().toLocaleString()),1)]),(l(!0),n(g,null,v(o(c),(e,i)=>(l(),n("div",{key:i,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",B,[t("div",C,[t("div",D,s(e==null?void 0:e.no)+"/"+s(o(x)),1),k(" "+s(e==null?void 0:e.title)+" ",1),H])]),N(S,{"note-html":e.noteHTML,class:"max-w-full"},null,8,["note-html"])]),i<o(c).length-1?(l(),n("hr",F)):j("v-if",!0)]))),128))])],4))}}),R=P(M,[["__file","/home/runner/work/camunda-chapter-almaty-june-2023-scalability-zeebe-speech/camunda-chapter-almaty-june-2023-scalability-zeebe-speech/node_modules/@slidev/client/internals/PresenterPrint.vue"]]);export{R as default};
