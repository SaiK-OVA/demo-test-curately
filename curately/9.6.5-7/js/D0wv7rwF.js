import{Y as B,al as L,r,k as e,O as m,T as i,B as c,l as n,I as u,W as P,A as M,L as O}from"./DAuuuMsE.js";import{E as T}from"./CZecArO6.js";import{C as A,L as F}from"./DomlXlz8.js";import{D as R}from"./Cg41riQw.js";import{e as W}from"./w5-nO31Y.js";import{e as d,a as f}from"./BZPAOVTJ.js";import{A as z}from"./DKIh428S.js";import{L as y}from"./CyNs35Qt.js";import{M as G}from"./jdB7QyXR.js";import{S as H}from"./uFojjQjd.js";import{C as Y}from"./Doaqw506.js";import{S as q}from"./ef7hfbYP.js";import"./CNOiQri2.js";import"./rzLa6I96.js";import"./D1ftmOk2.js";import"./BestnZaX.js";import"./OPHguh9D.js";import"./DistCVVm.js";import"./BqtMM88J.js";import"./IOI02mfF.js";import"./DbsmdDnd.js";import"./BayHs3N0.js";import"./DwmmMyHW.js";import"./7FOaSWX5.js";import"./rYcqsWUw.js";import"./Bgs2xNBT.js";import"./DA-mmMmo.js";import"./XBS2c42B.js";import"./BfUNlM_N.js";import"./CBxlKsSv.js";import"./DgQtaCo8.js";import"./DVyrZ3Lu.js";import"./BBk0QSpz.js";import"./1RB4_3m-.js";import"./tW4e0zz_.js";import"./Dsukr_f2.js";import"./Br0xRRVu.js";import"./C_IKUwSv.js";import"./7BYfJRlb.js";import"./_sSW2cUy.js";import"./CPvg8iC8.js";const Te=()=>{let h=B();const{accountId:b}=L(),[p,x]=r.useState(!1),[l,E]=r.useState([]),[J,g]=r.useState(!1),[N,S]=r.useState(!0),[K,Q]=r.useState(0),[s,D]=r.useState(1),[o,v]=r.useState(0),j=()=>{g(!0)},V=()=>{E(l),S(!0)},w=()=>{D(t=>Math.max(t-1,1))},C=()=>{D(t=>t<o?t+1:t)},I=()=>{const t={accountId:b,page:s,pageSize:10};P(M.getByParams(193,"/Curately/EmailEngine/getMessages.jsp",t).then(a=>{a.data&&a.data.messages&&(E(a.data.messages),v(a.data.pages))}).catch(a=>console.error("Failed to fetch inbox emails:",a)))};r.useEffect(()=>{I()},[b,s]);const k=()=>{h("/"+O.getvalue("clientName")+"/settings/email")};return e.jsxDEV(e.Fragment,{children:[e.jsxDEV(m,{direction:"row",className:"customCard px-4 py-2",justifyContent:"space-between",alignItems:"center",display:"flex",sx:{minHeight:"auto !important"},children:[e.jsxDEV(i,{variant:"h6",className:"header",children:"Curately Mail"},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/Email/Email.tsx",lineNumber:115,columnNumber:17},void 0),e.jsxDEV(c,{variant:"contained",onClick:k,children:"Back"},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/Email/Email.tsx",lineNumber:118,columnNumber:17},void 0)]},void 0,!0,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/Email/Email.tsx",lineNumber:107,columnNumber:13},void 0),e.jsxDEV("div",{style:{display:"flex",paddingTop:"10px"},children:[e.jsxDEV("div",{className:"sidebar",style:{width:"240px",height:"100vh",position:"fixed",top:"110px",left:"57px",backgroundColor:"#f4f4f4",padding:"20px"},children:e.jsxDEV(W,{component:"nav",children:[e.jsxDEV(d,{onClick:()=>x(!0),sx:{cursor:"pointer",backgroundColor:"#757ce8",color:"white",borderRadius:"5px"},children:[e.jsxDEV(f,{children:e.jsxDEV(z,{style:{color:"white"}},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/Email/Email.tsx",lineNumber:126,columnNumber:33},void 0)},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/Email/Email.tsx",lineNumber:125,columnNumber:29},void 0),e.jsxDEV(y,{primary:"Compose"},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/Email/Email.tsx",lineNumber:128,columnNumber:29},void 0)]},void 0,!0,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/Email/Email.tsx",lineNumber:124,columnNumber:25},void 0),e.jsxDEV(d,{sx:{cursor:"pointer"},onClick:V,children:[e.jsxDEV(f,{children:e.jsxDEV(G,{},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/Email/Email.tsx",lineNumber:132,columnNumber:33},void 0)},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/Email/Email.tsx",lineNumber:131,columnNumber:29},void 0),e.jsxDEV(y,{primary:"Inbox"},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/Email/Email.tsx",lineNumber:134,columnNumber:29},void 0)]},void 0,!0,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/Email/Email.tsx",lineNumber:130,columnNumber:25},void 0),e.jsxDEV(d,{sx:{cursor:"pointer"},onClick:j,children:[e.jsxDEV(f,{children:e.jsxDEV(H,{},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/Email/Email.tsx",lineNumber:138,columnNumber:33},void 0)},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/Email/Email.tsx",lineNumber:137,columnNumber:29},void 0),e.jsxDEV(y,{primary:"Sent"},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/Email/Email.tsx",lineNumber:140,columnNumber:29},void 0)]},void 0,!0,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/Email/Email.tsx",lineNumber:136,columnNumber:25},void 0)]},void 0,!0,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/Email/Email.tsx",lineNumber:123,columnNumber:21},void 0)},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/Email/Email.tsx",lineNumber:122,columnNumber:17},void 0),e.jsxDEV(m,{children:[e.jsxDEV(n,{style:{marginLeft:"240px",padding:"0px",overflow:"auto",height:"calc(100vh - 195px)",width:"calc(100vw - 308px)"},children:N&&(l==null?void 0:l.length)>0?l.map(t=>{var a;return e.jsxDEV(e.Fragment,{children:e.jsxDEV(Y,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"8px 16px",backgroundColor:t.unseen?"#ffffff":"#f0f0f0",boxShadow:"none",borderBottom:"1px solid #e0e0e0","&:hover":{backgroundColor:"#f7f7f7"},color:"#202124",fontWeight:"bold",marginBottom:"8px"},children:[e.jsxDEV(n,{sx:{display:"flex",alignItems:"center",flex:1},children:[e.jsxDEV(u,{size:"large",sx:{marginRight:"16px"},children:e.jsxDEV(A,{},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/Email/Email.tsx",lineNumber:195,columnNumber:49},void 0)},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/Email/Email.tsx",lineNumber:194,columnNumber:45},void 0),e.jsxDEV(u,{children:e.jsxDEV(q,{},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/Email/Email.tsx",lineNumber:198,columnNumber:49},void 0)},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/Email/Email.tsx",lineNumber:197,columnNumber:45},void 0),e.jsxDEV(u,{children:e.jsxDEV(F,{},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/Email/Email.tsx",lineNumber:201,columnNumber:49},void 0)},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/Email/Email.tsx",lineNumber:200,columnNumber:45},void 0),e.jsxDEV(i,{variant:"body1",sx:{minWidth:0,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:(a=t==null?void 0:t.from)==null?void 0:a.name},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/Email/Email.tsx",lineNumber:203,columnNumber:45},void 0)]},void 0,!0,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/Email/Email.tsx",lineNumber:193,columnNumber:41},void 0),e.jsxDEV(n,{sx:{flex:2,textAlign:"left",overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"},children:e.jsxDEV(i,{variant:"subtitle1",children:t.subject},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/Email/Email.tsx",lineNumber:209,columnNumber:45},void 0)},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/Email/Email.tsx",lineNumber:208,columnNumber:41},void 0),e.jsxDEV(i,{variant:"caption",sx:{flex:0,whiteSpace:"nowrap"},children:R.fromISO(t.date).toFormat("MM/dd/yyyy hh:mm:ss a")},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/Email/Email.tsx",lineNumber:212,columnNumber:41},void 0)]},void 0,!0,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/Email/Email.tsx",lineNumber:178,columnNumber:37},void 0)},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/Email/Email.tsx",lineNumber:155,columnNumber:33},void 0)}):null},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/Email/Email.tsx",lineNumber:145,columnNumber:21},void 0),N&&(l==null?void 0:l.length)>0&&e.jsxDEV(n,{sx:{display:"flex",justifyContent:"center",p:2,height:"57px"},children:[e.jsxDEV(c,{onClick:w,disabled:s<=1,children:"Previous"},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/Email/Email.tsx",lineNumber:224,columnNumber:29},void 0),e.jsxDEV(i,{sx:{margin:"0 15px"},children:["Page ",s," of ",o]},void 0,!0,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/Email/Email.tsx",lineNumber:225,columnNumber:29},void 0),e.jsxDEV(c,{onClick:C,disabled:s>=o,children:"Next"},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/Email/Email.tsx",lineNumber:226,columnNumber:29},void 0)]},void 0,!0,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/Email/Email.tsx",lineNumber:223,columnNumber:25},void 0)]},void 0,!0,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/Email/Email.tsx",lineNumber:144,columnNumber:17},void 0),e.jsxDEV(m,{children:p&&e.jsxDEV(T,{dialogOpen:p,onClose:()=>x(!1),name:"",emailId:""},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/Email/Email.tsx",lineNumber:231,columnNumber:38},void 0)},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/Email/Email.tsx",lineNumber:230,columnNumber:17},void 0)]},void 0,!0,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/Email/Email.tsx",lineNumber:120,columnNumber:13},void 0)]},void 0,!0,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/Email/Email.tsx",lineNumber:106,columnNumber:9},void 0)};export{Te as default};
