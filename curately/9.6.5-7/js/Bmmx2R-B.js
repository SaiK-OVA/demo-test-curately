import{al as G,r as t,k as c,W as u,A as d}from"./DAuuuMsE.js";import{E as m}from"./DVyrZ3Lu.js";import{M as h}from"./Ez4yizbq.js";import{S as b}from"./68QKccnG.js";import{g as y}from"./Cg41riQw.js";import{A as p,a as f,b as N}from"./tW4e0zz_.js";import"./ZuCM0PYB.js";import"./CGk11wqi.js";import"./BestnZaX.js";import"./w5-nO31Y.js";import"./D2Y9uqkR.js";import"./BZPAOVTJ.js";import"./OPHguh9D.js";import"./DistCVVm.js";import"./BqtMM88J.js";import"./DPDHQPP4.js";import"./zQ0bN4E_.js";import"./CDmetmmn.js";import"./DbsmdDnd.js";import"./C4JXEfII.js";import"./Dsukr_f2.js";import"./1Bak8biM.js";import"./B7U4EVWr.js";import"./Br0xRRVu.js";import"./C_IKUwSv.js";import"./JyAhcbJl.js";import"./DA-mmMmo.js";import"./XBS2c42B.js";import"./IOI02mfF.js";const ye=()=>{const{searchString:o}=G(),[D,U]=t.useState([]),[v,A]=t.useState([]),[S,k]=t.useState([]),[x,j]=t.useState([]),[i,l]=t.useState(0),_=r=>{window.open(y.getWindowLocation()+"candidate/view/"+r.trim())},g=[{accessorKey:"candname",header:"Name",Cell:({renderedCellValue:r,row:e})=>c.jsxDEV("span",{className:"hightLightTd",onClick:()=>_(e.original.candid),children:e.original.candname},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/Dashboard/UniversalSearch/UniversalSearch.tsx",lineNumber:83,columnNumber:17},void 0)},{accessorKey:"phone1",header:"Home Phone"},{accessorKey:"email",header:"Email",Cell:({row:r})=>c.jsxDEV("span",{className:"no-capitalization",children:r.original.email},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/Dashboard/UniversalSearch/UniversalSearch.tsx",lineNumber:94,columnNumber:17},void 0)},{accessorKey:"crdate",header:"Modified"}],E=(r,e)=>{window.open(y.getWindowLocation()+"contact/view/"+r+"/"+e)},V=[{accessorKey:"contname",header:"Name",Cell:({renderedCellValue:r,row:e})=>c.jsxDEV("span",{className:"hightLightTd",onClick:()=>E(e.original.contid,e.original.compid),children:e.original.contname},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/Dashboard/UniversalSearch/UniversalSearch.tsx",lineNumber:110,columnNumber:17},void 0)},{accessorKey:"company",header:"Company"},{accessorKey:"crdate",header:"Date"},{accessorKey:"email",header:"Email"},{accessorKey:"jobtitle",header:"Job Title"},{accessorKey:"phone",header:"Phone"},{accessorKey:"web",header:"Web"}],C=r=>{window.open(y.getWindowLocation()+"job/view/"+r)},w=[{accessorKey:"jobid",header:"Job ID",size:80,Cell:({renderedCellValue:r,row:e})=>c.jsxDEV("span",{className:"hightLightTd",onClick:()=>C(e.original.jobid),children:e.original.jobid},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/Dashboard/UniversalSearch/UniversalSearch.tsx",lineNumber:163,columnNumber:17},void 0)},{accessorKey:"reqno",header:"Reqno"},{accessorKey:"jobtitle",header:"Job Title",size:200},{accessorKey:"company",header:"Company"},{accessorKey:"city",header:"City"},{accessorKey:"state",header:"State",size:80},{accessorKey:"crdate",header:"Date"}],K=r=>{window.open(y.getWindowLocation()+"company/view/"+r)},P=[{accessorKey:"compname",header:"Company",enablePinning:!0,Cell:({renderedCellValue:r,row:e})=>c.jsxDEV("span",{className:"hightLightTd",onClick:()=>K(e.original.compId),children:e.original.compname},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/Dashboard/UniversalSearch/UniversalSearch.tsx",lineNumber:204,columnNumber:18},void 0)},{accessorKey:"crdate",header:"Last Modified"},{accessorKey:"phone",header:"Phone"},{accessorKey:"city",header:"City"},{accessorKey:"state",header:"State"}],R=()=>{u(d.getByParams(193,"Common/elasticResults.jsp",{type:"candidate",search:o}).then(r=>{l(i+1);const e=r.data.hits.hits;let s=[];for(let a=0;a<e.length;a++){let n={candid:e[a]._source.Accuick.candid?e[a]._source.Accuick.candid:"",candname:e[a]._source.Accuick.candname?e[a]._source.Accuick.candname:"",phone1:e[a]._source.Accuick.phone1?e[a]._source.Accuick.phone1:"",email:e[a]._source.Accuick.email?e[a]._source.Accuick.email:"",crdate:e[a]._source.Accuick.crdate?e[a]._source.Accuick.crdate.substring(0,10):""};s.push(n)}U(s)}))},I=()=>{u(d.getByParams(193,"Common/elasticResults.jsp",{type:"contacts",search:o}).then(r=>{l(i+1);const e=r.data.hits.hits;let s=[];for(let a=0;a<e.length;a++){let n={candid:e[a]._source.Accuick.candid?e[a]._source.Accuick.candid:"",company:e[a]._source.Accuick.company?e[a]._source.Accuick.company:"",compid:e[a]._source.Accuick.compid?e[a]._source.Accuick.compid:"",contid:e[a]._source.Accuick.contid?e[a]._source.Accuick.contid:"",contname:e[a]._source.Accuick.contname?e[a]._source.Accuick.contname:"",crdate:e[a]._source.Accuick.crdate?e[a]._source.Accuick.crdate:"",email:e[a]._source.Accuick.email?e[a]._source.Accuick.email:"",jobtitle:e[a]._source.Accuick.jobtitle?e[a]._source.Accuick.jobtitle:"",phone:e[a]._source.Accuick.phone1&&e[a]._source.Accuick.phone2?e[a]._source.Accuick.phone1+", "+e[a]._source.Accuick.phone2:e[a]._source.Accuick.phone1?e[a]._source.Accuick.phone1:e[a]._source.Accuick.phone2?e[a]._source.Accuick.phone2:"",web:e[a]._source.Accuick.web?e[a]._source.Accuick.web:""};s.push(n)}A(s)}))},F=()=>{l(i+1),u(d.getByParams(193,"Common/elasticResults.jsp",{type:"company",search:o}).then(r=>{const e=r.data.hits.hits;let s=[];for(let a=0;a<e.length;a++){let n={compId:e[a]._id?e[a]._id:"",compname:e[a]._source.Accuick.compname?e[a]._source.Accuick.compname:"",crdate:e[a]._source.Accuick.crdate?e[a]._source.Accuick.crdate.substring(0,10):"",phone:e[a]._source.Accuick.phone?e[a]._source.Accuick.phone:"",city:e[a]._source.Accuick.city?e[a]._source.Accuick.city:"",state:e[a]._source.Accuick.state?e[a]._source.Accuick.state:""};s.push(n)}j(s)}))},M=()=>{u(d.getByParams(193,"Common/elasticResults.jsp",{type:"jobs",search:o}).then(r=>{l(i+1);const e=r.data.hits.hits;let s=[];for(let a=0;a<e.length;a++){let n={jobid:e[a]._source.Accuick.jobid?e[a]._source.Accuick.jobid:"",reqno:e[a]._source.Accuick.reqno?e[a]._source.Accuick.reqno:"",jobtitle:e[a]._source.Accuick.jobtitle?e[a]._source.Accuick.jobtitle.replace("\\u0026#x2a;","").replace("\\u0026#x2f;",""):"",company:e[a]._source.Accuick.company?e[a]._source.Accuick.company:"",city:e[a]._source.Accuick.city?e[a]._source.Accuick.city:"",state:e[a]._source.Accuick.state?e[a]._source.Accuick.state:"",crdate:e[a]._source.Accuick.crdate?e[a]._source.Accuick.crdate.substring(0,10):""};s.push(n)}k(s)}))};return t.useEffect(()=>{l(0),R(),I(),F(),M()},[o]),c.jsxDEV("div",{className:"universalSearch",children:[!D.length&&!v.length&&!S.length&&!x.length?c.jsxDEV("span",{className:"noResults",children:"No Results Found"},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/Dashboard/UniversalSearch/UniversalSearch.tsx",lineNumber:340,columnNumber:21},void 0):null,D.length?c.jsxDEV(p,{defaultExpanded:!0,className:"mb-4",style:{height:"fit-content"},children:[c.jsxDEV(f,{expandIcon:c.jsxDEV(m,{},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/Dashboard/UniversalSearch/UniversalSearch.tsx",lineNumber:346,columnNumber:55},void 0),children:c.jsxDEV("span",{className:"addHeader",children:"Candidates"},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/Dashboard/UniversalSearch/UniversalSearch.tsx",lineNumber:347,columnNumber:29},void 0)},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/Dashboard/UniversalSearch/UniversalSearch.tsx",lineNumber:346,columnNumber:25},void 0),c.jsxDEV(N,{children:c.jsxDEV("div",{className:"MRTableCustom",children:c.jsxDEV(h,{columns:g,data:D,enablePagination:!1,enableGlobalFilter:!1,initialState:{columnPinning:{left:["mrt-row-select","poolName"]},density:"compact",showGlobalFilter:!0,columnOrder:["candname","phone1","email","crdate"]},enablePinning:!0,enableStickyHeader:!0,enableColumnResizing:!0,enableGlobalFilterModes:!0,icons:{ArrowDownwardIcon:r=>c.jsxDEV(b,{...r},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/Dashboard/UniversalSearch/UniversalSearch.tsx",lineNumber:372,columnNumber:76},void 0)}},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/Dashboard/UniversalSearch/UniversalSearch.tsx",lineNumber:353,columnNumber:33},void 0)},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/Dashboard/UniversalSearch/UniversalSearch.tsx",lineNumber:351,columnNumber:29},void 0)},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/Dashboard/UniversalSearch/UniversalSearch.tsx",lineNumber:349,columnNumber:25},void 0)]},void 0,!0,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/Dashboard/UniversalSearch/UniversalSearch.tsx",lineNumber:345,columnNumber:21},void 0):null,v.length?c.jsxDEV(p,{defaultExpanded:!0,className:"mb-4",children:[c.jsxDEV(f,{expandIcon:c.jsxDEV(m,{},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/Dashboard/UniversalSearch/UniversalSearch.tsx",lineNumber:384,columnNumber:55},void 0),children:c.jsxDEV("span",{className:"addHeader",children:"Contacts"},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/Dashboard/UniversalSearch/UniversalSearch.tsx",lineNumber:385,columnNumber:29},void 0)},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/Dashboard/UniversalSearch/UniversalSearch.tsx",lineNumber:384,columnNumber:25},void 0),c.jsxDEV(N,{children:c.jsxDEV("div",{className:"MRTableCustom",children:c.jsxDEV(h,{columns:V,data:v,enablePagination:!1,enableGlobalFilter:!1,initialState:{density:"compact",showGlobalFilter:!0,columnOrder:["contname","company","crdate","email","jobtitle","phone","web"]},enablePinning:!0,enableStickyHeader:!0,enableColumnResizing:!0,enableGlobalFilterModes:!0,icons:{ArrowDownwardIcon:r=>c.jsxDEV(b,{...r},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/Dashboard/UniversalSearch/UniversalSearch.tsx",lineNumber:411,columnNumber:76},void 0)}},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/Dashboard/UniversalSearch/UniversalSearch.tsx",lineNumber:390,columnNumber:33},void 0)},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/Dashboard/UniversalSearch/UniversalSearch.tsx",lineNumber:388,columnNumber:29},void 0)},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/Dashboard/UniversalSearch/UniversalSearch.tsx",lineNumber:387,columnNumber:25},void 0)]},void 0,!0,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/Dashboard/UniversalSearch/UniversalSearch.tsx",lineNumber:383,columnNumber:21},void 0):null,S.length?c.jsxDEV(p,{defaultExpanded:!0,className:"mb-4",children:[c.jsxDEV(f,{expandIcon:c.jsxDEV(m,{},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/Dashboard/UniversalSearch/UniversalSearch.tsx",lineNumber:422,columnNumber:55},void 0),children:c.jsxDEV("span",{className:"addHeader",children:"Jobs"},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/Dashboard/UniversalSearch/UniversalSearch.tsx",lineNumber:423,columnNumber:29},void 0)},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/Dashboard/UniversalSearch/UniversalSearch.tsx",lineNumber:422,columnNumber:25},void 0),c.jsxDEV(N,{children:c.jsxDEV("div",{className:"MRTableCustom",children:c.jsxDEV(h,{columns:w,data:S,enablePagination:!1,enableGlobalFilter:!1,initialState:{density:"compact",showGlobalFilter:!0,columnOrder:["jobid","reqno","jobtitle","company","city","state","crdate"]},enablePinning:!0,enableStickyHeader:!0,enableColumnResizing:!0,enableGlobalFilterModes:!0,icons:{ArrowDownwardIcon:r=>c.jsxDEV(b,{...r},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/Dashboard/UniversalSearch/UniversalSearch.tsx",lineNumber:449,columnNumber:76},void 0)}},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/Dashboard/UniversalSearch/UniversalSearch.tsx",lineNumber:428,columnNumber:33},void 0)},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/Dashboard/UniversalSearch/UniversalSearch.tsx",lineNumber:426,columnNumber:29},void 0)},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/Dashboard/UniversalSearch/UniversalSearch.tsx",lineNumber:425,columnNumber:25},void 0)]},void 0,!0,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/Dashboard/UniversalSearch/UniversalSearch.tsx",lineNumber:421,columnNumber:21},void 0):null,x.length?c.jsxDEV(p,{defaultExpanded:!0,className:"mb-4",children:[c.jsxDEV(f,{expandIcon:c.jsxDEV(m,{},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/Dashboard/UniversalSearch/UniversalSearch.tsx",lineNumber:461,columnNumber:55},void 0),children:c.jsxDEV("span",{className:"addHeader",children:"Company"},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/Dashboard/UniversalSearch/UniversalSearch.tsx",lineNumber:462,columnNumber:29},void 0)},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/Dashboard/UniversalSearch/UniversalSearch.tsx",lineNumber:461,columnNumber:25},void 0),c.jsxDEV(N,{children:c.jsxDEV("div",{className:"MRTableCustom",children:c.jsxDEV(h,{columns:P,data:x,enablePagination:!1,enableGlobalFilter:!1,initialState:{density:"compact",showGlobalFilter:!0,columnOrder:["compname","crdate","phone","city","state"]},enablePinning:!0,enableStickyHeader:!0,enableColumnResizing:!0,enableGlobalFilterModes:!0,icons:{ArrowDownwardIcon:r=>c.jsxDEV(b,{...r},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/Dashboard/UniversalSearch/UniversalSearch.tsx",lineNumber:486,columnNumber:76},void 0)}},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/Dashboard/UniversalSearch/UniversalSearch.tsx",lineNumber:467,columnNumber:33},void 0)},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/Dashboard/UniversalSearch/UniversalSearch.tsx",lineNumber:465,columnNumber:29},void 0)},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/Dashboard/UniversalSearch/UniversalSearch.tsx",lineNumber:464,columnNumber:25},void 0)]},void 0,!0,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/Dashboard/UniversalSearch/UniversalSearch.tsx",lineNumber:460,columnNumber:21},void 0):null]},void 0,!0,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/Dashboard/UniversalSearch/UniversalSearch.tsx",lineNumber:337,columnNumber:9},void 0)};export{ye as default};
