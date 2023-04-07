"use strict";(self.webpackChunkerine=self.webpackChunkerine||[]).push([[595],{9613:(e,r,n)=>{n.d(r,{Zo:()=>u,kt:()=>f});var t=n(9496);function s(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function a(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){s(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,t,s=function(e,r){if(null==e)return{};var n,t,s={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(s[n]=e[n]);return s}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var i=t.createContext({}),c=function(e){var r=t.useContext(i),n=r;return e&&(n="function"==typeof e?e(r):a(a({},r),e)),n},u=function(e){var r=c(e.components);return t.createElement(i.Provider,{value:r},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},p=t.forwardRef((function(e,r){var n=e.components,s=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),p=s,f=d["".concat(i,".").concat(p)]||d[p]||m[p]||o;return n?t.createElement(f,a(a({ref:r},u),{},{components:n})):t.createElement(f,a({ref:r},u))}));function f(e,r){var n=arguments,s=r&&r.mdxType;if("string"==typeof e||s){var o=n.length,a=new Array(o);a[0]=p;var l={};for(var i in r)hasOwnProperty.call(r,i)&&(l[i]=r[i]);l.originalType=e,l[d]="string"==typeof e?e:s,a[1]=l;for(var c=2;c<o;c++)a[c]=n[c];return t.createElement.apply(null,a)}return t.createElement.apply(null,n)}p.displayName="MDXCreateElement"},130:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>i,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var t=n(1163),s=(n(9496),n(9613));const o={sidebar_position:1},a="Errors",l={unversionedId:"erine@1/errors/errors",id:"erine@1/errors/errors",title:"Errors",description:"To handle errors from Erine's custom classes, you can use this class in conjunction with the contextError event.",source:"@site/docs/erine@1/errors/errors.md",sourceDirName:"erine@1/errors",slug:"/erine@1/errors/",permalink:"/docs/erine@1/errors/",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Error handling",permalink:"/docs/category/error-handling"},next:{title:"Events",permalink:"/docs/category/events"}},i={},c=[{value:"Error Classes",id:"error-classes",level:2},{value:"Client-oriented classes",id:"client-oriented-classes",level:3},{value:"Command-oriented classes",id:"command-oriented-classes",level:3},{value:"Guild-oriented classes",id:"guild-oriented-classes",level:3},{value:"Parameter-oriented classes",id:"parameter-oriented-classes",level:3},{value:"Process-oriented classes",id:"process-oriented-classes",level:3},{value:"User-oriented classes",id:"user-oriented-classes",level:3},{value:"Example",id:"example",level:2}],u={toc:c},d="wrapper";function m(e){let{components:r,...n}=e;return(0,s.kt)(d,(0,t.Z)({},u,n,{components:r,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"errors"},"Errors"),(0,s.kt)("p",null,"To handle errors from Erine's custom classes, you can use this class in conjunction with the contextError event."),(0,s.kt)("h2",{id:"error-classes"},"Error Classes"),(0,s.kt)("h3",{id:"client-oriented-classes"},"Client-oriented classes"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Errors.MissingBotChannelPermission"),(0,s.kt)("li",{parentName:"ul"},"Errors.MissingBotPermission")),(0,s.kt)("h3",{id:"command-oriented-classes"},"Command-oriented classes"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Errors.CommandNotFound")),(0,s.kt)("h3",{id:"guild-oriented-classes"},"Guild-oriented classes"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Errors.GuildOnly"),(0,s.kt)("li",{parentName:"ul"},"Errors.MissingPermission"),(0,s.kt)("li",{parentName:"ul"},"Errors.MissingChannelPermission"),(0,s.kt)("li",{parentName:"ul"},"Errors.NotInChannelType")),(0,s.kt)("h3",{id:"parameter-oriented-classes"},"Parameter-oriented classes"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Errors.NotParamBoolean"),(0,s.kt)("li",{parentName:"ul"},"Errors.NotParamNumber"),(0,s.kt)("li",{parentName:"ul"},"Errors.InvalidParamChoice"),(0,s.kt)("li",{parentName:"ul"},"Errors.InvalidParamMember"),(0,s.kt)("li",{parentName:"ul"},"Errors.InvalidParamChannel"),(0,s.kt)("li",{parentName:"ul"},"Errors.InvalidParamRole"),(0,s.kt)("li",{parentName:"ul"},"Errors.InvalidChannelType"),(0,s.kt)("li",{parentName:"ul"},"Errors.MissingRequiredParam")),(0,s.kt)("h3",{id:"process-oriented-classes"},"Process-oriented classes"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Errors.UnknownCommandError")),(0,s.kt)("h3",{id:"user-oriented-classes"},"User-oriented classes"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Errors.NotNSFW"),(0,s.kt)("li",{parentName:"ul"},"Errors.OnlyForIDs"),(0,s.kt)("li",{parentName:"ul"},"Errors.NotOwner")),(0,s.kt)("h2",{id:"example"},"Example"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"const { Errors } = require('erine');\n\nconst event = {\n    name: 'contextError',\n    async code(err) {\n        if (err instanceof Errors.CommandNotFound) {\n            err.ctx.send('Command not found!');\n        } else if (err instanceof Errors.NotNSFW) {\n            err.ctx.send('The channel must be NSFW!');\n        } else if (err instanceof Errors.NotOwner) {\n            err.ctx.send('You\\'re not my owner.');\n        } else {\n            console.log(err);\n        }\n    }\n}\n\nmodule.exports = { event }\n")))}m.isMDXComponent=!0}}]);