(this["webpackJsonpdemo-passport"]=this["webpackJsonpdemo-passport"]||[]).push([[0],{29:function(e,s,c){},30:function(e,s,c){},31:function(e,s,c){},32:function(e,s,c){},50:function(e,s,c){"use strict";c.r(s);var a=c(0),t=c(1),l=c(17),i=c.n(l),n=(c(29),c(8)),j=c(2),o=(c(30),c(31),function(){return Object(a.jsx)("div",{children:Object(a.jsx)("div",{className:"login-wrap",children:Object(a.jsxs)("div",{className:"login-html",children:[Object(a.jsx)("input",{id:"tab-1",type:"radio",name:"tab",className:"sign-in",defaultChecked:!0}),Object(a.jsx)("label",{htmlFor:"tab-1",className:"tab",children:"Sign In"}),Object(a.jsx)("input",{id:"tab-2",type:"radio",name:"tab",className:"sign-up"}),Object(a.jsx)("label",{htmlFor:"tab-2",className:"tab",children:"Sign Up"}),Object(a.jsxs)("div",{className:"login-form",children:[Object(a.jsxs)("form",{action:"http://localhost:4500/login",method:"post",className:"sign-in-htm",children:[Object(a.jsxs)("div",{className:"group",children:[Object(a.jsx)("label",{htmlFor:"userin",className:"label",children:"Username"}),Object(a.jsx)("input",{id:"userin",name:"username",type:"text",className:"input"})]}),Object(a.jsxs)("div",{className:"group",children:[Object(a.jsx)("label",{htmlFor:"passin",className:"label",children:"Password"}),Object(a.jsx)("input",{id:"passin",name:"password",type:"password",className:"input","data-type":"password"})]}),Object(a.jsxs)("div",{className:"group",children:[Object(a.jsx)("input",{id:"check",type:"checkbox",className:"check",defaultChecked:!0}),Object(a.jsxs)("label",{htmlFor:"check",children:[Object(a.jsx)("span",{className:"icon"}),"Keep me Signed in"]})]}),Object(a.jsx)("div",{className:"group",children:Object(a.jsx)("input",{type:"submit",className:"button",value:"Sign In"})}),Object(a.jsx)("div",{className:"hr"}),Object(a.jsx)("div",{className:"foot-lnk",children:Object(a.jsx)("a",{href:"http://localhost:4500/auth/google",className:"btn",children:Object(a.jsxs)("div",{children:[Object(a.jsx)("span",{className:"svgIcon t-popup-svg",children:Object(a.jsx)("svg",{className:"svgIcon-use",width:"25",height:"37",viewBox:"0 0 25 25",children:Object(a.jsxs)("g",{fill:"none",fillRule:"evenodd",children:[Object(a.jsx)("path",{d:"M20.66 12.693c0-.603-.054-1.182-.155-1.738H12.5v3.287h4.575a3.91 3.91 0 0 1-1.697 2.566v2.133h2.747c1.608-1.48 2.535-3.65 2.535-6.24z",fill:"#4285F4"}),Object(a.jsx)("path",{d:"M12.5 21c2.295 0 4.22-.76 5.625-2.06l-2.747-2.132c-.76.51-1.734.81-2.878.81-2.214 0-4.088-1.494-4.756-3.503h-2.84v2.202A8.498 8.498 0 0 0 12.5 21z",fill:"#34A853"}),Object(a.jsx)("path",{d:"M7.744 14.115c-.17-.51-.267-1.055-.267-1.615s.097-1.105.267-1.615V8.683h-2.84A8.488 8.488 0 0 0 4 12.5c0 1.372.328 2.67.904 3.817l2.84-2.202z",fill:"#FBBC05"}),Object(a.jsx)("path",{d:"M12.5 7.38c1.248 0 2.368.43 3.25 1.272l2.437-2.438C16.715 4.842 14.79 4 12.5 4a8.497 8.497 0 0 0-7.596 4.683l2.84 2.202c.668-2.01 2.542-3.504 4.756-3.504z",fill:"#EA4335"})]})})}),Object(a.jsx)("span",{className:"button-label",children:"Sign in with Google"})]})})})]}),Object(a.jsxs)("form",{className:"sign-up-htm",children:[Object(a.jsxs)("div",{className:"group",children:[Object(a.jsx)("label",{htmlFor:"userup",className:"label",children:"Username"}),Object(a.jsx)("input",{id:"userup",type:"text",className:"input"})]}),Object(a.jsxs)("div",{className:"group",children:[Object(a.jsx)("label",{htmlFor:"passup",className:"label",children:"Password"}),Object(a.jsx)("input",{id:"passup",type:"password",className:"input","data-type":"password"})]}),Object(a.jsxs)("div",{className:"group",children:[Object(a.jsx)("label",{htmlFor:"passup2",className:"label",children:"Repeat Password"}),Object(a.jsx)("input",{id:"passup2",type:"password",className:"input","data-type":"password"})]}),Object(a.jsxs)("div",{className:"group",children:[Object(a.jsx)("label",{htmlFor:"email",className:"label",children:"Email Address"}),Object(a.jsx)("input",{id:"email",type:"email",className:"input"})]}),Object(a.jsx)("div",{className:"group",children:Object(a.jsx)("input",{type:"submit",className:"button",value:"Sign Up"})}),Object(a.jsx)("div",{className:"hr"}),Object(a.jsx)("div",{className:"foot-lnk",children:Object(a.jsx)("label",{htmlFor:"tab-1",children:"Already Member?"})})]})]})]})})})}),r=c(18),d=c(19),b=c(23),h=c(22),m=(c(32),c(20)),p=c.n(m),x=function(e){Object(b.a)(c,e);var s=Object(h.a)(c);function c(){return Object(r.a)(this,c),s.apply(this,arguments)}return Object(d.a)(c,[{key:"componentDidMount",value:function(){var e=p.a.parse(this.props.location.search);e.token?(window.localStorage.setItem("jwt",e.token),this.props.history.push("/dash")):this.props.history.push("/login")}},{key:"render",value:function(){return Object(a.jsxs)("div",{className:"bg",children:[Object(a.jsxs)("div",{className:"the-container",children:[Object(a.jsx)("input",{className:"input2",type:"checkbox",id:"toggle"}),Object(a.jsx)("label",{className:"label2",htmlFor:"toggle"}),Object(a.jsxs)("div",{className:"day-night-cont",children:[Object(a.jsx)("span",{className:"the-sun"}),Object(a.jsx)("div",{className:"the-moon",children:Object(a.jsx)("span",{className:"moon-inside"})})]}),Object(a.jsx)("div",{className:"switch",children:Object(a.jsx)("div",{className:"button",children:Object(a.jsx)("div",{className:"b-inside"})})}),Object(a.jsxs)("div",{className:"c-window",children:[Object(a.jsx)("span",{className:"the-sun"}),Object(a.jsx)("span",{className:"the-moon"}),Object(a.jsx)("div",{className:"the-fox",children:Object(a.jsxs)("div",{className:"fox-face",children:[Object(a.jsx)("section",{className:"eyes left"}),Object(a.jsx)("section",{className:"eyes right"}),Object(a.jsx)("span",{className:"nose"}),Object(a.jsx)("div",{className:"white-part",children:Object(a.jsx)("span",{className:"mouth"})})]})})]})]}),Object(a.jsx)("input",{type:"checkbox",id:"check"}),Object(a.jsxs)("label",{htmlFor:"check",children:[Object(a.jsx)("i",{className:"fas fa-bars",id:"btn"}),Object(a.jsx)("i",{className:"fas fa-times",id:"cancel"})]}),Object(a.jsx)("div",{className:"sidebar",children:Object(a.jsxs)("ul",{children:[Object(a.jsx)("li",{children:Object(a.jsxs)("a",{href:"!#",children:[Object(a.jsx)("i",{className:"fas fa-qrcode"}),"Dashboard"]})}),Object(a.jsx)("li",{children:Object(a.jsxs)("a",{href:"/",children:[Object(a.jsx)("i",{className:"fas fa-window-close"}),"Sign Out"]})})]})})]})}}]),c}(t.Component),O=Object(j.g)(x),u=Object(j.g)((function(){return Object(a.jsx)("div",{children:Object(a.jsxs)(n.a,{children:[Object(a.jsx)(j.b,{path:"/",exact:!0,render:function(){return Object(a.jsx)(j.a,{to:"/login"})}}),Object(a.jsx)(j.b,{path:"/login",exact:!0,component:o}),Object(a.jsx)(j.b,{path:"/dash",exact:!0,component:O})]})})}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(Object(a.jsx)(n.a,{children:Object(a.jsx)(j.d,{children:Object(a.jsx)(j.b,{path:"/",component:u})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[50,1,2]]]);
//# sourceMappingURL=main.da6f925c.chunk.js.map