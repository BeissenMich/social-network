(this["webpackJsonpmy-first-react"]=this["webpackJsonpmy-first-react"]||[]).push([[1],{137:function(e,t,n){e.exports=n(226)},142:function(e,t,n){},226:function(e,t,n){"use strict";n.r(t);n(62),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var a=n(0),r=n.n(a),i=n(42),c=n.n(i),s=n(30),u=n(31),o=n(33),l=n(32),f=n(34),d=(n(142),n(50)),m=n.n(d),p=n(12),v=function(e){return r.a.createElement("header",{className:m.a.header},r.a.createElement("img",{src:"https://yt3.ggpht.com/a/AATXAJwjqeBPBlUFN7PkmC6KsliyjFJ9tnva3eaSGxnrlQ=s900-c-k-c0xffffffff-no-rj-mo",alt:""}),r.a.createElement("div",{className:m.a.loginBlock},e.isAuth?r.a.createElement("div",null," ",e.login," - ",r.a.createElement("button",{onClick:e.logout},"Logout")," "):r.a.createElement(p.b,{to:"/login"},"Login")))},g=n(22),h=n(25),b=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(v,this.props)}}]),t}(r.a.Component),E=Object(g.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:h.d})(b),O=n(4),S=n.n(O),_=function(){return r.a.createElement("nav",{className:S.a.navbar},r.a.createElement("span",{className:S.a.item},r.a.createElement(p.b,{className:S.a.navLink,activeClassName:S.a.activeLink,to:"/profile"},"Profile")),r.a.createElement("span",{className:S.a.item},r.a.createElement(p.b,{className:S.a.navLink,activeClassName:S.a.activeLink,to:"/dialogues"},"Messages")),r.a.createElement("div",{className:"".concat(S.a.item," ").concat(S.a.itemDisabled)},r.a.createElement(p.b,{className:S.a.navLink,activeClassName:S.a.activeLink,to:"/news"},"News")),r.a.createElement("div",{className:"".concat(S.a.item," ").concat(S.a.itemDisabled)},r.a.createElement(p.b,{className:S.a.navLink,activeClassName:S.a.activeLink,to:"/music"},"Music")),r.a.createElement("div",{className:"".concat(S.a.item," ").concat(S.a.itemDisabled)},r.a.createElement(p.b,{className:S.a.navLink,activeClassName:S.a.activeLink,to:"/setting"},"Setting")),r.a.createElement("div",{className:"".concat(S.a.item," ").concat(S.a.itemDisabled)},r.a.createElement(p.b,{className:S.a.navLink,activeClassName:S.a.activeLink,to:"/friends"},"Friends")),r.a.createElement("div",{className:S.a.item},r.a.createElement(p.b,{className:S.a.navLink,activeClassName:S.a.activeLink,to:"/users"},"Users")))},w=n(20),y=n(17),N=n(6),j={initialized:!1},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INITIALIZED_SUCCESS":return Object(N.a)({},e,{initialized:!0});default:return e}},L=n(57),T=n(56),C=n(73),I={arrayBest:[{id:1,name:"Nastya"},{id:2,name:"Sergey"},{id:3,name:"Sanya"}],allFriend:[{id:1,name:"Nastya"},{id:2,name:"Sergey"},{id:3,name:"Sanya"},{id:4,name:"Fedos"},{id:5,name:"Valera"},{id:6,name:"Marina"},{id:7,name:"Vasya"},{id:8,name:"Ira"},{id:9,name:"Inna"},{id:10,name:"Kirill"}]},P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I;arguments.length>1&&arguments[1];return e},A=n(80),x=n(86),U=n(79),D=Object(y.c)({profilePage:T.b,dialoguesPage:C.a,friendPage:P,usersPage:A.a,auth:h.a,form:U.a,app:k}),F=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||y.d,R=Object(y.e)(D,F(Object(y.a)(x.a)));window.__store__=R;var G=R,z=(r.a.lazy((function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,311))})),r.a.lazy((function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,312))}))),M=(r.a.lazy((function(){return n.e(10).then(n.bind(null,308))})),r.a.lazy((function(){return n.e(8).then(n.bind(null,309))})),r.a.lazy((function(){return n.e(9).then(n.bind(null,310))})),r.a.lazy((function(){return n.e(6).then(n.bind(null,313))})),r.a.lazy((function(){return Promise.all([n.e(0),n.e(7)]).then(n.bind(null,314))})),function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?r.a.createElement("div",{className:"app-wrapper"},r.a.createElement(E,null),r.a.createElement(_,null),r.a.createElement("div",{className:"app-wrapper-content"},r.a.createElement(w.b,{path:"/profile/:userId?",render:(e=z,function(t){return r.a.createElement(r.a.Suspense,{fallback:r.a.createElement("div",null,"Loading...")},r.a.createElement(e,t))})}))):r.a.createElement(L.a,null);var e}}]),t}(r.a.Component)),H=Object(y.d)(w.f,Object(g.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){var t=e(Object(h.b)());Promise.all([t]).then((function(){e({type:"INITIALIZED_SUCCESS"})}))}}}))(M),B=function(){return r.a.createElement(p.a,null,r.a.createElement(g.a,{store:G},r.a.createElement(H,null)))};c.a.render(r.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},25:function(e,t,n){"use strict";n.d(t,"b",(function(){return f})),n.d(t,"c",(function(){return d})),n.d(t,"d",(function(){return m}));var a=n(5),r=n.n(a),i=n(9),c=n(6),s=n(7),u=n(43),o={userId:null,email:null,login:null,isAuth:!1},l=function(e,t,n,a){return{type:"auth/SET_USER_DATA",data:{userId:e,email:t,login:n,isAuth:a}}},f=function(){return function(){var e=Object(i.a)(r.a.mark((function e(t){var n,a,i,c,u;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.me();case 2:0===(n=e.sent).data.resultCode&&(a=n.data.data,i=a.id,c=a.email,u=a.login,t(l(i,c,u,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},d=function(e,t,n){return function(){var a=Object(i.a)(r.a.mark((function a(i){var c,o;return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,s.a.login(e,t,n);case 2:0===(c=a.sent).data.resultCode?i(f()):(o=c.data.messages.length>0?c.data.messages[0]:"Some error",i(Object(u.a)("login",{_error:o})));case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},m=function(){return function(){var e=Object(i.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.logout();case 2:0===e.sent.data.resultCode&&t(l(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"auth/SET_USER_DATA":return Object(c.a)({},e,{},t.data);default:return e}}},4:function(e,t,n){e.exports={navbar:"Navbar_navbar__4J0zQ",item:"Navbar_item__EaxNm",itemDisabled:"Navbar_itemDisabled__3OlD9",activeLink:"Navbar_activeLink__1hzQr",navLink:"Navbar_navLink__1Cztt"}},50:function(e,t,n){e.exports={header:"Header_header__3yZoK",loginBlock:"Header_loginBlock__3gRxx"}},56:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"d",(function(){return f})),n.d(t,"c",(function(){return d})),n.d(t,"f",(function(){return m})),n.d(t,"e",(function(){return p}));var a=n(5),r=n.n(a),i=n(9),c=n(6),s=n(7),u={postData:[{id:1,message:"Hi, how are you?",likes:15},{id:2,message:"Love me",likes:10},{id:3,message:"\u042f \u0445\u043e\u0447\u0443 \u043d\u0430\u0439\u0442\u0438 \u0440\u0430\u0431\u043e\u0442\u0443",likes:14}],profile:null,status:""},o=function(e){return{type:"ADD_POST",newPost:e}},l=function(e){return{type:"SET_STATUS",status:e}},f=function(e){return function(){var t=Object(i.a)(r.a.mark((function t(n){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.b.getProfile(e);case 2:a=t.sent,n({type:"SET_USER_PROFILE",profile:a.data});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},d=function(e){return function(){var t=Object(i.a)(r.a.mark((function t(n){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.b.getStatus(e);case 2:a=t.sent,n(l(a.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},m=function(e){return function(){var t=Object(i.a)(r.a.mark((function t(n){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.b.updateStatus(e);case 2:0===t.sent.data.resultCode&&n(l(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},p=function(e){return function(){var t=Object(i.a)(r.a.mark((function t(n){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.b.savePhoto(e);case 2:0===(a=t.sent).data.resultCode&&n({type:"SAVE_PHOTO_SUCCESS",photos:a.data.data.photos});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_POST":var n={id:5,message:t.newPost,likes:0};return Object.assign({},e,{postData:e.postData.concat(n),newPostText:""});case"SET_USER_PROFILE":return Object.assign({},e,{profile:t.profile});case"SET_STATUS":return Object.assign({},e,{status:t.status});case"DELETE_POST":return Object(c.a)({},e,{postData:e.postData.filter((function(e){return e.id!==t.postId}))});case"SAVE_PHOTO_SUCCESS":return Object(c.a)({},e,{profile:Object(c.a)({},e.profile,{photos:t.photos})});default:return e}}},57:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(84),c=n.n(i),s=n(85),u=n.n(s);t.a=function(){return r.a.createElement("div",{className:u.a.item},r.a.createElement("img",{alt:"loader",src:c.a}))}},62:function(e,t,n){},7:function(e,t,n){"use strict";n.d(t,"c",(function(){return i})),n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return s}));var a=n(83),r=a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"2207a5d4-08e2-4a3b-98af-c3bbaf315c7d"}}),i={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return r.get("users?page=".concat(e,"&count=").concat(t),{}).then((function(e){return e.data}))},follow:function(e){return r.post("follow/".concat(e))},unfollow:function(e){return r.delete("follow/".concat(e))}},c={getProfile:function(e){return r.get("profile/"+e)},getStatus:function(e){return r.get("profile/status/"+e)},updateStatus:function(e){return r.put("profile/status/",{status:e})},savePhoto:function(e){var t=new FormData;return t.append("image",e),r.put("profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}})}},s={me:function(){return r.get("auth/me")},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return r.post("auth/login",{email:e,password:t,rememberMe:n})},logout:function(){return r.delete("auth/login")}}},73:function(e,t,n){"use strict";n.d(t,"b",(function(){return r}));var a={userArr:[{id:1,name:"Nastya"},{id:2,name:"Sergey"},{id:3,name:"Sanya"},{id:4,name:"Fedos"},{id:5,name:"Valera"}],messageArr:[{id:1,message:"Hi"},{id:2,message:"How are you?"},{id:3,message:"I'm fine"},{id:4,message:"Go home"},{id:5,message:"I go"}]},r=function(e){return{type:"SEND-MESSAGE",newMessage:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEND-MESSAGE":var n={id:6,message:t.newMessage};return Object.assign({},e,{messageArr:e.messageArr.concat(n)});default:return e}}},80:function(e,t,n){"use strict";var a=n(5),r=n.n(a),i=n(9),c=n(88),s=n(6),u=n(7),o=function(e,t,n,a){return e.map((function(e){return e[n]===t?Object(s.a)({},e,{},a):e}))};n.d(t,"d",(function(){return d})),n.d(t,"c",(function(){return g})),n.d(t,"b",(function(){return b})),n.d(t,"e",(function(){return E}));var l={users:[],pageSize:10,totalUsersCount:0,currentPage:1,isFetching:!1,followingInProgress:[]},f=function(e){return{type:"FOLLOW",userId:e}},d=function(e){return{type:"SET_CURRENT_PAGE",currentPage:e}},m=function(e){return{type:"UNFOLLOW",userId:e}},p=function(e){return{type:"TOGGLE_IS_FETCHING",isFetching:e}},v=function(e,t){return{type:"TOGGLE_IS_FOLLOWING_PROGRESS",isFetching:e,userId:t}},g=function(e,t){return function(){var n=Object(i.a)(r.a.mark((function n(a){var i;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a(p(!0)),n.next=3,u.c.getUsers(e,t);case 3:i=n.sent,a(p(!1)),a({type:"SET_USERS",users:i.items}),a({type:"SET_TOTAL_USERS_COUNT",totalUsersCount:i.totalCount});case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},h=function(){var e=Object(i.a)(r.a.mark((function e(t,n,a,i){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(v(!0,n)),e.next=3,a(n);case 3:0===e.sent.data.resultCode&&t(i(n)),t(v(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,a,r){return e.apply(this,arguments)}}(),b=function(e){return function(){var t=Object(i.a)(r.a.mark((function t(n){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:h(n,e,u.c.follow.bind(u.c),f);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},E=function(e){return function(){var t=Object(i.a)(r.a.mark((function t(n){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:h(n,e,u.c.unfollow.bind(u.c),m);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":return Object(s.a)({},e,{users:o(e.users,t.userId,"id",{followed:!0})});case"UNFOLLOW":return Object(s.a)({},e,{users:o(e.users,t.userId,"id",{followed:!1})});case"SET_USERS":return Object(s.a)({},e,{users:t.users});case"SET_CURRENT_PAGE":return Object(s.a)({},e,{currentPage:t.currentPage});case"SET_TOTAL_USERS_COUNT":return Object(s.a)({},e,{totalUsersCount:t.totalUsersCount});case"TOGGLE_IS_FETCHING":return Object(s.a)({},e,{isFetching:t.isFetching});case"TOGGLE_IS_FOLLOWING_PROGRESS":return Object(s.a)({},e,{followingInProgress:t.isFetching?[].concat(Object(c.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});default:return e}}},84:function(e,t,n){e.exports=n.p+"static/media/Loading-circles-acs-rectangles.492f13cb.webp"},85:function(e,t,n){e.exports={item:"Preloader_item__1FUAg"}}},[[137,2,3]]]);
//# sourceMappingURL=main.3565062f.chunk.js.map