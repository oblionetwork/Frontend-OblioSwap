(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[58],{1352:function(e,t,r){"use strict";r.r(t);r(1),r(696),r(703);var o=r(19),n=r(698),a=r(766),i=r(857),c=r(18),s=["borderColor","backgroundColor","pointHoverBackgroundColor","dataPoints","label","pointed"],l=function(e){var t=e.borderColor,r=e.backgroundColor,l=e.pointHoverBackgroundColor,u=e.dataPoints,d=e.label,p=e.pointed,f=Object(n.a)(e,s),b=l||("transparent"!==r?r:t),g=[{data:u,borderColor:Object(a.getColor)(t),backgroundColor:Object(a.getColor)(r),pointBackgroundColor:Object(a.getColor)(b),pointHoverBackgroundColor:Object(a.getColor)(b),label:d}],v={scales:{xAxes:[{offset:!0,gridLines:{color:"transparent",zeroLineColor:"transparent"},ticks:{fontSize:2,fontColor:"transparent"}}],yAxes:[{display:!1,ticks:{display:!1,min:Math.min.apply(Math,u)-5,max:Math.max.apply(Math,u)+5}}]},elements:{line:{borderWidth:1},point:{radius:4,hitRadius:10,hoverRadius:4}}},y={scales:{xAxes:[{display:!1}],yAxes:[{display:!1}]},elements:{line:{borderWidth:2},point:{radius:0,hitRadius:10,hoverRadius:4}}},h=function(){var e=p?v:y;return Object.assign({},e,{maintainAspectRatio:!1,legend:{display:!1}})}(),m=Object(a.deepObjectsMerge)(g,f.datasets||{}),j=Object(a.deepObjectsMerge)(h,f.options||{});return Object(c.jsx)(i.c,Object(o.a)(Object(o.a)({},f),{},{datasets:m,options:j,labels:d}))};l.defaultProps={borderColor:"rgba(255,255,255,.55)",backgroundColor:"transparent",dataPoints:[10,22,34,46,58,70,46,23,45,78,34,12],label:"Sales"};var u=["backgroundColor","pointHoverBackgroundColor","dataPoints","label","pointed"],d=function(e){var t=e.backgroundColor,r=e.pointHoverBackgroundColor,s=e.dataPoints,l=e.label,d=(e.pointed,Object(n.a)(e,u)),p=[{data:s,backgroundColor:Object(a.getColor)(t),pointHoverBackgroundColor:Object(a.getColor)(r),label:l,barPercentage:.5,categoryPercentage:1}],f={maintainAspectRatio:!1,legend:{display:!1},scales:{xAxes:[{display:!1}],yAxes:[{display:!1}]}};return Object(c.jsx)(i.a,Object(o.a)(Object(o.a)({},d),{},{datasets:p,options:f,labels:l}))};d.defaultProps={backgroundColor:"rgba(0,0,0,.2)",dataPoints:[10,22,34,46,58,70,46,23,45,78,34,12],label:"Sales"};t.default=function(){return Object(c.jsx)(c.Fragment,{})}},766:function(e,t){!function(e,t){for(var r in t)e[r]=t[r]}(t,function(e){var t={};function r(o){if(t[o])return t[o].exports;var n=t[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,r),n.l=!0,n.exports}return r.m=e,r.c=t,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(o,n,function(t){return e[t]}.bind(null,n));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";r.r(t),r.d(t,"deepObjectsMerge",(function(){return o})),r.d(t,"getColor",(function(){return s})),r.d(t,"getStyle",(function(){return c})),r.d(t,"hexToRgb",(function(){return l})),r.d(t,"hexToRgba",(function(){return u})),r.d(t,"makeUid",(function(){return d})),r.d(t,"omitByKeys",(function(){return p})),r.d(t,"pickByKeys",(function(){return f})),r.d(t,"rgbToHex",(function(){return b}));var o=function e(t,r){for(var o=0,n=Object.keys(r);o<n.length;o++){var a=n[o];r[a]instanceof Object&&Object.assign(r[a],e(t[a],r[a]))}return Object.assign(t||{},r),t},n=function(){for(var e={},t=document.styleSheets,r="",o=t.length-1;o>-1;o--){for(var n=t[o].cssRules,a=n.length-1;a>-1;a--)if(".ie-custom-properties"===n[a].selectorText){r=n[a].cssText;break}if(r)break}return(r=r.substring(r.lastIndexOf("{")+1,r.lastIndexOf("}"))).split(";").forEach((function(t){if(t){var r=t.split(": ")[0],o=t.split(": ")[1];r&&o&&(e["--".concat(r.trim())]=o.trim())}})),e},a=function(){return Boolean(document.documentMode)&&document.documentMode>=10},i=function(e){return e.match(/^--.*/i)},c=function(e){var t,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document.body;if(i(e)&&a()){var o=n();t=o[e]}else t=window.getComputedStyle(r,null).getPropertyValue(e).replace(/^\s/,"");return t},s=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document.body,r="--".concat(e),o=c(r,t);return o||e},l=function(e){if(void 0===e)throw new TypeError("Hex color is not defined");var t,r,o;if(!e.match(/^#(?:[0-9a-f]{3}){1,2}$/i))throw new Error("".concat(e," is not a valid hex color"));return 7===e.length?(t=parseInt(e.slice(1,3),16),r=parseInt(e.slice(3,5),16),o=parseInt(e.slice(5,7),16)):(t=parseInt(e.slice(1,2),16),r=parseInt(e.slice(2,3),16),o=parseInt(e.slice(3,5),16)),"rgba(".concat(t,", ").concat(r,", ").concat(o,")")},u=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100;if(void 0===e)throw new TypeError("Hex color is not defined");var r,o,n,a=e.match(/^#(?:[0-9a-f]{3}){1,2}$/i);if(!a)throw new Error("".concat(e," is not a valid hex color"));return 7===e.length?(r=parseInt(e.slice(1,3),16),o=parseInt(e.slice(3,5),16),n=parseInt(e.slice(5,7),16)):(r=parseInt(e.slice(1,2),16),o=parseInt(e.slice(2,3),16),n=parseInt(e.slice(3,5),16)),"rgba(".concat(r,", ").concat(o,", ").concat(n,", ").concat(t/100,")")},d=function(){return"uid-"+Math.random().toString(36).substr(2)},p=function(e,t){for(var r={},o=Object.keys(e),n=0;n<o.length;n++)!t.includes(o[n])&&(r[o[n]]=e[o[n]]);return r},f=function(e,t){for(var r={},o=0;o<t.length;o++)r[t[o]]=e[t[o]];return r},b=function(e){if(void 0===e)throw new TypeError("Hex color is not defined");if("transparent"===e)return"#00000000";var t=e.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);if(!t)throw new Error("".concat(e," is not a valid rgb color"));var r="0".concat(parseInt(t[1],10).toString(16)),o="0".concat(parseInt(t[2],10).toString(16)),n="0".concat(parseInt(t[3],10).toString(16));return"#".concat(r.slice(-2)).concat(o.slice(-2)).concat(n.slice(-2))},g={deepObjectsMerge:o,getColor:s,getStyle:c,hexToRgb:l,hexToRgba:u,makeUid:d,omitByKeys:p,pickByKeys:f,rgbToHex:b};t.default=g}]))}}]);
//# sourceMappingURL=58.0fa1119d.chunk.js.map