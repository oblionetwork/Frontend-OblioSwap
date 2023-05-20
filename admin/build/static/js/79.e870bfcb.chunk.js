(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[79],{1341:function(e,t,a){"use strict";a.r(t);var s=a(128),r=a(1),c=(a(702),a(77)),n=a.n(c),l=a(186),o=a(709),i=a(130),d=a(71),j=a(18);i.b.currencyURL();t.default=function(e){var t=e.match,a=(Object(d.c)((function(e){return e.userReducer.currentChainId})),Object(o.a)({mode:"onBlur"})),c=a.register,m=a.handleSubmit,b=a.errors,u=(a.watch,a.reset),O=Object(r.useState)(""),h=Object(s.a)(O,2),x=(h[0],h[1]),p=Object(r.useState)(""),k=Object(s.a)(p,2),f=k[0],g=k[1],v=Object(r.useState)(""),N=Object(s.a)(v,2),y=N[0],w=N[1],T=Object(r.useState)(""),S=Object(s.a)(T,2),q=S[0],C=S[1],A=Object(r.useState)(""),I=Object(s.a)(A,2),D=I[0],U=I[1],R=Object(r.useState)(""),$=Object(s.a)(R,2),L=$[0],z=$[1];return Object(r.useEffect)((function(){n.a.get("https://bakxlxiqwosd.pocketswap.org/api/currency/getcurrency/"+t.params.id).then((function(e){x(e.data.result.tokenType),g(e.data.result.tokenName),z(e.data.result.tokenSymbol),w(e.data.result.tokenAddress),C(e.data.result.tokenDecimal),U(e.data.result.tokenImg)})).catch((function(e){return l.b.error(e)}))}),[]),Object(j.jsxs)("div",{className:"updatetoken-container",children:[Object(j.jsx)("h5",{children:"Update Currency"}),Object(j.jsx)("br",{}),Object(j.jsxs)("form",{className:"form-class",onSubmit:m((function(){var e=new FormData;e.set("myImage",D),e.append("tokenName",f),e.append("tokenAddress",y),e.append("tokenDecimal",q),e.append("tokenSymbol",L),e.append("id",t.params.id);i.b.postData("https://bakxlxiqwosd.pocketswap.org/api/currency/updatecurrency",e,{headers:{"content-type":"multipart/form-data"}}).then((function(e){200==e.data.status?(l.b.success(e.data.message),u()):l.b.error(e.data.message)})).catch((function(e){l.b.error(e)}))})),children:[Object(j.jsx)("br",{}),Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"col-3",children:Object(j.jsx)("label",{children:"Token Name:"})}),Object(j.jsxs)("div",{className:"col-9",children:[Object(j.jsx)("input",{type:"text",name:"tokenname",value:f,className:"form-control",placeholder:"Token Name",onChange:function(e){return g(e.target.value)},ref:c({required:"Token Name is required",pattern:{value:/^[A-Za-z0-9]*$/,message:"Only Characters"}})}),b.tokenname&&Object(j.jsxs)("div",{className:"form-error",children:[b.tokenname.message,"."]})]})]}),Object(j.jsx)("br",{}),Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"col-3",children:Object(j.jsx)("label",{children:"Token Symbol:"})}),Object(j.jsxs)("div",{className:"col-9",children:[Object(j.jsx)("input",{type:"text",value:L,className:"form-control",placeholder:"Token Symbol",name:"tokensymbol",onChange:function(e){return z(e.target.value)},ref:c({required:"Token Symbol is required",pattern:{value:/^[A-Za-z0-9]*$/,message:"Only Characters"}})}),b.tokensymbol&&Object(j.jsxs)("div",{className:"form-error",children:[b.tokensymbol.message,"."]})]})]}),Object(j.jsx)("br",{}),Object(j.jsxs)("div",{className:"row",children:[Object(j.jsxs)("div",{className:"col-3",children:[" ",Object(j.jsx)("label",{children:"Token Address:"})]}),Object(j.jsxs)("div",{className:"col-9",children:[Object(j.jsx)("input",{type:"text",className:"form-control",placeholder:"Token Address",value:y,name:"tokenaddress",onChange:function(e){return w(e.target.value)},ref:c({required:"Token Address is required",pattern:{value:/^0x[a-fA-F0-9]{40}$/,message:"Only Characters"}})}),b.tokenaddress&&Object(j.jsxs)("div",{className:"form-error",children:[b.tokenaddress.message,"."]})]})]}),Object(j.jsx)("br",{}),Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"col-3",children:Object(j.jsx)("label",{children:"Token Decimal:"})}),Object(j.jsxs)("div",{className:"col-9",children:[" ",Object(j.jsx)("input",{type:"text",value:q,className:"form-control",placeholder:"Token Decimal",onChange:function(e){return C(e.target.value)},name:"tokendecimal",ref:c({required:"Token Decimal is required",pattern:{value:/^(0|[1-9][0-9]*)$/,message:"Only Numbers"}})}),b.tokendecimal&&Object(j.jsxs)("div",{className:"form-error",children:[b.tokendecimal.message,"."]})]})]}),Object(j.jsx)("br",{}),Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"col-3",children:Object(j.jsx)("label",{children:"Existing Image:"})}),Object(j.jsx)("div",{className:"col-9",children:Object(j.jsx)("img",{src:D,alt:"Token Image",height:"50px",width:"50px"})})]}),Object(j.jsx)("br",{}),Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"col-3",children:Object(j.jsx)("label",{children:"Choose Image:"})}),Object(j.jsxs)("div",{className:"col-9",children:[Object(j.jsx)("input",{type:"file",className:"form-control",placeholder:"ImageURL",onChange:function(e){return U(e.target.files[0])},name:"imageurl",ref:c({required:"Image URL is required"})}),b.imageurl&&Object(j.jsxs)("div",{className:"form-error",children:[b.imageurl.message,"."]})]})]}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsx)("div",{align:"center",children:Object(j.jsx)("button",{className:"btn btn-primary",type:"submit",children:"Update"})}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{})]})]})}}}]);
//# sourceMappingURL=79.e870bfcb.chunk.js.map