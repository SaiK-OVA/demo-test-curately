const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./DDfWvF-M.js","./DAuuuMsE.js","../css/CSTzF9n8.css","./D4n8YfQR.js","./C2haB5WN.js","./C148XJoK.js","./Ez4yizbq.js","./ZuCM0PYB.js","./CGk11wqi.js","./BestnZaX.js","./w5-nO31Y.js","./D2Y9uqkR.js","./BZPAOVTJ.js","./OPHguh9D.js","./DistCVVm.js","./BqtMM88J.js","./DVyrZ3Lu.js","./DPDHQPP4.js","./zQ0bN4E_.js","./CDmetmmn.js","./DbsmdDnd.js","./C4JXEfII.js","./Dsukr_f2.js","./1Bak8biM.js","./B7U4EVWr.js","./Br0xRRVu.js","./C_IKUwSv.js","./JyAhcbJl.js","./DA-mmMmo.js","./XBS2c42B.js","./Bgs2xNBT.js","./CyNs35Qt.js","./Cg41riQw.js","./IOI02mfF.js","../css/fmgS_5i7.css","./7BYfJRlb.js","./D1ftmOk2.js","./DwmmMyHW.js","./_sSW2cUy.js","./BayHs3N0.js","./CPvg8iC8.js","../css/DRJnRSIa.css","./D7NzemaK.js","./DLuJbPAR.js","./tW4e0zz_.js","./68QKccnG.js","./7NGm2I1O.js","./B9XnAqVK.js","./Ds3cWBsm.js","./B7IUApoB.js","../css/B1PJAlG9.css","./C6Oxoper.js","../css/db_sNjBT.css","../css/D4m1LViW.css","./GoNzULjh.js","./BK4Vpw6E.js","./BUFmoVTz.js","./DJ7tdh3P.js","./B-I026VF.js","./Doaqw506.js","./DkxZctDH.js","./D0ZL01oz.js","../css/CMb3PloN.css"])))=>i.map(i=>d[i]);
import{r as t,Y as T,A as d,L as u,k as e,O as M,T as O,B as F,l as z,b1 as B,W as L,a5 as W,a6 as o,a7 as J,R as b,C as l,a8 as $,a9 as N}from"./DAuuuMsE.js";import{M as G}from"./Ez4yizbq.js";import{M as K}from"./7NGm2I1O.js";import{D as U}from"./B9XnAqVK.js";import{A as Y}from"./Ds3cWBsm.js";import{S as q}from"./68QKccnG.js";import{l as V}from"./Cg41riQw.js";import{C as H}from"./B7IUApoB.js";import{T as E}from"./DbsmdDnd.js";import Q from"./C6Oxoper.js";const X=[{groupby:[],columns:[],filters:[{filterLogic:"1",filterdetails:[{id:"1",module_id:"Jobs",dataFieldName:"CreateDate",columnType:"Date",compare:">",condition:"AND",displayName:"CreateDate",compareValues:["2024-07-01"]}]}],details:[{name:"Jobs Report",outputformat:"View Data on Screen",description:"Jobs report"}]}],pe=[{name:"Substring",value:"substring",type:""},{name:"Left",value:"left",type:""},{name:"Right",value:"right",type:""},{name:"US Week",value:"US_Week",type:"Date"},{name:"Day of Week",value:"Day_of_Week",type:"Date"},{name:"Month",value:"Month",type:"Date"},{name:"Month Name",value:"Month_Name",type:"Date"},{name:"Quater",value:"Quater",type:"Date"},{name:"Year",value:"Year",type:"Date"},{name:"Date",value:"Date",type:"Date"},{name:"Day",value:"Day",type:"Date"},{name:"Time",value:"Time",type:"Date"}],fe=[{name:"max",value:"Max",type:"Number"},{name:"min",value:"Min",type:"Number"},{name:"Disitnct Count",value:"Disitnct Count",type:""},{name:"sum",value:"Sum",type:"Number"},{name:"avg",value:"Average",type:"Number"}],Z=()=>{const[c,C]=t.useState([]),[p,i]=t.useState({}),[s,m]=t.useState({pageIndex:0,pageSize:25}),[f,h]=t.useState(0),[a,x]=t.useState([]),w=T(),v=t.useRef(!0),y=t.useCallback(V.debounce(async()=>{try{const n=(await d.getById("admin","listCustomReport",u.getvalue("clientId"))).data;x(n.list),h(n.length)}catch(r){console.error("Error fetching contact details:",r)}},500),[]);t.useEffect(()=>(v.current?v.current=!1:y(),()=>{y.cancel()}),[y]);const _=r=>{L(d.deleteById("admin","deleteCustomReportById",r+"/"+u.getvalue("clientId")).then(n=>{x(R=>R.filter(P=>P.id!==r)),h(R=>R-1)}).catch(n=>{console.error("Error deleting report:",n)}))},I=r=>{w(`/${u.getvalue("clientName")}/reports/custom/edit/${r}`)},k=[{accessorKey:"id",header:"ID"},{accessorKey:"name",header:"Name"},{accessorKey:"isActive",header:"Status",Cell:({cell:r})=>e.jsxDEV("span",{children:r.getValue()?"Active":"Inactive"},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Reports/CreateReport/ListReport/ListReport.tsx",lineNumber:95,columnNumber:17},void 0)},{accessorKey:"actions",header:"Actions",enableSorting:!1,Cell:({row:r})=>e.jsxDEV("div",{style:{display:"flex",alignItems:"center"},children:[e.jsxDEV(E,{title:"Edit",children:e.jsxDEV("a",{href:`#${u.getvalue("clientName")}/reports/custom/edit/${r.original.id}`,onClick:()=>I(r.original.id),children:e.jsxDEV(K,{sx:{color:"#7f7f7f",cursor:"pointer"}},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Reports/CreateReport/ListReport/ListReport.tsx",lineNumber:106,columnNumber:29},void 0)},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Reports/CreateReport/ListReport/ListReport.tsx",lineNumber:105,columnNumber:25},void 0)},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Reports/CreateReport/ListReport/ListReport.tsx",lineNumber:104,columnNumber:21},void 0),e.jsxDEV(E,{title:"Delete",children:e.jsxDEV(U,{sx:{color:"#7f7f7f",cursor:"pointer",marginLeft:"5px"},onClick:()=>{B("Are you sure you want to delete this report?",()=>{_(r.original.id)},"warning")}},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Reports/CreateReport/ListReport/ListReport.tsx",lineNumber:112,columnNumber:25},void 0)},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Reports/CreateReport/ListReport/ListReport.tsx",lineNumber:111,columnNumber:21},void 0)]},void 0,!0,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Reports/CreateReport/ListReport/ListReport.tsx",lineNumber:103,columnNumber:17},void 0)}],A=()=>{window.location.href=`#/${u.getvalue("clientName")}/reports/custom/new`,window.location.reload(),g(4207)},g=r=>{d.saveAuditLog(r)};return t.useEffect(()=>{g(4206)},[]),e.jsxDEV(e.Fragment,{children:e.jsxDEV("div",{className:"p-5",id:"CustomReportList",children:[e.jsxDEV(M,{container:!0,direction:"row",justifyContent:"space-between",alignItems:"center",className:"customCard px-4 py-2 mb-2",sx:{minHeight:"auto !important"},children:[e.jsxDEV(O,{variant:"h6",className:"header",children:" Custom Report "},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Reports/CreateReport/ListReport/ListReport.tsx",lineNumber:151,columnNumber:21},void 0),e.jsxDEV("div",{className:"d-flex",children:e.jsxDEV(F,{variant:"contained",color:"primary",startIcon:e.jsxDEV(Y,{},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Reports/CreateReport/ListReport/ListReport.tsx",lineNumber:159,columnNumber:40},void 0),onClick:A,children:"Add New Custom Report"},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Reports/CreateReport/ListReport/ListReport.tsx",lineNumber:156,columnNumber:25},void 0)},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Reports/CreateReport/ListReport/ListReport.tsx",lineNumber:152,columnNumber:21},void 0)]},void 0,!0,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Reports/CreateReport/ListReport/ListReport.tsx",lineNumber:143,columnNumber:17},void 0),e.jsxDEV("div",{className:"mt-3",children:e.jsxDEV(z,{sx:{width:"100%"},className:"MRTableCustom p-0",children:e.jsxDEV(G,{columns:k,enableRowSelection:!1,data:a,onRowSelectionChange:i,state:{rowSelection:p,pagination:s},enablePinning:!0,enableStickyHeader:!0,initialState:{columnPinning:{left:["mrt-row-select","id","name"]},density:"compact",showGlobalFilter:!1},enableDensityToggle:!1,enableFullScreenToggle:!1,enableColumnResizing:!0,enableFilters:!1,enableGlobalFilterModes:!0,columnResizeMode:"onChange",onPaginationChange:m,getRowId:r=>r.id,icons:{ArrowDownwardIcon:r=>e.jsxDEV(q,{...r},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Reports/CreateReport/ListReport/ListReport.tsx",lineNumber:190,columnNumber:68},void 0)},rowCount:f,muiPaginationProps:{rowsPerPageOptions:[25],showFirstButton:!1,showLastButton:!1,SelectProps:{style:{display:"none"}}},renderBottomToolbarCustomActions:()=>e.jsxDEV(H,{page:s.pageIndex,rowsPerPage:10,rowCount:a!=null&&a.length?a==null?void 0:a.length:0,onChangePage:r=>m({...s,pageIndex:r,pageSize:10}),showCount:!1},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Reports/CreateReport/ListReport/ListReport.tsx",lineNumber:202,columnNumber:33},void 0)},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Reports/CreateReport/ListReport/ListReport.tsx",lineNumber:168,columnNumber:25},void 0)},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Reports/CreateReport/ListReport/ListReport.tsx",lineNumber:167,columnNumber:21},void 0)},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Reports/CreateReport/ListReport/ListReport.tsx",lineNumber:166,columnNumber:17},void 0)]},void 0,!0,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Reports/CreateReport/ListReport/ListReport.tsx",lineNumber:142,columnNumber:13},void 0)},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Reports/CreateReport/ListReport/ListReport.tsx",lineNumber:141,columnNumber:9},void 0)},ee=b.lazy(()=>N(()=>import("./DDfWvF-M.js"),__vite__mapDeps([0,1,2]),import.meta.url)),D=b.lazy(()=>N(()=>import("./D4n8YfQR.js"),__vite__mapDeps([3,1,2,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53]),import.meta.url)),te=b.lazy(()=>N(()=>import("./GoNzULjh.js"),__vite__mapDeps([54,1,2,55,56,57,58,25,26,13,10,20,14,59,60,61,62]),import.meta.url)),j=t.createContext([]),S=t.createContext([]),re=()=>{const[c,C]=t.useState([...X]),[p,i]=t.useState([]);t.useEffect(()=>{console.log("addDynamicList --- "),console.log(c)},[c]);const s=t.useCallback(V.debounce(()=>L(d.postWithData("admin","getJobsReport",{}).then(f=>{i(f.data.jobReportDetailsList)})),600),[]);t.useEffect(()=>(s(),()=>{}),[s]);const{adminIds:m}=localStorage.getItem("masterRequireAuthSettings")?JSON.parse(localStorage.getItem("masterRequireAuthSettings")):{adminIds:{}};return e.jsxDEV("div",{id:"CreateReport",children:e.jsxDEV(j.Provider,{value:[c,C],children:e.jsxDEV(S.Provider,{value:[p,i],children:[e.jsxDEV(W,{children:[e.jsxDEV(o,{index:!0,element:e.jsxDEV(J,{to:"SelectReportType"},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Reports/CreateReport/CreateReport.tsx",lineNumber:69,columnNumber:47},void 0)},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Reports/CreateReport/CreateReport.tsx",lineNumber:69,columnNumber:25},void 0),e.jsxDEV(o,{path:"SelectReportType",element:e.jsxDEV(t.Suspense,{fallback:e.jsxDEV(l,{className:"centered"},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Reports/CreateReport/CreateReport.tsx",lineNumber:73,columnNumber:53},void 0),children:e.jsxDEV(ee,{},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Reports/CreateReport/CreateReport.tsx",lineNumber:74,columnNumber:37},void 0)},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Reports/CreateReport/CreateReport.tsx",lineNumber:73,columnNumber:33},void 0)},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Reports/CreateReport/CreateReport.tsx",lineNumber:70,columnNumber:25},void 0),e.jsxDEV(o,{path:"new",element:e.jsxDEV(t.Suspense,{fallback:e.jsxDEV(l,{className:"centered"},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Reports/CreateReport/CreateReport.tsx",lineNumber:81,columnNumber:53},void 0),children:m[20037]?e.jsxDEV(D,{},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Reports/CreateReport/CreateReport.tsx",lineNumber:83,columnNumber:59},void 0):e.jsxDEV(Q,{},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Reports/CreateReport/CreateReport.tsx",lineNumber:83,columnNumber:69},void 0)},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Reports/CreateReport/CreateReport.tsx",lineNumber:81,columnNumber:33},void 0)},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Reports/CreateReport/CreateReport.tsx",lineNumber:78,columnNumber:25},void 0),e.jsxDEV(o,{path:"dnd",element:e.jsxDEV(t.Suspense,{fallback:e.jsxDEV(l,{className:"centered"},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Reports/CreateReport/CreateReport.tsx",lineNumber:94,columnNumber:53},void 0),children:e.jsxDEV(D,{},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Reports/CreateReport/CreateReport.tsx",lineNumber:95,columnNumber:37},void 0)},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Reports/CreateReport/CreateReport.tsx",lineNumber:94,columnNumber:33},void 0)},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Reports/CreateReport/CreateReport.tsx",lineNumber:91,columnNumber:25},void 0),e.jsxDEV(o,{path:"ModalReport",element:e.jsxDEV(t.Suspense,{fallback:e.jsxDEV(l,{className:"centered"},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Reports/CreateReport/CreateReport.tsx",lineNumber:102,columnNumber:53},void 0),children:e.jsxDEV(te,{},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Reports/CreateReport/CreateReport.tsx",lineNumber:103,columnNumber:37},void 0)},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Reports/CreateReport/CreateReport.tsx",lineNumber:102,columnNumber:33},void 0)},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Reports/CreateReport/CreateReport.tsx",lineNumber:99,columnNumber:25},void 0),e.jsxDEV(o,{path:"list",element:e.jsxDEV(t.Suspense,{fallback:e.jsxDEV(l,{className:"centered"},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Reports/CreateReport/CreateReport.tsx",lineNumber:110,columnNumber:53},void 0),children:e.jsxDEV(Z,{},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Reports/CreateReport/CreateReport.tsx",lineNumber:111,columnNumber:37},void 0)},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Reports/CreateReport/CreateReport.tsx",lineNumber:110,columnNumber:33},void 0)},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Reports/CreateReport/CreateReport.tsx",lineNumber:107,columnNumber:25},void 0),e.jsxDEV(o,{path:"edit/:id",element:e.jsxDEV(t.Suspense,{fallback:e.jsxDEV(l,{className:"centered"},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Reports/CreateReport/CreateReport.tsx",lineNumber:118,columnNumber:53},void 0),children:e.jsxDEV(D,{},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Reports/CreateReport/CreateReport.tsx",lineNumber:119,columnNumber:37},void 0)},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Reports/CreateReport/CreateReport.tsx",lineNumber:118,columnNumber:33},void 0)},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Reports/CreateReport/CreateReport.tsx",lineNumber:115,columnNumber:25},void 0)]},void 0,!0,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Reports/CreateReport/CreateReport.tsx",lineNumber:68,columnNumber:21},void 0),e.jsxDEV($,{},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Reports/CreateReport/CreateReport.tsx",lineNumber:125,columnNumber:21},void 0)]},void 0,!0,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Reports/CreateReport/CreateReport.tsx",lineNumber:67,columnNumber:17},void 0)},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Reports/CreateReport/CreateReport.tsx",lineNumber:66,columnNumber:13},void 0)},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Reports/CreateReport/CreateReport.tsx",lineNumber:65,columnNumber:9},void 0)},ye=Object.freeze(Object.defineProperty({__proto__:null,DynamicFieldStore:S,DynamicReportStore:j,default:re},Symbol.toStringTag,{value:"Module"}));export{ye as C,j as D,S as a,pe as o,fe as s};
