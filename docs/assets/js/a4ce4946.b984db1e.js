"use strict";(self.webpackChunkerine=self.webpackChunkerine||[]).push([[7584],{9613:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(9496);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),d=c(r),m=i,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(f,s(s({ref:t},p),{},{components:r})):n.createElement(f,s({ref:t},p))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,s=new Array(o);s[0]=m;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[d]="string"==typeof e?e:i,s[1]=a;for(var c=2;c<o;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8050:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var n=r(1163),i=(r(9496),r(9613));const o={sidebar_position:10},s="Restriction",a={unversionedId:"erine@latest/tips/restrictions",id:"erine@latest/tips/restrictions",title:"Restriction",description:"If you want to restrict your bot from being used by untrusted people, you must be interested in this option.",source:"@site/docs/erine@latest/tips/restrictions.md",sourceDirName:"erine@latest/tips",slug:"/erine@latest/tips/restrictions",permalink:"/docs/erine@latest/tips/restrictions",draft:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Application Command Permissions",permalink:"/docs/erine@latest/tips/app-cmd-perms"}},l={},c=[{value:"Adding a restricted ID",id:"adding-a-restricted-id",level:2},{value:"Example",id:"example",level:3},{value:"Handling restricted user/guild errors.",id:"handling-restricted-userguild-errors",level:2}],p={toc:c},d="wrapper";function u(e){let{components:t,...r}=e;return(0,i.kt)(d,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"restriction"},"Restriction"),(0,i.kt)("p",null,"If you want to restrict your bot from being used by untrusted people, you must be interested in this option."),(0,i.kt)("h2",{id:"adding-a-restricted-id"},"Adding a restricted ID"),(0,i.kt)("p",null,"In order to restrict a specific guild or user, you must create a ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set"},"set")," and add the ID to it."),(0,i.kt)("h3",{id:"example"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'new Erine({\n    restrictions: {\n        guildIDs: new Set()\n        .add("0987654321847208126"),\n        userIDs: new Set()\n        .add("1234567890172935189");\n    }\n});\n')),(0,i.kt)("h2",{id:"handling-restricted-userguild-errors"},"Handling restricted user/guild errors."),(0,i.kt)("p",null,"You must use the ",(0,i.kt)("inlineCode",{parentName:"p"},"error")," event along with the ",(0,i.kt)("inlineCode",{parentName:"p"},"RestrictedGuild"),"/",(0,i.kt)("inlineCode",{parentName:"p"},"RestrictedUser")," error classes."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"if (error instanceof Errors.RestrictedGuild) {\n    // some logic here.\n} else if (error instanceof Errors.RestrictedUser) {\n    // some logic here.\n}\n")))}u.isMDXComponent=!0}}]);