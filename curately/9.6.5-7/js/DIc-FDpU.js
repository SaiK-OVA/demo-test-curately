import{R as c,r as l,L as r,A as p,k as t,D as f,O as D,n as x,o as E,S as h,T as N,I as S}from"./DAuuuMsE.js";import{I as v}from"./Cg3Jgvqv.js";import{M as P}from"./qgPoCDZV.js";import{C as g}from"./Cd_yc1BD.js";import{C as B}from"./9WUULBRn.js";import H from"./CW7hraW0.js";import{D as s}from"./Cg41riQw.js";import{D as j}from"./Br0xRRVu.js";import{D as V}from"./CyNs35Qt.js";import"./DVyrZ3Lu.js";import"./BreDWgEm.js";import"./DlTMcna4.js";import"./DwmmMyHW.js";import"./DA-mmMmo.js";import"./w5-nO31Y.js";import"./DistCVVm.js";import"./XBS2c42B.js";import"./BestnZaX.js";import"./OPHguh9D.js";import"./C_IKUwSv.js";import"./tW4e0zz_.js";import"./Dsukr_f2.js";import"./IOI02mfF.js";import"./Ez4yizbq.js";import"./ZuCM0PYB.js";import"./CGk11wqi.js";import"./D2Y9uqkR.js";import"./BZPAOVTJ.js";import"./BqtMM88J.js";import"./DPDHQPP4.js";import"./zQ0bN4E_.js";import"./CDmetmmn.js";import"./DbsmdDnd.js";import"./C4JXEfII.js";import"./1Bak8biM.js";import"./B7U4EVWr.js";import"./JyAhcbJl.js";import"./B7IUApoB.js";import"./7BYfJRlb.js";import"./D1ftmOk2.js";import"./_sSW2cUy.js";import"./BayHs3N0.js";import"./CPvg8iC8.js";const xe=()=>{const[u,C]=c.useState(!1),[o,m]=c.useState(""),[a,b]=l.useState({consumedEmailCredits:0,consumedProfileCredits:0,consumedSmsCredits:0,daysLeft:0,totalEmailCredits:0,totalProfileCredits:0,totalSmsCredits:0,profilePercentage:0,startDate:"",expireDate:""}),y=new BroadcastChannel("checkConsumedProfileCredits");l.useEffect(()=>{y.onmessage=e=>{e.data.checkCreditScore&&r.getvalue("recrId")&&n()}},[]),l.useEffect(()=>{n()},[]);const n=()=>{p.getById("admin",`getCredits/${r.getvalue("clientId")}`,r.getvalue("recrId")).then(e=>{e.data.Success&&(b({consumedEmailCredits:e.data.consumedEmailCredits,consumedProfileCredits:e.data.consumedProfileCredits,consumedSmsCredits:e.data.paymentType===1||e.data.paymentType===2?0:e.data.consumedSmsCredits,daysLeft:e.data.daysLeft,totalEmailCredits:e.data.totalEmailCredits,totalProfileCredits:e.data.totalProfileCredits,totalSmsCredits:e.data.paymentType===1||e.data.paymentType===2?0:e.data.totalSmsCredits,profilePercentage:e.data.consumedProfileCredits/e.data.totalProfileCredits*100,startDate:e.data.startDate?s.fromFormat(e.data.startDate.substring(0,19),"yyyy-MM-dd hh:mm:ss").toFormat("MM/dd/yyyy "):"",expireDate:e.data.expireDate?s.fromFormat(e.data.expireDate.substring(0,19),"yyyy-MM-dd hh:mm:ss").toFormat("MM/dd/yyyy "):""}),localStorage.setItem(`credits_${r.getvalue("recrId")}`,JSON.stringify({consumedEmailCredits:e.data.consumedEmailCredits,consumedProfileCredits:e.data.consumedProfileCredits,consumedSmsCredits:e.data.paymentType===1||e.data.paymentType===2?0:e.data.consumedSmsCredits,daysLeft:e.data.daysLeft,totalEmailCredits:e.data.totalEmailCredits,totalProfileCredits:e.data.totalProfileCredits,totalSmsCredits:e.data.paymentType===1||e.data.paymentType===2?0:e.data.totalSmsCredits,profilePercentage:e.data.consumedProfileCredits/e.data.totalProfileCredits*100,isPackageEmailValidity:Number(e.data.totalEmailCredits)?Number(e.data.totalEmailCredits)>Number(e.data.consumedEmailCredits):!1,isPackagePhoneValidity:e.data.paymentType!==1&&e.data.paymentType!==2&&Number(e.data.totalSmsCredits)?!!(Number(e.data.totalSmsCredits)-Number(e.data.consumedSmsCredits)):!1,startDate:e.data.startDate?s.fromFormat(e.data.startDate.substring(0,19),"yyyy-MM-dd hh:mm:ss").toFormat("MM/dd/yyyy "):"",expireDate:e.data.expireDate?s.fromFormat(e.data.expireDate.substring(0,19),"yyyy-MM-dd hh:mm:ss").toFormat("MM/dd/yyyy "):""})))})},i=()=>{C(!1)},d=()=>{m("")};return t.jsxDEV("div",{id:"ChromeExtension_Header",children:[t.jsxDEV("div",{className:`progress_bar ${a.consumedProfileCredits?"cursor-pointer":""}`,onClick:()=>{a.consumedProfileCredits&&m("email")},children:t.jsxDEV("div",{className:"progress_bar_sub",children:[t.jsxDEV(P,{className:"mr-2"},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Home/ChromeExtensionDashboard/SubComponents/ChromeExtensionStatusBar.tsx",lineNumber:260,columnNumber:11},void 0),t.jsxDEV("div",{children:[t.jsxDEV("span",{className:a.consumedProfileCredits?"c-skyblue fw-6":"",children:a.consumedProfileCredits},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Home/ChromeExtensionDashboard/SubComponents/ChromeExtensionStatusBar.tsx",lineNumber:261,columnNumber:16},void 0),"/",a.totalProfileCredits]},void 0,!0,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Home/ChromeExtensionDashboard/SubComponents/ChromeExtensionStatusBar.tsx",lineNumber:261,columnNumber:11},void 0)]},void 0,!0,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Home/ChromeExtensionDashboard/SubComponents/ChromeExtensionStatusBar.tsx",lineNumber:259,columnNumber:9},void 0)},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Home/ChromeExtensionDashboard/SubComponents/ChromeExtensionStatusBar.tsx",lineNumber:254,columnNumber:7},void 0),a.totalSmsCredits?t.jsxDEV("div",{className:`progress_bar ${a.consumedSmsCredits?"cursor-pointer":""}`,onClick:()=>{a.consumedSmsCredits&&m("phone")},children:t.jsxDEV("div",{className:"progress_bar_sub",children:[t.jsxDEV(g,{className:"mr-2"},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Home/ChromeExtensionDashboard/SubComponents/ChromeExtensionStatusBar.tsx",lineNumber:274,columnNumber:15},void 0),t.jsxDEV("div",{children:[t.jsxDEV("span",{className:a.consumedSmsCredits?"c-skyblue fw-6":"",children:a.consumedSmsCredits},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Home/ChromeExtensionDashboard/SubComponents/ChromeExtensionStatusBar.tsx",lineNumber:275,columnNumber:20},void 0),"/",a.totalSmsCredits]},void 0,!0,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Home/ChromeExtensionDashboard/SubComponents/ChromeExtensionStatusBar.tsx",lineNumber:275,columnNumber:15},void 0)]},void 0,!0,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Home/ChromeExtensionDashboard/SubComponents/ChromeExtensionStatusBar.tsx",lineNumber:273,columnNumber:13},void 0)},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Home/ChromeExtensionDashboard/SubComponents/ChromeExtensionStatusBar.tsx",lineNumber:268,columnNumber:11},void 0):null,u&&t.jsxDEV(f,{open:u,onClose:i,children:[t.jsxDEV(j,{id:"alert-dialog-title",children:t.jsxDEV(D,{container:!0,direction:"row",justifyContent:"space-between",alignItems:"center",children:[t.jsxDEV("span",{className:"addHeader",children:"Invite Team Members"},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Home/ChromeExtensionDashboard/SubComponents/ChromeExtensionStatusBar.tsx",lineNumber:329,columnNumber:15},void 0),t.jsxDEV(x,{onClick:i},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Home/ChromeExtensionDashboard/SubComponents/ChromeExtensionStatusBar.tsx",lineNumber:332,columnNumber:15},void 0)]},void 0,!0,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Home/ChromeExtensionDashboard/SubComponents/ChromeExtensionStatusBar.tsx",lineNumber:328,columnNumber:13},void 0)},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Home/ChromeExtensionDashboard/SubComponents/ChromeExtensionStatusBar.tsx",lineNumber:327,columnNumber:11},void 0),t.jsxDEV(E,{sx:{minWidth:500},className:"pt-4",children:t.jsxDEV(v,{closeInvitePopup:e=>{e&&n(),i()}},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Home/ChromeExtensionDashboard/SubComponents/ChromeExtensionStatusBar.tsx",lineNumber:337,columnNumber:13},void 0)},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Home/ChromeExtensionDashboard/SubComponents/ChromeExtensionStatusBar.tsx",lineNumber:336,columnNumber:11},void 0)]},void 0,!0,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Home/ChromeExtensionDashboard/SubComponents/ChromeExtensionStatusBar.tsx",lineNumber:326,columnNumber:10},void 0),o?t.jsxDEV(V,{open:!!o,sx:{zIndex:999,height:"100vh"},onClose:()=>{d()},anchor:"right",id:"creditsPopup",children:t.jsxDEV(h,{width:"1100px",minHeight:"100vh",position:"relative",children:[t.jsxDEV(h,{width:"1100px",direction:"row",justifyContent:"space-between",alignItems:"center",className:"creditsPopupHeader",children:[t.jsxDEV(N,{variant:"h6",className:" tt-capital",children:[o," - Credits"]},void 0,!0,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Home/ChromeExtensionDashboard/SubComponents/ChromeExtensionStatusBar.tsx",lineNumber:411,columnNumber:17},void 0),t.jsxDEV(S,{size:"small",onClick:()=>{d()},children:t.jsxDEV(B,{},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Home/ChromeExtensionDashboard/SubComponents/ChromeExtensionStatusBar.tsx",lineNumber:412,columnNumber:82},void 0)},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Home/ChromeExtensionDashboard/SubComponents/ChromeExtensionStatusBar.tsx",lineNumber:412,columnNumber:17},void 0)]},void 0,!0,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Home/ChromeExtensionDashboard/SubComponents/ChromeExtensionStatusBar.tsx",lineNumber:410,columnNumber:15},void 0),t.jsxDEV("div",{className:"creditsBody",children:t.jsxDEV(H,{type:o,closeInvitePopup:()=>{d()}},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Home/ChromeExtensionDashboard/SubComponents/ChromeExtensionStatusBar.tsx",lineNumber:415,columnNumber:17},void 0)},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Home/ChromeExtensionDashboard/SubComponents/ChromeExtensionStatusBar.tsx",lineNumber:414,columnNumber:15},void 0)]},void 0,!0,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Home/ChromeExtensionDashboard/SubComponents/ChromeExtensionStatusBar.tsx",lineNumber:409,columnNumber:13},void 0)},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Home/ChromeExtensionDashboard/SubComponents/ChromeExtensionStatusBar.tsx",lineNumber:408,columnNumber:11},void 0):null]},void 0,!0,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Home/ChromeExtensionDashboard/SubComponents/ChromeExtensionStatusBar.tsx",lineNumber:253,columnNumber:6},void 0)};export{xe as default};
