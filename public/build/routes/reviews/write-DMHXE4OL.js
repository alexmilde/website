import{a as b,b as u}from"/build/_shared/chunk-I2PN4Q7O.js";import{c as o,g as i,i as s,j as m}from"/build/_shared/chunk-JKKITEQK.js";import{a as g,b as c}from"/build/_shared/chunk-LMXH6R3J.js";import{c as r}from"/build/_shared/chunk-Q3IECNXJ.js";var v=r(b());var d=r(g()),t=r(c());var l="w-full border-b border-gray-500 px-2 py-1 text-base font-light invalid:border-black";function y(...e){return e.filter(Boolean).join(" ")}function p(){let[e,f]=(0,d.useState)(3),N=s(),x=m(),a=Boolean(x.submission);return(0,t.jsxs)(i,{method:"post",className:"mb-8",children:[(0,t.jsx)("p",{children:(0,t.jsx)("input",{type:"text",name:"name",className:l,placeholder:"Name",required:!0})}),(0,t.jsxs)("div",{className:"my-4 flex",children:[(0,t.jsx)("div",{className:"text-sm text-gray-700",children:(0,t.jsxs)("span",{className:"sr-only",children:[e," out of 5 stars"]})}),(0,t.jsxs)("div",{className:"items-cente ml-1 flex",children:[(0,t.jsx)("input",{type:"hidden",name:"rating",value:e,required:!0}),[0,1,2,3,4].map(n=>(0,t.jsx)(u,{className:y(e>n?"text-yellow-400":"text-gray-200","h-5 w-5 flex-shrink-0"),"aria-hidden":"true",onClick:()=>f(n+1)},n))]})]}),(0,t.jsx)("p",{children:(0,t.jsx)("textarea",{id:"text",rows:4,name:"text",className:l,required:!0})}),(0,t.jsxs)("p",{className:"flex justify-between",children:[(0,t.jsx)(o,{to:"../",className:"rounded bg-indigo-600 py-2 px-4 text-white hover:bg-indigo-700",children:"Cancel"}),(0,t.jsx)("button",{type:"submit",className:"rounded bg-indigo-600 py-2 px-4 text-white hover:bg-indigo-700",disabled:a,children:a?"Sending...":"Send"})]})]})}export{p as default};
