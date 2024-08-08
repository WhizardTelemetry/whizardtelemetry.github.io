"use strict";(self.webpackChunkwhizardtelemetry_github_io=self.webpackChunkwhizardtelemetry_github_io||[]).push([[9626],{1920:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>d,contentTitle:()=>s,default:()=>l,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var i=t(4848),n=t(8453);const o={sidebar_position:3,description:"Whizard \u5b58\u50a8"},s="Whizard Storage",a={id:"concepts/storage",title:"Whizard Storage",description:"Whizard \u5b58\u50a8",source:"@site/whizard-docs/concepts/storage.md",sourceDirName:"concepts",slug:"/concepts/storage",permalink:"/whizard-docs/concepts/storage",draft:!1,unlisted:!1,editUrl:"https://github.com/WhizardTelemetry/whizardtelemetry.github.io/tree/main/whizard-docs/whizard-docs/concepts/storage.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,description:"Whizard \u5b58\u50a8"},sidebar:"tutorialSidebar",previous:{title:"Whizard Service",permalink:"/whizard-docs/concepts/service"},next:{title:"Whizard Tenant",permalink:"/whizard-docs/concepts/tenant"}},d={},c=[{value:"\u4f7f\u7528\u573a\u666f",id:"\u4f7f\u7528\u573a\u666f",level:2},{value:"Storage CRD \u5b9a\u4e49",id:"storage-crd-\u5b9a\u4e49",level:2},{value:"\u672a\u6765\u8ba1\u5212",id:"\u672a\u6765\u8ba1\u5212",level:2}];function h(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.h1,{id:"whizard-storage",children:"Whizard Storage"}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.code,{children:"Whizard Storage"})," \u662f\u4e00\u4e2a\u62bd\u8c61\u8bbe\u8ba1\uff0c\u65e8\u5728\u652f\u6301\u5bf9\u8c61\u5b58\u50a8\uff0c\u7c7b\u4f3c\u4e8e Thanos \u7684\u5b58\u50a8\u89e3\u51b3\u65b9\u6848\u3002\u5b83\u4e3a\u76d1\u63a7\u6570\u636e\u63d0\u4f9b\u4e86\u9ad8\u6548\u7684\u5b58\u50a8\u548c\u68c0\u7d22\u673a\u5236\uff0c\u5f53\u524d\u652f\u6301 Amazon S3 \u4f5c\u4e3a\u5b58\u50a8\u540e\u7aef\u3002"]}),"\n",(0,i.jsx)(r.h2,{id:"\u4f7f\u7528\u573a\u666f",children:"\u4f7f\u7528\u573a\u666f"}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.code,{children:"Whizard Storage"})," \u9002\u7528\u4e8e\u9700\u8981\u9ad8\u6548\u5b58\u50a8\u548c\u68c0\u7d22\u5927\u91cf\u76d1\u63a7\u6570\u636e\u7684\u573a\u666f\u3002\u901a\u8fc7\u652f\u6301\u5bf9\u8c61\u5b58\u50a8\uff0c",(0,i.jsx)(r.code,{children:"Whizard Storage"})," \u80fd\u591f\u63d0\u4f9b\u53ef\u9760\u7684\u5b58\u50a8\u89e3\u51b3\u65b9\u6848\uff0c\u786e\u4fdd\u6570\u636e\u7684\u6301\u4e45\u6027\u548c\u53ef\u7528\u6027\u3002"]}),"\n",(0,i.jsx)(r.h2,{id:"storage-crd-\u5b9a\u4e49",children:"Storage CRD \u5b9a\u4e49"}),"\n",(0,i.jsxs)(r.p,{children:["\u53c2\u89c1 ",(0,i.jsx)(r.a,{href:"/whizard-docs/references/api/",children:"StorageSpec"})]}),"\n",(0,i.jsx)(r.h2,{id:"\u672a\u6765\u8ba1\u5212",children:"\u672a\u6765\u8ba1\u5212"}),"\n",(0,i.jsxs)(r.p,{children:["\u672a\u6765\uff0c",(0,i.jsx)(r.code,{children:"Whizard Storage"})," \u8ba1\u5212\u6269\u5c55\u652f\u6301\u66f4\u591a\u7684\u5bf9\u8c61\u5b58\u50a8\u670d\u52a1\uff0c\u5982 Google Cloud Storage\u3001Azure Blob Storage \u7b49\uff0c\u4ee5\u6ee1\u8db3\u4e0d\u540c\u7528\u6237\u7684\u9700\u6c42\u3002\u540c\u65f6\uff0c\u5c06\u8fdb\u4e00\u6b65\u4f18\u5316\u5b58\u50a8\u548c\u68c0\u7d22\u673a\u5236\uff0c\u63d0\u9ad8\u7cfb\u7edf\u7684\u6027\u80fd\u548c\u6548\u7387\u3002"]}),"\n",(0,i.jsxs)(r.p,{children:["\u603b\u7684\u6765\u8bf4\uff0c",(0,i.jsx)(r.code,{children:"Whizard Storage"})," \u662f\u4e00\u4e2a\u5f3a\u5927\u7684\u5b58\u50a8\u89e3\u51b3\u65b9\u6848\uff0c\u901a\u8fc7\u652f\u6301\u5bf9\u8c61\u5b58\u50a8\uff0c\u4e3a\u76d1\u63a7\u6570\u636e\u63d0\u4f9b\u4e86\u9ad8\u6548\u3001\u53ef\u9760\u7684\u5b58\u50a8\u548c\u68c0\u7d22\u673a\u5236\uff0c\u786e\u4fdd\u6570\u636e\u7684\u6301\u4e45\u6027\u548c\u53ef\u7528\u6027\u3002"]})]})}function l(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},8453:(e,r,t)=>{t.d(r,{R:()=>s,x:()=>a});var i=t(6540);const n={},o=i.createContext(n);function s(e){const r=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),i.createElement(o.Provider,{value:r},e.children)}}}]);