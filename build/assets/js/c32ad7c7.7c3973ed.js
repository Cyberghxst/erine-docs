"use strict";(self.webpackChunkerine=self.webpackChunkerine||[]).push([[5906],{9613:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>g});var r=t(9496);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var o=r.createContext({}),u=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(o.Provider,{value:n},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,l=e.originalType,o=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),c=u(t),d=i,g=c["".concat(o,".").concat(d)]||c[d]||m[d]||l;return t?r.createElement(g,s(s({ref:n},p),{},{components:t})):r.createElement(g,s({ref:n},p))}));function g(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=t.length,s=new Array(l);s[0]=d;var a={};for(var o in n)hasOwnProperty.call(n,o)&&(a[o]=n[o]);a.originalType=e,a[c]="string"==typeof e?e:i,s[1]=a;for(var u=2;u<l;u++)s[u]=t[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},42:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>a,toc:()=>u});var r=t(1163),i=(t(9496),t(9613));const l={sidebar_position:1},s="Plugins",a={unversionedId:"erine@1/plugins/plugins",id:"erine@1/plugins/plugins",title:"Plugins",description:"Erine has plugins available to save you some work when creating commands.",source:"@site/docs/erine@1/plugins/plugins.md",sourceDirName:"erine@1/plugins",slug:"/erine@1/plugins/",permalink:"/docs/erine@1/plugins/",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Plugins",permalink:"/docs/category/plugins"},next:{title:"Tips",permalink:"/docs/category/tips"}},o={},u=[{value:"Plugin List",id:"plugin-list",level:2},{value:"Client-oriented plugins",id:"client-oriented-plugins",level:3},{value:"Guild-oriented plugins",id:"guild-oriented-plugins",level:3},{value:"Member-oriented plugins",id:"member-oriented-plugins",level:3},{value:"Example",id:"example",level:2}],p={toc:u},c="wrapper";function m(e){let{components:n,...t}=e;return(0,i.kt)(c,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"plugins"},"Plugins"),(0,i.kt)("p",null,"Erine has plugins available to save you some work when creating commands."),(0,i.kt)("p",null,"To handle plugins errors, use the ",(0,i.kt)("inlineCode",{parentName:"p"},"contextError")," event."),(0,i.kt)("h2",{id:"plugin-list"},"Plugin List"),(0,i.kt)("h3",{id:"client-oriented-plugins"},"Client-oriented plugins"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Plugins.hasAnyBotPerms(...PermissionResolvable)"),(0,i.kt)("li",{parentName:"ul"},"Plugins.hasAnyBotChannelPerms(...PermissionResolvable)"),(0,i.kt)("li",{parentName:"ul"},"Plugins.hasBotPerms(...PermissionResolvable)"),(0,i.kt)("li",{parentName:"ul"},"Plugins.hasBotPermsInChannel(...PermissionResolvable)")),(0,i.kt)("h3",{id:"guild-oriented-plugins"},"Guild-oriented plugins"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Plugins.isGuild"),(0,i.kt)("li",{parentName:"ul"},"Plugins.isNSFW"),(0,i.kt)("li",{parentName:"ul"},"Plugins.isInChannelType")),(0,i.kt)("h3",{id:"member-oriented-plugins"},"Member-oriented plugins"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Plugins.cooldown(number, Bucket)"),(0,i.kt)("li",{parentName:"ul"},"Plugins.hasAnyPerms(...PermissionResolvable)"),(0,i.kt)("li",{parentName:"ul"},"Plugins.hasAnyChannelPerms(...PermissionResolvable)"),(0,i.kt)("li",{parentName:"ul"},"Plugins.hasPerms(...PermissionResolvable)"),(0,i.kt)("li",{parentName:"ul"},"Plugins.hasPermsInChannel(...PermissionResolvable)"),(0,i.kt)("li",{parentName:"ul"},"Plugins.isOwner"),(0,i.kt)("li",{parentName:"ul"},"Plugins.onlyForIDs(...Snowflake)")),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"const { Bucket, HybridBuilder, Plugins } = require('erine');\n\nconst body = {\n    data: new HybridBuilder()\n        .setName('eval')\n        .setDescription('Evals the provided code.'),\n    plugins: [Plugins.isOwner, Plugins.cooldown(5000, Bucket.User)],\n    async (context) {\n        // Code here...\n    }\n}\n\nmodule.exports = { body }\n")))}m.isMDXComponent=!0}}]);