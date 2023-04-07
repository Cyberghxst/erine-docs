"use strict";(self.webpackChunkerine=self.webpackChunkerine||[]).push([[5581],{9613:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>f});var r=t(9496);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(t),m=o,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return t?r.createElement(f,i(i({ref:n},p),{},{components:t})):r.createElement(f,i({ref:n},p))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},3508:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=t(1163),o=(t(9496),t(9613));const a={sidebar_position:4},i="Handlers",s={unversionedId:"erine@2/tips/handlers",id:"erine@2/tips/handlers",title:"Handlers",description:"Load commands and events with the built-in methods.",source:"@site/docs/erine@2/tips/handlers.md",sourceDirName:"erine@2/tips",slug:"/erine@2/tips/handlers",permalink:"/es/docs/erine@2/tips/handlers",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Cooldown",permalink:"/es/docs/erine@2/tips/cooldown"},next:{title:"Parameters",permalink:"/es/docs/erine@2/tips/parameters"}},l={},c=[{value:"Command loader",id:"command-loader",level:2},{value:"Event loader",id:"event-loader",level:2}],p={toc:c},d="wrapper";function u(e){let{components:n,...t}=e;return(0,o.kt)(d,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"handlers"},"Handlers"),(0,o.kt)("p",null,"Load commands and events with the built-in methods."),(0,o.kt)("h2",{id:"command-loader"},"Command loader"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const { ErineClient } = require('erine');\n\nconst bot = new ErineClient({\n  intents: Array<string | GatewayIntentBits>\n  owners: Array<string>\n  prefix: string | asyncFunction\n});\n\nbot.load_commands(path_to_commands);\n\nbot.login(string);\n")),(0,o.kt)("h2",{id:"event-loader"},"Event loader"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const { ErineClient } = require('erine');\n\nconst bot = new ErineClient({\n  intents: Array<string | GatewayIntentBits>\n  owners: Array<string>\n  prefix: string | asyncFunction\n});\n\nbot.load_events(path_to_events);\n\nbot.login(string);\n")))}u.isMDXComponent=!0}}]);