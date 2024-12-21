import{j as r}from"./jsx-runtime-QvZ8i92b.js";import"./index-uubelm5h.js";const P=({percent:o,width:a,height:y=5})=>{const f=n=>n===100?"green":n>50?"lightgreen":"red",x=()=>a*(o/100);return r.jsx(r.Fragment,{children:r.jsx("div",{style:{border:"solid 1px lightgray",width:a},children:r.jsx("div",{style:{width:x(),height:y,backgroundColor:f(o)}})})})};P.__docgenInfo={description:"",methods:[],displayName:"ProgressBar",props:{percent:{required:!0,tsType:{name:"number"},description:""},width:{required:!0,tsType:{name:"number"},description:""},height:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"5",computed:!1}}}};const b={title:"Atoms/ProgressBar",component:P,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{}},e={args:{percent:20,width:150}},s={args:{percent:70,width:150}},t={args:{percent:100,width:150}};var c,d,i;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    percent: 20,
    width: 150
  }
}`,...(i=(d=e.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};var p,g,m;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    percent: 70,
    width: 150
  }
}`,...(m=(g=s.parameters)==null?void 0:g.docs)==null?void 0:m.source}}};var u,l,h;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    percent: 100,
    width: 150
  }
}`,...(h=(l=t.parameters)==null?void 0:l.docs)==null?void 0:h.source}}};const j=["ProgressFor20","ProgressFor70","ProgressFor100"];export{t as ProgressFor100,e as ProgressFor20,s as ProgressFor70,j as __namedExportsOrder,b as default};
