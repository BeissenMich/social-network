(this["webpackJsonpmy-first-react"]=this["webpackJsonpmy-first-react"]||[]).push([[5],{227:function(e,t,a){e.exports={formControl:"FormsControls_formControl__3sotC",error:"FormsControls_error__3p1eI",formSummaryError:"FormsControls_formSummaryError__3BCwQ",form_item:"FormsControls_form_item__16jZM",remember:"FormsControls_remember__gsKH-",rememberLable:"FormsControls_rememberLable__6LCTh",checkbox:"FormsControls_checkbox__3hP9m"}},228:function(e,t,a){"use strict";a.d(t,"b",(function(){return u})),a.d(t,"a",(function(){return m})),a.d(t,"c",(function(){return p}));var n=a(239),r=a(0),o=a.n(r),s=a(110),l=a(227),c=a.n(l),i=function(e){e.input;var t=e.meta,a=t.touched,n=t.error,r=e.children,s=a&&n;return o.a.createElement("div",{className:c.a.formControl+" "+(s?c.a.error:"")},o.a.createElement("div",null,r),s&&o.a.createElement("span",null,n))},u=function(e){var t=e.input,a=(e.meta,Object(n.a)(e,["input","meta"]));return o.a.createElement(i,e,o.a.createElement("textarea",Object.assign({},t,a)))},m=function(e){var t=e.input,a=(e.meta,Object(n.a)(e,["input","meta"]));return o.a.createElement(i,e,o.a.createElement("input",Object.assign({},t,a)))},p=function(e,t,a,n,r){return o.a.createElement("div",null,o.a.createElement(s.a,Object.assign({component:n,validate:a,name:t,placeholder:e},r)))}},230:function(e,t,a){"use strict";a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return r}));var n=function(e){if(!e)return"Field is required"},r=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e," symbols")}}},231:function(e,t,a){"use strict";a.d(t,"a",(function(){return f}));var n=a(30),r=a(31),o=a(33),s=a(32),l=a(34),c=a(0),i=a.n(c),u=a(20),m=a(22),p=function(e){return{isAuth:e.auth.isAuth}},f=function(e){var t=function(t){function a(){return Object(n.a)(this,a),Object(o.a)(this,Object(s.a)(a).apply(this,arguments))}return Object(l.a)(a,t),Object(r.a)(a,[{key:"render",value:function(){return this.props.isAuth?i.a.createElement(e,this.props):i.a.createElement(u.a,{to:"/login"})}}]),a}(i.a.Component);return Object(m.b)(p)(t)}},237:function(e,t,a){e.exports=a.p+"static/media/user-avatar.09001408.png"},238:function(e,t,a){"use strict";function n(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var a=[],n=!0,r=!1,o=void 0;try{for(var s,l=e[Symbol.iterator]();!(n=(s=l.next()).done)&&(a.push(s.value),!t||a.length!==t);n=!0);}catch(c){r=!0,o=c}finally{try{n||null==l.return||l.return()}finally{if(r)throw o}}return a}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}a.d(t,"a",(function(){return n}))},252:function(e,t,a){e.exports={content:"Profile_content__bR3gc"}},253:function(e,t,a){e.exports={my_posts:"MyPosts_my_posts__2RunZ",add_news:"MyPosts_add_news__2gZv9"}},301:function(e,t,a){e.exports={item:"Post_item__1MTGV",message:"Post_message__3Ix7v",like:"Post_like__18q8w"}},302:function(e,t,a){e.exports={profile:"ProfileInfo_profile__10svT",info:"ProfileInfo_info__3U8dc"}},303:function(e,t,a){e.exports=a.p+"static/media/work_icon.c5c5641b.svg"},304:function(e,t,a){e.exports=a.p+"static/media/no_work_icon.6a84f8e0.svg"},312:function(e,t,a){"use strict";a.r(t);var n=a(30),r=a(31),o=a(33),s=a(32),l=a(34),c=a(0),i=a.n(c),u=a(252),m=a.n(u),p=a(56),f=a(253),d=a.n(f),b=a(301),h=a.n(b),_=function(e){return i.a.createElement("div",{className:h.a.item},i.a.createElement("div",{className:h.a.message},i.a.createElement("img",{src:"https://www.freeiconspng.com/uploads/man-icon-png-29.png",alt:""}),i.a.createElement("p",null,e.message)),i.a.createElement("hr",null),i.a.createElement("div",{className:h.a.like},i.a.createElement("span",null,"like ",e.like)))},E=a(110),g=a(111),v=a(230),j=a(228),O=Object(v.a)(30),y=Object(g.a)({form:"post"})((function(e){return i.a.createElement("form",{onSubmit:e.handleSubmit,className:d.a.add_news},i.a.createElement(E.a,{validate:[v.b,O],name:"newPost",component:j.b,placeholder:"Your news"}),i.a.createElement("button",null,"Send"))})),k=i.a.memo((function(e){console.log("lalalal");var t=e.postData.map((function(e){return i.a.createElement(_,{message:e.message,like:e.likes,id:e.id,key:e.id})}));return i.a.createElement("div",{className:d.a.my_posts},i.a.createElement("div",{className:"header_posts"},i.a.createElement("h4",null,"My Posts")),i.a.createElement(y,{onSubmit:function(t){e.addPost(t.newPost)}}),i.a.createElement("div",{className:d.a.added_news},t))})),P=a(22);console.log("lalalal23");var S=Object(P.b)((function(e){return{newPostTextChange:e.profilePage.newPostText,postData:e.profilePage.postData}}),(function(e){return{addPost:function(t){e(Object(p.a)(t))}}}))(k),w=a(302),C=a.n(w),x=a(57),N=a(237),F=a.n(N),A=a(303),I=a.n(A),M=a(304),T=a.n(M),D=a(238),J=function(e){var t=Object(c.useState)(!1),a=Object(D.a)(t,2),n=a[0],r=a[1],o=Object(c.useState)(e.status),s=Object(D.a)(o,2),l=s[0],u=s[1];Object(c.useEffect)((function(){u(e.status)}),[e.status]);return i.a.createElement("div",null,!n&&i.a.createElement("div",null,i.a.createElement("span",{onDoubleClick:function(){r(!0)}},e.status||"-------")),n&&i.a.createElement("div",null,i.a.createElement("input",{onBlur:function(){r(!1),e.updateStatus(l)},onChange:function(e){u(e.currentTarget.value)},autoFocus:!0,value:l})))},L=function(e){return e.profile?i.a.createElement("div",{className:C.a.profile},i.a.createElement("div",{className:C.a.photo},i.a.createElement("img",{src:null!==e.profile.photos.large?e.profile.photos.large:F.a,alt:""})),i.a.createElement(J,{status:e.status,updateStatus:e.updateStatus}),i.a.createElement("div",{className:C.a.info},i.a.createElement("h3",null,"Information"),i.a.createElement("p",null,"Full Name: ",e.profile.fullName),i.a.createElement("p",null,"Facebook: ",e.profile.contacts.facebook),i.a.createElement("p",null,"Job:",e.profile.lookingForAJob?i.a.createElement("img",{src:I.a,alt:"\u0415\u0441\u0442\u044c \u0440\u0430\u0431\u043e\u0442\u0430"}):i.a.createElement("img",{src:T.a,alt:"\u041d\u0435\u0442 \u0440\u0430\u0431\u043e\u0442\u044b"})),i.a.createElement("p",null,e.profile.lookingForAJobDescription),i.a.createElement("p",null,"Status: ",e.profile.aboutMe))):i.a.createElement("div",{className:C.a.preloader},i.a.createElement(x.a,null))},U=function(e){return i.a.createElement("div",{className:m.a.content},i.a.createElement("img",{src:"https://avatars.mds.yandex.net/get-pdb/1516664/09249b5a-9f96-419d-8d26-14d33b095ec2/s1200",alt:""}),i.a.createElement(L,{profile:e.profile,status:e.status,updateStatus:e.updateStatus}),i.a.createElement(S,null))},Z=a(231),q=a(17),B=a(20),R=function(e){function t(){return Object(n.a)(this,t),Object(o.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.match.params.userId;e||(e=this.props.userId)||this.props.history.push("/login"),this.props.getUserProfile(e),this.props.getStatus(e)}},{key:"render",value:function(){return i.a.createElement("div",{className:m.a.content},i.a.createElement(U,Object.assign({},this.props,{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus})))}}]),t}(i.a.Component);t.default=Object(q.d)(Object(P.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,userId:e.auth.userId,isAuth:e.auth.isAuth}}),{getUserProfile:p.d,getStatus:p.c,updateStatus:p.e}),B.f,Z.a)(R)}}]);
//# sourceMappingURL=5.dbb99237.chunk.js.map