"use strict";(self.webpackChunkerine=self.webpackChunkerine||[]).push([[7218],{9613:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>v});var n=t(9496);function s(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){s(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,s=function(e,r){if(null==e)return{};var t,n,s={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(s[t]=e[t]);return s}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var i=n.createContext({}),c=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},u=function(e){var r=c(e.components);return n.createElement(i.Provider,{value:r},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,s=e.mdxType,a=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(t),m=s,v=d["".concat(i,".").concat(m)]||d[m]||p[m]||a;return t?n.createElement(v,o(o({ref:r},u),{},{components:t})):n.createElement(v,o({ref:r},u))}));function v(e,r){var t=arguments,s=r&&r.mdxType;if("string"==typeof e||s){var a=t.length,o=new Array(a);o[0]=m;var l={};for(var i in r)hasOwnProperty.call(r,i)&&(l[i]=r[i]);l.originalType=e,l[d]="string"==typeof e?e:s,o[1]=l;for(var c=2;c<a;c++)o[c]=t[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2664:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=t(1163),s=(t(9496),t(9613));const a={sidebar_position:1},o="Errors",l={unversionedId:"erine@adv/errors/errors",id:"erine@adv/errors/errors",title:"Errors",description:"To handle errors from Erine's custom errors, you can use this class in conjunction with the error event.",source:"@site/docs/erine@adv/errors/errors.md",sourceDirName:"erine@adv/errors",slug:"/erine@adv/errors/",permalink:"/erine-docs/docs/erine@adv/errors/",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Error handling",permalink:"/erine-docs/docs/category/error-handling"},next:{title:"Maker",permalink:"/erine-docs/docs/category/maker"}},i={},c=[{value:"Error Classes",id:"error-classes",level:2},{value:"Client-oriented classes",id:"client-oriented-classes",level:3},{value:"Command-oriented classes",id:"command-oriented-classes",level:3},{value:"Guild-oriented classes",id:"guild-oriented-classes",level:3},{value:"Parameter-oriented classes",id:"parameter-oriented-classes",level:3},{value:"Process-oriented classes",id:"process-oriented-classes",level:3},{value:"User-oriented classes",id:"user-oriented-classes",level:3},{value:"Example",id:"example",level:2}],u={toc:c},d="wrapper";function p(e){let{components:r,...t}=e;return(0,s.kt)(d,(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"errors"},"Errors"),(0,s.kt)("p",null,"To handle errors from Erine's custom errors, you can use this class in conjunction with the error event."),(0,s.kt)("h2",{id:"error-classes"},"Error Classes"),(0,s.kt)("h3",{id:"client-oriented-classes"},"Client-oriented classes"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Errors.MissingBotChannelPermission"),(0,s.kt)("li",{parentName:"ul"},"Errors.MissingBotPermission")),(0,s.kt)("h3",{id:"command-oriented-classes"},"Command-oriented classes"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Errors.CommandNotFound")),(0,s.kt)("h3",{id:"guild-oriented-classes"},"Guild-oriented classes"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Errors.GuildOnly"),(0,s.kt)("li",{parentName:"ul"},"Errors.MissingPermission"),(0,s.kt)("li",{parentName:"ul"},"Errors.MissingChannelPermission"),(0,s.kt)("li",{parentName:"ul"},"Errors.NotInChannelType")),(0,s.kt)("h3",{id:"parameter-oriented-classes"},"Parameter-oriented classes"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Errors.NotParamBoolean"),(0,s.kt)("li",{parentName:"ul"},"Errors.NotParamNumber"),(0,s.kt)("li",{parentName:"ul"},"Errors.InvalidParamChoice"),(0,s.kt)("li",{parentName:"ul"},"Errors.InvalidParamMember"),(0,s.kt)("li",{parentName:"ul"},"Errors.InvalidParamChannel"),(0,s.kt)("li",{parentName:"ul"},"Errors.InvalidParamRole"),(0,s.kt)("li",{parentName:"ul"},"Errors.InvalidChannelType"),(0,s.kt)("li",{parentName:"ul"},"Errors.MissingRequiredParam")),(0,s.kt)("h3",{id:"process-oriented-classes"},"Process-oriented classes"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Errors.UnknownCommandError")),(0,s.kt)("h3",{id:"user-oriented-classes"},"User-oriented classes"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Errors.NotNSFW"),(0,s.kt)("li",{parentName:"ul"},"Errors.OnlyForIDs"),(0,s.kt)("li",{parentName:"ul"},"Errors.NotOwner")),(0,s.kt)("h2",{id:"example"},"Example"),(0,s.kt)("p",null,"Go check ",(0,s.kt)("a",{parentName:"p",href:"http://cyberghxst.github.io/erine-docs/docs/erine@adv/maker/creating_events#error"},"Maker")))}p.isMDXComponent=!0}}]);