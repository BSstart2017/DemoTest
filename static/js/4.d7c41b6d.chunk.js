(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[4],{292:function(e,s,t){"use strict";t.d(s,"a",(function(){return l}));var a=t(4),n=t(35),i=t(36),c=t(39),o=t(38),r=t(1),u=t(0),j=t.n(u),d=t(18),b=t(10),g=function(e){return{isAuth:e.auth.isAuth}},l=function(e){var s=function(s){Object(c.a)(u,s);var t=Object(o.a)(u);function u(){return Object(n.a)(this,u),t.apply(this,arguments)}return Object(i.a)(u,[{key:"render",value:function(){return this.props.isAuth?Object(r.jsx)(e,Object(a.a)({},this.props)):Object(r.jsx)(b.a,{to:"/Login"})}}]),u}(j.a.Component);return Object(d.b)(g)(s)}},294:function(e,s,t){e.exports={Dialogs:"Dialogs_Dialogs__1RKdS"}},295:function(e,s,t){e.exports={Dialog:"DialogItem_Dialog__34dA3"}},296:function(e,s,t){e.exports={Message:"Message_Message__30bQu",Messages:"Message_Messages__ZB-Gz"}},302:function(e,s,t){"use strict";t.r(s);var a=t(18),n=t(1),i=(t(0),t(294)),c=t.n(i),o=t(295),r=t.n(o),u=t(13),j=function(e){return Object(n.jsx)("div",{className:r.a.Dialog,children:Object(n.jsxs)("div",{children:[Object(n.jsx)("img",{src:"https://eduodessa.files.wordpress.com/2017/06/photo-833032.jpg?w=1400&h=9999",alt:"ava"}),Object(n.jsx)(u.b,{to:"/dialogs/"+e.id,children:e.name})]})})},d=t(296),b=t.n(d),g=function(e){return Object(n.jsx)("div",{className:b.a.Message,children:e.name})},l=t(10),h=t(88),O=t(127),p=t(33),f=t(65),m=Object(f.a)(50),x=Object(O.a)({form:"dialog-add-message-form"})((function(e){return Object(n.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(n.jsx)("div",{children:Object(n.jsx)(h.a,{component:p.b,name:"NewMessageBody",validate:[f.b,m],placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f..."})}),Object(n.jsx)("div",{children:Object(n.jsx)("button",{children:"\u041d\u043e\u0432\u043e\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435"})})]})})),D=function(e){var s=e.DialogsData.map((function(e){return Object(n.jsx)(j,{name:e.name,id:e.id},e.id)})),t=e.MessageData.map((function(e){return Object(n.jsx)(g,{name:e.message},e.id)}));e.NewMessageBody;return e.isAuth?Object(n.jsxs)("div",{className:c.a.Dialogs,children:[Object(n.jsx)("div",{children:s}),Object(n.jsxs)("div",{children:[t,Object(n.jsx)(x,{onSubmit:function(s){e.sendMessage(s.NewMessageBody)}})]})]}):Object(n.jsx)(l.a,{to:"/Login"})},M=t(126),v=t(9),_=t(292);s.default=Object(v.d)(Object(a.b)((function(e){return{DialogsData:e.DialogsPage.DialogsData,MessageData:e.DialogsPage.MessageData,NewMessageBody:e.DialogsPage.NewMessageBody,isAuth:e.auth.isAuth}}),(function(e){return{sendMessage:function(s){e(Object(M.b)(s))}}})),_.a)(D)}}]);
//# sourceMappingURL=4.d7c41b6d.chunk.js.map