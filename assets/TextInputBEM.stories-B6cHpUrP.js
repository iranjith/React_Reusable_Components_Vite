import{j as e}from"./jsx-runtime-DEdD30eg.js";import{L as M}from"./Label-CT0VVVKE.js";import"./index-RYns6xqu.js";const h=({htmlId:s,name:x,label:T,type:f="text",required:y=!1,onChange:E,placeholder:I,value:q,error:n,children:v,...b})=>e.jsxs("div",{className:"textinput",children:[e.jsx(M,{htmlFor:s,label:T,required:y}),e.jsx("input",{id:s,type:f,name:x,placeholder:I,value:q,onChange:E,className:n&&"textinput__input--state-error",...b}),v,n&&e.jsx("div",{className:"textinput__error",children:n})]});h.__docgenInfo={description:"",methods:[],displayName:"TextInputBEM",props:{htmlId:{required:!0,tsType:{name:"string"},description:""},name:{required:!0,tsType:{name:"string"},description:""},label:{required:!0,tsType:{name:"string"},description:""},placeholder:{required:!0,tsType:{name:"string"},description:""},type:{required:!1,tsType:{name:"union",raw:'"text" | "number" | "password"',elements:[{name:"literal",value:'"text"'},{name:"literal",value:'"number"'},{name:"literal",value:'"password"'}]},description:"",defaultValue:{value:'"text"',computed:!1}},required:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},value:{required:!0,tsType:{name:"any"},description:""},error:{required:!0,tsType:{name:"string"},description:""},children:{required:!1,tsType:{name:"ReactNode"},description:""},maxLength:{required:!1,tsType:{name:"number"},description:""},minLength:{required:!1,tsType:{name:"number"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(event: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""}}};const F={title:"Atoms/TextInputBEM",component:h,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{}},t={args:{htmlId:"example-optional",label:"First Name",name:"firstname",onChange(){}}},r={args:{htmlId:"example-optional",label:"First Name",name:"firstname",onChange(){},required:!0,error:"First name is required"}},a={args:{htmlId:"example-optional",label:"First Name",name:"firstname",onChange(){},placeholder:"Type here"}};var i,o,m;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    htmlId: "example-optional",
    label: "First Name",
    name: "firstname",
    onChange() {}
  }
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};var p,l,u;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    htmlId: "example-optional",
    label: "First Name",
    name: "firstname",
    onChange() {},
    required: true,
    error: "First name is required"
  }
}`,...(u=(l=r.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var d,c,g;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    htmlId: "example-optional",
    label: "First Name",
    name: "firstname",
    onChange() {},
    placeholder: "Type here"
  }
}`,...(g=(c=a.parameters)==null?void 0:c.docs)==null?void 0:g.source}}};const _=["TextInputBEMOptional","TextInputBEMError","TextInputBEMWithPlaceholder"];export{r as TextInputBEMError,t as TextInputBEMOptional,a as TextInputBEMWithPlaceholder,_ as __namedExportsOrder,F as default};
