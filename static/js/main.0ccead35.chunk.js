(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{126:function(e,t,n){"use strict";n.d(t,"b",(function(){return s}));var r=n(34),c=n(4),a="SEND_MESSAGE",i={DialogsData:[{id:1,name:"\u0421\u0430\u043d\u044f"},{id:2,name:"\u0410\u043d\u0434\u0440\u0435\u0439"},{id:3,name:"\u041d\u0438\u043a\u0438\u0442\u0430"},{id:4,name:"\u041e\u043b\u0435\u0441\u044f"},{id:5,name:"\u041f\u043e\u043b\u0438\u043d\u0430"},{id:6,name:"\u0410\u043b\u0438\u0441\u0430"}],MessageData:[{id:1,message:"\u041f\u0440\u0438\u0432\u0435\u0442"},{id:2,message:"\u041d\u0443 \u0437\u0434\u0430\u0440\u043e\u0432\u0430"},{id:3,message:"\u0417\u0434\u043e\u0440\u043e\u0432\u0435\u0439 \u0432\u0438\u0434\u0430\u043b\u0438"}]},s=function(e){return{type:a,NewMessageBody:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case a:var n=t.NewMessageBody;return Object(c.a)(Object(c.a)({},e),{},{MessageData:[].concat(Object(r.a)(e.MessageData),[{id:4,message:n}])});default:return e}}},131:function(e,t,n){e.exports={currentActive:"Paginators_currentActive__1je2B"}},132:function(e,t,n){e.exports={userPhoto:"Users_userPhoto__3kyV2"}},15:function(e,t,n){"use strict";n.d(t,"c",(function(){return a})),n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return s}));var r=n(130),c=r.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"09ddd3b4-64ae-492a-b0ea-82f76c89251b"}}),a={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return c.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},follow:function(e){return c.post("follow/".concat(e))},unfollow:function(e){return c.delete("follow/".concat(e))}},i={getProfile:function(e){return c.get("profile/"+e)},getStatus:function(e){return c.get("profile/status/"+e)},updateStatus:function(e){return c.put("profile/status",{status:e})}},s={me:function(){return c.get("auth/me")},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return c.post("auth/login",{email:e,password:t,rememberMe:n})},logout:function(){return c.delete("auth/login")}}},16:function(e,t,n){e.exports={nav:"Navbar_nav__13lAv",item:"Navbar_item__1vlJo",activeLink:"Navbar_activeLink__3Fhc4"}},165:function(e,t,n){},166:function(e,t,n){},171:function(e,t,n){},172:function(e,t,n){},173:function(e,t,n){},174:function(e,t,n){},291:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n(0),a=n.n(c),i=function(e){e&&e instanceof Function&&n.e(5).then(n.bind(null,300)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),r(e),c(e),a(e),i(e)}))},s=n(64),o=n.n(s),u=(n(165),n(35)),l=n(36),d=n(39),j=n(38),f=n(16),b=n.n(f),h=n(13),p=(n(166),function(){return Object(r.jsx)("div",{children:Object(r.jsxs)("div",{children:["friends",Object(r.jsx)("div",{children:"Friend 1"}),Object(r.jsx)("div",{children:"friend 2"}),Object(r.jsx)("div",{children:"friend 3"})]})})}),O=function(){return Object(r.jsx)("nav",{className:b.a.nav,children:Object(r.jsxs)("div",{children:[Object(r.jsx)("div",{className:b.a.item,children:Object(r.jsx)(h.b,{to:"/Profile",activeClassName:b.a.activeLink,children:"\u041f\u0440\u043e\u0444\u0438\u043b\u044c"})}),Object(r.jsx)("div",{className:b.a.item,children:Object(r.jsx)(h.b,{to:"/Dialogs",activeClassName:b.a.activeLink,children:"\u0421\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f"})}),Object(r.jsx)("div",{className:b.a.item,children:Object(r.jsx)(h.b,{to:"/Users",activeClassName:b.a.activeLink,children:"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0438"})}),Object(r.jsx)("div",{className:b.a.item,children:Object(r.jsx)(h.b,{to:"/News",activeClassName:b.a.activeLink,children:"\u041d\u043e\u0432\u043e\u0441\u0442\u0438"})}),Object(r.jsx)("div",{className:b.a.item,children:Object(r.jsx)(h.b,{to:"/Music",activeClassName:b.a.activeLink,children:"\u041c\u0443\u0437\u044b\u043a\u0430"})}),Object(r.jsx)("div",{className:b.a.item,children:Object(r.jsx)(h.b,{to:"/Settings",activeClassName:b.a.activeLink,children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438"})}),Object(r.jsx)(p,{})]})})},g=(n(171),n(10)),v=(n(172),function(){return Object(r.jsx)("div",{children:"News"})}),m=(n(173),function(){return Object(r.jsx)("div",{children:"\u041c\u0443\u0437\u044b\u043a\u0430"})}),x=(n(174),function(){return Object(r.jsx)("div",{children:"Settings"})}),w=n(18),P=n(12),_=n.n(P),S=n(25),y=n(34),C=n(4),N=n(15),E=function(e,t,n,r){return e.map((function(e){return e[n]===t?Object(C.a)(Object(C.a)({},e),r):e}))},I="FALLOW",k="UNFALLOW",U="SET_USERS",L="SET_CURRENT_PAGE",F="SET_TOTAL_USERS_COUNT",A="TOGGLE_IS_FETCHING",T="TOGGLE_IS_FOLLOWING_PROGRESS",D={users:[],pageSize:10,totalUserCount:0,currentPage:1,isFetching:!1,followingInProgress:[]},z=function(e){return{type:I,userId:e}},M=function(e){return{type:k,userId:e}},R=function(e){return{type:L,currentPage:e}},G=function(e){return{type:A,isFetching:e}},B=function(e,t){return{type:T,isFetching:e,userId:t}},H=function(){var e=Object(S.a)(_.a.mark((function e(t,n,r,c){return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(B(!0,n)),e.next=3,r(n);case 3:0===e.sent.data.resultCode&&t(c(n)),t(B(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,c){return e.apply(this,arguments)}}(),X=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case I:return Object(C.a)(Object(C.a)({},e),{},{users:E(e.users,t.userId,"id",{fallowed:!0})});case k:return Object(C.a)(Object(C.a)({},e),{},{users:E(e.users,t.userId,"id",{fallowed:!1})});case U:return Object(C.a)(Object(C.a)({},e),{},{users:Object(y.a)(t.users)});case L:return Object(C.a)(Object(C.a)({},e),{},{currentPage:t.currentPage});case F:return Object(C.a)(Object(C.a)({},e),{},{totalUsersCount:t.count});case A:return Object(C.a)(Object(C.a)({},e),{},{isFetching:t.isFetching});case T:return Object(C.a)(Object(C.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(y.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});default:return e}},J=n(131),W=n.n(J),q=function(e){for(var t=e.totalUsersCount,n=e.pageSize,c=e.currentPage,a=e.onPageChanged,i=Math.ceil(t/n),s=[],o=1;o<=i;o++)s.push(o);return Object(r.jsx)("div",{children:s.map((function(e){return Object(r.jsx)("span",{className:c===e&&W.a.currentActive,onClick:function(){a(e)},children:e})}))})},V=n(132),Z=n.n(V),K=n.p+"static/media/photoAvatar.8f76b1e3.png",Y=function(e){var t=e.user,n=e.followingInProgress,c=e.unfollow,a=e.follow;return Object(r.jsxs)("div",{children:[Object(r.jsxs)("span",{children:[Object(r.jsx)("div",{children:Object(r.jsx)(h.b,{to:"/profile/"+t.id,children:Object(r.jsx)("img",{src:null!=t.photos.small?t.photos.small:K,className:Z.a.userPhoto,alt:"noPhoto"})})}),Object(r.jsx)("div",{children:t.fallowed?Object(r.jsx)("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){c(t.id)},children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"}):Object(r.jsx)("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){a(t.id)},children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"})})]}),Object(r.jsxs)("span",{children:[Object(r.jsx)("div",{children:t.name}),Object(r.jsx)("div",{children:t.status})]}),Object(r.jsxs)("span",{children:[Object(r.jsx)("div",{children:"user.location.country"}),Object(r.jsx)("div",{children:"user.location.city"})]})]})},Q=function(e){var t=e.currentPage,n=e.totalUsersCount,c=e.onPageChanged,a=e.pageSize,i=e.users,s=e.followingInProgress,o=e.unfollow,u=e.follow;return Object(r.jsxs)("div",{children:[Object(r.jsx)(q,{currentPage:t,onPageChanged:c,totalUsersCount:n,pageSize:a}),Object(r.jsx)("div",{children:i.map((function(e){return Object(r.jsx)(Y,{user:e,followingInProgress:s,unfollow:o,follow:u},e.id)}))})]})},$=n(41),ee=n(9),te=n(133),ne=Object(te.a)((function(e){return e.UsersPage.users}),(function(e){return e.filter((function(e){return!0}))})),re=function(e){return e.UsersPage.pageSize},ce=function(e){return e.UsersPage.totalUsersCount},ae=function(e){return e.UsersPage.currentPage},ie=function(e){return e.UsersPage.isFetching},se=function(e){return e.UsersPage.followingInProgress},oe=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(u.a)(this,n);for(var r=arguments.length,c=new Array(r),a=0;a<r;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).onPageChanged=function(t){var n=e.props.pageSize;e.props.getUsers(t,n)},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.currentPage,n=e.pageSize;this.props.getUsers(t,n)}},{key:"render",value:function(){return Object(r.jsxs)(r.Fragment,{children:[this.props.isFetching?Object(r.jsx)($.a,{}):null,Object(r.jsx)(Q,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,followingInProgress:this.props.followingInProgress})]})}}]),n}(a.a.Component),ue=Object(ee.d)(Object(w.b)((function(e){return{users:ne(e),pageSize:re(e),totalUsersCount:ce(e),currentPage:ae(e),isFetching:ie(e),followingInProgress:se(e)}}),{follow:function(e){return function(){var t=Object(S.a)(_.a.mark((function t(n){return _.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:H(n,e,N.c.follow.bind(N.c),z);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(S.a)(_.a.mark((function t(n){return _.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:H(n,e,N.c.unfollow.bind(N.c),M);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setCurrentPage:R,toggleFollowingProgress:B,getUsers:function(e,t){return function(){var n=Object(S.a)(_.a.mark((function n(r){var c;return _.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(G(!0)),r(R(e)),n.next=4,N.c.getUsers(e,t);case 4:c=n.sent,r(G(!1)),r((i=c.items,{type:U,users:i})),r((a=c.totalCount,{type:F,count:a}));case 8:case"end":return n.stop()}var a,i}),n)})));return function(e){return n.apply(this,arguments)}}()}}))(oe),le=n(68),de=n.n(le),je=function(e){return Object(r.jsxs)("header",{className:de.a.header,children:[Object(r.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Mega_Image_Logo.png/800px-Mega_Image_Logo.png",alt:"logo"}),Object(r.jsx)("div",{className:de.a.loginStyle,children:e.isAuth?Object(r.jsxs)("div",{children:[e.login," - ",Object(r.jsx)("button",{onClick:e.logout,children:"\u0412\u044b\u0445\u043e\u0434"})]}):Object(r.jsx)(h.b,{to:"/Login",className:de.a.colorLogin,children:"\u0412\u0445\u043e\u0434"})})]})},fe=n(45),be="it_Belarus/auth/SET_USER_DATA",he={userID:null,email:null,login:null,isAuth:!1},pe=function(e,t,n,r){return{type:be,payload:{userId:e,email:t,login:n,iaAuth:r}}},Oe=function(){return function(e){return N.a.me().then((function(t){if(0===t.data.resultCode){var n=t.data.data,r=n.id,c=n.login,a=n.email;e(pe(r,c,a,!0))}}))}},ge=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:he,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case be:return Object(C.a)(Object(C.a)(Object(C.a)({},e),t.payload),{},{isAuth:!0});default:return e}},ve=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(r.jsx)(je,Object(C.a)({},this.props))}}]),n}(a.a.Component),me=Object(w.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:function(){return function(e){N.a.logout().then((function(t){0===t.data.resultCode&&e(pe(null,null,null,!1))}))}}})(ve),xe=n(127),we=n(33),Pe=n(65),_e=n(53),Se=n.n(_e),ye=Object(Pe.a)(20),Ce=Object(xe.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error;return Object(r.jsxs)("form",{onSubmit:t,children:[Object(we.c)("Email","email",we.a,[Pe.b,ye]),Object(we.c)("Password","password",we.a,[Pe.b,ye],{type:"password"}),Object(we.c)(null,"rememberMe",we.a,[],{type:"checkbox"},"rememberMe"),n&&Object(r.jsx)("div",{className:Se.a.FormSummaryError,children:n}),Object(r.jsx)("div",{children:Object(r.jsx)("button",{children:"\u0417\u0430\u043b\u043e\u0433\u0438\u043d\u0438\u0442\u044c\u0441\u044f"})})]})})),Ne=Object(w.b)((function(e){return{isAuth:e.auth.isAuth}}),{login:function(e,t,n){return function(r){N.a.login(e,t,n).then((function(e){if(0===e.data.resultCode)r(Oe());else{var t=e.data.messages.length>0?e.data.message[0]:"Some error";r(Object(fe.a)("login",{_error:t}))}}))}}})((function(e){return e.isAuth?Object(r.jsx)(g.a,{to:"/profile"}):Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{children:"\u0417\u0430\u043b\u043e\u0433\u0438\u043d\u044c\u0441\u044f \u0447\u0442\u043e \u0431\u044b \u0431\u044b\u043b\u043e \u0442\u043e \u0447\u0442\u043e \u043d\u0430\u0434\u043e!"}),Object(r.jsx)(Ce,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe)}})]})})),Ee=n(87),Ie="INITIALIZED_SUCCES",ke={initialized:!1},Ue=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ke,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Ie:return Object(C.a)(Object(C.a)({},e),{},{initialized:!0});default:return e}},Le=n(95),Fe=n(126),Ae=n(135),Te=n(128),De=Object(ee.c)({ProfilePage:Le.b,DialogsPage:Fe.a,UsersPage:X,auth:ge,form:Te.a,app:Ue}),ze=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||ee.d,Me=Object(ee.e)(De,ze(Object(ee.a)(Ae.a))),Re=function(e){return function(t){return Object(r.jsx)(c.Suspense,{fallback:Object(r.jsx)($.a,{}),children:Object(r.jsx)(e,Object(C.a)({},t))})}},Ge=a.a.lazy((function(){return n.e(4).then(n.bind(null,302))})),Be=a.a.lazy((function(){return n.e(3).then(n.bind(null,301))})),He=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.props.initializedApp()}},{key:"render",value:function(){return this.props.initialized?Object(r.jsxs)("div",{className:"app-wrapper",children:[Object(r.jsx)(me,{}),Object(r.jsx)(O,{}),Object(r.jsxs)("div",{className:"app-wrapper-content",children:[Object(r.jsx)(g.b,{path:"/Profile/:userId?",render:Re(Be)}),Object(r.jsx)(g.b,{path:"/Dialogs",render:Re(Ge)}),Object(r.jsx)(g.b,{path:"/News",render:function(){return Object(r.jsx)(v,{})}}),Object(r.jsx)(g.b,{path:"/Users",render:function(){return Object(r.jsx)(ue,{})}}),Object(r.jsx)(g.b,{path:"/Music",render:function(){return Object(r.jsx)(m,{})}}),Object(r.jsx)(g.b,{path:"/Settings",render:function(){return Object(r.jsx)(x,{})}}),Object(r.jsx)(g.b,{path:"/Login",render:function(){return Object(r.jsx)(Ne,{})}})]})]}):Object(r.jsx)($.a,{})}}]),n}(Ee.Component),Xe=Object(ee.d)(g.f,Object(w.b)((function(e){return{initialized:e.app.initialized}}),{initializedApp:function(){return function(e){var t=e(Oe());Promise.all([t]).then((function(){e({type:Ie})}))}}}))(He),Je=function(e){return Object(r.jsx)(h.a,{children:Object(r.jsx)(w.a,{store:Me,children:Object(r.jsx)(Xe,{})})})};o.a.render(Object(r.jsx)(Je,{}),document.getElementById("root")),i()},33:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return d})),n.d(t,"c",(function(){return j}));var r=n(4),c=n(94),a=n(1),i=(n(0),n(53)),s=n.n(i),o=n(88),u=function(e){e.input;var t=e.meta,n=t.touched,r=t.error,c=e.children,i=n&&r;return Object(a.jsxs)("div",{className:s.a.formControl+" "+(i?s.a.error:""),children:[Object(a.jsx)("div",{children:c}),i&&Object(a.jsx)("span",{children:r})]})},l=function(e){var t=e.input,n=(e.meta,e.child,Object(c.a)(e,["input","meta","child"]));return Object(a.jsx)(u,Object(r.a)(Object(r.a)({},e),{},{children:Object(a.jsx)("textarea",Object(r.a)(Object(r.a)({},t),n))}))},d=function(e){var t=e.input,n=(e.meta,e.child,Object(c.a)(e,["input","meta","child"]));return Object(a.jsx)(u,Object(r.a)(Object(r.a)({},e),{},{children:Object(a.jsx)("input",Object(r.a)(Object(r.a)({},t),n))}))},j=function(e,t,n,c){var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return Object(a.jsxs)("div",{children:[Object(a.jsx)(o.a,Object(r.a)({placeholder:e,name:t,component:n,validate:c},i))," ",s]})}},41:function(e,t,n){"use strict";var r=n(1),c=(n(0),n.p+"static/media/Preloader.89a10bd4.svg");t.a=function(e){return Object(r.jsx)("div",{children:Object(r.jsx)("img",{src:c})})}},53:function(e,t,n){e.exports={"form-control":"FormsControls_form-control__3o3te",error:"FormsControls_error__fFqHR",FormSummaryError:"FormsControls_FormSummaryError__1uE_A"}},65:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return c}));var r=function(e){if(!e)return"Field is required"},c=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e," symbols")}}},68:function(e,t,n){e.exports={header:"Header_header__38F9X",loginStyle:"Header_loginStyle__25XZe",colorLogin:"Header_colorLogin__1Uy3X"}},95:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"d",(function(){return p})),n.d(t,"c",(function(){return O})),n.d(t,"e",(function(){return g}));var r=n(12),c=n.n(r),a=n(25),i=n(34),s=n(4),o=n(15),u="ADD-POST",l="SET_USER_PROFILE",d="SET_STATUS",j="DELETE_POST",f={PostsData:[{id:1,message:"\u0427\u0435 \u043c\u043e\u043b\u0447\u0438\u043c \u043d\u0430 \u0447\u0435 \u043d\u0435 \u043f\u0438\u0448\u0435\u043c \u0430?",LikesCount:"9"},{id:2,message:"\u041f\u0440\u0438\u0432\u0435\u0442 \u041c\u0438\u0440!",LikesCount:"12"},{id:3,message:"\u041d\u0443 \u0437\u0434\u0430\u0440\u043e\u0432\u0430 \u0447\u0443\u0432\u0430\u043a!",LikesCount:"32"}],profile:null,status:""},b=function(e){return{type:u,NewPostText:e}},h=function(e){return{type:d,status:e}},p=function(e){return function(){var t=Object(a.a)(c.a.mark((function t(n){var r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.getProfile(e);case 2:r=t.sent,n((c=r.data,{type:l,profile:c}));case 4:case"end":return t.stop()}var c}),t)})));return function(e){return t.apply(this,arguments)}}()},O=function(e){return function(){var t=Object(a.a)(c.a.mark((function t(n){var r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.getStatus(e);case 2:r=t.sent,n(h(r.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},g=function(e){return function(){var t=Object(a.a)(c.a.mark((function t(n){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.updateStatus(e);case 2:0===t.sent.data.resultCode&&n(h(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:var n={id:4,message:t.NewPostText,LikesCount:"0"};return Object(s.a)(Object(s.a)({},e),{},{PostsData:[].concat(Object(i.a)(e.PostsData),[n]),NewPostText:""});case l:return Object(s.a)(Object(s.a)({},e),{},{profile:t.profile});case d:return Object(s.a)(Object(s.a)({},e),{},{status:t.status});case j:return Object(s.a)(Object(s.a)({},e),{},{PostsData:e.PostsData.filter((function(e){return e.id!==t.postId}))});default:return e}}}},[[291,1,2]]]);
//# sourceMappingURL=main.0ccead35.chunk.js.map