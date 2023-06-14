"use strict";(self.webpackChunkerine=self.webpackChunkerine||[]).push([[9014],{9613:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>y});var r=n(9496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(n),d=o,y=u["".concat(c,".").concat(d)]||u[d]||m[d]||a;return n?r.createElement(y,s(s({ref:t},p),{},{components:n})):r.createElement(y,s({ref:t},p))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:o,s[1]=i;for(var l=2;l<a;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4154:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var r=n(1163),o=(n(9496),n(9613));const a={sidebar_position:6},s="Sync slash commands",i={unversionedId:"erine@latest/tips/sync_slash_commands",id:"erine@latest/tips/sync_slash_commands",title:"Sync slash commands",description:"You need to use the sync method of the Skyfold custom class.",source:"@site/docs/erine@latest/tips/sync_slash_commands.md",sourceDirName:"erine@latest/tips",slug:"/erine@latest/tips/sync_slash_commands",permalink:"/erine-docs/docs/erine@latest/tips/sync_slash_commands",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Parameters",permalink:"/erine-docs/docs/erine@latest/tips/parameters"}},c={},l=[{value:"Usage",id:"usage",level:2},{value:"Example",id:"example",level:2}],p={toc:l},u="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"sync-slash-commands"},"Sync slash commands"),(0,o.kt)("p",null,"You need to use the ",(0,o.kt)("inlineCode",{parentName:"p"},"sync")," method of the Skyfold custom class."),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"<client>.skyfold.sync(Client#token, ClientUser#id)\n")),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const { ErineClient } = require('erine');\n\nconst bot = new ErineClient({\n    intents: Array<string | GatewayIntentBits>\n    owners: Array<string>\n    prefix: string | asyncFunction\n});\n\nbot.load_commands(path_to_commands);\nbot.on('ready', function(bot) {\n    bot.skyfold.sync(bot.token, bot.user?.id).then(() => console.log('Slash commands synced!'));\n});\n\nbot.login(string);\n")))}m.isMDXComponent=!0}}]);