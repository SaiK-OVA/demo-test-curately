var I=Object.defineProperty;var A=(o,a,l)=>a in o?I(o,a,{enumerable:!0,configurable:!0,writable:!0,value:l}):o[a]=l;var t=(o,a,l)=>A(o,typeof a!="symbol"?a+"":a,l);import{r as w,k as e,I as S,l as v,R as V,T as z,B as F,V as c,L as P,W as R,A as H,P as $}from"./DAuuuMsE.js";import{R as L}from"./rzLa6I96.js";import{S as W}from"./BZPAOVTJ.js";import{b as K,P as M}from"./Cg41riQw.js";import{P as C}from"./w5-nO31Y.js";import{T as Q}from"./BestnZaX.js";import"./D1ftmOk2.js";import"./OPHguh9D.js";import"./DistCVVm.js";import"./BqtMM88J.js";import"./IOI02mfF.js";import"./DbsmdDnd.js";const U={"Policy Info":[{viewfieldname:"Policy Link"}]},G=({onInsertField:o,policyPlaceholderData:a})=>{const[l,i]=w.useState(null),d=!!l,D=a||U,b=u=>{i(u.currentTarget)},y=()=>{i(null)};return e.jsxDEV("div",{children:[e.jsxDEV(S,{onClick:b,title:"Policy Placeholders",children:e.jsxDEV(K,{sx:{color:"#444"}},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/Policies/PolicyPlaceholder.tsx",lineNumber:34,columnNumber:17},void 0)},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/Policies/PolicyPlaceholder.tsx",lineNumber:33,columnNumber:13},void 0),e.jsxDEV(C,{id:"policy-placeholders-popover",open:d,anchorEl:l,onClose:y,anchorOrigin:{vertical:"top",horizontal:"center"},transformOrigin:{vertical:"bottom",horizontal:"center"},children:e.jsxDEV(v,{p:2,children:Object.keys(D).map((u,f)=>e.jsxDEV(v,{mt:1,children:D[u].map((N,r)=>e.jsxDEV(v,{sx:{m:.5,p:.5,borderRadius:1,backgroundColor:"#f0f0f0",cursor:"pointer"},onClick:()=>{o(N.viewfieldname),y()},children:`{{${N.viewfieldname}}}`},r,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/Policies/PolicyPlaceholder.tsx",lineNumber:61,columnNumber:33},void 0))},f,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/Policies/PolicyPlaceholder.tsx",lineNumber:53,columnNumber:25},void 0))},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/Policies/PolicyPlaceholder.tsx",lineNumber:50,columnNumber:17},void 0)},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/Policies/PolicyPlaceholder.tsx",lineNumber:36,columnNumber:13},void 0)]},void 0,!0,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/Policies/PolicyPlaceholder.tsx",lineNumber:32,columnNumber:9},void 0)};function T(o){var l,i;const a=(l=this==null?void 0:this.quill)==null?void 0:l.getSelection().index;(i=this==null?void 0:this.quill)==null||i.insertText(a," <<"+o+">> ")}const J=({toolbarId:o,mentions:a,saveTemplate:l,open:i,anchorEl:d,handlePopoverOpen:D,tempOpen:b,tempAnchorEl:y,handlePopoverTempOpen:u,handlePopoverClose:f,handleTemplateName:N,templateName:r,subject:h,editorHtml:B,value:p,closePopOver:O,policyPlaceholder:q})=>{const g=m=>{const s=B.current.getEditor();let x=s.getSelection();if(x||(s.focus(),x=s.getSelection()),x){const j=x.index;s.insertText(j,` {{${m}}} `),setTimeout(()=>{s.setSelection(j+m.length+6),O()},100)}},k=()=>{if(r.trim()==="")return c("Please Enter Email Template Name","warning"),!1;if(h.trim()==="")return c("Please enter Email Template Subject","warning"),!1;if(p.trim()===""||p.trim()==="<p></p>"||p.trim()==="<p><br></p>")return c("Please enter Email Template Description","warning"),!1;const m={templateId:0,templateName:r,templatedesc:p,subject:h,jsonFile:"",htmlFile:"",type:2,isActive:!1,createdby:P.getvalue("recrId"),clientId:P.getvalue("clientId")};R(H.postWithData("admin","saveEmailTemplate",m).then(s=>{s.data.Success===!0?(c("Email Template saved Successfully","success"),f()):c(s.data.Message,"error")}))};return e.jsxDEV("div",{id:o,children:[e.jsxDEV("button",{type:"button",className:"ql-bold"},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/shared/EmailDialogBox/EmailBody.tsx",lineNumber:318,columnNumber:13},void 0),e.jsxDEV("button",{type:"button",className:"ql-italic"},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/shared/EmailDialogBox/EmailBody.tsx",lineNumber:319,columnNumber:13},void 0),e.jsxDEV("button",{type:"button",className:"ql-underline"},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/shared/EmailDialogBox/EmailBody.tsx",lineNumber:320,columnNumber:13},void 0),e.jsxDEV("button",{type:"button",className:"ql-strike"},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/shared/EmailDialogBox/EmailBody.tsx",lineNumber:321,columnNumber:13},void 0),e.jsxDEV("select",{className:"ql-header",defaultValue:"",onChange:m=>m.persist(),children:[e.jsxDEV("option",{value:"1"},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/shared/EmailDialogBox/EmailBody.tsx",lineNumber:323,columnNumber:17},void 0),e.jsxDEV("option",{value:"2"},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/shared/EmailDialogBox/EmailBody.tsx",lineNumber:324,columnNumber:17},void 0),e.jsxDEV("option",{value:"3"},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/shared/EmailDialogBox/EmailBody.tsx",lineNumber:325,columnNumber:17},void 0),e.jsxDEV("option",{value:"4"},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/shared/EmailDialogBox/EmailBody.tsx",lineNumber:326,columnNumber:17},void 0),e.jsxDEV("option",{value:"5"},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/shared/EmailDialogBox/EmailBody.tsx",lineNumber:327,columnNumber:17},void 0),e.jsxDEV("option",{value:"6"},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/shared/EmailDialogBox/EmailBody.tsx",lineNumber:328,columnNumber:17},void 0),e.jsxDEV("option",{value:""},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/shared/EmailDialogBox/EmailBody.tsx",lineNumber:329,columnNumber:17},void 0)]},void 0,!0,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/shared/EmailDialogBox/EmailBody.tsx",lineNumber:322,columnNumber:13},void 0),e.jsxDEV("select",{className:"ql-align",defaultValue:"",children:[e.jsxDEV("option",{value:""},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/shared/EmailDialogBox/EmailBody.tsx",lineNumber:332,columnNumber:17},void 0),e.jsxDEV("option",{value:"center"},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/shared/EmailDialogBox/EmailBody.tsx",lineNumber:333,columnNumber:17},void 0),e.jsxDEV("option",{value:"right"},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/shared/EmailDialogBox/EmailBody.tsx",lineNumber:334,columnNumber:17},void 0),e.jsxDEV("option",{value:"justify"},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/shared/EmailDialogBox/EmailBody.tsx",lineNumber:335,columnNumber:17},void 0)]},void 0,!0,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/shared/EmailDialogBox/EmailBody.tsx",lineNumber:331,columnNumber:13},void 0),e.jsxDEV("select",{className:"ql-color",defaultValue:"",children:[e.jsxDEV("option",{value:"#e60000"},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/shared/EmailDialogBox/EmailBody.tsx",lineNumber:338,columnNumber:17},void 0),e.jsxDEV("option",{value:"#ff9900"},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/shared/EmailDialogBox/EmailBody.tsx",lineNumber:338,columnNumber:50},void 0),e.jsxDEV("option",{value:"#ffff00"},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/shared/EmailDialogBox/EmailBody.tsx",lineNumber:338,columnNumber:83},void 0),e.jsxDEV("option",{value:"#008a00"},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/shared/EmailDialogBox/EmailBody.tsx",lineNumber:338,columnNumber:116},void 0),e.jsxDEV("option",{value:"#0066cc"},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/shared/EmailDialogBox/EmailBody.tsx",lineNumber:338,columnNumber:149},void 0),e.jsxDEV("option",{value:"#9933ff"},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/shared/EmailDialogBox/EmailBody.tsx",lineNumber:338,columnNumber:182},void 0),e.jsxDEV("option",{value:"#ffffff"},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/shared/EmailDialogBox/EmailBody.tsx",lineNumber:338,columnNumber:215},void 0),e.jsxDEV("option",{value:"#facccc"},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/shared/EmailDialogBox/EmailBody.tsx",lineNumber:338,columnNumber:248},void 0),e.jsxDEV("option",{value:"#ffebcc"},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/shared/EmailDialogBox/EmailBody.tsx",lineNumber:338,columnNumber:281},void 0),e.jsxDEV("option",{value:"#ffffcc"},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/shared/EmailDialogBox/EmailBody.tsx",lineNumber:338,columnNumber:314},void 0),e.jsxDEV("option",{value:"#cce8cc"},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/shared/EmailDialogBox/EmailBody.tsx",lineNumber:338,columnNumber:347},void 0),e.jsxDEV("option",{value:"#cce0f5"},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/shared/EmailDialogBox/EmailBody.tsx",lineNumber:338,columnNumber:380},void 0),e.jsxDEV("option",{value:"#ebd6ff"},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/shared/EmailDialogBox/EmailBody.tsx",lineNumber:338,columnNumber:413},void 0),e.jsxDEV("option",{value:"#bbbbbb"},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/shared/EmailDialogBox/EmailBody.tsx",lineNumber:338,columnNumber:446},void 0),e.jsxDEV("option",{value:"#f06666"},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/shared/EmailDialogBox/EmailBody.tsx",lineNumber:338,columnNumber:479},void 0),e.jsxDEV("option",{value:"#ffc266"},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/shared/EmailDialogBox/EmailBody.tsx",lineNumber:338,columnNumber:512},void 0),e.jsxDEV("option",{value:"#ffff66"},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/shared/EmailDialogBox/EmailBody.tsx",lineNumber:338,columnNumber:545},void 0),e.jsxDEV("option",{value:"#66b966"},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/shared/EmailDialogBox/EmailBody.tsx",lineNumber:338,columnNumber:578},void 0),e.jsxDEV("option",{value:"#66a3e0"},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/shared/EmailDialogBox/EmailBody.tsx",lineNumber:338,columnNumber:611},void 0),e.jsxDEV("option",{value:"#c285ff"},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/shared/EmailDialogBox/EmailBody.tsx",lineNumber:338,columnNumber:644},void 0),e.jsxDEV("option",{value:"#888888"},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/shared/EmailDialogBox/EmailBody.tsx",lineNumber:338,columnNumber:677},void 0),e.jsxDEV("option",{value:"#a10000"},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/shared/EmailDialogBox/EmailBody.tsx",lineNumber:338,columnNumber:710},void 0),e.jsxDEV("option",{value:"#b26b00"},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/shared/EmailDialogBox/EmailBody.tsx",lineNumber:338,columnNumber:743},void 0),e.jsxDEV("option",{value:"#b2b200"},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/shared/EmailDialogBox/EmailBody.tsx",lineNumber:338,columnNumber:776},void 0),e.jsxDEV("option",{value:"#006100"},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/shared/EmailDialogBox/EmailBody.tsx",lineNumber:338,columnNumber:809},void 0),e.jsxDEV("option",{value:"#0047b2"},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/shared/EmailDialogBox/EmailBody.tsx",lineNumber:338,columnNumber:842},void 0),e.jsxDEV("option",{value:"#6b24b2"},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/shared/EmailDialogBox/EmailBody.tsx",lineNumber:338,columnNumber:875},void 0),e.jsxDEV("option",{value:"#444444"},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/shared/EmailDialogBox/EmailBody.tsx",lineNumber:338,columnNumber:908},void 0),e.jsxDEV("option",{value:"#5c0000"},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/shared/EmailDialogBox/EmailBody.tsx",lineNumber:338,columnNumber:941},void 0),e.jsxDEV("option",{value:"#663d00"},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/shared/EmailDialogBox/EmailBody.tsx",lineNumber:338,columnNumber:974},void 0),e.jsxDEV("option",{value:"#666600"},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/shared/EmailDialogBox/EmailBody.tsx",lineNumber:338,columnNumber:1007},void 0),e.jsxDEV("option",{value:"#003700"},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/shared/EmailDialogBox/EmailBody.tsx",lineNumber:338,columnNumber:1040},void 0),e.jsxDEV("option",{value:"#002966"},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/shared/EmailDialogBox/EmailBody.tsx",lineNumber:338,columnNumber:1073},void 0),e.jsxDEV("option",{value:"#3d1466"},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/shared/EmailDialogBox/EmailBody.tsx",lineNumber:338,columnNumber:1106},void 0),e.jsxDEV("option",{value:""},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/shared/EmailDialogBox/EmailBody.tsx",lineNumber:339,columnNumber:17},void 0)]},void 0,!0,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/shared/EmailDialogBox/EmailBody.tsx",lineNumber:337,columnNumber:13},void 0),e.jsxDEV("select",{className:"ql-background",defaultValue:"",children:[e.jsxDEV("option",{value:"#e60000"},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/shared/EmailDialogBox/EmailBody.tsx",lineNumber:342,columnNumber:17},void 0),e.jsxDEV("option",{value:"#ff9900"},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/shared/EmailDialogBox/EmailBody.tsx",lineNumber:342,columnNumber:50},void 0),e.jsxDEV("option",{value:"#ffff00"},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/shared/EmailDialogBox/EmailBody.tsx",lineNumber:342,columnNumber:83},void 0),e.jsxDEV("option",{value:"#008a00"},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/shared/EmailDialogBox/EmailBody.tsx",lineNumber:342,columnNumber:116},void 0),e.jsxDEV("option",{value:"#0066cc"},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/shared/EmailDialogBox/EmailBody.tsx",lineNumber:342,columnNumber:149},void 0),e.jsxDEV("option",{value:"#9933ff"},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/shared/EmailDialogBox/EmailBody.tsx",lineNumber:342,columnNumber:182},void 0),e.jsxDEV("option",{value:"#ffffff"},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/shared/EmailDialogBox/EmailBody.tsx",lineNumber:342,columnNumber:215},void 0),e.jsxDEV("option",{value:"#facccc"},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/shared/EmailDialogBox/EmailBody.tsx",lineNumber:342,columnNumber:248},void 0),e.jsxDEV("option",{value:"#ffebcc"},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/shared/EmailDialogBox/EmailBody.tsx",lineNumber:342,columnNumber:281},void 0),e.jsxDEV("option",{value:"#ffffcc"},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/shared/EmailDialogBox/EmailBody.tsx",lineNumber:342,columnNumber:314},void 0),e.jsxDEV("option",{value:"#cce8cc"},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/shared/EmailDialogBox/EmailBody.tsx",lineNumber:342,columnNumber:347},void 0),e.jsxDEV("option",{value:"#cce0f5"},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/shared/EmailDialogBox/EmailBody.tsx",lineNumber:342,columnNumber:380},void 0),e.jsxDEV("option",{value:"#ebd6ff"},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/shared/EmailDialogBox/EmailBody.tsx",lineNumber:342,columnNumber:413},void 0),e.jsxDEV("option",{value:"#bbbbbb"},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/shared/EmailDialogBox/EmailBody.tsx",lineNumber:342,columnNumber:446},void 0),e.jsxDEV("option",{value:"#f06666"},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/shared/EmailDialogBox/EmailBody.tsx",lineNumber:342,columnNumber:479},void 0),e.jsxDEV("option",{value:"#ffc266"},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/shared/EmailDialogBox/EmailBody.tsx",lineNumber:342,columnNumber:512},void 0),e.jsxDEV("option",{value:"#ffff66"},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/shared/EmailDialogBox/EmailBody.tsx",lineNumber:342,columnNumber:545},void 0),e.jsxDEV("option",{value:"#66b966"},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/shared/EmailDialogBox/EmailBody.tsx",lineNumber:342,columnNumber:578},void 0),e.jsxDEV("option",{value:"#66a3e0"},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/shared/EmailDialogBox/EmailBody.tsx",lineNumber:342,columnNumber:611},void 0),e.jsxDEV("option",{value:"#c285ff"},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/shared/EmailDialogBox/EmailBody.tsx",lineNumber:342,columnNumber:644},void 0),e.jsxDEV("option",{value:"#888888"},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/shared/EmailDialogBox/EmailBody.tsx",lineNumber:342,columnNumber:677},void 0),e.jsxDEV("option",{value:"#a10000"},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/shared/EmailDialogBox/EmailBody.tsx",lineNumber:342,columnNumber:710},void 0),e.jsxDEV("option",{value:"#b26b00"},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/shared/EmailDialogBox/EmailBody.tsx",lineNumber:342,columnNumber:743},void 0),e.jsxDEV("option",{value:"#b2b200"},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/shared/EmailDialogBox/EmailBody.tsx",lineNumber:342,columnNumber:776},void 0),e.jsxDEV("option",{value:"#006100"},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/shared/EmailDialogBox/EmailBody.tsx",lineNumber:342,columnNumber:809},void 0),e.jsxDEV("option",{value:"#0047b2"},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/shared/EmailDialogBox/EmailBody.tsx",lineNumber:342,columnNumber:842},void 0),e.jsxDEV("option",{value:"#6b24b2"},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/shared/EmailDialogBox/EmailBody.tsx",lineNumber:342,columnNumber:875},void 0),e.jsxDEV("option",{value:"#444444"},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/shared/EmailDialogBox/EmailBody.tsx",lineNumber:342,columnNumber:908},void 0),e.jsxDEV("option",{value:"#5c0000"},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/shared/EmailDialogBox/EmailBody.tsx",lineNumber:342,columnNumber:941},void 0),e.jsxDEV("option",{value:"#663d00"},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/shared/EmailDialogBox/EmailBody.tsx",lineNumber:342,columnNumber:974},void 0),e.jsxDEV("option",{value:"#666600"},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/shared/EmailDialogBox/EmailBody.tsx",lineNumber:342,columnNumber:1007},void 0),e.jsxDEV("option",{value:"#003700"},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/shared/EmailDialogBox/EmailBody.tsx",lineNumber:342,columnNumber:1040},void 0),e.jsxDEV("option",{value:"#002966"},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/shared/EmailDialogBox/EmailBody.tsx",lineNumber:342,columnNumber:1073},void 0),e.jsxDEV("option",{value:"#3d1466"},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/shared/EmailDialogBox/EmailBody.tsx",lineNumber:342,columnNumber:1106},void 0),e.jsxDEV("option",{value:""},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/shared/EmailDialogBox/EmailBody.tsx",lineNumber:343,columnNumber:17},void 0)]},void 0,!0,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/shared/EmailDialogBox/EmailBody.tsx",lineNumber:341,columnNumber:13},void 0),e.jsxDEV("button",{type:"button",className:"ql-list",value:"ordered"},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/shared/EmailDialogBox/EmailBody.tsx",lineNumber:350,columnNumber:13},void 0),e.jsxDEV("button",{type:"button",className:"ql-list",value:"bullet"},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/shared/EmailDialogBox/EmailBody.tsx",lineNumber:351,columnNumber:13},void 0),e.jsxDEV("button",{type:"button",className:"ql-indent",value:"-1"},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/shared/EmailDialogBox/EmailBody.tsx",lineNumber:352,columnNumber:13},void 0),e.jsxDEV("button",{type:"button",className:"ql-indent",value:"+1"},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/shared/EmailDialogBox/EmailBody.tsx",lineNumber:353,columnNumber:13},void 0),e.jsxDEV("button",{type:"button",className:"ql-clean"},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/shared/EmailDialogBox/EmailBody.tsx",lineNumber:358,columnNumber:13},void 0),a?e.jsxDEV("div",{children:e.jsxDEV(M,{onInsertField:g},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/shared/EmailDialogBox/EmailBody.tsx",lineNumber:382,columnNumber:25},void 0)},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/shared/EmailDialogBox/EmailBody.tsx",lineNumber:381,columnNumber:21},void 0):null,q?e.jsxDEV("div",{children:e.jsxDEV(G,{onInsertField:g},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/shared/EmailDialogBox/EmailBody.tsx",lineNumber:411,columnNumber:25},void 0)},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/shared/EmailDialogBox/EmailBody.tsx",lineNumber:410,columnNumber:21},void 0):null,l?e.jsxDEV("div",{children:[e.jsxDEV(S,{onClick:u,disabled:!h||!B,title:"Save as Template",children:e.jsxDEV(W,{sx:{color:"var(--c-neutral-70)"}},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/shared/EmailDialogBox/EmailBody.tsx",lineNumber:419,columnNumber:29},void 0)},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/shared/EmailDialogBox/EmailBody.tsx",lineNumber:418,columnNumber:25},void 0),e.jsxDEV(C,{id:"save-popover",open:b,anchorEl:y,onClose:f,anchorOrigin:{vertical:"top",horizontal:"left"},transformOrigin:{vertical:"bottom",horizontal:"right"},children:[e.jsxDEV(z,{sx:{m:1},children:"Template Name:"},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/shared/EmailDialogBox/EmailBody.tsx",lineNumber:435,columnNumber:29},void 0),e.jsxDEV(Q,{id:"template-name",size:"small",name:"template-name",sx:{width:"calc(100% - 32px)",margin:"0 1rem"},onChange:N},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/shared/EmailDialogBox/EmailBody.tsx",lineNumber:436,columnNumber:29},void 0),e.jsxDEV(F,{color:"primary",disabled:!(r!==""&&r.length>3),variant:"contained",type:"submit",className:"mr-2",size:"small",sx:{m:2},onClick:k,children:"Save"},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/shared/EmailDialogBox/EmailBody.tsx",lineNumber:443,columnNumber:29},void 0)]},void 0,!0,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/shared/EmailDialogBox/EmailBody.tsx",lineNumber:421,columnNumber:25},void 0)]},void 0,!0,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/shared/EmailDialogBox/EmailBody.tsx",lineNumber:417,columnNumber:21},void 0):""]},void 0,!0,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/shared/EmailDialogBox/EmailBody.tsx",lineNumber:309,columnNumber:9},void 0)},n=class n extends V.Component{constructor(l){super(l);t(this,"editor");t(this,"open");t(this,"handlePopoverOpen",l=>{this.setState({anchorEl:l.currentTarget})});t(this,"handlePopoverTempOpen",l=>{this.setState({templateName:""}),this.setState({tempAnchorEl:l.currentTarget})});t(this,"handlePopoverClose",()=>{this.setState({anchorEl:null}),this.setState({tempAnchorEl:null}),this.setState({templateName:""})});t(this,"handleTemplateName",l=>{this.setState({templateName:l.target.value})});this.state={editorHtml:"",anchorEl:null,tempAnchorEl:null,templateName:""},this.handleChange=this.handleChange.bind(this),this.editor=V.createRef(),this.handlePopoverClose=this.handlePopoverClose.bind(this),this.handlePopoverOpen=this.handlePopoverOpen.bind(this),this.handleTemplateName=this.handleTemplateName.bind(this)}handleChange(l){this.setState({editorHtml:l})}render(){const l=!!this.state.anchorEl,i=!!this.state.tempAnchorEl;return e.jsxDEV("div",{className:"text-editor",children:[e.jsxDEV(J,{className:`toolbar ${this.props.toolbarId}`,toolbarId:this.props.toolbarId,mentions:this.props.mentions,saveTemplate:this.props.saveTemplate,open:l,anchorEl:this.state.anchorEl,handlePopoverOpen:this.handlePopoverOpen,tempOpen:i,tempAnchorEl:this.state.tempAnchorEl,handlePopoverTempOpen:this.handlePopoverTempOpen,handlePopoverClose:this.handlePopoverClose,handleTemplateName:this.handleTemplateName,templateName:this.state.templateName,editorHtml:this.editor,value:this.props.editorHtml,handleChange:this.props.handleChange,placeholder:this.props.placeholder!==void 0?this.props.placeholder:"Email Body",mergeField:T,closePopOver:this.handlePopoverClose,subject:this.props.subject,policyPlaceholder:this.props.policyPlaceholder},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/shared/EmailDialogBox/EmailBody.tsx",lineNumber:555,columnNumber:17},this),e.jsxDEV(L,{id:this.props.id,ref:this.editor,value:this.props.editorHtml,onChange:d=>{this.props.handleChange(d)},placeholder:this.props.placeholder!==void 0?this.props.placeholder:"Email Body",modules:{toolbar:{container:`#${this.props.toolbarId}`,handlers:{mergeField:T}}},onKeyUp:()=>{this.editor.current.editor},formats:n.formats,theme:"snow"},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/shared/EmailDialogBox/EmailBody.tsx",lineNumber:556,columnNumber:17},this)]},void 0,!0,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/shared/EmailDialogBox/EmailBody.tsx",lineNumber:553,columnNumber:13},this)}};t(n,"modules"),t(n,"formats"),t(n,"propTypes");let E=n;E.formats=["header","font","size","bold","italic","underline","strike","blockquote","list","indent","align","color","background","link","image","color"];E.propTypes={placeholder:$.string};export{E as default};
