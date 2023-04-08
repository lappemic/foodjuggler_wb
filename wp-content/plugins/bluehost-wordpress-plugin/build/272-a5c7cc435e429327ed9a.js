"use strict";(globalThis.webpackChunkbluehostPlugin=globalThis.webpackChunkbluehostPlugin||[]).push([[272],{272:(e,t,l)=>{l.r(t),l.d(t,{default:()=>S});var a=l(9307),s=l(9818);const n=e=>{let{children:t,className:l=""}=e;return(0,a.createElement)("div",{className:"settings-group "+l},t)};var o=l(7462),r=l(5784);const c=e=>{let{name:t,children:l,className:s="",...n}=e;return(0,a.createElement)("div",(0,o.Z)({className:"settings-section "+s},n),(0,a.createElement)(r.qc,{level:"h3",size:1,className:"settings-section__title"},t),l)},i=e=>{let{children:t}=e;return(0,a.createElement)("div",{className:"settings-control"},t)},u=e=>{let{label:t,checked:l,onChange:s}=e;return(0,a.createElement)(i,null,(0,a.createElement)("div",{className:"label"},(0,a.createElement)("label",null,t)),(0,a.createElement)("div",{className:"toggle"},(0,a.createElement)(r.Q0,{checked:l,label:t,onChange:s})))};var g=l(5736),m=l(4333);const p=(0,m.compose)((0,s.withSelect)((e=>({core:e("bluehost/plugin").getSetting("autoUpdatesMajorCore"),themes:e("bluehost/plugin").getSetting("autoUpdatesThemes"),plugins:e("bluehost/plugin").getSetting("autoUpdatesPlugins")}))),(0,s.withDispatch)((e=>({toggleSetting:e("bluehost/plugin").toggleSetting}))))((e=>{let{core:t,themes:l,plugins:s,toggleSetting:o}=e;return(0,a.createElement)(c,{name:(0,g.__)("Automatic Updates","bluehost-wordpress-plugin")},(0,a.createElement)(n,null,(0,a.createElement)(u,{label:(0,g.__)("WordPress Core","bluehost-wordpress-plugin"),checked:t,onChange:()=>o("autoUpdatesMajorCore")}),(0,a.createElement)(u,{label:(0,g.__)("Themes","bluehost-wordpress-plugin"),checked:l,onChange:()=>o("autoUpdatesThemes")}),(0,a.createElement)(u,{label:(0,g.__)("Plugins","bluehost-wordpress-plugin"),checked:s,onChange:()=>o("autoUpdatesPlugins")})))}));var h=l(3127),d=l(5609);const b=e=>{let{label:t,options:l,value:s,onChange:n,...r}=e;return(0,a.createElement)(i,null,(0,a.createElement)("div",{className:"label"},(0,a.createElement)("label",null,t)),(0,a.createElement)("div",{className:"toggle"},(0,a.createElement)(d.SelectControl,(0,o.Z)({},r,{onChange:n,options:l,value:s}))))},v=(0,m.compose)((0,s.withSelect)((e=>({oldPostComments:e("bluehost/plugin").getSetting("disableCommentsOldPosts"),closeInterval:e("bluehost/plugin").getSetting("closeCommentsDays"),perPage:e("bluehost/plugin").getSetting("commentsPerPage")}))),(0,s.withDispatch)((e=>({toggleSetting:e("bluehost/plugin").toggleSetting,updateSetting:e("bluehost/plugin").updateSetting}))))((e=>{let{oldPostComments:t,closeInterval:l,perPage:s,toggleSetting:o,updateSetting:r}=e;const i=(0,a.createElement)("span",null,(0,g.__)("Close comments after ","bluehost-wordpress-plugin")," ",(0,a.createElement)("strong",null,l),(0,g._n)(" day"," days",l,"bluehost-wordpress-plugin")),m=(0,a.createElement)("span",null,(0,g.__)("Display ","bluehost-wordpress-plugin")," ",(0,a.createElement)("strong",null,s)," ",(0,g._n)("comment per page","comments per page",s,"bluehost-wordpress-plugin"));return(0,a.createElement)(c,{name:(0,g.__)("Comments","bluehost-wordpress-plugin")},(0,a.createElement)(n,null,(0,a.createElement)(u,{label:(0,g.__)("Disable comments for old posts","bluehost-wordpress-plugin"),checked:t,onChange:()=>o("disableCommentsOldPosts")}),(0,a.createElement)(b,{"aria-label":"Close comments after x days",label:i,value:l,onChange:e=>r("closeCommentsDays",e),options:[{label:"1",value:"1"},{label:"3",value:"3"},{label:"5",value:"5"},{label:"7",value:"7"},{label:"10",value:"10"},{label:"14",value:"14"},{label:"20",value:"20"},{label:"28",value:"28"},{label:"30",value:"30"},{label:"50",value:"50"},{label:"100",value:"100"}]}),(0,a.createElement)(b,{"aria-label":"Display x comments per page",label:m,value:s,onChange:e=>r("commentsPerPage",e),options:[{label:"10",value:10},{label:"15",value:15},{label:"20",value:20},{label:"30",value:30},{label:"50",value:50}]})))})),E=(0,m.compose)((0,s.withSelect)((e=>({revisions:e("bluehost/plugin").getSetting("contentRevisions"),trashInterval:e("bluehost/plugin").getSetting("emptyTrashDays")}))),(0,s.withDispatch)((e=>({updateSetting:e("bluehost/plugin").updateSetting}))))((e=>{let{revisions:t,trashInterval:l,updateSetting:s}=e;const o=Math.floor(l/7),r=(0,a.createElement)("span",null,(0,g.__)("Empty the trash every ","bluehost-wordpress-plugin")," ",(0,a.createElement)("strong",null,o)," ",(0,g._n)("week","weeks",o,"bluehost-wordpress-plugin")),i=(0,a.createElement)("span",null,(0,g.__)("Keep ","bluehost-wordpress-plugin")," ",(0,a.createElement)("strong",null,t)," ",(0,g._n)(" latest revision","latest revisions",t,"bluehost-wordpress-plugin"));return(0,a.createElement)(c,{name:(0,g.__)("Content","bluehost-wordpress-plugin")},(0,a.createElement)(n,null,(0,a.createElement)(b,{"aria-label":"Keep x latest revisions",label:i,value:t,onChange:e=>s("contentRevisions",e),options:[{label:"5",value:"5"},{label:"10",value:"10"},{label:"20",value:"20"},{label:"40",value:"40"}]}),(0,a.createElement)(b,{"aria-label":"Empty the trash every x weeks",label:r,value:l,onChange:e=>s("emptyTrashDays",e),options:[{label:"1",value:"7"},{label:"2",value:"14"},{label:"3",value:"21"},{label:"4",value:"30"}]})))})),_=e=>{let{value:t,cacheLevel:l,label:n,desc:o}=e;const r="cache-level-"+t.toString(),c=t===l;return(0,a.createElement)("div",{className:"row"},(0,a.createElement)("input",{id:r,type:"radio",name:"cache-level",className:"radio",value:t,checked:c,onChange:e=>{(0,s.dispatch)("bluehost/plugin").updateSetting("cacheLevel",parseInt(e.target.value,10))}}),(0,a.createElement)("div",{className:"details"},(0,a.createElement)("label",{htmlFor:r},n),(0,a.createElement)("p",null,o)))},w=(0,m.compose)((0,s.withSelect)((e=>({cacheLevel:e("bluehost/plugin").getSetting("cacheLevel")}))),(0,s.withDispatch)((e=>({updateSetting:e("bluehost/plugin").updateSetting}))))((e=>{let{cacheLevel:t,updateSetting:l}=e;const s=t>0,n=s?"":"hidden";return(0,a.createElement)(c,{name:"Performance",className:"performance"},(0,a.createElement)("div",{className:"caching"},(0,a.createElement)(r.qc,{level:"h4",size:2,className:"caching__title"},(0,g.__)("Caching","bluehost-wordpress-plugin")),(0,a.createElement)(r.Q0,{checked:s,label:"Toggle Caching",onChange:()=>{l("cacheLevel",s?0:2)}}),(0,a.createElement)("p",null,(0,g.__)("Boost speed and performance by storing a copy of your website content, files, and images online so the pages of your website load faster for your visitors.","bluehost-wordpress-plugin")),(0,a.createElement)("div",{className:"cache-settings "+n},(0,a.createElement)("div",{className:"cache-level"},(0,a.createElement)(r.qc,{level:"h5",size:3,className:"caching__subtitle"},(0,g.__)("Caching Level","bluehost-wordpress-plugin")),(0,a.createElement)(_,{value:1,cacheLevel:t,label:(0,g.__)("Assets Only","bluehost-wordpress-plugin"),desc:(0,g.__)("Cache static assets like images and the appearance of your site for 1 hour. Recommended for ecommerce and sites that update frequently or display info in real-time.","bluehost-wordpress-plugin")}),(0,a.createElement)(_,{value:2,cacheLevel:t,label:(0,g.__)("Assets & Web Pages","bluehost-wordpress-plugin"),desc:(0,g.__)("Cache static assets for 24 hours and web pages for 2 hours. Recommended for blogs, educational sites, and sites that update at least weekly.","bluehost-wordpress-plugin")}),(0,a.createElement)(_,{value:3,cacheLevel:t,label:(0,g.__)("Assets & Web Pages - Extended","bluehost-wordpress-plugin"),desc:(0,g.__)("Cache static assets for 1 week and web pages for 8 hours. Recommended for portfolios, brochure sites, and sites that update monthly or less often.","bluehost-wordpress-plugin")})),(0,a.createElement)(r.qc,{level:"h4",size:3,className:"caching__subtitle"},(0,g.__)("Manage Cache","bluehost-wordpress-plugin")),(0,a.createElement)("p",null,(0,g.__)("If you’ve recently updated your website, we recommend clearing the site cache. We’ll fetch a fresh version of your site to cache.","bluehost-wordpress-plugin")),(0,a.createElement)(r.I9,{isPrimary:!0},(0,g.__)("Clear Everything","bluehost-wordpress-plugin")))))})),C=(0,m.compose)((0,s.withSelect)((e=>({isComingSoon:Boolean(e("bluehost/plugin").getSetting("comingSoon"))}))),(0,s.withDispatch)((e=>({toggleSetting:e("bluehost/plugin").toggleSetting}))))((e=>{let{isComingSoon:t,toggleSetting:l}=e;return(0,a.createElement)(c,{name:(0,g.__)("Site Controls","bluehost-wordpress-plugin")},(0,a.createElement)(n,null,(0,a.createElement)(u,{label:(0,g.__)("Coming Soon Page","bluehost-wordpress-plugin"),checked:t,onChange:()=>l("comingSoon")})))})),S=()=>(0,a.createElement)(h.r,{className:"page-settings"},(0,a.createElement)(r.qc,{level:"h2",size:0},(0,g.__)("Settings","bluehost-wordpress-plugin")),(0,a.createElement)("div",{className:"settings-wrap"},(0,a.createElement)("div",{className:"page-settings__grid1"},(0,a.createElement)(p,null),(0,a.createElement)(C,null),(0,a.createElement)(v,null),(0,a.createElement)(E,null)),(0,a.createElement)("div",{className:"page-settings__grid2"},(0,a.createElement)(w,null))))}}]);