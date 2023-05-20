(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[77],{1339:function(e,t,a){"use strict";a.r(t);var s=a(128),r=a(1),c=(a(702),a(709)),l=a(77),i=a.n(l),n=a(186),o=a(130),j=a(18);t.default=function(){var e=Object(c.a)({mode:"onBlur"}),t=e.register,a=e.handleSubmit,l=e.errors,d=(e.watch,e.reset),u=Object(r.useState)(""),b=Object(s.a)(u,2),m=b[0],h=b[1],O=Object(r.useState)(""),x=Object(s.a)(O,2),g=x[0],f=x[1],p=Object(r.useState)(""),v=Object(s.a)(p,2),N=v[0],R=v[1],L=Object(r.useState)(""),w=Object(s.a)(L,2),U=w[0],S=w[1],k=Object(r.useState)(""),C=Object(s.a)(k,2),y=C[0],z=C[1],A=Object(r.useState)(""),Z=Object(s.a)(A,2),q=Z[0],T=Z[1],_=Object(r.useState)(""),M=Object(s.a)(_,2),P=M[0],H=M[1],B=Object(r.useState)(""),G=Object(s.a)(B,2),J=G[0],E=G[1],F=o.b.siteSettingsURL();Object(r.useEffect)((function(){i.a.get(F+"sitesettings/getsitesettings").then((function(e){h(e.data.result.siteName),f(e.data.result.copyRightsText),R(e.data.result.telegramURL),T(e.data.result.twitterURL),H(e.data.result.gitURL),z(e.data.result.hackenURL),S(e.data.result.linkedinURL),E(e.data.result._id)})).catch((function(e){return n.b.error(e)}))}),[]);return Object(j.jsxs)("div",{className:"settings-container mt-5",children:[Object(j.jsx)("h5",{children:"Site Settings"}),Object(j.jsxs)("form",{className:"form-class",onSubmit:a((function(){var e={siteName:m,copyRightsText:g,telegramURL:N,twitterURL:q,gitURL:P,linkedinURL:U,hackenURL:y,id:J};i.a.post(F+"/sitesettings",e).then((function(e){200==e.data.status?(n.b.success(e.data.message),d()):n.b.error(e.data.message)})).catch((function(e){return n.b.error(e)}))})),children:[Object(j.jsx)("br",{}),Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"col-3",children:Object(j.jsx)("label",{children:"Site Name:"})}),Object(j.jsxs)("div",{className:"col-9",children:[Object(j.jsx)("input",{type:"text",className:"form-control",placeholder:"Site Name",autoComplete:"off",value:m,onChange:function(e){return h(e.target.value)},name:"sitename",ref:t({required:"Site Name is required",pattern:{value:/^[a-zA-Z ]*$/,message:"Only Characters"}})}),l.sitename&&Object(j.jsxs)("div",{className:"form-error",children:[l.sitename.message,"."]})]})]}),Object(j.jsx)("br",{}),Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"col-3",children:Object(j.jsx)("label",{children:"Copyrights Text:"})}),Object(j.jsxs)("div",{className:"col-9",children:[Object(j.jsx)("input",{type:"text",autoComplete:"off",className:"form-control",onChange:function(e){return f(e.target.value)},placeholder:"Copyrights Text",value:g,name:"copyrightstext",ref:t({required:"CopyRight Text is required"})}),l.copyrightstext&&Object(j.jsxs)("div",{className:"form-error",children:[l.copyrightstext.message,"."]})]})]}),Object(j.jsx)("br",{}),Object(j.jsx)("h5",{children:"Social Media"}),Object(j.jsx)("br",{}),Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"col-3",children:Object(j.jsx)("label",{children:"Linkedin URL:"})}),Object(j.jsxs)("div",{className:"col-9",children:[Object(j.jsx)("input",{type:"text",className:"form-control",autoComplete:"off",placeholder:"FaceBook URL",value:U,onChange:function(e){return S(e.target.value)},name:"linkedinurl",ref:t({required:"Linkedin URL is required",pattern:{value:/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,message:"Should Match URL Pattern"}})}),l.linkedinurl&&Object(j.jsxs)("div",{className:"form-error",children:[l.linkedinurl.message,"."]})]})]}),Object(j.jsx)("br",{}),Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"col-3",children:Object(j.jsx)("label",{children:"Git URL:"})}),Object(j.jsxs)("div",{className:"col-9",children:[Object(j.jsx)("input",{type:"text",className:"form-control",autoComplete:"off",placeholder:"Medium URL",value:P,onChange:function(e){return H(e.target.value)},name:"gitURL",ref:t({required:"Git URL is required",pattern:{value:/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,message:"Should Match URL Pattern"}})}),l.gitURL&&Object(j.jsxs)("div",{className:"form-error",children:[l.gitURL.message,"."]})]})]}),Object(j.jsx)("br",{}),Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"col-3",children:Object(j.jsx)("label",{children:"Telegram URL:"})}),Object(j.jsxs)("div",{className:"col-9",children:[Object(j.jsx)("input",{type:"text",className:"form-control",autoComplete:"off",placeholder:"Telegram URL",value:N,onChange:function(e){return R(e.target.value)},name:"telegramurl",ref:t({required:"Telegram URL is required",pattern:{value:/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,message:"Should Match URL Pattern"}})}),l.telegramurl&&Object(j.jsxs)("div",{className:"form-error",children:[l.telegramurl.message,"."]})]})]}),Object(j.jsx)("br",{}),Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"col-3",children:Object(j.jsx)("label",{children:"Hacken URL:"})}),Object(j.jsxs)("div",{className:"col-9",children:[Object(j.jsx)("input",{type:"text",className:"form-control",placeholder:"Hackedn URL",autoComplete:"off",name:"hackenurl",value:y,onChange:function(e){return z(e.target.value)},ref:t({required:"Hacken URL is required",pattern:{value:/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,message:"Should Match URL Pattern"}})}),l.hackenurl&&Object(j.jsxs)("div",{className:"form-error",children:[l.hackenurl.message,"."]})]})]}),Object(j.jsx)("br",{}),Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"col-3",children:Object(j.jsx)("label",{children:"Twitter URL:"})}),Object(j.jsxs)("div",{className:"col-9",children:[Object(j.jsx)("input",{type:"text",className:"form-control",autoComplete:"off",value:q,placeholder:"Twitter URL",onChange:function(e){return T(e.target.value)},name:"twitterurl",ref:t({required:"Twitter URL is required",pattern:{value:/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,message:"Should Match URL Pattern"}})}),l.twitterurl&&Object(j.jsxs)("div",{className:"form-error",children:[l.twitterurl.message,"."]})]})]}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsx)("div",{align:"center",children:Object(j.jsx)("button",{className:"btn",style:{background:"#13316f",color:"white",border:"2px solid #13316f"},children:"Submit"})}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{})]})]})}}}]);
//# sourceMappingURL=77.2f900354.chunk.js.map