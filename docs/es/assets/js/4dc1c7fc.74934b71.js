"use strict";(self.webpackChunkerine=self.webpackChunkerine||[]).push([[5870],{9613:(e,n,r)=>{r.d(n,{Zo:()=>p,kt:()=>f});var t=r(9496);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=t.createContext({}),l=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},p=function(e){var n=l(e.components);return t.createElement(c.Provider,{value:n},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(r),u=a,f=m["".concat(c,".").concat(u)]||m[u]||d[u]||o;return r?t.createElement(f,i(i({ref:n},p),{},{components:r})):t.createElement(f,i({ref:n},p))}));function f(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s[m]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}u.displayName="MDXCreateElement"},367:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var t=r(1163),a=(r(9496),r(9613));const o={sidebar_position:3},i="Prefix Commands",s={unversionedId:"erine@1/commands/prefix-commands",id:"erine@1/commands/prefix-commands",title:"Prefix Commands",description:"We have to use the PrefixBuilder class.",source:"@site/docs/erine@1/commands/prefix-commands.md",sourceDirName:"erine@1/commands",slug:"/erine@1/commands/prefix-commands",permalink:"/es/docs/erine@1/commands/prefix-commands",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Hybrid Groups",permalink:"/es/docs/erine@1/commands/hybrid-groups"},next:{title:"Slash Commands",permalink:"/es/docs/erine@1/commands/slash-commands"}},c={},l=[{value:"Usage",id:"usage",level:2},{value:"Example",id:"example",level:2}],p={toc:l},m="wrapper";function d(e){let{components:n,...r}=e;return(0,a.kt)(m,(0,t.Z)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"prefix-commands"},"Prefix Commands"),(0,a.kt)("p",null,"We have to use the PrefixBuilder class."),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const body = {\n    data: PrefixBuilder\n    plugins?: Array<Plugins>\n    params?: ParamsBuilder\n    code: AsyncFunction\n}\n")),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const { PrefixBuilder } = require('erine');\n\nconst body = {\n    data: new PrefixBuilder()\n        .setNames('ping')\n        .setDescription('Returns the bot websocket latency.'),\n    async code(context) {\n        await context.send({ content: `My websocket latency is: ${context.bot.ws.ping} ms` });\n    }\n}\n\nmodule.exports = { body } // Important to be named body.\n")))}d.isMDXComponent=!0}}]);