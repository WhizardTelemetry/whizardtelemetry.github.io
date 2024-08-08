"use strict";(self.webpackChunkwhizardtelemetry_github_io=self.webpackChunkwhizardtelemetry_github_io||[]).push([[1302],{6477:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>t,metadata:()=>c,toc:()=>o});var i=r(4848),s=r(8453);const t={sidebar_position:1,description:"\u672c\u6587\u6863\u4ecb\u7ecd\u5982\u4f55\u4e3a Whizard \u5f00\u542f TLS \u8fdb\u884c\u5185\u90e8\u670d\u52a1\u901a\u4fe1"},a="Whizard \u5f00\u542f TLS \u8fdb\u884c\u5185\u90e8\u670d\u52a1\u901a\u4fe1",c={id:"guide/secure/securing-communications-with-TLS",title:"Whizard \u5f00\u542f TLS \u8fdb\u884c\u5185\u90e8\u670d\u52a1\u901a\u4fe1",description:"\u672c\u6587\u6863\u4ecb\u7ecd\u5982\u4f55\u4e3a Whizard \u5f00\u542f TLS \u8fdb\u884c\u5185\u90e8\u670d\u52a1\u901a\u4fe1",source:"@site/whizard-docs/guide/secure/securing-communications-with-TLS.md",sourceDirName:"guide/secure",slug:"/guide/secure/securing-communications-with-TLS",permalink:"/whizard-docs/guide/secure/securing-communications-with-TLS",draft:!1,unlisted:!1,editUrl:"https://github.com/WhizardTelemetry/whizardtelemetry.github.io/tree/main/whizard-docs/whizard-docs/guide/secure/securing-communications-with-TLS.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,description:"\u672c\u6587\u6863\u4ecb\u7ecd\u5982\u4f55\u4e3a Whizard \u5f00\u542f TLS \u8fdb\u884c\u5185\u90e8\u670d\u52a1\u901a\u4fe1"},sidebar:"tutorialSidebar",previous:{title:"\u5b89\u5168\u589e\u5f3a",permalink:"/whizard-docs/category/\u5b89\u5168\u589e\u5f3a"},next:{title:"Whizard-monitoring-gateway \u8ba4\u8bc1",permalink:"/whizard-docs/guide/secure/authentication-and-authorization"}},d={},o=[{value:"1. \u751f\u6210 HTTPS \u8bc1\u4e66",id:"1-\u751f\u6210-https-\u8bc1\u4e66",level:2},{value:"2.  \u4e3a Whizard \u7ec4\u4ef6 HTTP \u670d\u52a1\u914d\u7f6e TLS \u8bc1\u4e66",id:"2--\u4e3a-whizard-\u7ec4\u4ef6-http-\u670d\u52a1\u914d\u7f6e-tls-\u8bc1\u4e66",level:2},{value:"3.  \u66f4\u65b0 Kubesphere-config \u4e2d\u4e0e whizard\u5173\u8054\u7684\u8bf7\u6c42\u914d\u7f6e",id:"3--\u66f4\u65b0-kubesphere-config-\u4e2d\u4e0e-whizard\u5173\u8054\u7684\u8bf7\u6c42\u914d\u7f6e",level:2},{value:"4. \u9a8c\u8bc1",id:"4-\u9a8c\u8bc1",level:2},{value:"5. \u5176\u4ed6",id:"5-\u5176\u4ed6",level:2}];function l(e){const n={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"whizard-\u5f00\u542f-tls-\u8fdb\u884c\u5185\u90e8\u670d\u52a1\u901a\u4fe1",children:"Whizard \u5f00\u542f TLS \u8fdb\u884c\u5185\u90e8\u670d\u52a1\u901a\u4fe1"}),"\n",(0,i.jsx)(n.p,{children:"Whizard \u5185\u90e8\u670d\u52a1\u95f4\u901a\u4fe1\u4f7f\u7528 TLS \u5b89\u5168\u52a0\u56fa\u65f6\u8981\u6c42\uff1a"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"whizard \u7248\u672c >= v0.7.0"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u76f8\u5173\u4e0a\u4e0b\u6e38\u670d\u52a1\u7248\u672c\u8981\u6c42\uff1a"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"kse \u7248\u672c >= 3.4.1"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"1-\u751f\u6210-https-\u8bc1\u4e66",children:"1. \u751f\u6210 HTTPS \u8bc1\u4e66"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["\u8bc1\u4e66\u751f\u6210\u8bbf\u95ee\u4e0d\u505a\u9650\u5236\uff0c\u751f\u6210\u5b8c\u8bc1\u4e66\u540e\uff0c\u9700\u8981\u5728\u5bf9\u5e94\u7a7a\u95f4\u521b\u5efa Secret\uff0c\u4f9b whizard \u6302\u8f7d\u4f7f\u7528\u3002",(0,i.jsx)(n.strong,{children:"\u8bc1\u4e66\u751f\u6210\u65f6\u9700\u914d\u7f6e\u5176\u670d\u52a1 DNS \u57df\u540d"}),"\u3002\n\u8fd9\u91cc\u6211\u4eec\u4f7f\u7528 ",(0,i.jsx)(n.code,{children:"cert-manager"})," \u751f\u6210\u8bc1\u4e66,\u53ef\u4ee5\u76f4\u63a5\u751f\u6210\u5bf9\u5e94 Secret\uff0c\u4e5f\u53ef\u4ee5\u6362\u7528\u5176\u4ed6\u719f\u6089\u65b9\u5f0f\u914d\u7f6e\u751f\u6210\u8bc1\u4e66\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u5b89\u88c5cert-manager"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"  kubectl apply -f https://github.com/cert-manager/cert-manager/releases/download/v1.12.0/cert-manager.yaml\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["\u67e5\u770b\u90e8\u7f72\u6587\u4ef6 ",(0,i.jsx)(n.code,{children:"certificate.yaml"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"apiVersion: cert-manager.io/v1\nkind: Issuer\nmetadata:\n  name: selfsigned\n  namespace: kubesphere-monitoring-system\nspec:\n  selfSigned: {}\n---\napiVersion: cert-manager.io/v1\nkind: Certificate\nmetadata:\n  name: whizard-tls-certs\n  namespace: kubesphere-monitoring-system\nspec:\n  isCA: true\n  duration: 87600h #10 year\n  secretName: whizard-tls-assets\n  commonName: whizard-tls-assets\n  ipAddresses:\n  - 127.0.0.1\n  dnsNames:\n  - query-whizard-operated.kubesphere-monitoring-system.svc\n  - query-frontend-whizard-operated.kubesphere-monitoring-system.svc\n  - router-whizard-operated.kubesphere-monitoring-system.svc   \n  subject:\n    organizations:\n    - cluster.local\n    - cert-manager\n  issuerRef:\n    name: selfsigned\n    kind: Issuer\n    group: cert-manager.io\n---\napiVersion: cert-manager.io/v1\nkind: Issuer\nmetadata:\n  name: whizard-tls-assets\n  namespace: kubesphere-monitoring-system\nspec:\n  ca:\n    secretName: whizard-tls-assets\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["\u901a\u8fc7\u90e8\u7f72\u6587\u4ef6 ",(0,i.jsx)(n.code,{children:"certificate.yaml"})," \u5728 ",(0,i.jsx)(n.code,{children:"kubesphere-monitoring-system"})," \u7a7a\u95f4\u4e2d\u751f\u6210\u5bf9\u5e94\u6307\u5b9a\u7684 ",(0,i.jsx)(n.code,{children:"secret"}),"\u3002"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"kubectl apply -f certificate.yaml"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"issuer.cert-manager.io/selfsigned created\ncertificate.cert-manager.io/whizard-tls-certs created\nissuer.cert-manager.io/whizard-tls-assets created\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"kubectl get secret -n kubesphere-monitoring-system"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"NAME                                         TYPE                 DATA   AGE\nwhizard-tls-assets                           kubernetes.io/tls    3      25s\n"})}),"\n",(0,i.jsx)(n.h2,{id:"2--\u4e3a-whizard-\u7ec4\u4ef6-http-\u670d\u52a1\u914d\u7f6e-tls-\u8bc1\u4e66",children:"2.  \u4e3a Whizard \u7ec4\u4ef6 HTTP \u670d\u52a1\u914d\u7f6e TLS \u8bc1\u4e66"}),"\n",(0,i.jsxs)(n.p,{children:["whizard \u652f\u6301\u624b\u52a8\u4e3a\u76f8\u5173\u5e94\u7528\u7ec4\u4ef6\u914d\u7f6e TLS \u8bc1\u4e66\uff0c\u8fdb\u884c\u5b89\u5168\u52a0\u56fa\uff0c\u5141\u8bb8\u5355\u72ec\u4e3a\u4ef6\u5982 ",(0,i.jsx)(n.code,{children:"query-frontend"}),"(\u6570\u636e\u67e5\u8be2\u5165\u53e3)\u914d\u7f6e\uff0c\u4e5f\u652f\u6301\u4e3a\u5176\u4ed6\u4f7f\u7528 http \u670d\u52a1\u7684\u76f8\u5173\u7ec4\u4ef6\u8fdb\u884c\u8bbe\u7f6e\uff0c\u4ed6\u4eec\u5206\u522b\u662fquery-frontend\u3001query\u3001router\uff0c\u8bbe\u7f6e\u65b9\u6cd5\u5982\u4e0b\uff1a"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"# \u5728 queryfrontend \u7684 cr \u4e2d\u6dfb\u52a0 TLS \u8bc1\u4e66 \u914d\u7f6e\nkubectl edit queryfrontend.monitoring.whizard.io -n kubesphere-monitoring-system whizard\n\n# \u5728 query \u7684 cr \u4e2d\u6dfb\u52a0 TLS \u8bc1\u4e66 \u914d\u7f6e\nkubectl edit query.monitoring.whizard.io -n kubesphere-monitoring-system whizard\n\n# router \u7684 cr \u4e2d\u6dfb\u52a0 TLS \u8bc1\u4e66 \u914d\u7f6e\nkubectl edit router.monitoring.whizard.io -n kubesphere-monitoring-system whizard\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"spec:\n  httpServerTLSConfig:\n    certSecret:\n      name: whizard-tls-assets\n      key: tls.crt\n    keySecret:\n      name: whizard-tls-assets\n      key: tls.key\n"})}),"\n",(0,i.jsx)(n.h2,{id:"3--\u66f4\u65b0-kubesphere-config-\u4e2d\u4e0e-whizard\u5173\u8054\u7684\u8bf7\u6c42\u914d\u7f6e",children:"3.  \u66f4\u65b0 Kubesphere-config \u4e2d\u4e0e whizard\u5173\u8054\u7684\u8bf7\u6c42\u914d\u7f6e"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"kubectl edit configmap -n kubesphere-system kubesphere-config"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:'observability:\n  enabled: true\n  monitoring:\n    endpoint: https://query-frontend-whizard-operated.kubesphere-monitoring-system.svc:10902  # \u4f7f\u7528 https \u5730\u5740\u8fdb\u884c\u8bbf\u95ee \n    httpClientConfig:\n      tlsConfig:\n        insecureSkipVerify: true\nalerting:\n  endpoint: ""\n  prometheusEndpoint: ""\n  thanosRulerEndpoint: https://query-frontend-whizard-operated.kubesphere-monitoring-system.svc:10902  # \u4f7f\u7528 https \u5730\u5740\u8fdb\u884c\u8bbf\u95ee\n  thanosRulerHTTPClientConfig:\n    tlsConfig:\n      insecureSkipVerify: true\n  thanosRuleResourceLabels: ""\n'})}),"\n",(0,i.jsx)(n.h2,{id:"4-\u9a8c\u8bc1",children:"4. \u9a8c\u8bc1"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"KSE \u53ef\u89c2\u6d4b\u4e2d\u5fc3\u6982\u89c8\u9875\u529f\u80fd\u6b63\u5e38\uff0c\u4f7f\u7528 HTTPS \u7684\u7aef\u70b9\u94fe\u63a5 Whizard \u670d\u52a1\u540e\u6b63\u5e38\u4f7f\u7528\uff1b"}),"\n",(0,i.jsx)(n.li,{children:"\u5bf9\u76f8\u5173\u7ec4\u4ef6\u914d\u7f6e TLS \u540e\uff0c\u65e0\u6cd5\u4f7f\u7528 HTTP \u8bf7\u6c42\u8bbf\u95ee\uff0c\u5fc5\u987b\u4f7f\u7528 HTTPS \u534f\u8bae\u624d\u53ef\u6b63\u5e38\u8bbf\u95ee\uff1b"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"5-\u5176\u4ed6",children:"5. \u5176\u4ed6"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"\u7531\u4e8e whizard \u5185\u90e8\u670d\u52a1\u95f4\u5f00\u542f tls \u901a\u4fe1\u4e3a\u624b\u52a8\u914d\u7f6e\u7684\u9ad8\u7ea7\u529f\u80fd\uff0c\u56e0\u6b64\u914d\u7f6e\u5b8c\u6210\u540e\u9700\u8981\u5bf9 KSE \u8fdb\u884c\u914d\u7f6e\u540c\u6b65\uff0c\u53ef\u89c2\u6d4b\u4e2d\u5fc3\u9875\u9762\u65b9\u53ef\u6b63\u5e38\u4f7f\u7528\uff1b"}),"\n",(0,i.jsx)(n.li,{children:"\u5185\u90e8\u7ec4\u4ef6\u95f4\u5f00\u542f tls \u901a\u4fe1\u540e\u989d\u5916\u6d88\u8017\u5f85\u76f8\u5173\u6027\u80fd\u6d4b\u8bd5\u540e\u63d0\u4f9b\uff1b"}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>a,x:()=>c});var i=r(6540);const s={},t=i.createContext(s);function a(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);