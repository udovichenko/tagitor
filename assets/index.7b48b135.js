import{j as D,r as g,a as E,R as I,b as R}from"./vendor.26b63288.js";const L=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))d(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const f of a.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&d(f)}).observe(document,{childList:!0,subtree:!0});function p(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerpolicy&&(a.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?a.credentials="include":e.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function d(e){if(e.ep)return;e.ep=!0;const a=p(e);fetch(e.href,a)}};L();const k="a",O="b",w="c",A="e",M="f";var v={container:k,textarea:O,title:w,bar:A,count:M};const B="g";var $={button:B};const l=D.exports.jsx,x=D.exports.jsxs;function N({text:t,onClick:n}){return l("button",{className:$.button,onClick:n,children:t})}function j(t){return t.replace(/\s+/g," ").replace(/,+/g,",")}const K="h",P="i",z="j",F="k";var y={tags:K,tag:P,cross:z,danger:F};function H(...t){return t.filter(n=>!!n).join(" ")}function J({tags:t,onClickRemove:n,setTags:p}){const[d,e]=g.exports.useState(!1),[a,f]=g.exports.useState(),S=g.exports.useRef(null),h=(i,c)=>{i.dataTransfer.setData("text/plain",""),f(c)},T=(i,c)=>{i.target.style.opacity=".5";const s=[...t],r=s[a];s.splice(a,1),s.splice(c,0,r),f(c),p(s)},b=i=>{i.target.style.opacity="1"};return l("div",{className:y.tags,ref:S,children:t.map((i,c)=>x("div",{className:H(y.tag,c===d&&y.danger),draggable:c!==d,onDragStart:s=>h(s,c),onDragEnter:s=>T(s,c),onDragLeave:s=>b(s),children:[i.value,l("button",{className:y.cross,onClick:()=>n(c),onMouseEnter:()=>e(c),onMouseLeave:()=>e(null),onDragStart:s=>s.stopPropagation(),children:"\u2716"})]},`${c}`))})}function C(t){return j(t).split(", ").map(n=>n.trim()).filter(n=>n!=="")}function _(){const[t,n]=g.exports.useState([]),[p,d]=g.exports.useState(""),e=g.exports.useRef(null);g.exports.useEffect(()=>{let r=localStorage.getItem("tags")||"[]";n(JSON.parse(r))},[]),g.exports.useEffect(()=>{E(e.current),a()},[t]);function a(){localStorage.setItem("tags",JSON.stringify(t))}function f({target:{value:r}}){let o=r,u=o.match(/\s*,*\s*$/)[0];u=j(u),o=o.replace(/\s*,\s*/g,", ");let m=C(o);d(u),n(h(m))}function S(){const r=s(t).replace(/[\s,]+/g,", "),o=C(r);n(h(o))}function h(r){return r.map((o,u)=>({id:u,value:o.trim()}))}function T(){d("")}function b(r){/[0-9А-яЁёA-Za-z_@\-',.\s]/.test(r.key)||r.preventDefault()}function i(){let r=[],o=0;t.forEach(u=>{r.findIndex(m=>m.value===u.value)===-1&&r.push({id:o++,value:u.value})}),n(r)}function c(r){const o=t.filter((u,m)=>m!==r);n(o)}function s(r){return r.map(o=>o.value).join(", ")}return x("div",{className:v.container,children:[l("h1",{className:v.title,children:"Simple Tag Editor"}),x("div",{className:v.bar,children:[x("div",{children:[l(N,{text:"_ > ,",onClick:S}),l(N,{text:"Clean",onClick:i})]}),l("div",{className:v.count,children:t.length})]}),l("textarea",{className:v.textarea,onChange:f,onKeyDown:b,onBlur:T,value:s(t)+p,ref:e}),l(J,{tags:t,onClickRemove:c,setTags:n})]})}I.render(l(R.StrictMode,{children:l(_,{})}),document.getElementById("app"));
