(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Desktop"],{"08be":function(t,e,n){"use strict";n.r(e);var i,a,s,o,r,c,l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"background",staticStyle:{height:"100%",width:"100%",position:"relative"},attrs:{id:"Desktop"}},[n("taskbar"),n("vue-draggable-resizable",{staticClass:"window radius",attrs:{w:900,h:500,active:!0,parent:!0,"enable-native-drag":!0,"prevent-deactivation":!0,"drag-handle":".drag-handle",handles:["tl","tm","tr","mr","br","bm","bl","ml"],"min-width":200,"min-height":100},on:{dragging:t.onDrag,resizing:t.onResize}},[n("div",{staticClass:"drag-handle"},[n("div",{staticClass:"title vertical-center",domProps:{textContent:t._s("Navigator")}}),n("div",{staticClass:"button-container"},[n("minimizeButton",{staticClass:"vertical-center"}),n("maximizeButton",{staticClass:"vertical-center"}),n("closeButton",{staticClass:"vertical-center"})],1)]),n("div",{staticClass:"content"},[n("explorer",{staticClass:"content"})],1)])],1)},u=[],d=(n("d3b7"),n("6def"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{attrs:{id:"baseButton",disabled:t.is_disabled},on:{click:t.click_event}},[n("font-awesome-icon",{style:{color:"white"},attrs:{icon:t.icon}})],1)}),b=[],f={name:"baseButton",computed:{is_disabled:function(){return!1}},methods:{click_event:function(){}}},v=f,m=(n("1e9e"),n("2877")),h=Object(m["a"])(v,d,b,!1,null,"999205ac",null),p=h.exports,g={name:"closeButton",data:function(){return{icon:"times"}},mixins:[p]},x=g,w=Object(m["a"])(x,i,a,!1,null,null,null),k=w.exports,_={name:"closeButton",data:function(){return{icon:"chevron-down"}},mixins:[p]},B=_,C=Object(m["a"])(B,s,o,!1,null,null,null),z=C.exports,j={name:"closeButton",data:function(){return{icon:"chevron-up"}},mixins:[p]},O=j,y=Object(m["a"])(O,r,c,!1,null,null,null),D=y.exports,E=n("bedd"),$=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"taskbar"}},[t._v("vbvvvvfgff")])},J=[],P={name:"taskbar"},R=P,N=(n("246b"),Object(m["a"])(R,$,J,!1,null,"314a93bc",null)),S=N.exports,q={name:"Desktop",components:{"vue-draggable-resizable":function(){return Promise.resolve().then(n.t.bind(null,"fb19",7))},closeButton:k,minimizeButton:z,maximizeButton:D,explorer:E["default"],taskbar:S},data:function(){return{width:0,height:0,x:0,y:0}},methods:{onResize:function(t,e,n,i){this.x=t,this.y=e,this.width=n,this.height=i},onDrag:function(t,e){this.x=t,this.y=e}}},A=q,F=(n("5b9a"),Object(m["a"])(A,l,u,!1,null,"81ea23f4",null));e["default"]=F.exports},"1e9e":function(t,e,n){"use strict";var i=n("3598"),a=n.n(i);a.a},"246b":function(t,e,n){"use strict";var i=n("43b7"),a=n.n(i);a.a},3598:function(t,e,n){},"43b7":function(t,e,n){},"5b9a":function(t,e,n){"use strict";var i=n("ffe1"),a=n.n(i);a.a},"6def":function(t,e,n){},ffe1:function(t,e,n){}}]);
//# sourceMappingURL=Desktop.8b12a579.js.map