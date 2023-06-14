"use strict";(self.webpackChunkerine=self.webpackChunkerine||[]).push([[7600],{9613:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(9496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},l="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),l=u(n),d=o,f=l["".concat(s,".").concat(d)]||l[d]||m[d]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[l]="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2836:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var r=n(1163),o=(n(9496),n(9613));const a={sidebar_position:1},i="Context Menus",c={unversionedId:"erine@adv/context_menus/context_menu",id:"erine@adv/context_menus/context_menu",title:"Context Menus",description:"You can use context menus in a easy way importing the Context Menu decorator, the Maker class and the ApplicationCommandTypes enumerator.",source:"@site/docs/erine@adv/context_menus/context_menu.md",sourceDirName:"erine@adv/context_menus",slug:"/erine@adv/context_menus/context_menu",permalink:"/erine-docs/docs/erine@adv/context_menus/context_menu",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Context Menus",permalink:"/erine-docs/docs/category/context-menus"},next:{title:"Plugins",permalink:"/erine-docs/docs/category/plugins"}},s={},u=[{value:"Example",id:"example",level:2}],p={toc:u},l="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(l,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"context-menus"},"Context Menus"),(0,o.kt)("p",null,"You can use context menus in a easy way importing the ",(0,o.kt)("a",{parentName:"p",href:"http://erineadv.munlai.me/modules.html#ContextMenu"},"Context Menu")," decorator, the ",(0,o.kt)("a",{parentName:"p",href:"http://erineadv.munlai.me/classes/Maker.html"},"Maker")," class and the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.oceanic.ws/v1.7.0/enums/Constants.ApplicationCommandTypes.html"},"ApplicationCommandTypes")," enumerator."),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'const { ApplicationCommandTypes, ContextMenu, Maker } = require("erine");\n\nclass Menus extends Maker {\n    @ContextMenu(ApplicationCommandTypes.USER)\n    async avatar(interaction) {\n        // do something...\n    }\n}\n\nmodule.exports = { data: Menus };\n')))}m.isMDXComponent=!0}}]);