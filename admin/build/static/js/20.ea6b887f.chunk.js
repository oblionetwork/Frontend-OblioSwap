(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[20],{1380:function(e,n,t){"use strict";t.r(n);var a=t(1),o=t.n(a),c=t(19),i=t(20),r=t(696),l=t(809),s=t(18),u=Object(s.jsx)("div",{className:"pt-3 text-center",children:Object(s.jsx)("div",{className:"sk-spinner sk-spinner-pulse"})}),m=function(){return Object(s.jsx)("main",{className:"c-main",children:Object(s.jsx)(r.w,{fluid:!0,children:Object(s.jsx)(a.Suspense,{fallback:u,children:Object(s.jsxs)(i.d,{children:[l.a.map((function(e,n){return e.component&&Object(s.jsx)(i.b,{path:e.path,exact:e.exact,name:e.name,render:function(n){return Object(s.jsx)(r.H,{children:Object(s.jsx)(e.component,Object(c.a)({},n))})}},n)})),Object(s.jsx)(i.a,{from:"/",to:"/dashboard"})]})})})})},d=o.a.memo(m),h=t(128),p=t(77),b=t.n(p),j=t(130).b.siteSettingsURL(),f=function(){var e=Object(a.useState)(""),n=Object(h.a)(e,2),t=n[0],o=n[1];return Object(a.useEffect)((function(){b.a.get(j+"getsitesettings").then((function(e){o(e.data.result.copyRightsText)})).catch((function(e){return console.error(e)}))}),[]),Object(s.jsx)(r.I,{fixed:!1,children:Object(s.jsx)("div",{children:Object(s.jsxs)("span",{className:"ml-1",children:["\xa9",t]})})})},x=o.a.memo(f),y=t(71),g=t(703),O=function(){var e=Object(y.b)(),n=Object(y.c)((function(e){return e.sidebarShow}));return Object(s.jsxs)(r.M,{withSubheader:!0,children:[Object(s.jsx)(r.Nb,{inHeader:!0,className:"ml-md-3 d-lg-none",onClick:function(){var t=!![!1,"responsive"].includes(n)||"responsive";e({type:"set",sidebarShow:t})}}),Object(s.jsx)(r.Nb,{inHeader:!0,className:"ml-3 d-md-down-none",onClick:function(){var t=![!0,"responsive"].includes(n)&&"responsive";e({type:"set",sidebarShow:t})}}),Object(s.jsx)(r.N,{className:"mx-auto d-lg-none",to:"/",children:Object(s.jsxs)("h3",{children:["  ",Object(s.jsx)("i",{style:{color:"#0d6efd",textDecoration:"none important"},children:"Xpocket"})]})}),Object(s.jsx)(r.O,{className:"d-md-down-none mr-auto"}),Object(s.jsx)(r.O,{className:"px-3",children:Object(s.jsx)(w,{})})]})},z=t(981),v=t(982),P=t(725),w=function(){var e=Object(i.g)(),n=Object(y.b)();Object(a.useCallback)((function(e){n(Object(P.e)(e.target.value))}),[]);return Object(s.jsxs)(r.z,{inNav:!0,className:"c-header-nav-items mx-2",direction:"down",children:[Object(s.jsx)("div",{style:{display:"flex",width:"187px",position:"relative",alignItems:"end"},children:Object(s.jsxs)(r.E,{className:"c-header-nav-link",caret:!1,children:[Object(s.jsx)("h6",{style:{marginTop:"10px",marginRight:"10px",alignItems:"center"},children:"Welcome Admin!"}),Object(s.jsx)("div",{className:"c-avatar",children:Object(s.jsx)(r.P,{src:"avatars/8.jpg",className:"c-avatar-img",alt:"admin@bootstrapmaster.com"})})]})}),Object(s.jsxs)(r.D,{className:"pt-0",placement:"bottom-end",children:[Object(s.jsx)(r.C,{header:!0,tag:"div",color:"light",className:"text-center",children:Object(s.jsx)("strong",{children:" Settings"})}),Object(s.jsxs)(r.C,{onClick:function(){e.push("/F3WIBjoms3ojEq6lKrACw")},children:[Object(s.jsx)(g.a,{name:"cil-settings",className:"mfe-2"}),"Site Settings"]}),Object(s.jsxs)(r.C,{onClick:function(){e.push("/h97OyItcsXWDJbqqMWAG8g")},children:[Object(s.jsx)(z.a,{}),"\xa0 Security"]}),Object(s.jsx)(r.C,{divider:!0}),Object(s.jsxs)(r.C,{onClick:function(){window.confirm("Are you sure want to logout?")&&(e.push("/login"),localStorage.clear())},children:[Object(s.jsx)(v.a,{})," \xa0 Log out"]})]})]})},N=t(765),S=t(862),C=t(861),k=t(983),I=[{_tag:"CSidebarNavItem",name:"Currency Management",to:"/32Ygwi0SI34xf9e0CnspEA",icon:Object(s.jsx)(N.b,{style:{marginRight:"1rem",Color:"white",width:"25px",height:"25px"}})},{_tag:"CSidebarNavItem",name:"CMS",to:"/cms",icon:Object(s.jsx)(C.a,{style:{marginRight:"1rem",width:"25px",height:"25px"}})},{_tag:"CSidebarNavDropdown",name:"History",icon:Object(s.jsx)(S.b,{style:{marginRight:"1rem",width:"25px",height:"25px"}}),_children:[{_tag:"CSidebarNavItem",name:"Liquidity History",to:"/GeBjTFRSjTRvRsJPkkAI0FcTEw6YazYcBP9K6M",icon:Object(s.jsx)(k.a,{style:{marginRight:"0.5rem",Color:"white",fontSize:"1.1rem",width:"25px",height:"25px"}})},{_tag:"CSidebarNavItem",name:"Swap History",to:"/nYd2gLOTYBlkLQD32ra6g",icon:Object(s.jsx)(N.a,{style:{marginRight:"0.5rem",fontSize:"18px",Color:"white",width:"25px",height:"25px"}})}]},{_tag:"CSidebarNavItem",name:"Whitelist",to:"/EGPa6kMKsf6rchOZy0kgVw",icon:Object(s.jsx)(S.a,{style:{marginRight:"1rem",fontSize:"22px",marginLeft:"-5px",width:"25px",height:"25px"}})}],B=function(){var e=Object(y.b)(),n=Object(y.c)((function(e){return e.sidebarShow}));return Object(s.jsxs)(r.wb,{show:n,onShowChange:function(n){return e({type:"set",sidebarShow:n})},className:"sidebar-cui",children:[Object(s.jsx)(r.xb,{className:"sidebar-text",to:"/32Ygwi0SI34xf9e0CnspEA",children:Object(s.jsx)("h5",{className:"c-sidebar-brand-full",children:Object(s.jsx)("i",{children:"XPocket"})})}),Object(s.jsx)(r.zb,{children:Object(s.jsx)(r.x,{items:I,components:{CSidebarNavDivider:r.Ab,CSidebarNavDropdown:r.Bb,CSidebarNavItem:r.Cb,CSidebarNavTitle:r.Db}})}),Object(s.jsx)(r.yb,{className:"c-d-md-down-none"})]})},A=o.a.memo(B);n.default=function(){return Object(s.jsx)(s.Fragment,{children:localStorage.getItem("auth")?Object(s.jsxs)("div",{className:"c-app c-default-layout",children:[Object(s.jsx)(A,{}),Object(s.jsxs)("div",{className:"c-wrapper",children:[Object(s.jsx)(O,{}),Object(s.jsx)("div",{className:"c-body",children:Object(s.jsx)(d,{})}),Object(s.jsx)(x,{})]})]}):Object(s.jsx)("div",{children:Object(s.jsx)("div",{className:"c-body",children:Object(s.jsx)(d,{})})})})}},725:function(e,n,t){"use strict";t.d(n,"d",(function(){return o})),t.d(n,"c",(function(){return c})),t.d(n,"f",(function(){return i})),t.d(n,"a",(function(){return r})),t.d(n,"b",(function(){return l})),t.d(n,"g",(function(){return s})),t.d(n,"e",(function(){return u}));var a=t(59),o=function(e){return{type:a.d,payload:e}},c=function(e){return{type:a.c,payload:e}},i=function(e){return{type:a.g,payload:e}},r=function(e){return{type:a.a,payload:e}},l=function(e){return{type:a.b,payload:e}},s=function(e){return{type:a.e,payload:e}},u=function(e){return{type:a.f,payload:e}}},809:function(e,n,t){"use strict";var a=t(1),o=t.n(a),c=(t(860),o.a.lazy((function(){return t.e(22).then(t.bind(null,987))}))),i=o.a.lazy((function(){return t.e(21).then(t.bind(null,988))})),r=o.a.lazy((function(){return t.e(25).then(t.bind(null,989))})),l=o.a.lazy((function(){return t.e(26).then(t.bind(null,990))})),s=o.a.lazy((function(){return t.e(27).then(t.bind(null,991))})),u=o.a.lazy((function(){return t.e(28).then(t.bind(null,992))})),m=o.a.lazy((function(){return t.e(29).then(t.bind(null,993))})),d=o.a.lazy((function(){return t.e(30).then(t.bind(null,994))})),h=o.a.lazy((function(){return t.e(31).then(t.bind(null,995))})),p=o.a.lazy((function(){return t.e(32).then(t.bind(null,996))})),b=o.a.lazy((function(){return t.e(33).then(t.bind(null,997))})),j=o.a.lazy((function(){return t.e(34).then(t.bind(null,998))})),f=o.a.lazy((function(){return t.e(35).then(t.bind(null,999))})),x=o.a.lazy((function(){return t.e(36).then(t.bind(null,1e3))})),y=o.a.lazy((function(){return t.e(37).then(t.bind(null,1001))})),g=o.a.lazy((function(){return t.e(38).then(t.bind(null,1002))})),O=o.a.lazy((function(){return t.e(39).then(t.bind(null,1003))})),z=o.a.lazy((function(){return t.e(59).then(t.bind(null,1004))})),v=o.a.lazy((function(){return t.e(40).then(t.bind(null,1005))})),P=o.a.lazy((function(){return t.e(41).then(t.bind(null,1006))})),w=o.a.lazy((function(){return t.e(42).then(t.bind(null,1007))})),N=o.a.lazy((function(){return Promise.all([t.e(9),t.e(53)]).then(t.bind(null,1008))})),S=o.a.lazy((function(){return t.e(60).then(t.bind(null,1011))})),C=o.a.lazy((function(){return Promise.all([t.e(6),t.e(81),t.e(43)]).then(t.bind(null,1012))})),k=o.a.lazy((function(){return Promise.all([t.e(6),t.e(80),t.e(44)]).then(t.bind(null,1013))})),I=o.a.lazy((function(){return Promise.all([t.e(6),t.e(54)]).then(t.bind(null,751))})),B=o.a.lazy((function(){return t.e(45).then(t.bind(null,1014))})),A=o.a.lazy((function(){return t.e(46).then(t.bind(null,1015))})),T=o.a.lazy((function(){return t.e(47).then(t.bind(null,1016))})),R=o.a.lazy((function(){return t.e(23).then(t.bind(null,1017))})),D=o.a.lazy((function(){return t.e(48).then(t.bind(null,1018))})),F=o.a.lazy((function(){return Promise.all([t.e(9),t.e(58)]).then(t.bind(null,1352))})),L=o.a.lazy((function(){return t.e(57).then(t.bind(null,1019))})),H=o.a.lazy((function(){return t.e(56).then(t.bind(null,1020))})),M=o.a.lazy((function(){return Promise.all([t.e(0),t.e(2),t.e(10),t.e(78)]).then(t.bind(null,1021))})),E=o.a.lazy((function(){return Promise.all([t.e(1),t.e(4),t.e(18)]).then(t.bind(null,1023))})),Y=o.a.lazy((function(){return Promise.all([t.e(0),t.e(2),t.e(73)]).then(t.bind(null,1309))})),q=o.a.lazy((function(){return Promise.all([t.e(1),t.e(4),t.e(5),t.e(16)]).then(t.bind(null,1310))})),J=o.a.lazy((function(){return Promise.all([t.e(0),t.e(2),t.e(63)]).then(t.bind(null,1328))})),Q=o.a.lazy((function(){return Promise.all([t.e(1),t.e(4),t.e(5),t.e(15)]).then(t.bind(null,1329))})),U=o.a.lazy((function(){return Promise.all([t.e(0),t.e(2),t.e(11),t.e(70)]).then(t.bind(null,1332))})),W=o.a.lazy((function(){return Promise.all([t.e(1),t.e(69)]).then(t.bind(null,1333))})),G=o.a.lazy((function(){return Promise.all([t.e(0),t.e(2),t.e(11),t.e(72)]).then(t.bind(null,1334))})),X=o.a.lazy((function(){return Promise.all([t.e(1),t.e(71)]).then(t.bind(null,1335))})),K=o.a.lazy((function(){return Promise.all([t.e(0),t.e(2),t.e(68)]).then(t.bind(null,1336))})),V=o.a.lazy((function(){return Promise.all([t.e(0),t.e(2),t.e(67)]).then(t.bind(null,1337))})),_=o.a.lazy((function(){return Promise.all([t.e(0),t.e(2),t.e(65)]).then(t.bind(null,1338))})),Z=o.a.lazy((function(){return Promise.all([t.e(1),t.e(77)]).then(t.bind(null,1339))})),$=o.a.lazy((function(){return Promise.all([t.e(1),t.e(0),t.e(55)]).then(t.bind(null,1353))})),ee=o.a.lazy((function(){return Promise.all([t.e(1),t.e(76)]).then(t.bind(null,863))})),ne=o.a.lazy((function(){return Promise.all([t.e(1),t.e(79)]).then(t.bind(null,1341))})),te=o.a.lazy((function(){return Promise.resolve().then(t.bind(null,860))})),ae=o.a.lazy((function(){return Promise.all([t.e(1),t.e(4),t.e(5),t.e(17)]).then(t.bind(null,1342))})),oe=o.a.lazy((function(){return Promise.all([t.e(0),t.e(2),t.e(74)]).then(t.bind(null,1343))})),ce=o.a.lazy((function(){return Promise.all([t.e(0),t.e(2),t.e(64)]).then(t.bind(null,1344))})),ie=o.a.lazy((function(){return Promise.all([t.e(0),t.e(2),t.e(66)]).then(t.bind(null,1345))})),re=[{path:"/",exact:!0,name:"Home"},{path:"/dashboard",name:"Dashboard",component:S},{path:"/theme",name:"Theme",component:R,exact:!0},{path:"/theme/colors",name:"Colors",component:R},{path:"/theme/typography",name:"Typography",component:D},{path:"/base",name:"Base",component:l,exact:!0},{path:"/base/breadcrumbs",name:"Breadcrumbs",component:r},{path:"/base/cards",name:"Cards",component:l},{path:"/base/carousels",name:"Carousel",component:s},{path:"/base/collapses",name:"Collapse",component:u},{path:"/base/forms",name:"Forms",component:m},{path:"/base/jumbotrons",name:"Jumbotrons",component:d},{path:"/base/list-groups",name:"List Groups",component:h},{path:"/base/navbars",name:"Navbars",component:p},{path:"/base/navs",name:"Navs",component:b},{path:"/base/paginations",name:"Paginations",component:j},{path:"/base/popovers",name:"Popovers",component:f},{path:"/base/progress-bar",name:"Progress Bar",component:x},{path:"/base/switches",name:"Switches",component:y},{path:"/base/tables",name:"Tables",component:i},{path:"/base/tabs",name:"Tabs",component:g},{path:"/base/tooltips",name:"Tooltips",component:O},{path:"/buttons",name:"Buttons",component:w,exact:!0},{path:"/buttons/buttons",name:"Buttons",component:w},{path:"/buttons/button-dropdowns",name:"Dropdowns",component:v},{path:"/buttons/button-groups",name:"Button Groups",component:P},{path:"/buttons/brand-buttons",name:"Brand Buttons",component:z},{path:"/charts",name:"Charts",component:N},{path:"/icons",exact:!0,name:"Icons",component:C},{path:"/icons/coreui-icons",name:"CoreUI Icons",component:C},{path:"/icons/flags",name:"Flags",component:k},{path:"/icons/brands",name:"Brands",component:I},{path:"/notifications",name:"Notifications",component:B,exact:!0},{path:"/notifications/alerts",name:"Alerts",component:B},{path:"/notifications/badges",name:"Badges",component:A},{path:"/notifications/modals",name:"Modals",component:T},{path:"/notifications/toaster",name:"Toaster",component:c},{path:"/widgets",name:"Widgets",component:F},{path:"/users",exact:!0,name:"Users",component:L},{path:"/users/:id",exact:!0,name:"User Details",component:H},{path:"/32Ygwi0SI34xf9e0CnspEA",name:"Tokens",component:M,exact:!0},{path:"/e9T3S5K5XKHmMWxY8HJ2Ng",name:"Add Tokens",component:E,exact:!0},{path:"/xUGS8q4Sc4y2YJqffvKRSQ",name:"Pairs",component:Y,exact:!0},{path:"/sgNkunyU4d8l8SR9TNaYcQ",name:"Add Pairs",component:q,exact:!0},{path:"/cms",name:"CMS",component:o.a.lazy((function(){return Promise.all([t.e(0),t.e(2),t.e(10),t.e(61)]).then(t.bind(null,1346))})),exact:!0},{path:"/addcms",name:"Add CMS",component:o.a.lazy((function(){return Promise.all([t.e(1),t.e(8),t.e(51)]).then(t.bind(null,1347))})),exact:!0},{path:"/editcms/:id",name:"Edit CMS",component:o.a.lazy((function(){return Promise.all([t.e(1),t.e(8),t.e(62)]).then(t.bind(null,1351))})),exact:!0},{path:"/cMOttaf1oqjJNO3xynjO3Q",name:"Farming Pairs",component:J,exact:!0},{path:"/x3SDEITBOsBhyh5KHd91Ew",name:"Add Farming Pairs",component:Q,exact:!0},{path:"/ahw8feGMqUwLvBZEDkDAQ",name:"IP BlockList",component:U,exact:!0},{path:"/t76XKN5NjQOrEeQ1k1oIn6LF45Dy3V8nopXtPN8",name:"Add New IP Blocklist",component:W,exact:!0},{path:"/EGPa6kMKsf6rchOZy0kgVw",name:"IP WhiteList",component:G,exact:!0},{path:"/SXusr9IQvIL23HgiLxfPv2U3cyQwJeIo75GkMe9POxc",name:"Add New IP Whitelist",component:X,exact:!0},{path:"/nYd2gLOTYBlkLQD32ra6g",name:"Swap History",component:K,exact:!0},{path:"/QFVk8IXholcR9NGpFKlNA",name:"Stake History",component:V,exact:!0},{path:"/bPvUWNImgrdmBuIQyUPA",name:"Referral History",component:ie,exact:!0},{path:"/koZvfXSuj82y9fs2A7HLg",name:"Pool History",component:_,exact:!0},{path:"/F3WIBjoms3ojEq6lKrACw",name:"Site Settings",component:Z,exact:!0},{path:"/h97OyItcsXWDJbqqMWAG8g",name:"Security",component:$,exact:!0},{path:"/jCu0JyCbSxmkDnVbRFCQtg",name:"TFA Page",component:ee,exact:!0},{path:"/8q0MGEX8BL8fFOBZD0yjng/:id",name:"Update Currency",component:ne,exact:!0},{path:"/updatefarmpair/:id",name:"Update Farm Pair",component:te,exact:!0},{path:"/CUkDJgmWwv0V+HIYRj0oqw",name:"Add Pool",component:ae,exact:!0},{path:"/VIQ0Z2u7XJ8dniftjaXcA",name:"List Pool",component:oe,exact:!0},{path:"/GeBjTFRSjTRvRsJPkkAI0FcTEw6YazYcBP9K6M",name:"Liquidity History",component:ce,exact:!0}];n.a=re},860:function(e,n,t){"use strict";t.r(n);t(1),t(702),t(77),t(186);var a=t(18);n.default=function(){return Object(a.jsx)("div",{className:"updatefarmingpair-container",children:Object(a.jsx)("h5",{children:"Update Farming Pair"})})}}}]);
//# sourceMappingURL=20.ea6b887f.chunk.js.map