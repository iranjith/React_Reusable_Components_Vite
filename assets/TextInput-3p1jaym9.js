import{j as e}from"./jsx-runtime-DEdD30eg.js";import{L as o}from"./Label-CT0VVVKE.js";const c=({htmlId:t,name:n,label:a,type:s="text",required:i=!1,onChange:u,placeholder:d,value:l,error:r,children:p,...m})=>e.jsxs("div",{style:{marginBottom:16},children:[e.jsx(o,{htmlFor:t,label:a,required:i}),e.jsx("input",{id:t,type:s,name:n,placeholder:d,value:l,onChange:u,style:{border:"solid 1px red"},...m}),p,r&&e.jsx("div",{className:"error",style:{color:"red"},children:r})]});c.__docgenInfo={description:"",methods:[],displayName:"TextInput",props:{htmlId:{required:!0,tsType:{name:"string"},description:""},name:{required:!0,tsType:{name:"string"},description:""},label:{required:!0,tsType:{name:"string"},description:""},placeholder:{required:!0,tsType:{name:"string"},description:""},type:{required:!1,tsType:{name:"union",raw:'"text" | "number" | "password"',elements:[{name:"literal",value:'"text"'},{name:"literal",value:'"number"'},{name:"literal",value:'"password"'}]},description:"",defaultValue:{value:'"text"',computed:!1}},required:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},value:{required:!0,tsType:{name:"any"},description:""},error:{required:!0,tsType:{name:"string"},description:""},children:{required:!1,tsType:{name:"ReactNode"},description:""},maxLength:{required:!1,tsType:{name:"number"},description:""},minLength:{required:!1,tsType:{name:"number"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(event: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""}}};export{c as T};
