(function(t){function e(e){for(var o,s,c=e[0],a=e[1],l=e[2],u=0,f=[];u<c.length;u++)s=c[u],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&f.push(i[s][0]),i[s]=0;for(o in a)Object.prototype.hasOwnProperty.call(a,o)&&(t[o]=a[o]);d&&d(e);while(f.length)f.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],o=!0,s=1;s<n.length;s++){var a=n[s];0!==i[a]&&(o=!1)}o&&(r.splice(e--,1),t=c(c.s=n[0]))}return t}var o={},i={app:0},r=[];function s(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"e46edd5b"}[t]+".js"}function c(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n=i[t];if(0!==n)if(n)e.push(n[2]);else{var o=new Promise((function(e,o){n=i[t]=[e,o]}));e.push(n[2]=o);var r,a=document.createElement("script");a.charset="utf-8",a.timeout=120,c.nc&&a.setAttribute("nonce",c.nc),a.src=s(t);var l=new Error;r=function(e){a.onerror=a.onload=null,clearTimeout(u);var n=i[t];if(0!==n){if(n){var o=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+o+": "+r+")",l.name="ChunkLoadError",l.type=o,l.request=r,n[1](l)}i[t]=void 0}};var u=setTimeout((function(){r({type:"timeout",target:a})}),12e4);a.onerror=a.onload=r,document.head.appendChild(a)}return Promise.all(e)},c.m=t,c.c=o,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)c.d(n,o,function(e){return t[e]}.bind(null,o));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var a=window["webpackJsonp"]=window["webpackJsonp"]||[],l=a.push.bind(a);a.push=e,a=a.slice();for(var u=0;u<a.length;u++)e(a[u]);var d=l;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var o=n("85ec"),i=n.n(o);i.a},1640:function(t,e,n){},"2a49":function(t,e,n){},"41ec":function(t,e,n){"use strict";var o=n("c6f0"),i=n.n(o);i.a},"51fc":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o,i,r,s,c,a,l,u,d,f,p,h,m,_,g,v,b,w,x,y,$,k,C=n("2b0e"),P=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},M=[],O=(n("4de4"),n("caad"),n("d81d"),n("2532"),n("159b"),n("bc3a")),j=n.n(O),E=n("2f62"),S=(n("d3b7"),n("8c4f")),T=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex-container flex-column",staticStyle:{"align-items":"stretch"},attrs:{id:"explorer"}},[n("toolbar"),n("div",{staticClass:"flex-container flex-row",staticStyle:{height:"100%"}},[n("iconpanel",{ref:"icon_panel",staticStyle:{width:"50%"},attrs:{folder_data:t.folder_data},on:{selecteditems:t.selecteditems}}),n("preview",{staticStyle:{"margin-left":"auto",width:"50%"},attrs:{selectedfiles:t.selectedfiles}})],1),n("div",{staticClass:"footer"})],1)},D=[],I=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"toolbar"}},[n("div",{staticClass:"rowparent"},[n("div",{attrs:{id:"projecttitle"}},[t._v("AZTEC Docs")]),n("div",{staticClass:"toolbar-item",attrs:{id:"pathbar"}},[n("i",{staticClass:"las la-folder fa-rotate-270",staticStyle:{color:"black","margin-right":"1px"}}),t._l(this.$store.getters.folder_path,(function(e){return n("div",{key:e.pk,staticClass:"sidetoside"},[n("b",[t._v(">")]),n("div",{staticClass:"pathbarfolderbuttons",on:{click:function(n){return t.clicked(e.pk)}}},[n("b",[t._v(t._s(e.title))])])])}))],2),n("upbutton",{staticClass:"toolbar-button toolbar-item"}),n("refreshbutton",{staticClass:"toolbar-button toolbar-item"}),n("uploadbutton",{staticClass:"toolbar-button toolbar-item",on:{clickedfile:function(e){return t.open_file_input()}}}),n("label",[t._v(" File "),n("input",{ref:"file",staticStyle:{display:"none"},attrs:{type:"file",id:"file",accept:".pdf",multiple:""},on:{change:function(e){return t.handleFileUpload()}}})]),n("input",{staticClass:"toolbar-item",attrs:{type:"text",placeholder:"Search..",id:"searchbar"}})],1)])},L=[],F=(n("b0c0"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{attrs:{id:"toolbarbutton",disabled:t.is_disabled},on:{click:t.click_event}},[n("font-awesome-icon",{style:{color:"white"},attrs:{icon:t.icon}})],1)}),N=[],U={name:"toolbarbutton"},A=U,B=n("2877"),Y=Object(B["a"])(A,F,N,!1,null,null,null),R=Y.exports,H={name:"navigation",methods:{go_up:function(){this.$router.push({name:"explorer",params:{id:this.$store.getters.parent_folder}})}}},X=H,q=Object(B["a"])(X,o,i,!1,null,null,null),K=q.exports,W={name:"upmixin",mixins:[K],computed:{is_disabled:function(){return null==this.$store.getters.parent_folder}},methods:{click_event:function(){this.is_disabled||this.go_up()}}},J=W,z=Object(B["a"])(J,r,s,!1,null,null,null),Z=z.exports,G={name:"upbutton",data:function(){return{icon:"level-up-alt"}},mixins:[R,Z]},Q=G,V=Object(B["a"])(Q,c,a,!1,null,null,null),tt=V.exports,et={name:"uploadfilemixin",computed:{is_disabled:function(){return!1}},methods:{click_event:function(){this.is_disabled||this.$emit("clickedfile")}}},nt=et,ot=Object(B["a"])(nt,l,u,!1,null,null,null),it=ot.exports,rt={name:"uploadbutton",data:function(){return{icon:"cloud-upload-alt"}},mixins:[R,it]},st=rt,ct=Object(B["a"])(st,d,f,!1,null,null,null),at=ct.exports,lt={name:"uploadfilemixin",computed:{is_disabled:function(){return!1}},methods:{click_event:function(){this.$store.dispatch("update_folder_data",this.$store.getters.current_folder_id)}}},ut=lt,dt=Object(B["a"])(ut,p,h,!1,null,null,null),ft=dt.exports,pt={name:"upbutton",data:function(){return{icon:"redo"}},mixins:[R,ft]},ht=pt,mt=Object(B["a"])(ht,m,_,!1,null,null,null),_t=mt.exports,gt={name:"toolbar",components:{upbutton:tt,uploadbutton:at,refreshbutton:_t},methods:{clicked:function(t){this.$router.push({name:"explorer",params:{id:t}})},open_file_input:function(){this.$refs.file.click()},handleFileUpload:function(){var t=this;this.$refs.file.files.forEach((function(e){var n=new FormData;n.append("fileuploaded",e),n.append("folder",t.$store.getters.current_folder_id),n.append("original_filename",e.name),n.append("file",""),window.api.post("/api/file/upload/",n,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){return t.$store.dispatch("add_files",[e.data])}))}))}}},vt=gt,bt=(n("c0ad"),Object(B["a"])(vt,I,L,!1,null,"eac2e06a",null)),wt=bt.exports,xt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[t.fileurl?[n("object",{key:t.fileurl,staticClass:"pdfobject",attrs:{data:t.fileurl}})]:[n("h3",[t._v("Select a file to preview")])]],2)},yt=[],$t=(n("fb6a"),{name:"preview",props:["selectedfiles"],computed:{fileurl:function(){try{return this.$store.getters.get_selected_icons.slice(-1)[0].current_version.fileuploaded}catch(t){return!1}}}}),kt=$t,Ct=(n("5d4e"),Object(B["a"])(kt,xt,yt,!1,null,"04f6e030",null)),Pt=Ct.exports,Mt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"fullheight",attrs:{id:"icon-panel"}},[n("drag-select-container",{staticClass:"icon-container",attrs:{selectorClass:"item"},on:{change:t.dragselect},nativeOn:{mousedown:function(e){return e.target!==e.currentTarget?null:(e.stopPropagation(),t.unselectAll())},contextmenu:function(e){return e.target!==e.currentTarget?null:(e.stopPropagation(),t.clickedrightbutton(e))}}},[[n("rightclickmenu",{ref:"rightclickmenu",attrs:{menu_options:t.menu_options_data},on:{optionclicked:t.optionClicked}}),t.empty_folder?n("h3",[t._v("This folder is empty.")]):t._e(),t._l(this.$store.getters.icons,(function(e){return n(t.component_name(e.type),{key:e.pk,ref:"icon",refInFor:!0,tag:"component",staticClass:"item",attrs:{item:e}})}))]],2)],1)},Ot=[],jt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"icon absolute-center",class:[{hovered:t.hover},t.is_selected],attrs:{draggable:"true"},on:{dragstart:t.drag_it,dragover:t.drag_over,dragend:t.drag_end,drop:t.dropped,mousedown:function(e){return e.stopPropagation(),t.iconSelected(e)},mouseup:function(e){return e.stopPropagation(),t.mouse_up(e)},dblclick:function(e){return e.stopPropagation(),t.double_clicked_icon(e)},mouseover:function(e){t.hover=!0},mouseleave:function(e){t.hover=!1},contextmenu:function(e){return e.stopPropagation(),t.clickedrightbutton(e)}}},[n("div",{staticClass:"icon-image absolute-center",class:[t.is_cut]},[n("div",{staticClass:"mimetype"},[t._v(t._s(t.item.type))]),n("font-awesome-icon",{attrs:{icon:t.icon,size:"5x"}})],1),t.is_getting_renamed?n("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],ref:"input",staticClass:"icon-title",domProps:{value:t.title},on:{mousedown:function(t){t.stopPropagation()},submit:function(e){return e.preventDefault(),t.stop_renaming(e)},input:function(e){e.target.composing||(t.title=e.target.value)}}}):n("div",{staticClass:"icon-title",domProps:{textContent:t._s(t.item.title)}}),n("div",{staticClass:"modified"},[t._v("Modified:"+t._s(t._f("moment")(t.item.modification_date,"YYYY-MM-DD")))]),n("rightclickmenu",{ref:"rightclickmenu",attrs:{menu_options:t.menu_options_data},on:{optionclicked:t.optionClicked},nativeOn:{mouseup:function(t){t.stopPropagation()},mousedown:function(t){t.stopPropagation()}}})],1)},Et=[],St=(n("99af"),n("c975"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.viewMenu?n("ul",{ref:"right",style:{top:t.top,left:t.left},attrs:{id:"right-click-menu",tabindex:"-1"},on:{contextmenu:function(t){t.preventDefault(),t.stopPropagation()},blur:t.closeMenu}},t._l(t.menu_options,(function(e,o){return n("li",{key:o,domProps:{textContent:t._s(e.name)},on:{click:function(n){return n.stopPropagation(),t.optionclicked(e.func)}}})})),0):t._e()}),Tt=[],Dt={props:["menu_options"],data:function(){return{viewMenu:!1,top:"0px",left:"0px"}},methods:{setMenu:function(t,e){var n=window.innerHeight-this.$refs.right.offsetHeight-25,o=window.innerWidth-this.$refs.right.offsetWidth-25;t>n&&(t=n),e>o&&(e=o),this.top=t+"px",this.left=e+"px"},closeMenu:function(){this.viewMenu=!1},openMenu:function(t){this.viewMenu=!0,this.$nextTick(function(){this.$refs.right.focus(),this.setMenu(t.y,t.x)}.bind(this)),t.preventDefault()},optionclicked:function(t){this.$emit("optionclicked",t),this.closeMenu()}}},It=Dt,Lt=(n("8582"),Object(B["a"])(It,St,Tt,!1,null,"18f0471e",null)),Ft=Lt.exports,Nt={name:"icon",components:{rightclickmenu:Ft},props:["item"],computed:{is_selected:function(){return this.$store.getters.get_selected_icons.includes(this.item)?"selected":""},is_cut:function(){return this.$store.getters.get_cut_icons.includes(this.item)?"cut":""},is_getting_renamed:function(){return this.$store.getters.is_getting_renamed==this.item&&(this.$nextTick((function(){this.$refs.input.select()})),!0)}},watch:{is_getting_renamed:function(t,e){1==e&&this.$store.dispatch("complete_renaming",{item:this.item,title:this.title})}},methods:{cut:function(){this.$store.dispatch("cut")},stop_renaming:function(){this.$store.commit("start_renaming",null)},iconSelected:function(t){var e=this.$store.getters.get_selected_icons;if(3===t.which&&e.includes(this.item)){var n=[];[this.item].concat(e).forEach((function(t){-1==n.indexOf(t)&&n.push(t)})),this.$store.commit("select_icons",n)}else e.length>1&&e.includes(this.item)||this.$store.commit("select_icons",[this.item])},mouse_up:function(){1===event.which&&this.$store.getters.get_selected_icons.length>1&&this.$store.getters.get_selected_icons.includes(this.item)&&this.$store.commit("select_icons",[this.item])},drag_it:function(t){t.dataTransfer.setData("text/plain",""),t.dataTransfer.effectAllowed="move"},drag_over:function(){"folder"!=this.item.type||this.$store.getters.get_selected_icons.includes(this.item)||(document.documentElement.style.cursor="-webkit-grabbing",event.preventDefault(),console.log("over"))},drag_end:function(){document.documentElement.style.cursor="default"},dropped:function(){this.$store.dispatch("move_files",{folder_array:this.$store.getters.get_selected_icons,new_parent:this.item.pk})},clickedrightbutton:function(t){this.$refs.rightclickmenu.openMenu(t)},optionClicked:function(t){this[t]()},rename:function(){this.$store.commit("start_renaming",this.item)},delete:function(){this.$store.dispatch("delete_selected_items")}},data:function(){return{hover:!1,title:this.item.title,menu_options_data:[{name:"Rename",func:"rename"},{name:"Cut",func:"cut"},{name:"Delete",func:"delete"}]}}},Ut=Nt,At=(n("66c2"),Object(B["a"])(Ut,jt,Et,!1,null,"6450da81",null)),Bt=At.exports,Yt={methods:{double_clicked_icon:function(){this.$router.push({name:"explorer",params:{id:this.item.pk}})}}},Rt=Yt,Ht=Object(B["a"])(Rt,g,v,!1,null,null,null),Xt=Ht.exports,qt={name:"folderIcon",data:function(){return{icon:"folder-open"}},mixins:[Bt,Xt]},Kt=qt,Wt=Object(B["a"])(Kt,b,w,!1,null,null,null),Jt=Wt.exports,zt={methods:{double_clicked_icon:function(){}}},Zt=zt,Gt=Object(B["a"])(Zt,x,y,!1,null,null,null),Qt=Gt.exports,Vt={name:"folderIcon",data:function(){return{icon:"file-pdf"}},mixins:[Bt,Qt]},te=Vt,ee=Object(B["a"])(te,$,k,!1,null,null,null),ne=ee.exports,oe=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vue-drag-select",on:{mousedown:t.onMouseDown}},[t._t("default",null,{selectedItems:t.selectedItems}),t.mouseDown&&t.endPoint?n("div",{staticClass:"vue-drag-select-box",style:t.selectionBoxStyling}):t._e()],2)},ie=[];n("7db0"),n("a630"),n("3ca3");function re(t,e,n){var o;return function(){var i=this,r=arguments,s=function(){o=null,n||t.apply(i,r)},c=n&&!o;clearTimeout(o),o=setTimeout(s,e),c&&t.apply(i,r)}}var se={name:"vue-drag-select",props:{selectorClass:{type:String,required:!0},color:{type:String,default:"rgba(0, 162, 255, .4)"}},data:function(){return{mouseDown:!1,concat:!1,startPoint:null,endPoint:null,selectedItems:[],scrollatstart:null}},computed:{selectionBox:function(){if(!this.mouseDown||!this.startPoint||!this.endPoint)return{};var t=this.$el.getBoundingClientRect(),e=this.getScroll(),n=Math.min(this.startPoint.x,this.endPoint.x)-t.left+e.x,o=0,i=0,r=e.y-this.scrollatstart.y;this.startPoint.y-r<=this.endPoint.y?(o=this.startPoint.y+e.y-r-t.top,i=Math.abs(this.startPoint.y-this.endPoint.y-r)):(o=this.endPoint.y+e.y-t.top,i=Math.abs(this.endPoint.y-this.startPoint.y+r));var s=Math.abs(this.startPoint.x-this.endPoint.x);return{left:n,top:o,width:s,height:i}},selectionBoxStyling:function(){var t=this.selectionBox,e=t.left,n=t.top,o=t.width,i=t.height;return{left:"".concat(e,"px"),top:"".concat(n,"px"),width:"".concat(o,"px"),height:"".concat(i,"px")}}},watch:{selectedItems:function(t){var e=t.map((function(t){return t.item}));this.$store.commit("select_icons",e)}},methods:{getScroll:function(){return"undefined"===typeof document?{x:0,y:0}:{x:this.$el.scrollLeft||document.body.scrollLeft||document.documentElement.scrollLeft,y:this.$el.scrollTop-document.documentElement.scrollTop}},onMouseDown:function(t){2!==t.button&&(this.concat=t.shiftKey,this.mouseDown=!0,this.startPoint={x:t.pageX,y:t.pageY},this.scrollatstart=this.getScroll(),window.addEventListener("mousemove",this.onMouseMove),window.addEventListener("scroll",this.onMouseMove),window.addEventListener("mouseup",this.onMouseUp))},onMouseMove:function(t){this.mouseDown&&(this.endPoint={x:t.pageX,y:t.pageY},this.searchforselection())},searchforselection:re((function(){var t=this;if(this.mouseDown){var e=this.$children.length?this.$children:this.$el.children;if(e){var n=Array.from(e).filter((function(e){return t.isItemSelected(e.$el||e)}));this.selectedItems=n.length?n:[]}}}),1,!0),onMouseUp:function(){window.removeEventListener("mousemove",this.onMouseMove),window.removeEventListener("scroll",this.onMouseMove),window.removeEventListener("mouseup",this.onMouseUp),this.mouseDown=!1,this.concat=!1,this.startPoint=null,this.endPoint=null},isItemSelected:function(t){if(t.classList&&t.classList.contains(this.selectorClass)){var e=this.selectionBox,n={top:t.offsetTop,left:t.offsetLeft,width:t.clientWidth,height:t.clientHeight};return!!(e.left<=n.left+n.width&&e.left+e.width>=n.left&&e.top<=n.top+n.height&&e.top+e.height>=n.top)}return!1}},mounted:function(){var t=this;this.$children.forEach((function(e){e.$on("click",(function(){var n=t.selectedItems.find((function(t){return e.$el===t.$el}));n?t.selectedItems=t.selectedItems.filter((function(t){return e.$el!==t.$el})):t.selectedItems.push(e)}))}))},beforeDestroy:function(){window.removeEventListener("mousemove",this.onMouseMove),window.removeEventListener("mouseup",this.onMouseUp),this.$children.forEach((function(t){t.$off("click")}))}},ce=se,ae=(n("41ec"),Object(B["a"])(ce,oe,ie,!1,null,null,null)),le=ae.exports,ue={name:"iconpanel",props:["folder_data"],components:{folderIcon:Jt,fileIcon:ne,rightclickmenu:Ft,"drag-select-container":le},computed:{empty_folder:function(){return"undefined"!==typeof this.$store.getters.icons&&0==this.$store.getters.icons.length}},methods:{component_name:function(t){return"folder"==t?"folderIcon":"fileIcon"},dragselect:function(t){return t},unselectAll:function(){this.$store.commit("unselect_all_icons")},clickedrightbutton:function(t){this.$refs.rightclickmenu.openMenu(t)},optionClicked:function(t){this[t](this.$store.getters.get_selected_icons[0])},paste:function(){this.$store.dispatch("paste",{folder_array:this.$store.getters.get_cut_icons,new_parent:this.$store.getters.current_folder_id})},create_new_folder:function(){this.$store.dispatch("create_folder")}},data:function(){return{menu_options_data:[{name:"New Folder",func:"create_new_folder"},{name:"Paste",func:"paste"}],selectedItems:[]}}},de=ue,fe=(n("b8ef"),Object(B["a"])(de,Mt,Ot,!1,null,"45559a9c",null)),pe=fe.exports,he={name:"explorer",components:{toolbar:wt,preview:Pt,iconpanel:pe},watch:{$route:function(t){this.$store.dispatch("update_folder_data",t.params.id)}},methods:{selecteditems:function(t){this.selectedfiles=t}},mounted:function(){this.$store.dispatch("update_folder_data",this.$route.params.id)},data:function(){return{contents:[],folder_data:{},selectedfiles:[]}}},me=he,_e=(n("8ad7"),Object(B["a"])(me,T,D,!1,null,null,null)),ge=_e.exports;C["a"].use(S["a"]);var ve=[{path:"/",redirect:"/explorer/1"},{path:"/explorer/",redirect:"/explorer/1"},{path:"/explorer/:id",name:"explorer",component:ge},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],be=new S["a"]({mode:"history",base:"/",routes:ve}),we=be;function xe(t,e){var n=e.map((function(t){return t.pk})),o=t.getters.folder_data,i=o.contents.filter((function(t){return!n.includes(t.pk)}));o.contents=i,console.log(o),t.commit("update_folder_data",o)}function ye(){window.location.href="/authentication/login/"}window.api=j.a.create({baseURL:"",withCredentials:!0,xsrfCookieName:"X-CSRFTOKEN"}),window.api.defaults.xsrfCookieName="csrftoken",window.api.defaults.xsrfHeaderName="X-CSRFTOKEN",C["a"].use(E["a"]);var $e=new E["a"].Store({state:{folder_data:{},path:[],selected_icons:[],renaming:null,parent_folder:null,cut_icons:[]},mutations:{cut:function(t,e){t.cut_icons=e},update_folder_data:function(t,e){t.folder_data=e,t.path=e.path.folders,t.parent_folder=e.parent},add_created_file:function(t,e){t.folder_data.contents.push(e),t.renaming=e},start_renaming:function(t,e){t.renaming=e},select_icons:function(t,e){t.selected_icons=e,t.renaming=null},unselect_all_icons:function(t){t.selected_icons=[],t.selected_icons,t.renaming=null}},actions:{add_files:function(t,e){var n=t.getters.folder_data,o=n.contents.map((function(t){return t.pk})),i=e.filter((function(t){return!o.includes(t.pk)}));i.forEach((function(t){return n.contents.push(t)})),t.commit("update_folder_data",n)},cut:function(t){t.commit("cut",t.getters.get_selected_icons)},paste:function(t){var e=t.getters.get_cut_icons.map((function(e){return{pk:e.pk,parent:t.getters.current_folder_id}}));window.api.patch("/api/item/move/",e).then((function(e){return t.dispatch("add_files",e.data)}),t.commit("cut",[])).catch((function(t){console.log(t)}))},delete_selected_items:function(t){var e=t.state.selected_icons.map((function(t){return{pk:t.pk}}));console.log(e),window.api.delete("/api/item/",{data:e}).then((function(e){return xe(t,e.data)})).catch((function(t){console.log(t)}))},move_files:function(t,e){var n=e.folder_array.map((function(t){return{pk:t.pk,parent:e.new_parent}}));window.api.patch("/api/item/move/",n).then((function(e){return xe(t,e.data)})).catch((function(t){console.log(t)}))},update_folder_data:function(t,e){window.api.get("/api/folders/"+e+"/").then((function(e){return t.commit("update_folder_data",e.data)})).catch((function(t){ye(),t.response&&(console.log(t.response.data),console.log(t.response.status),console.log(t.response.headers))}))},complete_renaming:function(t,e){var n=e.item.title;e.item.title=e.title,window.api.patch(e.item.url,{title:e.title}).then((function(t){return e.item.title=t.data.title})).catch((function(t){e.item.title=n,console.log(t)}))},go_up:function(){console.log("going up"),we.push({name:"explorer",params:{id:1}})},create_folder:function(t){var e="New Folder",n="",o=t.getters.folder_data.contents.map((function(t){return t.title}));while(o.includes(e+n))""==n?n=2:n++;window.api.post("/api/folders/",{title:e+n,parent:this.getters.current_folder_id}).then((function(e){return t.commit("add_created_file",e.data)})).catch((function(t){console.log(t)}))},modify_folder_data:function(){console.log(this.state.folder_data)}},getters:{icons:function(t){return t.folder_data.contents},current_folder_id:function(t){return t.folder_data.pk},folder_path:function(t){return t.path},parent_folder:function(t){return t.parent_folder},get_selected_icons:function(t){return t.selected_icons},get_cut_icons:function(t){return t.cut_icons},is_getting_renamed:function(t){return t.renaming},folder_data:function(t){return t.folder_data}}}),ke={name:"app",store:$e,metaInfo:{title:"Explorer",titleTemplate:"%s - Cloud",meta:[{"http-equiv":"Content-Type",content:"text/html; charset=utf-8"}]}},Ce=ke,Pe=(n("034f"),Object(B["a"])(Ce,P,M,!1,null,null,null)),Me=Pe.exports,Oe=n("ecee"),je=n("c074"),Ee=n("ad3d"),Se=n("58ca"),Te=n("d1d6"),De=n.n(Te);Oe["c"].add(je["d"],je["a"],je["c"],je["b"],je["e"]),C["a"].component("font-awesome-icon",Ee["a"]),C["a"].use(Se["a"]),C["a"].use(n("2ead")),C["a"].use(Te["debounce"]),C["a"].use(De.a),C["a"].config.productionTip=!1,new C["a"]({router:we,render:function(t){return t(Me)}}).$mount("#app")},"5d4e":function(t,e,n){"use strict";var o=n("1640"),i=n.n(o);i.a},"66c2":function(t,e,n){"use strict";var o=n("51fc"),i=n.n(o);i.a},"6dbf":function(t,e,n){},8582:function(t,e,n){"use strict";var o=n("9995"),i=n.n(o);i.a},"85ec":function(t,e,n){},"8ad7":function(t,e,n){"use strict";var o=n("cf5e"),i=n.n(o);i.a},9995:function(t,e,n){},b8ef:function(t,e,n){"use strict";var o=n("6dbf"),i=n.n(o);i.a},c0ad:function(t,e,n){"use strict";var o=n("2a49"),i=n.n(o);i.a},c6f0:function(t,e,n){},cf5e:function(t,e,n){}});
//# sourceMappingURL=app.47c148c4.js.map