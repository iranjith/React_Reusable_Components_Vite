import{j as e}from"./jsx-runtime-DEdD30eg.js";import{L as o}from"./Label-CT0VVVKE.js";const c=({htmlId:r,name:n,label:a,type:i="text",required:s=!1,onChange:d,placeholder:u,value:l,error:t,children:p,...m})=>e.jsxs("div",{style:{marginBottom:16},children:[e.jsx(o,{htmlFor:r,label:a,required:s}),e.jsx("input",{id:r,type:i,name:n,placeholder:u,value:l,onChange:d,style:t?{border:"solid 1px red"}:void 0,...m}),p,t&&e.jsx("div",{className:"error",style:{color:"red"},children:t})]});c.__docgenInfo={description:"",methods:[],displayName:"TextInput",props:{htmlId:{required:!0,tsType:{name:"string"},description:""},name:{required:!0,tsType:{name:"string"},description:""},label:{required:!0,tsType:{name:"string"},description:""},placeholder:{required:!0,tsType:{name:"string"},description:""},type:{required:!1,tsType:{name:"union",raw:'"text" | "number" | "password"',elements:[{name:"literal",value:'"text"'},{name:"literal",value:'"number"'},{name:"literal",value:'"password"'}]},description:"",defaultValue:{value:'"text"',computed:!1}},required:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},value:{required:!0,tsType:{name:"any"},description:""},error:{required:!0,tsType:{name:"string"},description:""},children:{required:!1,tsType:{name:"ReactNode"},description:""},maxLength:{required:!1,tsType:{name:"number"},description:""},minLength:{required:!1,tsType:{name:"number"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(event: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""}}};export{c as T};
