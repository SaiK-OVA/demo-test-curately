import{r as a,k as t,O as y,S as p,T as Y,l as Z,B as V,L as x,W as w,A as I,V as c}from"./DAuuuMsE.js";import{M as _}from"./Ez4yizbq.js";import{C as ee}from"./B7IUApoB.js";import{S as te}from"./68QKccnG.js";import{A as le,D as oe}from"./Cg41riQw.js";import{C as ae}from"./DLCWg8U-.js";import{F as re}from"./3Gqd8Nje.js";import{T as P,C as se}from"./BestnZaX.js";import{L as ne,D as k}from"./BZPAOVTJ.js";import{I as M}from"./BqtMM88J.js";import{C as ue}from"./9WUULBRn.js";import{S as ie}from"./B2qHeyhM.js";import{T as ce}from"./DbsmdDnd.js";import"./ZuCM0PYB.js";import"./CGk11wqi.js";import"./D2Y9uqkR.js";import"./DVyrZ3Lu.js";import"./DPDHQPP4.js";import"./zQ0bN4E_.js";import"./CDmetmmn.js";import"./C4JXEfII.js";import"./DistCVVm.js";import"./Dsukr_f2.js";import"./w5-nO31Y.js";import"./OPHguh9D.js";import"./1Bak8biM.js";import"./B7U4EVWr.js";import"./Br0xRRVu.js";import"./C_IKUwSv.js";import"./JyAhcbJl.js";import"./DA-mmMmo.js";import"./XBS2c42B.js";import"./IOI02mfF.js";const Ke=()=>{const[s,g]=a.useState(),[r,J]=a.useState(),[T,A]=a.useState(!1),[b,F]=a.useState(""),[D,z]=a.useState(""),[i,R]=a.useState([]),[d,C]=a.useState(""),[L,S]=a.useState(!1),[f,m]=a.useState({}),[O,W]=a.useState(0),[G,K]=a.useState([]),[H,$]=a.useState(),[u,N]=a.useState({pageIndex:0,pageSize:10}),q=[{accessorKey:"title",header:"Job Title"},{accessorKey:"clientCorporation.name",accessorFn:e=>`${e.clientCorporation.name} `,header:"Company Name"},{accessorKey:"dateLastModified",header:"Date",Cell:({row:e})=>re.formatMillisecondsToCustomDate(+e.original.dateLastModified)},{accessorKey:"curatelyId",header:"Curately",Cell:({row:e})=>e.original.curatelyId?t.jsxDEV(ce,{title:"Curately Id",children:t.jsxDEV("span",{className:"ml-4",children:e.original.curatelyId?t.jsxDEV(ae,{},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Bullhorn/BullhornJobs/BullhornJobs.tsx",lineNumber:83,columnNumber:54},void 0):""},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Bullhorn/BullhornJobs/BullhornJobs.tsx",lineNumber:82,columnNumber:21},void 0)},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Bullhorn/BullhornJobs/BullhornJobs.tsx",lineNumber:81,columnNumber:45},void 0):"",size:80}],Q=a.useMemo(()=>(i==null?void 0:i.filter(e=>e.title.toLowerCase().includes(d.toLowerCase()||"")))??[],[d,i]),B=()=>{if(b||D||s&&r&&s.startOf("day")<=r.startOf("day")){let e={entityName:"JobOrder",clientId:x.getvalue("clientId"),job:{title:b,clientCorporation:{name:D},dateAdded:s?s.toFormat("yyyyMMdd"):"",dateLastModified:r?r.toFormat("yyyyMMdd"):""},count:u.pageSize,sort:"-dateLastModified",start:u.pageIndex*u.pageSize,fields:"id,title,dateLastModified,clientCorporation"};w(I.postWithData("ats","bullhorn/search",e).then(l=>{var o,n,h,v,E,j;A(!0),(o=l.data)!=null&&o.Success&&((n=l.data)==null?void 0:n.Status)===200?(W(Number((v=(h=l.data)==null?void 0:h.data)!=null&&v.total?(j=(E=l.data)==null?void 0:E.data)==null?void 0:j.total:0)),R(l.data.data.data)):c(l.data.Message?l.data.Message:"An error occured while getting this Job Name.","error")}))}else s?r?s.startOf("day")>r.startOf("day")&&c("Start Date should be less than End Date.","error"):c("Enter Valid End Date.","error"):c("Enter Valid Start Date.","error")},U=()=>{const e=Object.keys(f);let l={atsName:"Bullhorn",clientId:x.getvalue("clientId"),recruiterId:x.getvalue("recrId"),moduleName:"Job",atsValues:e};w(I.postWithData("ats","ats/consume",l).then(o=>{var n,h;(n=o.data)!=null&&n.Success&&((h=o.data)==null?void 0:h.Status)===200?(c(o.data.Message,"success"),m({}),S(!1),B()):c(o.data.Message?o.data.Message:"An error occured while getting this Push to Curately.","error")}))};a.useEffect(()=>{(b||s&&r&&s.startOf("day")<=r.startOf("day"))&&B()},[u.pageIndex,u.pageSize]);const X=async e=>{if(S(e.target.checked),e.target.checked){let l={},o=i;for(let n=0;n<i.length;n++)l[o[n].id]=!0;m(l)}else m({})};return t.jsxDEV("div",{className:"",id:"BullhornJobs",children:t.jsxDEV("div",{className:"",children:[t.jsxDEV(y,{container:!0,direction:"row",justifyContent:"space-between",alignItems:"center",className:"customCard px-4 py-2 mb-2",sx:{minHeight:"auto !important"},children:t.jsxDEV(p,{direction:"row",spacing:3,children:t.jsxDEV(Y,{variant:"h6",className:"header, pt-1",children:"Bullhorn Jobs"},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Bullhorn/BullhornJobs/BullhornJobs.tsx",lineNumber:213,columnNumber:25},void 0)},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Bullhorn/BullhornJobs/BullhornJobs.tsx",lineNumber:212,columnNumber:21},void 0)},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Bullhorn/BullhornJobs/BullhornJobs.tsx",lineNumber:204,columnNumber:17},void 0),t.jsxDEV(y,{className:"my-3 customCard ",container:!0,direction:"row",justifyContent:"flex-start",alignItems:"center",children:[t.jsxDEV(p,{direction:"row",spacing:3,style:{paddingRight:"22px"},children:t.jsxDEV(P,{fullWidth:!0,label:"Job Title",size:"small",placeholder:"Search by Job Title",value:b,onChange:e=>F(e.target.value)},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Bullhorn/BullhornJobs/BullhornJobs.tsx",lineNumber:227,columnNumber:25},void 0)},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Bullhorn/BullhornJobs/BullhornJobs.tsx",lineNumber:226,columnNumber:21},void 0),t.jsxDEV(p,{direction:"row",spacing:3,style:{paddingRight:"22px"},children:t.jsxDEV(P,{fullWidth:!0,label:"Company Name",size:"small",placeholder:"Search by Company Name",value:D,onChange:e=>z(e.target.value)},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Bullhorn/BullhornJobs/BullhornJobs.tsx",lineNumber:237,columnNumber:25},void 0)},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Bullhorn/BullhornJobs/BullhornJobs.tsx",lineNumber:236,columnNumber:21},void 0),t.jsxDEV(p,{direction:"row",spacing:3,children:t.jsxDEV(ne,{dateAdapter:le,children:t.jsxDEV(y,{container:!0,direction:"row",justifyContent:"flex-start",alignItems:"center",children:[t.jsxDEV(k,{label:"Start Date",value:s,onChange:e=>{g(e||"")},slotProps:{textField:{size:"small",fullWidth:!1,InputProps:{style:{textAlign:"center"}}}},maxDate:r},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Bullhorn/BullhornJobs/BullhornJobs.tsx",lineNumber:255,columnNumber:33},void 0),t.jsxDEV(Z,{sx:{mx:2},children:" to "},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Bullhorn/BullhornJobs/BullhornJobs.tsx",lineNumber:278,columnNumber:33},void 0),t.jsxDEV(k,{label:"End Date",value:r,onChange:e=>{J(e||"")},slotProps:{textField:{size:"small",fullWidth:!1,InputProps:{style:{textAlign:"center"}}}},maxDate:oe.now()},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Bullhorn/BullhornJobs/BullhornJobs.tsx",lineNumber:279,columnNumber:33},void 0)]},void 0,!0,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Bullhorn/BullhornJobs/BullhornJobs.tsx",lineNumber:249,columnNumber:29},void 0)},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Bullhorn/BullhornJobs/BullhornJobs.tsx",lineNumber:248,columnNumber:25},void 0)},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Bullhorn/BullhornJobs/BullhornJobs.tsx",lineNumber:247,columnNumber:21},void 0),t.jsxDEV(V,{variant:"contained",color:"primary",className:"ml-4",fullWidth:!0,onClick:()=>{N({pageIndex:0,pageSize:10}),B()},children:"Search"},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Bullhorn/BullhornJobs/BullhornJobs.tsx",lineNumber:305,columnNumber:21},void 0)]},void 0,!0,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Bullhorn/BullhornJobs/BullhornJobs.tsx",lineNumber:219,columnNumber:17},void 0),t.jsxDEV("div",{className:"p-4 customCard CardView",children:T?t.jsxDEV("div",{className:"MRTableCustom pl-0 ",children:[t.jsxDEV(y,{container:!0,className:"actionItems",width:"auto",children:[t.jsxDEV(se,{className:"select-all-checkbox",disableRipple:!0,color:"default",checked:L,onChange:X},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Bullhorn/BullhornJobs/BullhornJobs.tsx",lineNumber:328,columnNumber:29},void 0),t.jsxDEV(V,{variant:"outlined",color:"secondary",className:"mr-2 ml-2",disabled:!(Object.keys(f).length>0),onClick:()=>U(),children:"Push to Curately"},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Bullhorn/BullhornJobs/BullhornJobs.tsx",lineNumber:335,columnNumber:29},void 0)]},void 0,!0,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Bullhorn/BullhornJobs/BullhornJobs.tsx",lineNumber:327,columnNumber:25},void 0),t.jsxDEV(_,{columns:q,enableRowSelection:!0,data:Q,enablePinning:!0,muiSearchTextFieldProps:{placeholder:"Search",sx:{width:"205px",right:"50px",padding:"-10px",height:"20px",marginTop:"-10px",marginRight:"-40px"},value:d,onChange:e=>{C(e.target.value)},InputProps:{startAdornment:t.jsxDEV(M,{position:"start",children:t.jsxDEV(ie,{fontSize:"small",htmlColor:"#757575"},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Bullhorn/BullhornJobs/BullhornJobs.tsx",lineNumber:356,columnNumber:86},void 0)},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Bullhorn/BullhornJobs/BullhornJobs.tsx",lineNumber:356,columnNumber:53},void 0),endAdornment:t.jsxDEV(M,{position:"end",disablePointerEvents:!d,children:t.jsxDEV(ue,{fontSize:"small",htmlColor:d?"#757575":"#ebebeb",sx:{cursor:"pointer"},onClick:()=>C("")},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Bullhorn/BullhornJobs/BullhornJobs.tsx",lineNumber:358,columnNumber:41},void 0)},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Bullhorn/BullhornJobs/BullhornJobs.tsx",lineNumber:357,columnNumber:51},void 0)}},initialState:{density:"compact",showGlobalFilter:!0},onColumnFiltersChange:K,onGlobalFilterChange:$,enableDensityToggle:!1,enableFullScreenToggle:!1,columnResizeMode:"onChange",getRowId:e=>e.id,onPaginationChange:N,state:{columnFilters:G,globalFilter:H,rowSelection:f},onRowSelectionChange:m,enableStickyHeader:!0,enablePagination:!1,muiSelectCheckboxProps:e=>({onChange:l=>{if(e.row.id){let o={...f};l.target.checked?o[e.row.id]=l.target.checked:o.hasOwnProperty(e.row.id)&&delete o[e.row.id],m(o)}}}),renderBottomToolbarCustomActions:()=>t.jsxDEV(ee,{page:u.pageIndex,rowsPerPage:10,rowCount:O,onChangePage:e=>N({...u,pageIndex:e,pageSize:10})},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Bullhorn/BullhornJobs/BullhornJobs.tsx",lineNumber:407,columnNumber:33},void 0),icons:{ArrowDownwardIcon:e=>t.jsxDEV(te,{...e},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Bullhorn/BullhornJobs/BullhornJobs.tsx",lineNumber:422,columnNumber:37},void 0)}},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Bullhorn/BullhornJobs/BullhornJobs.tsx",lineNumber:345,columnNumber:25},void 0)]},void 0,!0,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Bullhorn/BullhornJobs/BullhornJobs.tsx",lineNumber:325,columnNumber:33},void 0):null},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Bullhorn/BullhornJobs/BullhornJobs.tsx",lineNumber:323,columnNumber:17},void 0)]},void 0,!0,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Bullhorn/BullhornJobs/BullhornJobs.tsx",lineNumber:203,columnNumber:13},void 0)},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Bullhorn/BullhornJobs/BullhornJobs.tsx",lineNumber:202,columnNumber:9},void 0)};export{Ke as default};
