(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[71],{1335:function(e,t,r){"use strict";r.r(t);var s=r(128),a=r(1),i=(r(702),r(709)),c=r(130),n=r(186),o=r(18);c.b.whiteURL();t.default=function(){var e=Object(i.a)({mode:"onBlur"}),t=e.register,r=e.handleSubmit,d=e.errors,l=(e.watch,e.reset),u=Object(a.useState)(),b=Object(s.a)(u,2),h=b[0],p=b[1];return Object(o.jsxs)("div",{children:[Object(o.jsx)("h5",{children:"Adding New Ip Whitelist"}),Object(o.jsx)("br",{}),Object(o.jsxs)("form",{onSubmit:r((function(){var e={ipAddress:h};c.b.postData("https://bakxlxiqwosd.pocketswap.org/api/whitelist/addwhitelist",e).then((function(e){200==e.data.status?(n.b.success(e.data.message),l()):n.b.error(e.data.message)})).catch((function(e){n.b.error(e)}))})),children:[Object(o.jsx)("input",{type:"text",className:"form-control",placeholder:"Enter IP Address",onChange:function(e){return p(e.target.value)},ref:t({required:"IP address is required",pattern:{value:/^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/,message:"Should match IP pattern"}}),autoComplete:"off",name:"whitelistip"}),d.whitelistip&&Object(o.jsxs)("div",{className:"form-error",children:[d.whitelistip.message,"."]}),Object(o.jsx)("br",{}),Object(o.jsx)("div",{align:"center",children:Object(o.jsx)("button",{className:"btn",style:{background:"#13316f",color:"white",border:"2px solid #13316f"},children:"Add"})})]})]})}}}]);
//# sourceMappingURL=71.327f1017.chunk.js.map