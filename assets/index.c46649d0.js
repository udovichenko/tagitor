import{j as h,r as l,a as S,R as T,b as C}from"./vendor.26b63288.js";const R=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function i(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(e){if(e.ep)return;e.ep=!0;const o=i(e);fetch(e.href,o)}};R();const O="a",E="b",I="c",L="e",k="f";var d={container:O,textarea:E,title:I,bar:L,count:k};const w="g";var A={button:w};const n=h.exports.jsx,p=h.exports.jsxs,D=({text:t,onClick:s})=>n("button",{className:A.button,onClick:s,children:t}),v=t=>t.replace(/\s+/g," ").replace(/,+/g,","),x=t=>t.split(", ").map(s=>v(s).trim()).filter(s=>s!==""),M="h",B="i",$="j",K="k";var m={tags:M,tag:B,cross:$,danger:K};const z=(...t)=>t.filter(s=>!!s).join(" "),F=({tags:t,onClickRemove:s})=>{const[i,a]=l.exports.useState(!1);return n("div",{className:m.tags,children:t.map((e,o)=>p("div",{draggable:!0,className:z(m.tag,o===i&&m.danger),children:[e,n("button",{className:m.cross,onClick:()=>s(o),onMouseEnter:()=>a(o),onMouseLeave:()=>a(null),children:"\u2716"})]},`${o}`))})};function H(){const[t,s]=l.exports.useState([]),[i,a]=l.exports.useState(""),e=l.exports.useRef(null);l.exports.useEffect(()=>{let r=localStorage.getItem("tags")||"[]";s(JSON.parse(r))},[]),l.exports.useEffect(()=>{S(e.current),o()},[t]);const o=()=>{localStorage.setItem("tags",JSON.stringify(t))},u=({target:{value:r}})=>{let c=r,g=c.match(/\s*,*\s*$/)[0];g=v(g),c=c.replace(/\s*,\s*/g,", ");let f=x(c);a(g),s(f)},y=()=>{const r=t.join(", ").replace(/[\s,]+/g,", ");s(x(r))},b=()=>a(""),N=r=>{/[0-9А-яЁёA-Za-z_@\-',.\s]/.test(r.key)||r.preventDefault()},j=r=>{const c=t.filter((g,f)=>f!==r);s(c)};return p("div",{className:d.container,children:[n("h1",{className:d.title,children:"Simple Tag Editor"}),p("div",{className:d.bar,children:[n(D,{text:"_ > ,",onClick:y}),n("div",{className:d.count,children:t.length})]}),n("textarea",{className:d.textarea,onChange:u,onKeyDown:N,onBlur:b,value:t.join(", ")+i,ref:e}),n(F,{tags:t,onClickRemove:j})]})}T.render(n(C.StrictMode,{children:n(H,{})}),document.getElementById("app"));
