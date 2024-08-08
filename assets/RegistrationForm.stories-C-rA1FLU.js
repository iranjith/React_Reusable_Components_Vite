import{j as r}from"./jsx-runtime-DEdD30eg.js";import{r as m}from"./index-RYns6xqu.js";import{T as I}from"./TextInput-bkY6ka13.js";import{P as S}from"./PasswordInput-u9dLQ8EH.js";import"./Label-CT0VVVKE.js";import"./EyeIcon-CyCIxuDN.js";const f=({confirmationMessage:i="Thanks for registering",onSubmit:h,minPasswordLength:a=8})=>{const[s,y]=m.useState({email:"",password:""}),[u,w]=m.useState({email:"",password:""}),[x,b]=m.useState(!1),l=e=>{const{name:n,value:t}=e.target;y(d=>({...d,[n]:t}))},v=e=>e?e.length>=a?100:Math.floor(e.length/a*100):0,T=({email:e,password:n})=>{const t={};return e||(t.email="Email required."),n.length<a&&(t.password=`Password must be at least ${a} characters.`),w(t),Object.getOwnPropertyNames(t).length===0},j=()=>{T(s)&&(h(s),b(!0))};return r.jsx(r.Fragment,{children:x?r.jsx("h2",{children:i}):r.jsxs("div",{children:[r.jsx(I,{htmlId:"registration-form-email",name:"email",onChange:l,label:"Email",value:s.email,error:u.email,required:!0,placeholder:"E-mail",type:"text"}),r.jsx(S,{htmlId:"registration-form-password",name:"password",value:s.password,onChange:l,quality:v(s.password),showVisibilityToggle:!0,maxLength:50,error:u.password,placeholder:"password"}),r.jsx("input",{type:"submit",value:"Register",onClick:j})]})})};f.__docgenInfo={description:"",methods:[],displayName:"RegistrationForm",props:{confirmationMessage:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Thanks for registering"',computed:!1}},onSubmit:{required:!0,tsType:{name:"signature",type:"function",raw:"(user: User) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{\r
  email: string;\r
  password: string;\r
}`,signature:{properties:[{key:"email",value:{name:"string",required:!0}},{key:"password",value:{name:"string",required:!0}}]}},name:"user"}],return:{name:"void"}}},description:""},minPasswordLength:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"8",computed:!1}}}};const R={title:"Components/RegistrationForm",component:f,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{}},o={args:{confirmationMessage:"Thanks for registering",minPasswordLength:8,onSubmit(i){console.log(i)}}};var p,c,g;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    confirmationMessage: "Thanks for registering",
    minPasswordLength: 8,
    onSubmit(user) {
      console.log(user);
    }
  }
}`,...(g=(c=o.parameters)==null?void 0:c.docs)==null?void 0:g.source}}};const F=["Default"];export{o as Default,F as __namedExportsOrder,R as default};