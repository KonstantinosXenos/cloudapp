(function(t){function e(e){for(var o,i,a=e[0],c=e[1],l=e[2],u=0,d=[];u<a.length;u++)i=a[u],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&d.push(s[i][0]),s[i]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);f&&f(e);while(d.length)d.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],o=!0,i=1;i<n.length;i++){var a=n[i];0!==s[a]&&(o=!1)}o&&(r.splice(e--,1),t=c(c.s=n[0]))}return t}var o={},i={app:0},s={app:0},r=[];function a(t){return c.p+"js/"+({Desktop:"Desktop",about:"about",login:"login",resize:"resize"}[t]||t)+"."+{Desktop:"e5fe87fd",about:"39ad8259",login:"e787848b",resize:"64785262"}[t]+".js"}function c(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={Desktop:1,login:1};i[t]?e.push(i[t]):0!==i[t]&&n[t]&&e.push(i[t]=new Promise((function(e,n){for(var o="css/"+({Desktop:"Desktop",about:"about",login:"login",resize:"resize"}[t]||t)+"."+{Desktop:"e0551711",about:"31d6cfe0",login:"82285a6c",resize:"31d6cfe0"}[t]+".css",s=c.p+o,r=document.getElementsByTagName("link"),a=0;a<r.length;a++){var l=r[a],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===o||u===s))return e()}var d=document.getElementsByTagName("style");for(a=0;a<d.length;a++){l=d[a],u=l.getAttribute("data-href");if(u===o||u===s)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var o=e&&e.target&&e.target.src||s,r=new Error("Loading CSS chunk "+t+" failed.\n("+o+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=o,delete i[t],f.parentNode.removeChild(f),n(r)},f.href=s;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){i[t]=0})));var o=s[t];if(0!==o)if(o)e.push(o[2]);else{var r=new Promise((function(e,n){o=s[t]=[e,n]}));e.push(o[2]=r);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=a(t);var d=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(f);var n=s[t];if(0!==n){if(n){var o=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+o+": "+i+")",d.name="ChunkLoadError",d.type=o,d.request=i,n[1](d)}s[t]=void 0}};var f=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=o,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)c.d(n,o,function(e){return t[e]}.bind(null,o));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var f=u;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var o=n("45a9"),i=n.n(o);i.a},1819:function(t,e,n){},2482:function(t,e,n){"use strict";var o=n("3bda"),i=n.n(o);i.a},"2af5":function(t,e,n){"use strict";var o=n("746d"),i=n.n(o);i.a},"32bb":function(t,e,n){},"365e":function(t,e,n){},3789:function(t,e,n){"use strict";var o=n("b7c3"),i=n.n(o);i.a},"3bda":function(t,e,n){},"3c0f":function(t,e,n){"use strict";var o=n("365e"),i=n.n(o);i.a},"45a9":function(t,e,n){},"464f":function(t,e,n){"use strict";var o=n("5de0"),i=n.n(o);i.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o,i,s,r,a,c,l=n("2b0e"),u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},d=[],f=n("2f62"),p=(n("4de4"),n("caad"),n("c975"),n("d81d"),n("a434"),n("b0c0"),n("2532"),n("c740"),n("4160"),n("159b"),n("1959")),m=n.n(p),h=!0,_={folder_data:[],cut_icons:[]},g={cut:function(t,e){t.cut_icons=e},update_folder_data:function(t,e){e.forEach((function(e){var n=m.a.findIndex(t.folder_data,{pk:e.pk});-1==n?t.folder_data.push(e):t.folder_data.splice(n,1,e)}))},remove_files:function(t,e){e.forEach((function(e){t.folder_data.splice(m.a.findIndex(t.folder_data,{pk:e.pk}),1)}))}},v={add_folder:function(t){t.commit("taskManager/open_window_add","lol",{root:!0})}},b={get_cut_icons:function(t){return t.cut_icons},folder_data:function(t){return t.folder_data}},w={namespaced:h,state:_,mutations:g,actions:v,getters:b},k=!0,x={navigator:w},y={namespaced:k,modules:x},M=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("window",{attrs:{data:t.data,parentSize:t.parentSize}},[n("navigator",{staticClass:"window-content",attrs:{data:t.data}})],1)},$=[],C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("vue-draggable-resizable",{attrs:{w:t.maximized?this.maximized_width:t.width,h:t.maximized?this.maximized_height:t.height,x:t.maximized?0:this.x,y:t.maximized?0:this.y,active:!0,parent:!0,"enable-native-drag":!0,"prevent-deactivation":!0,"drag-handle":".drag-handle",handles:["tl","tm","tr","mr","br","bm","bl","ml"],"min-width":200,"min-height":100,"z-index":t.z_index},on:{dragging:t.onDrag,resizing:t.onResize},nativeOn:{mousedown:function(e){return e.stopPropagation(),t.get_focus(e)},click:function(t){t.stopPropagation()},dblclick:function(t){t.stopPropagation()}}},[n("div",{class:[{radius:!t.maximized},"window"]},[n("div",{staticClass:"drag-handle"},[n("div",{staticClass:"title vertical-center",domProps:{textContent:t._s("Navigator")}}),n("div",{staticClass:"button-container"},[n("minimizeButton",{staticClass:"vertical-center"}),n("maximizeButton",{staticClass:"vertical-center",attrs:{maximized:t.maximized},on:{maximize:t.maximize}}),n("closeButton",{staticClass:"vertical-center",on:{close_app:t.close_app}})],1)]),n("div",{staticClass:"window-content"},[t._t("default")],2)])])},z=[],O=(n("d3b7"),n("6def"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{attrs:{id:"baseButton",disabled:t.is_disabled},on:{click:t.click_event,mousedown:function(t){t.preventDefault(),t.stopPropagation()}}},[n("font-awesome-icon",{attrs:{icon:t.icon}})],1)}),P=[],E={name:"baseButton",computed:{is_disabled:function(){return!1}}},j=E,S=(n("942f"),n("0c7c")),D=Object(S["a"])(j,O,P,!1,null,"67fbeddf",null),T=D.exports,I={name:"closeButton",data:function(){return{icon:"times"}},mixins:[T],methods:{click_event:function(){this.$emit("close_app")}}},B=I,L=Object(S["a"])(B,o,i,!1,null,null,null),N=L.exports,A={name:"closeButton",data:function(){return{icon:"chevron-down"}},mixins:[T],methods:{click_event:function(){}}},q=A,F=Object(S["a"])(q,s,r,!1,null,null,null),U=F.exports,R={name:"closeButton",props:["maximized"],computed:{icon:function(){return this.maximized?["far","window-restore"]:"chevron-up"}},data:function(){return{}},mixins:[T],methods:{click_event:function(){this.$emit("maximize")}}},Y=R,H=Object(S["a"])(Y,a,c,!1,null,null,null),J=H.exports,K={name:"window",props:["data","parentSize"],components:{"vue-draggable-resizable":function(){return n.e("resize").then(n.t.bind(null,"fb19",7))},closeButton:N,minimizeButton:U,maximizeButton:J},mounted:function(){},computed:{z_index:function(){return this.$store.getters["taskManager/open_windows"].indexOf(this.data)},maximized_height:function(){return this.parentSize.y},maximized_width:function(){return this.parentSize.x}},data:function(){return{width:800,height:500,x:110,y:220,maximized:!1,window_container:""}},methods:{onResize:function(t,e,n,o){this.maximized||(this.x=t,this.y=e,this.width=n,this.height=o)},onDrag:function(t,e){this.maximized||(this.x=t,this.y=e)},get_focus:function(){this.$store.commit("taskManager/set_focused_window",this.data)},close_app:function(){this.$store.commit("taskManager/close_window",this.data)},maximize:function(){this.maximized=!this.maximized}}},X=K,W=(n("2482"),n("7840"),Object(S["a"])(X,C,z,!1,null,"240cd605",null)),G=W.exports,Q=n("8f73"),V={name:"navigator-window",props:["data","parentSize"],components:{window:G,navigator:Q["default"]},data:function(){return{}},methods:{}},Z=V,tt=Object(S["a"])(Z,M,$,!1,null,"3ccd1ee4",null),et=tt.exports,nt=!0,ot={taskManagerModules:y},it={open_windows:[]},st={open_window_add:function(t){var e=et,n=1,o=t.open_windows.map((function(t){return t.unique_name}));while(o.includes(et.name+n))n++;t.open_windows.push({type:e.name,unique_name:e.name+n,component:e})},close_window:function(t,e){t.open_windows=t.open_windows.filter((function(t){return t!==e}))},set_focused_window:function(t,e){t.open_windows.push(t.open_windows.splice(t.open_windows.indexOf(e),1)[0])}},rt={},at={open_windows:function(t){return t.open_windows}},ct={namespaced:nt,modules:ot,state:it,mutations:st,actions:rt,getters:at};l["a"].use(f["a"]);var lt=new f["a"].Store({namespaced:!0,modules:{taskManager:ct},state:{},mutations:{},actions:{},getters:{}}),ut={name:"app",store:lt,metaInfo:{title:"Explorer",titleTemplate:"%s - Cloud",meta:[{"http-equiv":"Content-Type",content:"text/html; charset=utf-8"}]}},dt=ut,ft=(n("034f"),Object(S["a"])(dt,u,d,!1,null,null,null)),pt=ft.exports,mt=n("a18c"),ht=n("bc3a"),_t=n.n(ht),gt=n("ecee"),vt=n("c074"),bt=n("b702"),wt=n("ad3d"),kt=n("58ca"),xt=n("d1d6"),yt=n.n(xt);window.api=_t.a.create({baseURL:"",withCredentials:!0,xsrfCookieName:"X-CSRFTOKEN"}),window.api.defaults.xsrfCookieName="csrftoken",window.api.defaults.xsrfHeaderName="X-CSRFTOKEN",gt["c"].add(vt["g"],vt["c"],vt["f"],vt["e"],vt["i"],bt["a"],vt["j"],vt["b"],vt["a"],vt["k"],vt["h"],vt["d"],bt["b"]),l["a"].component("font-awesome-icon",wt["a"]),vt["h"],l["a"].use(kt["a"]),l["a"].use(n("2ead")),l["a"].use(xt["debounce"]),l["a"].use(yt.a);var Mt=n("00e7");l["a"].use(Mt),l["a"].config.productionTip=!1,l["a"].directive("focus",{inserted:function(t){t.focus()}}),new l["a"]({router:mt["a"],render:function(t){return t(pt)}}).$mount("#app")},"5de0":function(t,e,n){},"6def":function(t,e,n){},"746d":function(t,e,n){},7840:function(t,e,n){"use strict";var o=n("9744"),i=n.n(o);i.a},"7e5b":function(t,e,n){},"8f73":function(t,e,n){"use strict";n.r(e);var o,i,s,r,a,c,l,u,d,f,p,m,h,_,g,v,b,w,k,x,y,M,$=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex-container flex-column",staticStyle:{"align-items":"stretch"},attrs:{id:"navigator"}},[n("toolbar",{staticClass:"flex-row",attrs:{store:t.store}}),n("div",{staticClass:"flex-container flex-row middle-container"},[n("iconpanel",{ref:"icon_panel",staticStyle:{width:"50%"},attrs:{store:t.store},on:{selecteditems:t.selecteditems}}),n("preview",{staticStyle:{"margin-left":"auto",width:"50%"},attrs:{store:t.store}})],1),n("div",{staticClass:"footer flex-row"})],1)},C=[],z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"toolbar"}},[n("div",{staticClass:"rowparent"},[n("div",{staticClass:"toolbar-item",attrs:{id:"pathbar"}},[n("i",{staticClass:"las la-folder fa-rotate-270",staticStyle:{color:"black","margin-right":"1px"}}),t._l(this.$store.getters[t.store+"folder_path"],(function(e){return n("div",{key:e.pk,staticClass:"sidetoside"},[n("b",[t._v(">")]),n("div",{staticClass:"pathbarfolderbuttons",on:{click:function(n){return t.clicked(e.pk)}}},[n("b",[t._v(t._s(e.title))])])])}))],2),n("upbutton",{staticClass:"toolbar-button toolbar-item",attrs:{store:t.store}}),n("refreshbutton",{staticClass:"toolbar-button toolbar-item",attrs:{store:t.store}}),n("uploadbutton",{staticClass:"toolbar-button toolbar-item",attrs:{store:t.store},on:{clickedfile:function(e){return t.open_file_input()}}}),n("label",[t._v(" File "),n("input",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],ref:"file",staticStyle:{display:"none"},attrs:{type:"file",id:"file",accept:".pdf",multiple:""},on:{click:function(t){t.preventDefault()},change:function(e){return t.handleFileUpload()}}})]),n("input",{staticClass:"toolbar-item",attrs:{type:"text",placeholder:"Search..",id:"searchbar"}})],1)])},O=[],P=(n("4160"),n("b0c0"),n("159b"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{attrs:{id:"toolbarbutton",disabled:t.is_disabled},on:{click:t.click_event}},[n("font-awesome-icon",{style:{color:"white"},attrs:{icon:t.icon}})],1)}),E=[],j={name:"toolbarbutton"},S=j,D=n("0c7c"),T=Object(D["a"])(S,P,E,!1,null,null,null),I=T.exports,B={name:"navigation",methods:{go_up:function(t){this.router_mode?this.$router.push({name:"navigator",params:{id:this.$store.getters.parent_folder}}):this.$store.dispatch(t+"update_folder_data",this.$store.getters[t+"parent_folder"])},change_folder:function(t,e){this.router_mode?this.$router.push({name:"navigator",params:{id:t}}):this.$store.dispatch(e+"update_folder_data",t)}},data:function(){return{router_mode:!1}}},L=B,N=Object(D["a"])(L,o,i,!1,null,null,null),A=N.exports,q={name:"upmixin",mixins:[A],computed:{is_disabled:function(){return null==this.$store.getters[this.store+"parent_folder"]}},methods:{click_event:function(){this.is_disabled||this.go_up(this.store)}}},F=q,U=Object(D["a"])(F,s,r,!1,null,null,null),R=U.exports,Y={name:"upbutton",props:["store"],data:function(){return{icon:"level-up-alt"}},mixins:[I,R]},H=Y,J=Object(D["a"])(H,a,c,!1,null,null,null),K=J.exports,X={name:"uploadfilemixin",computed:{is_disabled:function(){return!1}},methods:{click_event:function(){this.is_disabled||this.$emit("clickedfile")}}},W=X,G=Object(D["a"])(W,l,u,!1,null,null,null),Q=G.exports,V={name:"uploadbutton",props:["store"],data:function(){return{icon:"cloud-upload-alt"}},mixins:[I,Q]},Z=V,tt=Object(D["a"])(Z,d,f,!1,null,null,null),et=tt.exports,nt={name:"uploadfilemixin",computed:{is_disabled:function(){return!1}},methods:{click_event:function(){this.$store.dispatch(this.store+"update_folder_data",this.$store.getters[this.store+"current_folder_id"])}}},ot=nt,it=Object(D["a"])(ot,p,m,!1,null,null,null),st=it.exports,rt={name:"upbutton",props:["store"],data:function(){return{icon:"redo"}},mixins:[I,st]},at=rt,ct=Object(D["a"])(at,h,_,!1,null,null,null),lt=ct.exports,ut={name:"toolbar",components:{upbutton:K,uploadbutton:et,refreshbutton:lt},props:["store"],mixins:[A],methods:{clicked:function(t){this.change_folder(t,this.store)},open_file_input:function(){this.$refs.file.click()},handleFileUpload:function(){var t=this;this.$refs.file.files.forEach((function(e){var n=new FormData;n.append("fileuploaded",e),n.append("folder",t.$store.getters[t.store+"current_folder_id"]),n.append("original_filename",e.name),n.append("file",""),window.api.post("/api/file/upload/",n,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){return t.$store.dispatch(t.store+"add_files",[e.data])}))}))}}},dt=ut,ft=(n("e719"),Object(D["a"])(dt,z,O,!1,null,"446fb842",null)),pt=ft.exports,mt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[t.fileurl?[n("object",{key:t.fileurl,staticClass:"pdfobject",attrs:{data:t.fileurl}})]:[n("h3",[t._v("Select a file to preview")])]],2)},ht=[],_t=(n("fb6a"),{name:"preview",props:["store"],computed:{fileurl:function(){try{return this.$store.getters[this.store+"get_selected_icons"].slice(-1)[0].current_version.fileuploaded}catch(t){return!1}}}}),gt=_t,vt=(n("ee3d"),Object(D["a"])(gt,mt,ht,!1,null,"7d55d1d9",null)),bt=vt.exports,wt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"fullheight",attrs:{id:"icon-panel"}},[n("drag-select-container",{staticClass:"icon-container",attrs:{selectorClass:"item",store:t.store},on:{change:t.dragselect},nativeOn:{mousedown:function(e){return e.target!==e.currentTarget?null:t.unselectAll()},contextmenu:function(e){return e.target!==e.currentTarget?null:t.clickedrightbutton(e)}}},[[n("rightclickmenu",{ref:"rightclickmenu",attrs:{menu_options:t.menu_options_data,store:t.store},on:{optionclicked:t.optionClicked}}),t.empty_folder?n("h3",[t._v("This folder is empty.")]):t._e(),t._l(t.items,(function(e){return n(t.component_name(e.type),{key:e.pk,ref:"icon",refInFor:!0,tag:"component",staticClass:"item",attrs:{item:e,store:t.store}})}))]],2)],1)},kt=[],xt=(n("4de4"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"icon absolute-center",class:[{hovered:t.hover},t.is_selected],attrs:{draggable:!t.is_getting_renamed},on:{dragstart:t.drag_it,dragover:t.drag_over,dragend:t.drag_end,drop:t.dropped,dblclick:t.double_clicked_icon,mousedown:t.iconSelected,mouseup:t.mouse_up,mouseover:function(e){t.hover=!0},mouseleave:function(e){t.hover=!1},contextmenu:t.clickedrightbutton}},[n("div",{staticClass:"icon-image absolute-center",class:[t.is_cut]},[n("div",{staticClass:"mimetype"},[t._v(t._s(t.item.type))]),t.number_of_comments>0||t.hover||t.is_selected?n("div",{staticClass:"chaticon"},[n("font-awesome-icon",{attrs:{icon:["far","comment"],size:"lg"}})],1):t._e(),t.number_of_comments?n("div",{staticClass:"numberofcomments"},[t._v(t._s(t.number_of_comments))]):t._e(),n("font-awesome-icon",{attrs:{icon:t.icon,size:"5x"}})],1),t.is_getting_renamed?n("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],ref:"input",staticClass:"icon-title",attrs:{draggable:"false"},domProps:{value:t.title},on:{submit:function(e){return e.preventDefault(),t.stop_renaming(e)},drag:function(t){t.preventDefault(),t.stopPropagation()},dragstart:function(t){t.preventDefault(),t.stopPropagation()},input:function(e){e.target.composing||(t.title=e.target.value)}}}):n("div",{staticClass:"icon-title",domProps:{textContent:t._s(t.item.title)}}),n("div",{staticClass:"modified"},[t._v("Modified:"+t._s(t._f("moment")(t.item.modification_date,"YYYY-MM-DD")))]),n("rightclickmenu",{ref:"rightclickmenu",attrs:{menu_options:t.menu_options_data,store:t.store},on:{optionclicked:t.optionClicked}})],1)}),yt=[],Mt=(n("99af"),n("caad"),n("c975"),n("2532"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.viewMenu?n("ul",{ref:"right",style:{top:t.top,left:t.left},attrs:{id:"right-click-menu",tabindex:"-1"},on:{blur:t.closeMenu,mouseup:function(t){t.stopPropagation(),t.preventDefault()}}},t._l(t.menu_options,(function(e,o){return n("li",{key:o,domProps:{textContent:t._s(e.name)},on:{mousedown:function(t){t.stopPropagation()},click:function(n){return n.stopPropagation(),t.optionclicked(e.func)}}})})),0):t._e()}),$t=[],Ct={props:["menu_options"],data:function(){return{viewMenu:!1,top:"0px",left:"0px"}},methods:{setMenu:function(t,e){var n=window.innerHeight-this.$refs.right.offsetHeight-25,o=window.innerWidth-this.$refs.right.offsetWidth-25;t>n&&(t=n),e>o&&(e=o),this.top=t+"px",this.left=e+"px"},closeMenu:function(){this.viewMenu=!1},openMenu:function(t){this.viewMenu=!0,this.$nextTick(function(){this.$refs.right.focus(),this.setMenu(t.y,t.x)}.bind(this)),t.preventDefault()},optionclicked:function(t){this.$emit("optionclicked",t),this.closeMenu()}}},zt=Ct,Ot=(n("3c0f"),Object(D["a"])(zt,Mt,$t,!1,null,"c61287b8",null)),Pt=Ot.exports,Et={name:"icon",components:{rightclickmenu:Pt},props:["item","store"],computed:{number_of_comments:function(){return this.item.comment.length},is_selected:function(){return this.$store.getters[this.store+"get_selected_icons"].includes(this.item.pk)?"selected":""},is_cut:function(){return this.$store.getters["taskManager/taskManagerModules/navigator/get_cut_icons"].includes(this.item.pk)?"cut":""},is_getting_renamed:function(){return this.$store.getters[this.store+"is_getting_renamed"]==this.item&&(this.$nextTick((function(){this.$refs.input.select()})),!0)}},watch:{is_getting_renamed:function(t,e){1==e&&this.$store.dispatch(this.store+"complete_renaming",{item:this.item,title:this.title})}},methods:{cut:function(){this.$store.dispatch(this.store+"cut")},stop_renaming:function(){this.$store.commit(this.store+"start_renaming",null)},iconSelected:function(t){console.log("Clicked on",this.item.pk);var e=this.$store.getters[this.store+"get_selected_icons"];if(3===t.which&&e.includes(this.item.pk)){var n=[];[this.item.pk].concat(e).forEach((function(t){-1==n.indexOf(t)&&n.push(t)})),this.$store.commit(this.store+"select_icons",n)}else e.length>1&&e.includes(this.item.pk)||(this.$store.commit(this.store+"select_icons",[this.item.pk]),console.log("Selected icon with pk ",this.item.pk))},mouse_up:function(){1===event.which&&this.$store.getters[this.store+"get_selected_icons"].length>1&&this.$store.getters[this.store+"get_selected_icons"].includes(this.item.pk)&&(console.log("Mouse up selection after multiselect",this.item.pk),this.$store.commit(this.store+"select_icons",[this.item.pk]))},drag_it:function(t){t.dataTransfer.setData("itemArray",JSON.stringify(this.$store.getters[this.store+"get_selected_icons"])),t.dataTransfer.effectAllowed="move"},drag_over:function(t){console.log(t),"folder"==this.item.type&&(document.documentElement.style.cursor="-webkit-grabbing",event.preventDefault())},drag_end:function(){document.documentElement.style.cursor="default"},dropped:function(t){var e=JSON.parse(t.dataTransfer.getData("itemArray"));this.$store.dispatch(this.store+"move_files",{pk_array:e,new_parent:this.item.pk})},clickedrightbutton:function(t){this.$refs.rightclickmenu.openMenu(t)},optionClicked:function(t){this[t]()},rename:function(){this.$store.commit(this.store+"start_renaming",this.item)},delete:function(){this.$store.dispatch(this.store+"delete_selected_items")}},data:function(){return{hover:!1,title:this.item.title,menu_options_data:[{name:"Rename",func:"rename"},{name:"Cut",func:"cut"},{name:"Delete",func:"delete"}]}}},jt=Et,St=(n("c46f"),Object(D["a"])(jt,xt,yt,!1,null,"01694ed1",null)),Dt=St.exports,Tt={mixins:[A],methods:{double_clicked_icon:function(){this.change_folder(this.item.pk,this.store)}}},It=Tt,Bt=Object(D["a"])(It,g,v,!1,null,null,null),Lt=Bt.exports,Nt={name:"folderIcon",data:function(){return{icon:"folder-open"}},mixins:[Dt,Lt]},At=Nt,qt=Object(D["a"])(At,b,w,!1,null,null,null),Ft=qt.exports,Ut={methods:{double_clicked_icon:function(){}}},Rt=Ut,Yt=Object(D["a"])(Rt,k,x,!1,null,null,null),Ht=Yt.exports,Jt={name:"folderIcon",data:function(){return{icon:"file-pdf"}},mixins:[Dt,Ht]},Kt=Jt,Xt=Object(D["a"])(Kt,y,M,!1,null,null,null),Wt=Xt.exports,Gt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vue-drag-select",on:{mousedown:function(e){return e.target!==e.currentTarget?null:t.onMouseDown(e)}}},[t._t("default",null,{selectedItems:t.selectedItems}),t.mouseDown&&t.endPoint?n("div",{staticClass:"vue-drag-select-box",style:t.selectionBoxStyling}):t._e()],2)},Qt=[],Vt=(n("7db0"),n("a630"),n("d81d"),n("3ca3"),n("1959")),Zt=n.n(Vt);function te(t,e,n){var o;return function(){var i=this,s=arguments,r=function(){o=null,n||t.apply(i,s)},a=n&&!o;clearTimeout(o),o=setTimeout(r,e),a&&t.apply(i,s)}}var ee={name:"vue-drag-select",props:{store:{type:String,required:!0},selectorClass:{type:String,required:!0},color:{type:String,default:"rgba(0, 162, 255, .4)"}},data:function(){return{mouseDown:!1,concat:!1,startPoint:null,endPoint:null,selectedItems:[],scrollatstart:null}},computed:{selectionBox:function(){if(!this.mouseDown||!this.startPoint||!this.endPoint)return{};var t=this.$el.getBoundingClientRect(),e=this.getScroll(),n=Math.min(this.startPoint.x,this.endPoint.x)-t.left+e.x,o=0,i=0,s=e.y-this.scrollatstart.y;this.startPoint.y-s<=this.endPoint.y?(o=this.startPoint.y+e.y-s-t.top,i=Math.abs(this.startPoint.y-this.endPoint.y-s)):(o=this.endPoint.y+e.y-t.top,i=Math.abs(this.endPoint.y-this.startPoint.y+s));var r=Math.abs(this.startPoint.x-this.endPoint.x);return{left:n,top:o,width:r,height:i}},selectionBoxStyling:function(){var t=this.selectionBox,e=t.left,n=t.top,o=t.width,i=t.height;return{left:"".concat(e,"px"),top:"".concat(n,"px"),width:"".concat(o,"px"),height:"".concat(i,"px")}}},watch:{selectedItems:function(t){var e=t.map((function(t){return t.item.pk})),n=this.$store.getters[this.store+"get_selected_icons"];Zt.a.isEqual(Zt.a.sortBy(n),Zt.a.sortBy(e))||this.$store.commit(this.store+"select_icons",e)}},methods:{getScroll:function(){return"undefined"===typeof document?{x:0,y:0}:{x:this.$el.scrollLeft||document.body.scrollLeft||document.documentElement.scrollLeft,y:this.$el.scrollTop-document.documentElement.scrollTop}},onMouseDown:function(t){2!==t.button&&(this.concat=t.shiftKey,this.mouseDown=!0,this.startPoint={x:t.pageX,y:t.pageY},this.scrollatstart=this.getScroll(),window.addEventListener("mousemove",this.onMouseMove),window.addEventListener("scroll",this.onMouseMove),window.addEventListener("mouseup",this.onMouseUp))},onMouseMove:function(t){this.mouseDown&&(this.endPoint={x:t.pageX,y:t.pageY},this.searchforselection())},searchforselection:te((function(){var t=this;if(this.mouseDown){var e=this.$children.length?this.$children:this.$el.children;if(e){var n=Array.from(e).filter((function(e){return t.isItemSelected(e.$el||e)}));this.selectedItems=n.length?n:[]}}}),1,!0),onMouseUp:function(){window.removeEventListener("mousemove",this.onMouseMove),window.removeEventListener("scroll",this.onMouseMove),window.removeEventListener("mouseup",this.onMouseUp),this.mouseDown=!1,this.concat=!1,this.startPoint=null,this.endPoint=null},isItemSelected:function(t){if(t.classList&&t.classList.contains(this.selectorClass)){var e=this.selectionBox,n={top:t.offsetTop,left:t.offsetLeft,width:t.clientWidth,height:t.clientHeight};return!!(e.left<=n.left+n.width&&e.left+e.width>=n.left&&e.top<=n.top+n.height&&e.top+e.height>=n.top)}return!1}},mounted:function(){var t=this;this.$children.forEach((function(e){e.$on("click",(function(){var n=t.selectedItems.find((function(t){return e.$el===t.$el}));n?t.selectedItems=t.selectedItems.filter((function(t){return e.$el!==t.$el})):t.selectedItems.push(e)}))}))},beforeDestroy:function(){window.removeEventListener("mousemove",this.onMouseMove),window.removeEventListener("mouseup",this.onMouseUp),this.$children.forEach((function(t){t.$off("click")}))}},ne=ee,oe=(n("2af5"),Object(D["a"])(ne,Gt,Qt,!1,null,null,null)),ie=oe.exports,se={name:"iconpanel",props:["store"],components:{folderIcon:Ft,fileIcon:Wt,rightclickmenu:Pt,"drag-select-container":ie},computed:{items:function(){var t=this,e=this.$store.getters["taskManager/taskManagerModules/navigator/folder_data"];if(!e|!this.folder_pk)return[];var n=e.filter((function(e){return e.parent==t.folder_pk}));return n},folder_pk:function(){return this.$store.getters[this.store+"current_folder_id"]},empty_folder:function(){return"undefined"!==typeof this.items&&0==this.items.length}},methods:{component_name:function(t){return"folder"==t?"folderIcon":"fileIcon"},dragselect:function(t){return t},unselectAll:function(){this.$store.commit(this.store+"unselect_all_icons")},clickedrightbutton:function(t){this.$refs.rightclickmenu.openMenu(t)},optionClicked:function(t){this[t](this.$store.getters[this.store+"get_selected_icons"][0])},paste:function(){this.$store.dispatch(this.store+"move_files",{pk_array:this.$store.getters["taskManager/taskManagerModules/navigator/get_cut_icons"],new_parent:this.$store.getters[this.store+"current_folder_id"]}),this.$store.commit("taskManager/taskManagerModules/navigator/cut",[])},create_new_folder:function(){this.$store.dispatch(this.store+"create_folder")}},data:function(){return{menu_options_data:[{name:"New Folder",func:"create_new_folder"},{name:"Paste",func:"paste"}],selectedItems:[]}}},re=se,ae=(n("464f"),Object(D["a"])(re,wt,kt,!1,null,"07dd01d2",null)),ce=ae.exports,le=n("a18c"),ue=!0,de=function(){return{folder_data:{},path:[],selected_icons:[],renaming:null,parent_folder:null,loading:!1}},fe={update_folder_data:function(t,e){t.folder_data=e,t.path=e.path.folders,t.parent_folder=e.parent},set_loading:function(t,e){t.loading=e},add_created_file:function(t,e){t.folder_data.contents.push(e),t.renaming=e},start_renaming:function(t,e){t.renaming=e},select_icons:function(t,e){console.log("selected icons mutations triggered with",e),t.selected_icons=e,t.renaming=null},unselect_all_icons:function(t){console.log("unselect all"),t.selected_icons=[],t.selected_icons,t.renaming=null}},pe={add_files:function(t,e){var n=t.getters.folder_data,o=n.contents.map((function(t){return t.pk})),i=e.filter((function(t){return!o.includes(t.pk)}));i.forEach((function(t){return n.contents.push(t)})),t.commit("update_folder_data",n)},cut:function(t){t.commit("taskManager/taskManagerModules/navigator/cut",t.getters.get_selected_icons,{root:!0})},paste:function(t){var e=t.getters.get_cut_icons.map((function(e){return{pk:e.pk,parent:t.getters.current_folder_id}}));window.api.patch("/api/item/move/",e).then((function(e){return t.dispatch("add_files",e.data)}),t.commit("taskManager/taskManagerModules/navigator/cut",[],{root:!0})).catch((function(t){console.log(t)}))},delete_selected_items:function(t){var e=t.state.selected_icons.map((function(t){return{pk:t}}));window.api.delete("/api/item/",{data:e}).then((function(e){return t.commit("taskManager/taskManagerModules/navigator/remove_files",e.data,{root:!0})})).catch((function(t){console.log(t)}))},move_files:function(t,e){var n=e.pk_array.map((function(t){return{pk:t,parent:e.new_parent}}));window.api.patch("/api/item/move/",n).then((function(e){return t.commit("taskManager/taskManagerModules/navigator/update_folder_data",e.data,{root:!0})})).catch((function(t){console.log(t)}))},update_folder_data:function(t,e){window.api.get("/api/folders/"+e+"/").then((function(e){t.commit("taskManager/taskManagerModules/navigator/update_folder_data",e.data.contents,{root:!0}),t.commit("update_folder_data",e.data)})).catch((function(t){t.response&&(console.log(t.response.data),console.log(t.response.status),console.log(t.response.headers))}))},complete_renaming:function(t,e){var n=e.item.title;e.item.title=e.title,window.api.patch(e.item.url,{title:e.title}).then((function(t){return e.item.title=t.data.title})).catch((function(t){e.item.title=n,console.log(t)}))},go_up:function(){console.log("going up"),le["a"].push({name:"explorer",params:{id:1}})},create_folder:function(t){var e="New Folder",n="",o=t.rootGetters["taskManager/taskManagerModules/navigator/folder_data"].filter((function(e){return e.parent==t.getters.current_folder_id})).map((function(t){return t.title}));while(o.includes(e+n))""==n?n=2:n++;window.api.post("/api/folders/",{title:e+n,parent:t.getters.current_folder_id}).then((function(e){return t.commit("taskManager/taskManagerModules/navigator/update_folder_data",[e.data],{root:!0})})).catch((function(t){console.log(t)}))}},me={icons:function(t){return t.folder_data.contents},current_folder_id:function(t){return t.folder_data.pk},folder_path:function(t){return t.path},parent_folder:function(t){return t.parent_folder},get_selected_icons:function(t){return t.selected_icons},is_getting_renamed:function(t){return t.renaming},folder_data:function(t){return t.folder_data}},he={namespaced:ue,state:de,mutations:fe,actions:pe,getters:me},_e={name:"navigator",props:["data"],components:{toolbar:pt,preview:bt,iconpanel:ce},watch:{$route:function(t){this.$store.dispatch("update_folder_data",t.params.id)}},methods:{selecteditems:function(t){this.selectedfiles=t}},mounted:function(){this.$store.registerModule(["taskManager","taskManagerModules",this.data.unique_name],he),this.store="taskManager/taskManagerModules/"+this.data.unique_name+"/",this.$store.dispatch(this.store+"update_folder_data",1)},beforeDestroy:function(){this.$store.unregisterModule(["taskManager","taskManagerModules",this.data.unique_name])},data:function(){return{store:""}}},ge=_e,ve=(n("3789"),Object(D["a"])(ge,$,C,!1,null,null,null));e["default"]=ve.exports},"942f":function(t,e,n){"use strict";var o=n("1819"),i=n.n(o);i.a},9744:function(t,e,n){},a18c:function(t,e,n){"use strict";n("d3b7");var o=n("2b0e"),i=n("8c4f");o["a"].use(i["a"]);var s=[{path:"/",redirect:"/desktop/"},{path:"/navigator/",redirect:"/navigator/1"},{path:"/navigator/:id",name:"navigator",component:function(){return Promise.resolve().then(n.bind(null,"8f73"))}},{path:"/desktop/",name:"Desktop",component:function(){return n.e("Desktop").then(n.bind(null,"08be"))}},{path:"/login/",name:"login",component:function(){return n.e("login").then(n.bind(null,"89d2"))}},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],r=new i["a"]({mode:"history",base:"/",routes:s});e["a"]=r},b4d8:function(t,e,n){},b7c3:function(t,e,n){},c46f:function(t,e,n){"use strict";var o=n("b4d8"),i=n.n(o);i.a},e719:function(t,e,n){"use strict";var o=n("7e5b"),i=n.n(o);i.a},ee3d:function(t,e,n){"use strict";var o=n("32bb"),i=n.n(o);i.a}});
//# sourceMappingURL=app.4e9271f2.js.map