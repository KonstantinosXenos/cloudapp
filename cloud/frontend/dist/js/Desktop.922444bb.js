(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Desktop"],{"08be":function(t,n,e){"use strict";e.r(n);var o,i,s,a,r,c,u=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"background",attrs:{id:"Desktop"}},[e("taskbar"),e("div",{ref:"WindowContainer",staticClass:"WindowContainer",staticStyle:{height:"100%",width:"100%",position:"relative"}},t._l(t.open_windows,(function(n){return e(n.component,{key:n.unique_name,tag:"component",attrs:{parentSize:t.size,data:n}})})),1)],1)},l=[],d=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"taskbar"}},[e("powerButton"),e("expandButton"),e("div",{staticClass:"appicons"},[e("appIcon")],1),e("user")],1)},f=[],p=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("button",{attrs:{id:"baseButton",disabled:t.is_disabled},on:{click:t.click_event}},[e("font-awesome-icon",{style:{color:"white"},attrs:{icon:t.icon,size:"2x"}})],1)},m=[],w={name:"baseButton",computed:{is_disabled:function(){return!1}},methods:{click_event:function(){}}},h=w,v=(e("1db3"),e("0c7c")),_=Object(v["a"])(h,p,m,!1,null,"3e7f435f",null),b=_.exports,k={name:"uploadfilemixin",computed:{is_disabled:function(){return!1}},methods:{click_event:function(){window.api.post("/authentication/logout/").then(this.$router.push({name:"login"})).catch((function(t){}))}}},g=k,x=Object(v["a"])(g,o,i,!1,null,null,null),y=x.exports,$={name:"closeButton",data:function(){return{icon:"power-off"}},mixins:[b,y]},C=$,z=Object(v["a"])(C,s,a,!1,null,null,null),j=z.exports,B=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("button",{attrs:{id:"baseButton",disabled:t.is_disabled},on:{click:t.click_event}},[e("font-awesome-icon",{style:{color:"white"},attrs:{icon:t.icon,size:"2x"}})],1)},M=[],O={name:"baseButton",computed:{is_disabled:function(){return!1}},methods:{click_event:function(){}}},E=O,W=(e("8cac"),Object(v["a"])(E,B,M,!1,null,"7fdc8cb9",null)),q=W.exports,S={name:"closeButton",data:function(){return{icon:"expand-arrows-alt"}},mixins:[b,q]},D=S,I=Object(v["a"])(D,r,c,!1,null,null,null),J=I.exports,P=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{on:{mouseover:t.mouseover,mouseout:t.trigger}},[e("div",{class:[{iconwithopenwindows:t.open_windows.length>0},"icon"],staticStyle:{margin:"0",padding:"0"},on:{click:t.add}},[e("font-awesome-icon",{style:{color:t.color},attrs:{icon:t.icon,size:"2x"}}),e("div",{directives:[{name:"show",rawName:"v-show",value:t.open_windows.length>1,expression:"open_windows.length>1"}],staticClass:"counter"},[t._v(t._s(t.open_windows.length))])],1),t.hovered&&t.open_windows.length>0?e("div",{staticClass:"hovermenu",staticStyle:{position:"absolute"}},t._l(t.open_windows,(function(n){return e("windowentry",{key:n.unique_name,attrs:{window:n},on:{entryclick:t.closeentrymenu}})})),1):t._e()])},T=[],H=(e("4de4"),function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"entry",on:{click:t.clicked}},[e("span",{domProps:{textContent:t._s(t.window.unique_name)}})])}),L=[],N={name:"windowentry",props:["window"],data:function(){return{}},methods:{clicked:function(){this.$store.commit("taskManager/remove_minimized",this.window.unique_name),this.$store.commit("taskManager/set_focused_window",this.window),this.$emit("entryclick")}}},A=N,F=(e("6911"),Object(v["a"])(A,H,L,!1,null,null,null)),G=F.exports,K={name:"appIcon",components:{windowentry:G},data:function(){return{icon:["fa","folder-open"],type:"navigator-window",color:"rgb(255, 199, 8)",hovered:"false"}},computed:{open_windows:function(){var t=this,n=this.$store.getters["taskManager/open_windows"].filter((function(n){return n.type==t.type}));return n}},methods:{add:function(){this.$store.dispatch("taskManager/taskManagerModules/navigator/add_folder")},trigger:function(){var t=this;this.timer=setTimeout((function(){t.hovered=!1}),200)},mouseover:function(){clearTimeout(this.timer),this.hovered=!0},closeentrymenu:function(){this.hovered=!1}}},Q=K,R=(e("978f"),Object(v["a"])(Q,P,T,!1,null,"5c17b564",null)),U=R.exports,V=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"user"}},[e("div",{staticClass:"username",domProps:{textContent:t._s(t.username)}}),e("div",{staticClass:"portrait"})])},X=[],Y={name:"user",computed:{username:function(){return this.$store.getters["taskManager/taskManagerModules/user/username"]}}},Z=Y,tt=(e("27f6"),Object(v["a"])(Z,V,X,!1,null,"fe498db0",null)),nt=tt.exports,et={name:"taskbar",components:{powerButton:j,expandButton:J,appIcon:U,user:nt}},ot=et,it=(e("2d9a"),Object(v["a"])(ot,d,f,!1,null,"1acaa9c5",null)),st=it.exports,at={name:"Desktop",components:{taskbar:st},mounted:function(){window.addEventListener("resize",this.resized),this.resized()},computed:{open_windows:function(){return this.$store.getters["taskManager/open_windows"]}},methods:{resized:function(){this.size={x:this.$refs.WindowContainer.clientWidth,y:this.$refs.WindowContainer.clientHeight}}},data:function(){return{size:{x:0,y:0}}}},rt=at,ct=(e("dfb0"),Object(v["a"])(rt,u,l,!1,null,"f493477a",null));n["default"]=ct.exports},"1db3":function(t,n,e){"use strict";var o=e("f837"),i=e.n(o);i.a},2653:function(t,n,e){},"27f6":function(t,n,e){"use strict";var o=e("2653"),i=e.n(o);i.a},"2d9a":function(t,n,e){"use strict";var o=e("63ea"),i=e.n(o);i.a},"63ea":function(t,n,e){},6911:function(t,n,e){"use strict";var o=e("6d74"),i=e.n(o);i.a},"6d74":function(t,n,e){},"8cac":function(t,n,e){"use strict";var o=e("fa3b"),i=e.n(o);i.a},"978f":function(t,n,e){"use strict";var o=e("b543"),i=e.n(o);i.a},ac10:function(t,n,e){},b543:function(t,n,e){},dfb0:function(t,n,e){"use strict";var o=e("ac10"),i=e.n(o);i.a},f837:function(t,n,e){},fa3b:function(t,n,e){}}]);
//# sourceMappingURL=Desktop.922444bb.js.map