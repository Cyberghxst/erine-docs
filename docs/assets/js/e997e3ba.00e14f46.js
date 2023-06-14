"use strict";(self.webpackChunkerine=self.webpackChunkerine||[]).push([[9185],{9613:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>f});var r=t(9496);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(t),m=o,f=u["".concat(c,".").concat(m)]||u[m]||p[m]||a;return t?r.createElement(f,i(i({ref:n},d),{},{components:t})):r.createElement(f,i({ref:n},d))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2716:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=t(1163),o=(t(9496),t(9613));const a={sidebar_position:2},i="Group Builder",s={unversionedId:"erine@latest/commands/group_builder",id:"erine@latest/commands/group_builder",title:"Group Builder",description:"GroupBuilder is the class for creating groups of commands.",source:"@site/docs/erine@latest/commands/group_builder.md",sourceDirName:"erine@latest/commands",slug:"/erine@latest/commands/group_builder",permalink:"/erine-docs/docs/erine@latest/commands/group_builder",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Command Builder",permalink:"/erine-docs/docs/erine@latest/commands/command_builder"},next:{title:"Events",permalink:"/erine-docs/docs/category/events"}},c={},l=[{value:"Usage",id:"usage",level:2},{value:"Example",id:"example",level:2}],d={toc:l},u="wrapper";function p(e){let{components:n,...t}=e;return(0,o.kt)(u,(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"group-builder"},"Group Builder"),(0,o.kt)("p",null,"GroupBuilder is the class for creating groups of commands."),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const body = {\n    data: GroupBuilder\n}\n")),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const { CommandBuilder, GroupBuilder } = require(\"erine\");\n\nconst body = {\n    data: new GroupBuilder()\n        .setName('parent')\n        .setDescription('A pack of subcommands.')\n        .allowPrefix(false)\n        .allowSlash(true)\n        .addCommand({\n            data: new CommandBuilder()\n                .setName('child-one')\n                .setDescription(\"I'm the first command of this group.\"),\n            async code(context) {\n                await context.send(`My parent is ${context.parent.name}.`)\n            }\n        })\n        .addCommand({\n            data: new CommandBuilder()\n                .setName('child-two')\n                .setDescription(\"I'm the second command of this group.\"),\n            async code(context) {\n                await context.send(`My parent is ${context.parent.name}.`)\n            }\n        })\n        // Every .addCommand(...) represents a subcommand.\n}\n\nmodule.exports = { body } // Important to be named \"body\".\n")))}p.isMDXComponent=!0}}]);