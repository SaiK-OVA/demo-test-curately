import{r as d,k as n,S as g,aV as m,W as E,A as h,L as s}from"./DAuuuMsE.js";const A=()=>{const[a,p]=d.useState(!1);return d.useEffect(()=>{const c=v=>{E(h.postWithData("admin","getAccounts",{clientId:s.getvalue("clientId")}).then(r=>{var o,l,i,u;if((l=(o=r.data)==null?void 0:o.response)!=null&&l.length){let e=JSON.parse((i=r.data)==null?void 0:i.response),t=(u=e==null?void 0:e.accounts)!=null&&u.length?e==null?void 0:e.accounts:[];t=t.filter(f=>f.account==`${s.getvalue("clientId")}_${s.getvalue("recrId")}`),console.log(t.length),console.log(t)}}))};return window.addEventListener("message",c),()=>window.removeEventListener("message",c)},[]),n.jsxDEV(g,{direction:"row",justifyContent:"center",alignItems:"center",className:"pt-5",children:[a===!0&&n.jsxDEV(m,{severity:"success",children:"Account Linked, Please close the popup and refresh the page"},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/Email/LinkEmailAccount.tsx",lineNumber:40,columnNumber:40},void 0),a===!1&&n.jsxDEV(m,{severity:"error",children:"Error! Please try again"},void 0,!1,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/Email/LinkEmailAccount.tsx",lineNumber:41,columnNumber:41},void 0)]},void 0,!0,{fileName:"D:/demo-test-curately/curately-9.6.5/curately-9.6.5/src/components/Dashboard/Settings/Email/LinkEmailAccount.tsx",lineNumber:39,columnNumber:9},void 0)};export{A as default};
