(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[55],{1353:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n(764),c=n(128),o=(n(702),n(856)),i=n(186),s=n(77),l=n.n(s),u=n(130),p=n(18),d=(u.b.securityURL(),function(){var e=Object(r.useState)(""),t=Object(c.a)(e,2),n=(t[0],t[1]),s=Object(r.useState)(""),l=Object(c.a)(s,2),d=(l[0],l[1]),f=Object(r.useState)(""),b=Object(c.a)(f,2),h=(b[0],b[1]),j=Object(r.useState)([]),m=Object(c.a)(j,2),v=m[0],w=m[1],O=Object(r.useState)(!1),x=Object(c.a)(O,2),g=x[0],_=x[1],y=Object(r.useState)([]),k=Object(c.a)(y,2),S=k[0],N=k[1],C=Object(r.useState)(!1),E=Object(c.a)(C,2),z=E[0],P=E[1],M=Object(r.useState)([]),A=Object(c.a)(M,2),T=A[0],L=A[1],R=Object(r.useState)(!1),q=Object(c.a)(R,2),F=q[0],D=q[1];return Object(p.jsx)("div",{className:"changepattern-container",children:Object(p.jsxs)("div",{className:"",children:[Object(p.jsx)("h6",{children:"Change Pattern"}),Object(p.jsxs)("div",{className:"row",children:[Object(p.jsxs)("div",{className:"col-4",children:[Object(p.jsx)("h6",{children:"Old Pattern:"})," ",Object(p.jsx)(o.a,{width:250,size:3,onChange:function(e){w(Object(a.a)(e))},path:v,onFinish:function(){_(!0),setTimeout((function(){w([]),_(!1)}),1e4)},connectorThickness:8,success:g})]}),Object(p.jsxs)("div",{className:"col-4",children:[Object(p.jsx)("h6",{children:"New Pattern:"})," ",Object(p.jsx)(o.a,{width:250,size:3,onChange:function(e){N(Object(a.a)(e))},path:S,onFinish:function(){P(!0),setTimeout((function(){N([]),P(!1)}),1e4)},connectorThickness:8,success:z})]}),Object(p.jsxs)("div",{className:"col-4",children:[Object(p.jsx)("h6",{children:"Confirm Pattern:"})," ",Object(p.jsx)(o.a,{width:250,size:3,onChange:function(e){L(Object(a.a)(e))},path:T,onFinish:function(){D(!0),setTimeout((function(){L([]),D(!1)}),1e4)},connectorThickness:8,success:F})]}),Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),Object(p.jsxs)("div",{align:"center",children:[Object(p.jsx)("button",{className:"btn",style:{background:"#13316f",color:"white",border:"2px solid #13316f"},type:"submit",onClick:function(){var e=v.join(),t=S.join(),r=T.join();if(n(e),d(t),h(r),v.length>0&&S.length>0&&T.length>0){var a={currentpattern:e,newpattern:t,confirmpattern:r};u.b.postData("https://bakxlxiqwosd.pocketswap.org/api/securitysettings/changepattern",a).then((function(e){200==e.data.status?i.b.success(e.data.message):i.b.error(e.data.message)})).catch((function(e){i.b.error(e)}))}else i.b.error("Please Draw Pattern")},children:"Submit"}),Object(p.jsx)("br",{}),Object(p.jsx)("br",{})]})]})]})})}),f=n(709),b=n(725),h=n(71),j=function(){var e=Object(r.useState)(""),t=Object(c.a)(e,2),n=t[0],a=t[1],o=Object(r.useState)(""),s=Object(c.a)(o,2),d=s[0],j=s[1],m=Object(r.useState)(!1),v=Object(c.a)(m,2),w=v[0],O=v[1],x=Object(r.useState)(),g=Object(c.a)(x,2),_=g[0],y=g[1],k=Object(h.b)(),S=u.b.apiURL(),N=u.b.securityURL(),C=Object(h.c)((function(e){return e.userReducer.updatestatus}));Object(r.useEffect)((function(){l.a.get(S+"/getadmindetails").then((function(e){a(e.data.result.secretotpauthurl),j(e.data.result.secreturl),O(e.data.result.tfa_status)})).catch((function(e){return i.b.error(e)}))}),[C]);var E=Object(f.a)({mode:"onBlur"}),z=E.register,P=E.handleSubmit,M=E.errors;E.watch,E.reset;return Object(p.jsx)("div",{className:"tfa-container",children:Object(p.jsx)("form",{className:"form-class",onSubmit:P((function(){var e={sixDigitCode:_,secretKey:d,tfa_status:w};u.b.postData(N+"/twofactorauth",e).then((function(e){200==e.data.status?(i.b.success(e.data.message),"TFA Enabled Successfully"===e.data.message?k(Object(b.f)(!0)):k(Object(b.f)(!1))):i.b.error(e.data.message)})).catch((function(e){return i.b.error(e)}))})),children:Object(p.jsxs)("div",{className:"",children:[Object(p.jsx)("h6",{children:"TFA Settings"}),!0===w?Object(p.jsxs)("div",{children:[Object(p.jsx)("input",{type:"text",className:"form-control",placeholder:"6 Digit TFA Code",name:"tfacode",autoComplete:"off",onChange:function(e){return y(e.target.value)},ref:z({required:"TFA Code is required",pattern:{value:/^(\+\d{1,3}[- ]?)?\d{6}$/,message:"Only 6 Digits"}})}),M.tfacode&&Object(p.jsxs)("div",{className:"form-error",children:[M.tfacode.message,"."]})]}):Object(p.jsxs)("div",{children:[Object(p.jsx)("img",{src:n,alt:"QR"}),Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),Object(p.jsx)("input",{type:"text",className:"form-control",placeholder:"Secret Code",value:d,autoComplete:"off",readOnly:!0,name:"secretcode",ref:z({required:"Secret Code is required",pattern:{value:/^[a-zA-Z0-9]+$/,message:"Should Match with Pattern"}})}),M.secretcode&&Object(p.jsxs)("div",{className:"form-error",children:[M.secretcode.message,"."]}),Object(p.jsx)("br",{}),Object(p.jsx)("input",{type:"text",className:"form-control",placeholder:"6 Digit TFA Code",autoComplete:"off",onChange:function(e){return y(e.target.value)},name:"tfacode",ref:z({required:"TFA Code is required",pattern:{value:/^(\+\d{1,3}[- ]?)?\d{6}$/,message:"Only 6 Digits"}})}),M.tfacode&&Object(p.jsxs)("div",{className:"form-error",children:[M.tfacode.message,"."]}),Object(p.jsx)("br",{})]}),Object(p.jsx)("br",{}),Object(p.jsx)("div",{align:"center",children:Object(p.jsx)("button",{className:"btn",style:{background:"#13316f",color:"white",border:"2px solid #13316f"},children:!1===w?"Enable":"Disable"})})]})})})},m=(u.b.securityURL(),function(){var e=Object(f.a)({mode:"onBlur"}),t=(e.register,e.handleSubmit),n=(e.errors,e.watch,e.reset),a=Object(r.useState)(""),o=Object(c.a)(a,2),s=o[0],l=o[1],d=Object(r.useState)(""),b=Object(c.a)(d,2),h=b[0],j=b[1],m=Object(r.useState)(""),v=Object(c.a)(m,2),w=v[0],O=v[1];return Object(p.jsx)("div",{className:"changepassword-container",children:Object(p.jsx)("div",{className:" ",children:Object(p.jsxs)("form",{className:"form-class",onSubmit:t((function(){if(s&&h&&w)if(s!==h){var e={currentpassword:s,newpassword:h,confirmpassword:w};u.b.postData("https://bakxlxiqwosd.pocketswap.org/api/securitysettings/changepassword",e).then((function(e){200==e.data.status?(i.b.success(e.data.message),n(),l(""),j(""),O("")):i.b.error(e.data.message)})).catch((function(e){i.b.error(e)}))}else i.b.error("Old and New Password cannot be same");else i.b.error("Please fill all the fields")})),children:[Object(p.jsx)("h6",{children:"Change Password"}),Object(p.jsx)("input",{type:"password",className:"form-control",autoComplete:"off",placeholder:"Current Password",name:"currentpassword",onChange:function(e){return l(e.target.value)}}),Object(p.jsx)("br",{}),Object(p.jsx)("input",{type:"password",className:"form-control",placeholder:"New Password",autoComplete:"off",name:"newpassword",onChange:function(e){return j(e.target.value)}}),Object(p.jsx)("br",{}),Object(p.jsx)("input",{type:"password",className:"form-control",autoComplete:"off",placeholder:"Confirm Password",name:"confirmpassword",onChange:function(e){return O(e.target.value)}}),Object(p.jsx)("br",{}),Object(p.jsx)("div",{align:"center",children:Object(p.jsx)("button",{className:"btn",style:{background:"#13316f",color:"white",border:"2px solid #13316f"},children:"Submit"})})]})})})});t.default=function(){return Object(p.jsxs)("div",{children:[Object(p.jsx)("h5",{children:"Security"}),Object(p.jsxs)("div",{className:"seucrity-container",children:[Object(p.jsxs)("div",{className:"row",children:[Object(p.jsx)("div",{className:"col-6",children:Object(p.jsx)(m,{})}),Object(p.jsx)("div",{className:"col-6",children:Object(p.jsx)(j,{})})]}),Object(p.jsx)("br",{}),Object(p.jsx)("div",{className:"row",children:Object(p.jsx)("div",{className:"col-12",children:Object(p.jsx)(d,{})})})]})]})}},856:function(e,t,n){"use strict";var r=n(1),a=n(54),c=n(810),o=n(704),i=n.n(o),s=function(e){var t=e.index,n=e.pointSize,a=e.pointActiveSize,c=e.size,o=e.selected,i=e.pop,s=100/c;return r.createElement("div",{className:"react-pattern-lock__point-wrapper"+(o?" selected":""),style:{width:s+"%",height:s+"%",flex:"1 0 "+s+"%"},"data-index":t},r.createElement("div",{className:"react-pattern-lock__point",style:{width:a,height:a}},r.createElement("div",{className:"react-pattern-lock__point-inner"+(i?" active":""),style:{minWidth:n,minHeight:n}})))},l=function(e,t){return Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2))},u=function(e,t,n){return{x:e.x+Math.floor(t/2),y:e.y+Math.floor(t/2)-Math.floor(n/2)}},p=function(e,t){if(e===t)return[];var n=e>t?e-1:e+1,r=n>t?-1:1;return Array.from({length:Math.abs(n-t)}).map((function(e,t){return n+t*r}))},d=function(e){var t=e.path,n=e.points,a=e.wrapperPosition,c=e.pointActiveSize,o=e.connectorThickness,i=e.connectorRoundedCorners,s=e.initialMousePosition,p=r.useState(null),d=p[0],f=p[1];r.useEffect((function(){return f(s)}),[s]);var b=r.useMemo((function(){return{setMousePosition:function(e){var t=e.clientX,n=e.clientY;return f({x:t-a.x+window.scrollX,y:n-a.y+window.scrollY})},setTouchPosition:function(e){var t=e.touches;return f({x:t[0].clientX-a.x+window.scrollX,y:t[0].clientY-a.y+window.scrollY})}}}),[a]),h=b.setMousePosition,j=b.setTouchPosition;r.useEffect((function(){if(s)return window.addEventListener("mousemove",h),window.addEventListener("touchmove",j),function(){window.removeEventListener("mousemove",h),window.removeEventListener("touchmove",j)}}));for(var m=[],v=0;v<t.length-1;v+=1){var w=n[t[v]],O=n[t[v+1]];m.push({from:u(w,c,o),to:u(O,c,o)})}return d&&t.length&&m.push({from:u(n[t[t.length-1]],c,o),to:d}),r.createElement("div",{className:"react-pattern-lock__connector-wrapper"},m.map((function(e,t){var n,a,c=e.from,s=e.to;return r.createElement("div",{className:"react-pattern-lock__connector",key:t,style:{transform:"rotate("+(n=c,a=s,Math.atan2(a.y-n.y,a.x-n.x)+"rad)"),width:l(c,s)+"px",left:c.x+"px",top:c.y+"px",height:o,borderRadius:i?Math.round(o/2):0}})})))},f=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},b=function(){return b=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},b.apply(this,arguments)},h=function(e,t,n){if(n||2===arguments.length)for(var r,a=0,c=t.length;a<c;a++)!r&&a in t||(r||(r=Array.prototype.slice.call(t,0,a)),r[a]=t[a]);return e.concat(r||Array.prototype.slice.call(t))},j=Object(c.createGlobalStyle)(v||(v=f(["\n    * {\n        user-select none\n    }\n\n    .react-pattern-lock__pattern-wrapper {\n        touch-action: none;\n        width: 100%;\n        display: flex;\n        flex-wrap: wrap;\n        position: relative;\n    }\n    .react-pattern-lock__connector-wrapper {\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        z-index: 1;\n        pointer-events: none;\n    }\n    .react-pattern-lock__connector {\n        background: white;\n        position: absolute;\n        transform-origin: center left;\n    }\n    .react-pattern-lock__point-wrapper {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n    }\n    .react-pattern-lock__point {\n        cursor pointer;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n    }\n    .react-pattern-lock__point-inner {\n        background: white;\n        border-radius: 50%;\n    }\n    .react-pattern-lock__point-inner.active {\n        animation: pop 300ms ease;\n    }\n    .react-pattern-lock__pattern-wrapper.disabled,\n    .react-pattern-lock__pattern-wrapper.disabled .react-pattern-lock__point {\n        cursor: not-allowed;\n    }\n    .react-pattern-lock__pattern-wrapper.disabled .react-pattern-lock__point-inner,\n    .react-pattern-lock__pattern-wrapper.disabled .react-pattern-lock__connector {\n        background: grey;\n    }\n\n    .react-pattern-lock__pattern-wrapper.success .react-pattern-lock__point-inner,\n    .react-pattern-lock__pattern-wrapper.success .react-pattern-lock__connector {\n        background: #00ff00;\n    }\n\n    .react-pattern-lock__pattern-wrapper.error .react-pattern-lock__point-inner,\n    .react-pattern-lock__pattern-wrapper.error .react-pattern-lock__connector {\n        background: red;\n    }\n\n    @keyframes pop {\n        from { transform scale(1); }\n        50% { transform scale(2); }\n        to { transform scale(1); }\n    }\n"],["\n    * {\n        user-select none\n    }\n\n    .react-pattern-lock__pattern-wrapper {\n        touch-action: none;\n        width: 100%;\n        display: flex;\n        flex-wrap: wrap;\n        position: relative;\n    }\n    .react-pattern-lock__connector-wrapper {\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        z-index: 1;\n        pointer-events: none;\n    }\n    .react-pattern-lock__connector {\n        background: white;\n        position: absolute;\n        transform-origin: center left;\n    }\n    .react-pattern-lock__point-wrapper {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n    }\n    .react-pattern-lock__point {\n        cursor pointer;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n    }\n    .react-pattern-lock__point-inner {\n        background: white;\n        border-radius: 50%;\n    }\n    .react-pattern-lock__point-inner.active {\n        animation: pop 300ms ease;\n    }\n    .react-pattern-lock__pattern-wrapper.disabled,\n    .react-pattern-lock__pattern-wrapper.disabled .react-pattern-lock__point {\n        cursor: not-allowed;\n    }\n    .react-pattern-lock__pattern-wrapper.disabled .react-pattern-lock__point-inner,\n    .react-pattern-lock__pattern-wrapper.disabled .react-pattern-lock__connector {\n        background: grey;\n    }\n\n    .react-pattern-lock__pattern-wrapper.success .react-pattern-lock__point-inner,\n    .react-pattern-lock__pattern-wrapper.success .react-pattern-lock__connector {\n        background: #00ff00;\n    }\n\n    .react-pattern-lock__pattern-wrapper.error .react-pattern-lock__point-inner,\n    .react-pattern-lock__pattern-wrapper.error .react-pattern-lock__connector {\n        background: red;\n    }\n\n    @keyframes pop {\n        from { transform scale(1); }\n        50% { transform scale(2); }\n        to { transform scale(1); }\n    }\n"]))),m=function(e){var t=e.width,n=void 0===t?"100%":t,a=e.size,c=void 0===a?5:a,o=e.pointActiveSize,l=void 0===o?30:o,u=e.pointSize,f=void 0===u?20:u,m=e.connectorThickness,v=void 0===m?6:m,w=e.connectorRoundedCorners,O=void 0!==w&&w,x=e.disabled,g=void 0!==x&&x,_=e.error,y=void 0!==_&&_,k=e.success,S=void 0!==k&&k,N=e.allowOverlapping,C=void 0!==N&&N,E=e.noPop,z=void 0!==E&&E,P=e.invisible,M=void 0!==P&&P,A=e.allowJumping,T=void 0!==A&&A,L=e.className,R=void 0===L?"":L,q=e.style,F=void 0===q?{}:q,D=e.onChange,X=e.onFinish,Y=e.path,B=r.useRef(document.createElement("div")),J=r.useState(0),U=J[0],$=J[1],W=r.useState([]),G=W[0],H=W[1],K=r.useState({x:0,y:0}),Q=K[0],Z=K[1],I=r.useState(!1),V=I[0],ee=I[1],te=r.useState(null),ne=te[0],re=te[1],ae=function(e){var t=e.x,n=e.y,r=B.current.getBoundingClientRect(),a=r.top,o=function(e,t,n){for(var r=e.x,a=e.y,c=0;c<t.length;c+=1)if(r>t[c].x&&r<t[c].x+n&&a>t[c].y&&a<t[c].y+n)return c;return-1}({x:t-r.left,y:n-a},G,l);if(~o&&Y[Y.length-1]!==o&&(C||-1===Y.indexOf(o)))if(T||!Y.length)D(h(h([],Y,!0),[o],!1));else{var i=function(e,t,n){var r=e%n,a=t%n,c=Math.floor(e/n),o=Math.floor(t/n),i=Math.abs(r-a),s=Math.abs(c-o);if(c===o)return p(n*c+r,n*o+a);if(r===a)return p(c,o).map((function(e){return e*n+r}));if(i===s){var l=r<a?1:-1;return p(c,o).map((function(e,t){return e*n+r+(t+1)*l}))}return[]}(Y[Y.length-1],o,c);D(h(h(h([],Y,!0),C?i:i.filter((function(e){return-1===Y.indexOf(e)})),!0),[o],!1))}},ce=function(){var e=B.current.getBoundingClientRect(),t=e.top,n=e.left;return Z({x:n+window.scrollX,y:t+window.scrollY}),[t,n]};return r.useEffect((function(){if(V){var e=function(e){var t=e.clientX,n=e.clientY;return ae({x:t,y:n})},t=function(e){var t=e.touches;return ae({x:t[0].clientX,y:t[0].clientY})};return B.current.addEventListener("mousemove",e),B.current.addEventListener("touchmove",t),function(){B.current.removeEventListener("mousemove",e),B.current.removeEventListener("touchmove",t)}}})),r.useEffect((function(){return $(B.current.offsetWidth)})),r.useEffect((function(){return window.addEventListener("resize",ce),function(){return window.removeEventListener("resize",ce)}}),[]),r.useEffect((function(){var e=window.requestAnimationFrame((function(){H(function(e){var t=e.pointActiveSize,n=e.height,r=e.size,a=t/2,c=n/r,o=c/2;return Array.from({length:Math.pow(r,2)}).map((function(e,t){return{x:c*(t%r)+o-a,y:c*Math.floor(t/r)+o-a}}))}({pointActiveSize:l,height:U,size:c})),ce()}));return function(){return window.cancelAnimationFrame(e)}}),[U,c]),r.useEffect((function(){var e=function(){ee(!1),re(null),!g&&Y.length&&X()};return window.addEventListener("mouseup",e),window.addEventListener("touchend",e),function(){window.removeEventListener("mouseup",e),window.removeEventListener("touchend",e)}}),[g,Y]),r.createElement(r.Fragment,null,r.createElement(j,null),r.createElement("div",{className:i()(["react-pattern-lock__pattern-wrapper",{error:y,success:S,disabled:g},R]),style:b(b({},F),{width:n,height:U}),onMouseDown:function(e){var t=e.clientX,n=e.clientY;if(!g){var r=ce(),a=r[0],c=r[1];re({x:t-c,y:n-a}),ee(!0),ae({x:t,y:n})}},onTouchStart:function(e){var t=e.touches;if(!g){var n=ce(),r=n[0],a=n[1];re({x:t[0].clientX-a,y:t[0].clientY-r}),ee(!0),ae({x:t[0].clientX,y:t[0].clientY})}},ref:B},Array.from({length:Math.pow(c,2)}).map((function(e,t){return r.createElement(s,{key:t,index:t,size:c,pointSize:f,pointActiveSize:l,pop:!z&&V&&Y[Y.length-1]===t,selected:Y.indexOf(t)>-1})})),!M&&G.length&&r.createElement(d,{initialMousePosition:ne,wrapperPosition:Q,path:Y,points:G,pointActiveSize:l,connectorRoundedCorners:O,connectorThickness:v})))};m.propTypes={path:a.arrayOf(a.number.isRequired).isRequired,width:a.oneOfType([a.number,a.string]),size:a.number,pointActiveSize:a.number,connectorThickness:a.number,connectorRoundedCorners:a.bool,pointSize:a.number,disabled:a.bool,error:a.bool,success:a.bool,allowOverlapping:a.bool,allowJumping:a.bool,style:a.object,className:a.string,noPop:a.bool,invisible:a.bool,onChange:a.func.isRequired,onFinish:a.func.isRequired};var v,w=m;t.a=w}}]);
//# sourceMappingURL=55.0c450649.chunk.js.map