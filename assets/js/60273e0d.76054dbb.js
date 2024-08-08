"use strict";(self.webpackChunkwhizardtelemetry_github_io=self.webpackChunkwhizardtelemetry_github_io||[]).push([[2260],{9673:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var t=n(4848),i=n(8453);const s={sidebar_position:4,description:"\u672c\u6587\u6863\u4ecb\u7ecd Whizard \u957f\u671f\u5b58\u50a8\u914d\u7f6e"},a="Whizard \u5b58\u50a8",c={id:"getting-started/storage",title:"Whizard \u5b58\u50a8",description:"\u672c\u6587\u6863\u4ecb\u7ecd Whizard \u957f\u671f\u5b58\u50a8\u914d\u7f6e",source:"@site/whizard-docs/getting-started/storage.md",sourceDirName:"getting-started",slug:"/getting-started/storage",permalink:"/whizard-docs/getting-started/storage",draft:!1,unlisted:!1,editUrl:"https://github.com/WhizardTelemetry/whizardtelemetry.github.io/tree/main/whizard-docs/whizard-docs/getting-started/storage.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,description:"\u672c\u6587\u6863\u4ecb\u7ecd Whizard \u957f\u671f\u5b58\u50a8\u914d\u7f6e"},sidebar:"tutorialSidebar",previous:{title:"\u5b89\u88c5 Whizard",permalink:"/whizard-docs/getting-started/install"},next:{title:"Whizard \u53c2\u6570\u914d\u7f6e",permalink:"/whizard-docs/getting-started/configuration"}},o={},d=[{value:"1. \u672c\u5730\u5b58\u50a8\u6a21\u5f0f",id:"1-\u672c\u5730\u5b58\u50a8\u6a21\u5f0f",level:2},{value:"2. \u672c\u5730\u5b58\u50a8 + \u5bf9\u8c61\u5b58\u50a8\u6a21\u5f0f",id:"2-\u672c\u5730\u5b58\u50a8--\u5bf9\u8c61\u5b58\u50a8\u6a21\u5f0f",level:2},{value:"2.1 \u521b\u5efa\u5bf9\u8c61\u5b58\u50a8\u7684\u81ea\u5b9a\u4e49\u8d44\u6e90",id:"21-\u521b\u5efa\u5bf9\u8c61\u5b58\u50a8\u7684\u81ea\u5b9a\u4e49\u8d44\u6e90",level:3},{value:"2.2 \u4e3a Service \u914d\u7f6e\u9ed8\u8ba4\u7684\u5bf9\u8c61\u5b58\u50a8",id:"22-\u4e3a-service-\u914d\u7f6e\u9ed8\u8ba4\u7684\u5bf9\u8c61\u5b58\u50a8",level:3}];function l(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h1,{id:"whizard-\u5b58\u50a8",children:"Whizard \u5b58\u50a8"}),"\n",(0,t.jsx)(r.h2,{id:"1-\u672c\u5730\u5b58\u50a8\u6a21\u5f0f",children:"1. \u672c\u5730\u5b58\u50a8\u6a21\u5f0f"}),"\n",(0,t.jsxs)(r.p,{children:["Whizard \u53ef\u4ee5\u901a\u8fc7",(0,t.jsx)(r.code,{children:"PV/PVC"})," \u6302\u8f7d\u6570\u636e\u5377\u7684\u65b9\u5f0f\uff0c \u4f7f\u7528\u672c\u5730\u5b58\u50a8\uff0c\u53ef\u5b9e\u73b0\u5927\u6570\u636e\u91cf\u7684\u6570\u636e\u5b58\u50a8\u3002\u914d\u7f6e\u4e0a\u53ef\u4ee5\u5728 ",(0,t.jsx)(r.code,{children:"services.monitoring.whizard.io"})," CRD \u4e2d\u4fee\u6539 ",(0,t.jsx)(r.code,{children:"ingesterTemplateSpec.dataVolume"})," \u8fdb\u884c\u66f4\u65b0\u3002"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-yaml",children:"  ingesterTemplateSpec:\n    dataVolume:\n      persistentVolumeClaim:\n        spec:\n          resources:\n            requests:\n              storage: 20Gi\n"})}),"\n",(0,t.jsx)(r.h2,{id:"2-\u672c\u5730\u5b58\u50a8--\u5bf9\u8c61\u5b58\u50a8\u6a21\u5f0f",children:"2. \u672c\u5730\u5b58\u50a8 + \u5bf9\u8c61\u5b58\u50a8\u6a21\u5f0f"}),"\n",(0,t.jsx)(r.p,{children:"Whizard \u63a8\u8350\u4f7f\u7528\u672c\u5730\u5b58\u50a8 + \u5bf9\u8c61\u5b58\u50a8\u6a21\u5f0f\u5b58\u50a8\u6d77\u91cf\u6570\u636e\uff0c\u672c\u5730\u5b58\u50a8\u8fd1\u671f\u6570\u636e\uff0c\u5386\u53f2\u6570\u636e\u5b58\u50a8\u5728\u5bf9\u8c61\u5b58\u50a8\u4e0a\uff0c\u901a\u8fc7\u6570\u636e\u538b\u7f29\u4e0e\u964d\u91c7\u6837\uff0c\u8fdb\u4e00\u6b65\u8282\u7701\u5b58\u50a8\u7a7a\u95f4\uff0c\u63d0\u5347\u6570\u636e\u67e5\u8be2\u80fd\u529b\u3002"}),"\n",(0,t.jsx)(r.h3,{id:"21-\u521b\u5efa\u5bf9\u8c61\u5b58\u50a8\u7684\u81ea\u5b9a\u4e49\u8d44\u6e90",children:"2.1 \u521b\u5efa\u5bf9\u8c61\u5b58\u50a8\u7684\u81ea\u5b9a\u4e49\u8d44\u6e90"}),"\n",(0,t.jsxs)(r.p,{children:["\u9996\u5148\uff0c\u4e3aStorage CR\u7684\u521b\u5efaSecret\uff0c\u501f\u52a9 Kubernetes Secret \u52a0\u5bc6\u5bf9\u8c61\u5b58\u50a8\u8bbf\u95ee\u5bc6\u94a5",(0,t.jsx)(r.code,{children:"access_key"}),"\u4e0e",(0,t.jsx)(r.code,{children:"secret_key"}),"\u3002"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-shell",children:"kubectl create secret generic -n kubesphere-monitoring-system storage-remote-secret --from-literal=accessKey=<your_access_key> --from-literal=secretKey=<your_secret_key>\n"})}),"\n",(0,t.jsxs)(r.p,{children:["\u7136\u540e\uff0c\u6211\u4eec\u521b\u5efa Storage CR\uff0c\u66f4\u591a ",(0,t.jsx)(r.code,{children:"storages.monitoring.whizard.io"})," \u5b57\u6bb5\u914d\u7f6e\u53ef\u53c2\u8003\u5176",(0,t.jsx)(r.a,{href:"https://whizardtelemetry.github.io/whizard-docs/references/api/api.md",children:"\u5b9a\u4e49"}),"\u3002"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-shell",children:'cat <<EOF | kubectl apply -f -\napiVersion: monitoring.whizard.io/v1alpha1\nkind: Storage\nmetadata:\n  name: remote\n  namespace: kubesphere-monitoring-system\nspec:\n  S3:\n    bucket: "xxxxxxxxxx"\n    endpoint: "s3.pek3b.qingstor.com:443"\n    accessKey: \n      name: storage-secret\n      key: accessKey\n    secretKey: \n      name: storage-secret\n      key: secretKey\nEOF\n'})}),"\n",(0,t.jsxs)(r.p,{children:["\u521b\u5efa\u597d ",(0,t.jsx)(r.strong,{children:"Storage CR"})," \u540e\uff0c\u6211\u4eec\u53ef\u4ee5\u4e3a ",(0,t.jsx)(r.code,{children:"services.monitoring.whizard.io"})," \u914d\u7f6e\u9ed8\u8ba4\u7684\u5bf9\u8c61\u5b58\u50a8 ,\u4e5f\u53ef\u4ee5\u4e3a\u7279\u5b9a\u79df\u6237\u914d\u7f6e\u72ec\u7acb\u7684\u5bf9\u8c61\u5b58\u50a8\u3002"]}),"\n",(0,t.jsx)(r.h3,{id:"22-\u4e3a-service-\u914d\u7f6e\u9ed8\u8ba4\u7684\u5bf9\u8c61\u5b58\u50a8",children:"2.2 \u4e3a Service \u914d\u7f6e\u9ed8\u8ba4\u7684\u5bf9\u8c61\u5b58\u50a8"}),"\n",(0,t.jsxs)(r.p,{children:["\u5728\u521b\u5efa\u597d Storage CR \u540e\uff0c\u6211\u4eec\u53ef\u4ee5\u4e3a ",(0,t.jsx)(r.code,{children:"services.monitoring.whizard.io"})," \u914d\u7f6e\u9ed8\u8ba4\u7684\u5bf9\u8c61\u5b58\u50a8\uff0c\u5c06 Storage CR \u4e0e Service CR  \u8fdb\u884c\u5173\u8054\u3002\u6211\u4eec\u4ee5 ",(0,t.jsx)(r.code,{children:"kubesphere-monitoring-system"})," namespace \u4e0b\u7684 ",(0,t.jsx)(r.code,{children:"whizard"})," Service CR \u4e3a\u4f8b\uff0c\u5173\u8054\u521a\u521a\u521b\u5efa\u7684 reomte Storage CR\u3002"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-sh",children:"kubectl edit service.monitoring.whizard.io  -n kubesphere-monitoring-system whizard\n"})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-yaml",children:"spec:\n  storage:                                      #\u66f4\u65b0service.spec \u4e2d\u7684storage\u5b57\u6bb5\uff0c\u5173\u8054\u4f7f\u7528\u7684\u5bf9\u8c61\u5b58\u50a8\n    name: remote                     \n    namespace: kubesphere-monitoring-system\n"})}),"\n",(0,t.jsx)(r.p,{children:"\u9664\u4e86\u76f4\u63a5\u64cd\u4f5c CR \u65b9\u5f0f\u5916\uff0c\u4f60\u4e5f\u53ef\u4ee5\u901a\u8fc7 KuberSphere Enterprise \u7684\u63a7\u5236\u53f0\u8fdb\u884c\u64cd\u4f5c, \u8def\u5f84\u4e3a: \u8fdb\u5165 Whizard \u53ef\u89c2\u6d4b\u4e2d\u5fc3 -> \u7ec4\u4ef6\u8bbe\u7f6e -> \u957f\u671f\u5b58\u50a8"}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.img,{alt:"\u957f\u671f\u5b58\u50a8\u8bbe\u7f6e",src:n(7041).A+"",width:"1896",height:"783"})})]})}function h(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},7041:(e,r,n)=>{n.d(r,{A:()=>t});const t=n.p+"assets/images/storage_configuration-f7a4d37924434bc6fed4475a60e6d492.png"},8453:(e,r,n)=>{n.d(r,{R:()=>a,x:()=>c});var t=n(6540);const i={},s=t.createContext(i);function a(e){const r=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(s.Provider,{value:r},e.children)}}}]);