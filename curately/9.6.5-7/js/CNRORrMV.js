import{e as m,j as l,r as x,k as t,O as a}from"./DAuuuMsE.js";const E=m(l.jsxs("g",{fillRule:"evenodd",children:[l.jsx("path",{d:"M20 3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H4V5h16z"}),l.jsx("path",{d:"M19.41 10.42 17.99 9l-3.17 3.17-1.41-1.42L12 12.16 14.82 15zM5 7h5v2H5zm0 4h5v2H5zm0 4h5v2H5z"})]}),"FactCheckOutlined"),f=m(l.jsx("path",{d:"M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v2c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 23l6.58-6.59c.37-.36.59-.86.59-1.41V5c0-1.1-.9-2-2-2m0 12-4.34 4.34L11.77 14H3v-2l3-7h9zm4-12h4v12h-4z"}),"ThumbDownAltOutlined"),h=m(l.jsx("path",{d:"M9 21h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.58 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2M9 9l4.34-4.34L12 10h9v2l-3 7H9zM1 9h4v12H1z"}),"ThumbUpOutlined"),b=({headingList:s,candidateData:n,isInDrawer:r})=>{const[i,p]=x.useState([]),D=()=>{let e=[];for(let c=0;c<s.length;c++){let u=n.candidateCriteria.find(y=>{var o,d;return((o=y.criterion)==null?void 0:o.toLowerCase())===((d=s[c])==null?void 0:d.toLowerCase())});u!=null&&u.criterion&&e.push(u)}p(e)};return x.useEffect(()=>{var e;(e=n==null?void 0:n.candidateCriteria)!=null&&e.length&&(s!=null&&s.length)&&D()},[]),t.jsxDEV(a,{container:!0,direction:"row",justifyContent:"start",className:"m-2",alignItems:"start",id:"ExpandDetails",columnSpacing:3,children:i.map(e=>t.jsxDEV(a,{size:r?12/i.length:void 0,sx:r?void 0:{maxWidth:300,minWidth:250},className:"mr-2 ml-2",children:[t.jsxDEV(a,{children:t.jsxDEV("span",{className:`${e.status==="Match"?"Match":e.status==="Potential Match"?"PotentialMatch":e.status==="Not a Match"?"NotaMatch":""}`,children:[e.status==="Match"?t.jsxDEV(h,{},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Resume/Community/ExpandDetails/ExpandDetails.tsx",lineNumber:51,columnNumber:37},void 0):e.status==="Potential Match"?t.jsxDEV(h,{},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Resume/Community/ExpandDetails/ExpandDetails.tsx",lineNumber:54,columnNumber:41},void 0):e.status==="Not a Match"?t.jsxDEV(f,{},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Resume/Community/ExpandDetails/ExpandDetails.tsx",lineNumber:57,columnNumber:45},void 0):null,t.jsxDEV("span",{className:"px-2",children:e.status},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Resume/Community/ExpandDetails/ExpandDetails.tsx",lineNumber:61,columnNumber:29},void 0)]},void 0,!0,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Resume/Community/ExpandDetails/ExpandDetails.tsx",lineNumber:48,columnNumber:25},void 0)},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Resume/Community/ExpandDetails/ExpandDetails.tsx",lineNumber:47,columnNumber:21},void 0),t.jsxDEV(a,{className:"fw-6 mt-2 mb-3 fs-13",children:e.criterion},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Resume/Community/ExpandDetails/ExpandDetails.tsx",lineNumber:64,columnNumber:21},void 0),t.jsxDEV(a,{className:"",children:e.evidence},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Resume/Community/ExpandDetails/ExpandDetails.tsx",lineNumber:67,columnNumber:21},void 0)]},void 0,!0,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Resume/Community/ExpandDetails/ExpandDetails.tsx",lineNumber:45,columnNumber:17},void 0))},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Resume/Community/ExpandDetails/ExpandDetails.tsx",lineNumber:41,columnNumber:12},void 0)};export{b as E,E as F,h as T,f as a};
