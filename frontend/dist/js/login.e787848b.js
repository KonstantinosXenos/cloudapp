(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["login"],{"0083":function(t,n,i){},"0557":function(t,n,i){},"09fe":function(t,n,i){"use strict";var e=i("d53b"),o=i.n(e);o.a},"0e31":function(t,n,i){},"0f4a":function(t,n,i){},"0fa6":function(t,n,i){"use strict";var e=i("db22"),o=i.n(e);o.a},1016:function(t,n,i){"use strict";var e=i("4ba2"),o=i.n(e);o.a},"10e6":function(t,n,i){"use strict";var e=i("0f4a"),o=i.n(e);o.a},"16b3":function(t,n,i){"use strict";var e=i("0083"),o=i.n(e);o.a},1902:function(t,n,i){},"1c92":function(t,n,i){"use strict";var e=i("b208"),o=i.n(e);o.a},"1d4c":function(t,n,i){},"30df":function(t,n,i){"use strict";var e=i("1902"),o=i.n(e);o.a},"34c9":function(t,n,i){"use strict";var e=i("9947"),o=i.n(e);o.a},"389c":function(t,n,i){"use strict";var e=i("9fa9"),o=i.n(e);o.a},"3d8a":function(t,n,i){"use strict";var e=i("8718"),o=i.n(e);o.a},"4ba2":function(t,n,i){},"4e68":function(t,n,i){"use strict";var e=i("1d4c"),o=i.n(e);o.a},5899:function(t,n){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,n,i){var e=i("1d80"),o=i("5899"),r="["+o+"]",s=RegExp("^"+r+r+"*"),a=RegExp(r+r+"*$"),c=function(t){return function(n){var i=String(e(n));return 1&t&&(i=i.replace(s,"")),2&t&&(i=i.replace(a,"")),i}};t.exports={start:c(1),end:c(2),trim:c(3)}},"5c0e":function(t,n,i){},"5c96":function(t,n,i){},"5d60":function(t,n,i){"use strict";var e=i("7688"),o=i.n(e);o.a},"66d3":function(t,n,i){"use strict";var e=i("c0b3"),o=i.n(e);o.a},"6bc6":function(t,n,i){"use strict";var e=i("5c0e"),o=i.n(e);o.a},7156:function(t,n,i){var e=i("861d"),o=i("d2bb");t.exports=function(t,n,i){var r,s;return o&&"function"==typeof(r=n.constructor)&&r!==i&&e(s=r.prototype)&&s!==i.prototype&&o(t,s),t}},"741b":function(t,n,i){"use strict";var e=i("d0e2"),o=i.n(e);o.a},7688:function(t,n,i){},8718:function(t,n,i){},"89d2":function(t,n,i){"use strict";i.r(n);var e=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"flex-column flex-center",attrs:{id:"login"}},[i("div",{staticClass:"login-container flex-column flex-center"},[i("div",{staticClass:"flex-column flex-center"},[i("div",{staticClass:"margin title"},[t._v("A Z T E C")]),i("div",{staticStyle:{padding:"10px",border:"solid 2px white","border-radius":"10px","box-shadow":"10px 10px 20px black",position:"relative"}},[i("font-awesome-icon",{staticClass:"margin",attrs:{icon:["fas","user-circle"],size:"5x"}}),t.loading?i("looping-rhombuses-spinner",{staticClass:"spinner",attrs:{"animation-duration":1e3,size:100,color:"rgb(45, 160, 255)"}}):t._e()],1),i("form",{staticClass:"flex-column flex-center margin",on:{submit:t.checkForm}},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"},{name:"focus",rawName:"v-focus"}],staticClass:"inputs",attrs:{id:"username",placeholder:"Username",autocomplete:"username",required:""},domProps:{value:t.username},on:{input:function(n){n.target.composing||(t.username=n.target.value)}}}),i("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"inputs",attrs:{id:"password",type:"password",placeholder:"Password",autocomplete:"current-password",required:""},domProps:{value:t.password},on:{input:function(n){n.target.composing||(t.password=n.target.value)}}}),i("button",{staticClass:"sign-in-button"},[t._v("Sign in")])]),t.errors.length?i("p",[i("b",[t._v("Please correct the following error:")]),i("ul",t._l(t.errors,(function(n){return i("li",{key:n,staticStyle:{color:"red"}},[t._v(t._s(n))])})),0)]):t._e()])])])},o=[],r=(i("b0c0"),function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"hollow-dots-spinner",style:t.spinnerStyle},t._l(t.dotsStyles,(function(t,n){return i("div",{key:n,staticClass:"dot",style:t})})),0)}),s=[],a=(i("a9e3"),{name:"HollowDotsSpinner",props:{animationDuration:{type:Number,default:1e3},dotSize:{type:Number,default:15},dotsNum:{type:Number,default:3},color:{type:String,default:"#fff"}},computed:{horizontalMargin:function(){return this.dotSize/2},spinnerStyle:function(){return{height:"".concat(this.dotSize,"px"),width:"".concat((this.dotSize+2*this.horizontalMargin)*this.dotsNum,"px")}},dotStyle:function(){return{animationDuration:"".concat(this.animationDuration,"ms"),width:"".concat(this.dotSize,"px"),height:"".concat(this.dotSize,"px"),margin:"0 ".concat(this.horizontalMargin,"px"),borderWidth:"".concat(this.dotSize/5,"px"),borderColor:this.color}},dotsStyles:function(){for(var t=[],n=.3,i=1e3,e=1;e<=this.dotsNum;e++){var o=Object.assign({animationDelay:"".concat(i*e*n,"ms")},this.dotStyle);t.push(o)}return t}}}),c=a,l=(i("16b3"),i("0c7c")),u=Object(l["a"])(c,r,s,!1,null,"5a033c16",null),p=(u.exports,function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"pixel-spinner",style:t.spinnerStyle},[i("div",{staticClass:"pixel-spinner-inner",style:t.spinnerInnerStyle})])}),h=[],d=(i("99af"),{appendKeyframes:function(t,n){const i=document.createElement("style");i&&(i.setAttribute("id",t),i.innerHTML=`@keyframes ${t} {${n}}`,document.body.appendChild(i))},removeKeyframes:function(t){const n=document.getElementById(t);if(!n)return;const i=n.parentNode;i.removeChild(n)}}),f={name:"PixelSpinner",props:{animationDuration:{type:Number,default:1500},size:{type:Number,default:70},color:{type:String,default:"#fff"}},data:function(){return{animationName:"pixel-spinner-animation-".concat(Date.now())}},computed:{pixelSize:function(){return this.size/7},spinnerStyle:function(){return{width:"".concat(this.size,"px"),height:"".concat(this.size,"px")}},spinnerInnerStyle:function(){return{animationDuration:"".concat(this.animationDuration,"ms"),animationName:this.animationName,width:"".concat(this.pixelSize,"px"),height:"".concat(this.pixelSize,"px"),backgroundColor:this.color,color:this.color,boxShadow:"\n                      ".concat(1.5*this.pixelSize,"px ").concat(1.5*this.pixelSize,"px 0 0,\n                      ").concat(-1.5*this.pixelSize,"px ").concat(-1.5*this.pixelSize,"px 0 0,\n                      ").concat(1.5*this.pixelSize,"px ").concat(-1.5*this.pixelSize,"px 0 0,\n                      ").concat(-1.5*this.pixelSize,"px ").concat(1.5*this.pixelSize,"px 0 0,\n                      0 ").concat(1.5*this.pixelSize,"px 0 0,\n                      ").concat(1.5*this.pixelSize,"px 0 0 0,\n                      ").concat(-1.5*this.pixelSize,"px 0 0 0,\n                      0 ").concat(-1.5*this.pixelSize,"px 0 0\n                    ")}}},watch:{size:{handler:"updateAnimation",immediate:!0}},mounted:function(){this.updateAnimation()},beforeDestroy:function(){d.removeKeyframes(this.animationName)},methods:{updateAnimation:function(){d.removeKeyframes(this.animationName),d.appendKeyframes(this.animationName,this.generateKeyframes())},generateKeyframes:function(){return"\n      50% {\n        box-shadow:  ".concat(2*this.pixelSize,"px ").concat(2*this.pixelSize,"px 0 0,\n                     ").concat(-2*this.pixelSize,"px ").concat(-2*this.pixelSize,"px 0 0,\n                     ").concat(2*this.pixelSize,"px ").concat(-2*this.pixelSize,"px 0 0,\n                     ").concat(-2*this.pixelSize,"px ").concat(2*this.pixelSize,"px 0 0,\n                     0 ").concat(this.pixelSize,"px 0 0,\n                     ").concat(this.pixelSize,"px 0 0 0,\n                     ").concat(-1*this.pixelSize,"px 0 0 0,\n                     0 ").concat(-1*this.pixelSize,"px 0 0;\n      }\n\n\n      75% {\n        box-shadow:  ").concat(2*this.pixelSize,"px ").concat(2*this.pixelSize,"px 0 0,\n                     ").concat(-2*this.pixelSize,"px ").concat(-2*this.pixelSize,"px 0 0,\n                     ").concat(2*this.pixelSize,"px ").concat(-2*this.pixelSize,"px 0 0,\n                     ").concat(-2*this.pixelSize,"px ").concat(2*this.pixelSize,"px 0 0,\n                     0 ").concat(this.pixelSize,"px 0 0,\n                     ").concat(this.pixelSize,"px 0 0 0,\n                     ").concat(-1*this.pixelSize,"px 0 0 0,\n                     0 ").concat(-1*this.pixelSize,"px 0 0;\n      }\n\n      100% {\n        transform: rotate(360deg);\n      }")}}},m=f,y=(i("6bc6"),Object(l["a"])(m,p,h,!1,null,"c76fc818",null)),S=(y.exports,function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"flower-spinner",style:t.spinnerStyle},[i("div",{staticClass:"dots-container",style:t.dotsContainerStyle},[i("div",{staticClass:"big-dot",style:t.biggerDotStyle},[i("div",{staticClass:"small-dot",style:t.smallerDotStyle})])])])}),x=[],b={name:"FlowerSpinner",props:{animationDuration:{type:Number,default:2500},size:{type:Number,default:70},color:{type:String,default:"#fff"}},data:function(){return{smallDotName:"flower-spinner-small-dot-".concat(Date.now()),bigDotName:"flower-spinner-big-dot-".concat(Date.now())}},computed:{dotSize:function(){return this.size/7},spinnerStyle:function(){return{width:"".concat(this.size,"px"),height:"".concat(this.size,"px")}},dotsContainerStyle:function(){return{width:"".concat(this.dotSize,"px"),height:"".concat(this.dotSize,"px")}},smallerDotStyle:function(){return{background:this.color,animationDuration:"".concat(this.animationDuration,"ms"),animationName:this.smallDotName}},biggerDotStyle:function(){return{background:this.color,animationDuration:"".concat(this.animationDuration,"ms"),animationName:this.bigDotName}}},watch:{size:{handler:"updateAnimation",immediate:!0},color:{handler:"updateAnimation",immediate:!0}},beforeDestroy:function(){d.removeKeyframes(this.smallDotName),d.removeKeyframes(this.bigDotName)},methods:{updateAnimation:function(){d.removeKeyframes(this.smallDotName),d.appendKeyframes(this.smallDotName,this.generateSmallDotKeyframes()),d.removeKeyframes(this.bigDotName),d.appendKeyframes(this.bigDotName,this.generateBigDotKeyframes())},generateSmallDotKeyframes:function(){return"0%, 100% {\n                  box-shadow: 0 0 0 ".concat(this.color,",\n                              0 0 0 ").concat(this.color,",\n                              0 0 0 ").concat(this.color,",\n                              0 0 0 ").concat(this.color,",\n                              0 0 0 ").concat(this.color,",\n                              0 0 0 ").concat(this.color,",\n                              0 0 0 ").concat(this.color,",\n                              0 0 0 ").concat(this.color,";\n                }\n                25%, 75% {\n                  box-shadow: ").concat(1.4*this.dotSize,"px 0 0 ").concat(this.color,",\n                              -").concat(1.4*this.dotSize,"px 0 0 ").concat(this.color,",\n                              0 ").concat(1.4*this.dotSize,"px 0 ").concat(this.color,",\n                              0 -").concat(1.4*this.dotSize,"px 0 ").concat(this.color,",\n                              ").concat(this.dotSize,"px -").concat(this.dotSize,"px 0 ").concat(this.color,",\n                              ").concat(this.dotSize,"px ").concat(this.dotSize,"px 0 ").concat(this.color,",\n                              -").concat(this.dotSize,"px -").concat(this.dotSize,"px 0 ").concat(this.color,",\n                              -").concat(this.dotSize,"px ").concat(this.dotSize,"px 0 ").concat(this.color,";\n\n                }\n                100% {\n                  box-shadow: 0 0 0 ").concat(this.color,",\n                              0 0 0 ").concat(this.color,",\n                              0 0 0 ").concat(this.color,",\n                              0 0 0 ").concat(this.color,",\n                              0 0 0 ").concat(this.color,",\n                              0 0 0 ").concat(this.color,",\n                              0 0 0 ").concat(this.color,",\n                              0 0 0 ").concat(this.color,";\n                }")},generateBigDotKeyframes:function(){return"0%, 100% {\n                  box-shadow: 0 0 0 ".concat(this.color,",\n                              0 0 0 ").concat(this.color,",\n                              0 0 0 ").concat(this.color,",\n                              0 0 0 ").concat(this.color,",\n                              0 0 0 ").concat(this.color,",\n                              0 0 0 ").concat(this.color,",\n                              0 0 0 ").concat(this.color,",\n                              0 0 0 ").concat(this.color,";\n                }\n                50% {\n                  transform: rotate(180deg);\n                }\n                25%, 75% {\n                  box-shadow: ").concat(2.6*this.dotSize,"px 0 0 ").concat(this.color,",\n                              -").concat(2.6*this.dotSize,"px 0 0 ").concat(this.color,",\n                              0 ").concat(2.6*this.dotSize,"px 0 ").concat(this.color,",\n                              0 -").concat(2.6*this.dotSize,"px 0 ").concat(this.color,",\n                              ").concat(1.9*this.dotSize,"px -").concat(1.9*this.dotSize,"px 0 ").concat(this.color,",\n                              ").concat(1.9*this.dotSize,"px ").concat(1.9*this.dotSize,"px 0 ").concat(this.color,",\n                              -").concat(1.9*this.dotSize,"px -").concat(1.9*this.dotSize,"px 0 ").concat(this.color,",\n                              -").concat(1.9*this.dotSize,"px ").concat(1.9*this.dotSize,"px 0 ").concat(this.color,";\n\n                }\n                100% {\n                  transform: rotate(360deg);\n                  box-shadow: 0 0 0 ").concat(this.color,",\n                              0 0 0 ").concat(this.color,",\n                              0 0 0 ").concat(this.color,",\n                              0 0 0 ").concat(this.color,",\n                              0 0 0 ").concat(this.color,",\n                              0 0 0 ").concat(this.color,",\n                              0 0 0 ").concat(this.color,",\n                              0 0 0 ").concat(this.color,";\n                }")}}},g=b,z=(i("389c"),Object(l["a"])(g,S,x,!1,null,"f15101b8",null)),v=(z.exports,function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"intersecting-circles-spinner",style:t.spinnerStyle},[i("div",{staticClass:"spinnerBlock",style:t.spinnerBlockStyle},t._l(t.circleStyles,(function(t,n){return i("span",{key:n,staticClass:"circle",style:t})})),0)])}),D=[],N=(i("d81d"),{name:"IntersectingCirclesSpinner",props:{animationDuration:{type:Number,default:1200},size:{type:Number,default:70},color:{type:String,default:"#fff"}},computed:{circleSize:function(){return this.size/2},spinnerStyle:function(){return{width:"".concat(this.size,"px"),height:"".concat(this.size,"px")}},spinnerBlockStyle:function(){return{animationDuration:"".concat(this.animationDuration,"ms"),width:"".concat(this.circleSize,"px"),height:"".concat(this.circleSize,"px")}},circleStyle:function(){return{borderColor:this.color}},circleStyles:function(){var t=this,n=[{top:0,left:0},{left:"".concat(-.36*this.circleSize,"px"),top:"".concat(.2*this.circleSize,"px")},{left:"".concat(-.36*this.circleSize,"px"),top:"".concat(-.2*this.circleSize,"px")},{left:0,top:"".concat(-.36*this.circleSize,"px")},{left:"".concat(.36*this.circleSize,"px"),top:"".concat(-.2*this.circleSize,"px")},{left:"".concat(.36*this.circleSize,"px"),top:"".concat(.2*this.circleSize,"px")},{left:0,top:"".concat(.36*this.circleSize,"px")}];return n.map((function(n){return Object.assign(n,t.circleStyle)}))}}}),C=N,w=(i("4e68"),Object(l["a"])(C,v,D,!1,null,"91c71956",null)),_=(w.exports,function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"orbit-spinner",style:t.spinnerStyle},[i("div",{staticClass:"orbit one",style:t.orbitStyle}),i("div",{staticClass:"orbit two",style:t.orbitStyle}),i("div",{staticClass:"orbit three",style:t.orbitStyle})])}),q=[],k={name:"OrbitSpinner",props:{animationDuration:{type:Number,default:1e3},size:{type:Number,default:50},color:{type:String,default:"#fff"}},computed:{spinnerStyle:function(){return{height:"".concat(this.size,"px"),width:"".concat(this.size,"px")}},orbitStyle:function(){return{borderColor:this.color,animationDuration:"".concat(this.animationDuration,"ms")}}}},E=k,O=(i("1c92"),Object(l["a"])(E,_,q,!1,null,"34a3fdef",null)),j=(O.exports,function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"fingerprint-spinner",style:t.spinnerStyle},t._l(t.ringsStyles,(function(t,n){return i("div",{key:n,staticClass:"spinner-ring",style:t})})),0)}),I=[],$={name:"FingerprintSpinner",props:{animationDuration:{type:Number,default:1500},size:{type:Number,default:60},color:{type:String,default:"#fff"}},data:function(){return{ringsNum:9,containerPadding:2}},computed:{outerRingSize:function(){return this.size-2*this.containerPadding},spinnerStyle:function(){return{height:"".concat(this.size,"px"),width:"".concat(this.size,"px"),padding:"".concat(this.containerPadding,"px")}},ringStyle:function(){return{borderTopColor:this.color,animationDuration:"".concat(this.animationDuration,"ms")}},ringsStyles:function(){for(var t=[],n=this.outerRingSize/this.ringsNum,i=n,e=1;e<=this.ringsNum;e++){var o=Object.assign({animationDelay:"".concat(50*e,"ms"),height:"".concat(n+(e-1)*i,"px"),width:"".concat(n+(e-1)*i,"px")},this.ringStyle);t.push(o)}return t}}},A=$,R=(i("10e6"),Object(l["a"])(A,j,I,!1,null,"077ae5a6",null)),K=(R.exports,function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"trinity-rings-spinner",style:t.spinnerStyle},[i("div",{staticClass:"circle circle1",style:t.ring1Style}),i("div",{staticClass:"circle circle2",style:t.ring2Style}),i("div",{staticClass:"circle circle3",style:t.ring3Style})])}),P=[],T={name:"TrinityRingsSpinner",props:{animationDuration:{type:Number,default:1500},size:{type:Number,default:60},color:{type:String,default:"#fff"}},data:function(){return{containerPadding:3}},computed:{outerRingSize:function(){return this.size-2*this.containerPadding},spinnerStyle:function(){return{height:"".concat(this.size,"px"),width:"".concat(this.size,"px"),padding:"".concat(this.containerPadding,"px")}},ring1Style:function(){return{height:"".concat(this.outerRingSize,"px"),width:"".concat(this.outerRingSize,"px"),borderColor:this.color,animationDuration:"".concat(this.animationDuration,"ms")}},ring2Style:function(){return{height:"".concat(.65*this.outerRingSize,"px"),width:"".concat(.65*this.outerRingSize,"px"),borderColor:this.color,animationDuration:"".concat(this.animationDuration,"ms")}},ring3Style:function(){return{height:"".concat(.1*this.outerRingSize,"px"),width:"".concat(.1*this.outerRingSize,"px"),borderColor:this.color,animationDuration:"".concat(this.animationDuration,"ms")}}}},W=T,L=(i("fed0"),Object(l["a"])(W,K,P,!1,null,"19bbdf0e",null)),B=(L.exports,function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"fulfilling-square-spinner",style:t.spinnerStyle},[i("div",{staticClass:"spinner-inner",style:t.spinnerInnerStyle})])}),F=[],M={name:"FulfillingSquareSpinner",props:{animationDuration:{type:Number,default:4e3},size:{type:Number,default:50},color:{type:String,default:"#fff"}},computed:{spinnerStyle:function(){return{height:"".concat(this.size,"px"),width:"".concat(this.size,"px"),borderColor:this.color}},spinnerInnerStyle:function(){return{backgroundColor:this.color}}}},V=M,G=(i("89df"),Object(l["a"])(V,B,F,!1,null,"3f451d6f",null)),H=(G.exports,function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"circles-to-rhombuses-spinner",style:t.spinnertStyle},t._l(t.circlesStyles,(function(t,n){return i("div",{key:n,staticClass:"circle",style:t})})),0)}),U=[],J={name:"CirclesToRhombusesSpinner",props:{animationDuration:{type:Number,default:1200},circleSize:{type:Number,default:15},color:{type:String,default:"#fff"},circlesNum:{type:Number,default:3}},computed:{circleMarginLeft:function(){return 1.125*this.circleSize},spinnertStyle:function(){return{height:"".concat(this.circleSize,"px"),width:"".concat((this.circleSize+this.circleMarginLeft)*this.circlesNum,"px")}},circleStyle:function(){return{borderColor:this.color,animationDuration:"".concat(this.animationDuration,"ms"),height:"".concat(this.circleSize,"px"),width:"".concat(this.circleSize,"px"),marginLeft:"".concat(this.circleMarginLeft,"px")}},circlesStyles:function(){for(var t=[],n=150,i=1;i<=this.circlesNum;i++){var e=Object.assign({animationDelay:"".concat(i*n,"ms")},this.circleStyle);1===i&&(e.marginLeft=0),t.push(e)}return t}}},X=J,Y=(i("0fa6"),Object(l["a"])(X,H,U,!1,null,"7a6e17e5",null)),Z=(Y.exports,function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"semipolar-spinner",style:t.spinnerStyle},t._l(t.ringsStyles,(function(t,n){return i("div",{key:n,staticClass:"ring",style:t})})),0)}),Q=[],tt={name:"SemipolarSpinner",props:{animationDuration:{type:Number,default:2e3},size:{type:Number,default:65},color:{type:String,default:"#fff"}},data:function(){return{ringsNum:5}},computed:{spinnerStyle:function(){return{height:"".concat(this.size,"px"),width:"".concat(this.size,"px")}},ringStyle:function(){return{animationDuration:"".concat(this.animationDuration,"ms"),borderTopColor:this.color,borderLeftColor:this.color}},ringsStyles:function(){for(var t=[],n=.1,i=.05*this.size,e=2*i,o=.2*this.size,r=0;r<this.ringsNum;r++){var s="".concat(this.size-o*r,"px"),a="".concat(e*r,"px"),c=Object.assign({animationDelay:"".concat(this.animationDuration*n*(this.ringsNum-r-1),"ms"),height:s,width:s,left:a,top:a,borderWidth:"".concat(i,"px")},this.ringStyle);t.push(c)}return t}}},nt=tt,it=(i("30df"),Object(l["a"])(nt,Z,Q,!1,null,"9544fc1a",null)),et=(it.exports,function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"breeding-rhombus-spinner",style:t.spinnerStyle},[t._l(t.rhombusesStyles,(function(t,n){return i("div",{key:n,staticClass:"rhombus",class:"child-"+(n+1),style:t})})),i("div",{staticClass:"rhombus big",style:t.bigRhombusStyle})],2)}),ot=[],rt={name:"BreedingRhombusSpinner",props:{animationDuration:{type:Number,default:2e3},size:{type:Number,default:150},color:{type:String,default:"#fff"}},data:function(){return{animationBaseName:"breeding-rhombus-spinner-animation-child",rhombusesNum:8}},computed:{spinnerStyle:function(){return{height:"".concat(this.size,"px"),width:"".concat(this.size,"px")}},rhombusStyle:function(){return{height:"".concat(this.size/7.5,"px"),width:"".concat(this.size/7.5,"px"),animationDuration:"".concat(this.animationDuration,"ms"),top:"".concat(this.size/2.3077,"px"),left:"".concat(this.size/2.3077,"px"),backgroundColor:this.color}},rhombusesStyles:function(){for(var t=[],n=.05*this.animationDuration,i=1;i<=this.rhombusesNum;i++)t.push(Object.assign({animationDelay:"".concat(n*(i+1),"ms")},this.rhombusStyle));return t},bigRhombusStyle:function(){return{height:"".concat(this.size/3,"px"),width:"".concat(this.size/3,"px"),animationDuration:"".concat(this.animationDuration),top:"".concat(this.size/3,"px"),left:"".concat(this.size/3,"px"),backgroundColor:this.color}}}},st=rt,at=(i("e2f6"),Object(l["a"])(st,et,ot,!1,null,"8fa7a3fc",null)),ct=(at.exports,function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"swapping-squares-spinner",style:t.spinnerStyle},t._l(t.squaresStyles,(function(t,n){return i("div",{key:n,staticClass:"square",class:"square-"+(n+1),style:t})})),0)}),lt=[],ut={name:"SwappingSquaresSpinner",props:{animationDuration:{type:Number,default:1e3},size:{type:Number,default:65},color:{type:String,default:"#fff"}},data:function(){return{animationBaseName:"swapping-squares-animation-child",squaresNum:4}},computed:{spinnerStyle:function(){return{height:"".concat(this.size,"px"),width:"".concat(this.size,"px")}},squareStyle:function(){return{height:"".concat(.25*this.size/1.3,"px"),width:"".concat(.25*this.size/1.3,"px"),animationDuration:"".concat(this.animationDuration,"ms"),borderWidth:"".concat(.04*this.size/1.3,"px"),borderColor:this.color}},squaresStyles:function(){for(var t=[],n=.5*this.animationDuration,i=1;i<=this.squaresNum;i++)t.push(Object.assign({animationDelay:"".concat(i%2===0?n:0,"ms")},this.squareStyle));return t}}},pt=ut,ht=(i("ca9a"),Object(l["a"])(pt,ct,lt,!1,null,"8265a670",null)),dt=(ht.exports,function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"scaling-squares-spinner",style:t.spinnerStyle},t._l(t.squaresStyles,(function(t,n){return i("div",{key:n,staticClass:"square",class:"square-"+(n+1),style:t})})),0)}),ft=[],mt={name:"ScalingSquaresSpinner",props:{animationDuration:{type:Number,default:1250},size:{type:Number,default:65},color:{type:String,default:"#fff"}},data:function(){return{squaresNum:4}},computed:{spinnerStyle:function(){return{height:"".concat(this.size,"px"),width:"".concat(this.size,"px"),animationDuration:"".concat(this.animationDuration,"ms")}},squareStyle:function(){return{height:"".concat(.25*this.size/1.3,"px"),width:"".concat(.25*this.size/1.3,"px"),animationDuration:"".concat(this.animationDuration,"ms"),borderWidth:"".concat(.04*this.size/1.3,"px"),borderColor:this.color}},squaresStyles:function(){for(var t=[],n=1;n<=this.squaresNum;n++)t.push(Object.assign({},this.squareStyle));return t}}},yt=mt,St=(i("09fe"),Object(l["a"])(yt,dt,ft,!1,null,"dbacb9de",null)),xt=(St.exports,function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"fulfilling-bouncing-circle-spinner",style:t.spinnerStyle},[i("div",{staticClass:"circle",style:t.circleStyle}),i("div",{staticClass:"orbit",style:t.orbitStyle})])}),bt=[],gt={name:"FulfillingBouncingCircleSpinner",props:{animationDuration:{type:Number,default:4e3},size:{type:Number,default:60},color:{type:String,default:"#fff"}},computed:{spinnerStyle:function(){return{height:"".concat(this.size,"px"),width:"".concat(this.size,"px"),animationDuration:"".concat(this.animationDuration,"ms")}},orbitStyle:function(){return{height:"".concat(this.size,"px"),width:"".concat(this.size,"px"),borderColor:this.color,borderWidth:"".concat(.03*this.size,"px"),animationDuration:"".concat(this.animationDuration,"ms")}},circleStyle:function(){return{height:"".concat(this.size,"px"),width:"".concat(this.size,"px"),borderColor:this.color,color:this.color,borderWidth:"".concat(.1*this.size,"px"),animationDuration:"".concat(this.animationDuration,"ms")}}}},zt=gt,vt=(i("5d60"),Object(l["a"])(zt,xt,bt,!1,null,"e5e606d8",null)),Dt=(vt.exports,function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"radar-spinner",style:t.spinnerStyle},t._l(t.circlesStyles,(function(n,e){return i("div",{key:e,staticClass:"circle",style:n},[i("div",{staticClass:"circle-inner-container",style:t.circleInnerContainerStyle},[i("div",{staticClass:"circle-inner",style:t.circleInnerStyle})])])})),0)}),Nt=[],Ct={name:"RadarSpinner",props:{animationDuration:{type:Number,default:2e3},size:{type:Number,default:110},color:{type:String,default:"#fff"}},data:function(){return{circlesNum:4}},computed:{borderWidth:function(){return 5*this.size/110},spinnerStyle:function(){return{height:"".concat(this.size,"px"),width:"".concat(this.size,"px")}},circleStyle:function(){return{animationDuration:"".concat(this.animationDuration,"ms")}},circleInnerContainerStyle:function(){return{borderWidth:"".concat(this.borderWidth,"px")}},circleInnerStyle:function(){return{borderLeftColor:this.color,borderRightColor:this.color,borderWidth:"".concat(this.borderWidth,"px")}},circlesStyles:function(){for(var t=[],n=.15*this.animationDuration,i=0;i<this.circlesNum;i++)t.push(Object.assign({padding:"".concat(2*this.borderWidth*i,"px"),animationDelay:"".concat(i===this.circlesNum-1?0:n,"ms")},this.circleStyle));return t}}},wt=Ct,_t=(i("3d8a"),Object(l["a"])(wt,Dt,Nt,!1,null,"5710a196",null)),qt=(_t.exports,function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"self-building-square-spinner",style:t.spinnerStyle},t._l(t.squaresStyles,(function(t,n){return i("div",{key:n,staticClass:"square",class:{clear:n&&n%3===0},style:t})})),0)}),kt=[],Et={name:"SelfBuildingSquareSpinner",props:{animationDuration:{type:Number,default:6e3},size:{type:Number,default:40},color:{type:String,default:"#fff"}},data:function(){return{squaresNum:9}},computed:{squareSize:function(){return this.size/4},initialTopPosition:function(){return 2*-this.squareSize/3},spinnerStyle:function(){return{top:"".concat(-this.initialTopPosition,"px"),height:"".concat(this.size,"px"),width:"".concat(this.size,"px")}},squareStyle:function(){return{height:"".concat(this.squareSize,"px"),width:"".concat(this.squareSize,"px"),top:"".concat(this.initialTopPosition,"px"),marginRight:"".concat(this.squareSize/3,"px"),marginTop:"".concat(this.squareSize/3,"px"),animationDuration:"".concat(this.animationDuration,"ms"),background:this.color}},squaresStyles:function(){for(var t=[],n=[6,7,8,3,4,5,0,1,2],i=.05*this.animationDuration,e=0;e<this.squaresNum;e++)t.push(Object.assign({animationDelay:"".concat(i*n[e],"ms")},this.squareStyle));return t}}},Ot=Et,jt=(i("e2ed"),Object(l["a"])(Ot,qt,kt,!1,null,"eb840b8e",null)),It=(jt.exports,function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"spring-spinner",style:t.spinnerStyle},[i("div",{staticClass:"spring-spinner-part top",style:t.spinnerPartStyle},[i("div",{staticClass:"spring-spinner-rotator",style:t.rotatorStyle})]),i("div",{staticClass:"spring-spinner-part bottom",style:t.spinnerPartStyle},[i("div",{staticClass:"spring-spinner-rotator",style:t.rotatorStyle})])])}),$t=[],At={name:"SpringSpinner",props:{animationDuration:{type:Number,default:3e3},size:{type:Number,default:70},color:{type:String,default:"#fff"}},data:function(){return{animationName:"spring-spinner-animation-".concat(Date.now())}},computed:{spinnerStyle:function(){return{height:"".concat(this.size,"px"),width:"".concat(this.size,"px")}},spinnerPartStyle:function(){return{height:"".concat(this.size/2,"px"),width:"".concat(this.size,"px")}},rotatorStyle:function(){return{height:"".concat(this.size,"px"),width:"".concat(this.size,"px"),borderRightColor:this.color,borderTopColor:this.color,borderWidth:"".concat(this.size/7,"px"),animationDuration:"".concat(this.animationDuration,"ms"),animationName:this.animationName}}},watch:{size:{handler:"updateAnimation",immediate:!0},color:{handler:"updateAnimation",immediate:!0}},mounted:function(){this.updateAnimation()},beforeDestroy:function(){d.removeKeyframes(this.animationName)},methods:{updateAnimation:function(){d.removeKeyframes(this.animationName),d.appendKeyframes(this.animationName,this.generateKeyframes())},generateKeyframes:function(){return"\n        0% {\n          border-width: ".concat(this.size/7,"px;\n        }\n        25% {\n          border-width: ").concat(this.size/23.33,"px;\n        }\n        50% {\n          transform: rotate(115deg);\n          border-width: ").concat(this.size/7,"px;\n        }\n        75% {\n          border-width: ").concat(this.size/23.33,"px;\n         }\n        100% {\n         border-width: ").concat(this.size/7,"px;\n        }")}}},Rt=At,Kt=(i("34c9"),Object(l["a"])(Rt,It,$t,!1,null,"1ae1dc20",null)),Pt=(Kt.exports,function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"looping-rhombuses-spinner",style:t.spinnerStyle},t._l(t.rhombusesStyles,(function(t,n){return i("div",{staticClass:"rhombus",style:t,attrs:{ikey:n}})})),0)}),Tt=[],Wt={name:"LoopingRhombusesSpinner",props:{animationDuration:{type:Number,default:2500},rhombusSize:{type:Number,default:15},color:{type:String,default:"#fff"}},data:function(){return{rhombusesNum:3}},computed:{spinnerStyle:function(){return{height:"".concat(this.rhombusSize,"px"),width:"".concat(4*this.rhombusSize,"px")}},rhombusStyle:function(){return{height:"".concat(this.rhombusSize,"px"),width:"".concat(this.rhombusSize,"px"),backgroundColor:this.color,animationDuration:"".concat(this.animationDuration,"ms"),left:"".concat(4*this.rhombusSize,"px")}},rhombusesStyles:function(){for(var t=[],n=-this.animationDuration/1.5,i=1;i<=this.rhombusesNum;i++){var e=Object.assign({animationDelay:"".concat(i*n,"ms")},this.rhombusStyle);t.push(e)}return t}}},Lt=Wt,Bt=(i("1016"),Object(l["a"])(Lt,Pt,Tt,!1,null,"49d9ad28",null)),Ft=Bt.exports,Mt=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"half-circle-spinner",style:t.spinnerStyle},[i("div",{staticClass:"circle circle-1",style:t.circle1Style}),i("div",{staticClass:"circle circle-2",style:t.circle2Style})])},Vt=[],Gt={name:"HalfCircleSpinner",props:{animationDuration:{type:Number,default:1e3},size:{type:Number,default:60},color:{type:String,default:"#fff"}},computed:{spinnerStyle:function(){return{height:"".concat(this.size,"px"),width:"".concat(this.size,"px")}},circleStyle:function(){return{borderWidth:"".concat(this.size/10,"px"),animationDuration:"".concat(this.animationDuration,"ms")}},circle1Style:function(){return Object.assign({borderTopColor:this.color},this.circleStyle)},circle2Style:function(){return Object.assign({borderBottomColor:this.color},this.circleStyle)}}},Ht=Gt,Ut=(i("66d3"),Object(l["a"])(Ht,Mt,Vt,!1,null,"669f3b60",null)),Jt=(Ut.exports,function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"atom-spinner",style:t.spinnerStyle},[i("div",{staticClass:"spinner-inner"},[i("div",{staticClass:"spinner-line",style:t.lineStyle}),i("div",{staticClass:"spinner-line",style:t.lineStyle}),i("div",{staticClass:"spinner-line",style:t.lineStyle}),i("div",{staticClass:"spinner-circle",style:t.circleStyle},[t._v(" ● ")])])])}),Xt=[],Yt={name:"AtomSpinner",props:{animationDuration:{type:Number,default:1e3},size:{type:Number,default:60},color:{type:String,default:"#fff"}},computed:{spinnerStyle:function(){return{height:"".concat(this.size,"px"),width:"".concat(this.size,"px")}},circleStyle:function(){return{color:this.color,fontSize:"".concat(.24*this.size,"px")}},lineStyle:function(){return{animationDuration:"".concat(this.animationDuration,"ms"),borderLeftWidth:"".concat(this.size/25,"px"),borderTopWidth:"".concat(this.size/25,"px"),borderLeftColor:this.color}}}},Zt=Yt,Qt=(i("741b"),Object(l["a"])(Zt,Jt,Xt,!1,null,"fb9a33c4",null)),tn=(Qt.exports,{name:"login",components:{LoopingRhombusesSpinner:Ft},mounted:function(){this.requestcsrftoken()},methods:{checkForm:function(t){this.username&&this.password&&(t.preventDefault(),this.login()),t.preventDefault()},requestcsrftoken:function(){var t=this;window.api.get("/authentication/getcsrftoken/").then((function(n){return t.savetoken(n)})).catch((function(t){t.response&&(console.log(t.response.data),console.log(t.response.status),console.log(t.response.headers))}))},savetoken:function(t){this.$cookie.set(t.data.name,t.data.token,t.data.duration/86400)},login:function(){var t=this;this.loading=!0,window.api.post("/authentication/login/",{username:this.username,password:this.password}).then((function(n){return t.post_login(n)})).catch((function(n){t.loading=!1,n.response&&400==n.response.status?t.errors=["Invalid credentials"]:t.errors=["There was a problem communicating with the server. Please contact your administrators."]}))},post_login:function(t){this.$cookie.set(t.data.name,t.data.token),this.$router.push({name:"Desktop"})}},data:function(){return{username:"",password:"",errors:[],loading:!1}}}),nn=tn,en=(i("9a0c"),Object(l["a"])(nn,e,o,!1,null,"7f2b267a",null));n["default"]=en.exports},"89df":function(t,n,i){"use strict";var e=i("c4a3"),o=i.n(e);o.a},9947:function(t,n,i){},"9a0c":function(t,n,i){"use strict";var e=i("0557"),o=i.n(e);o.a},"9fa9":function(t,n,i){},a9e3:function(t,n,i){"use strict";var e=i("83ab"),o=i("da84"),r=i("94ca"),s=i("6eeb"),a=i("5135"),c=i("c6b6"),l=i("7156"),u=i("c04e"),p=i("d039"),h=i("7c73"),d=i("241c").f,f=i("06cf").f,m=i("9bf2").f,y=i("58a8").trim,S="Number",x=o[S],b=x.prototype,g=c(h(b))==S,z=function(t){var n,i,e,o,r,s,a,c,l=u(t,!1);if("string"==typeof l&&l.length>2)if(l=y(l),n=l.charCodeAt(0),43===n||45===n){if(i=l.charCodeAt(2),88===i||120===i)return NaN}else if(48===n){switch(l.charCodeAt(1)){case 66:case 98:e=2,o=49;break;case 79:case 111:e=8,o=55;break;default:return+l}for(r=l.slice(2),s=r.length,a=0;a<s;a++)if(c=r.charCodeAt(a),c<48||c>o)return NaN;return parseInt(r,e)}return+l};if(r(S,!x(" 0o1")||!x("0b1")||x("+0x1"))){for(var v,D=function(t){var n=arguments.length<1?0:t,i=this;return i instanceof D&&(g?p((function(){b.valueOf.call(i)})):c(i)!=S)?l(new x(z(n)),i,D):z(n)},N=e?d(x):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),C=0;N.length>C;C++)a(x,v=N[C])&&!a(D,v)&&m(D,v,f(x,v));D.prototype=b,b.constructor=D,s(o,S,D)}},b208:function(t,n,i){},c0b3:function(t,n,i){},c4a3:function(t,n,i){},c981:function(t,n,i){},ca9a:function(t,n,i){"use strict";var e=i("5c96"),o=i.n(e);o.a},d0e2:function(t,n,i){},d53b:function(t,n,i){},db22:function(t,n,i){},e2ed:function(t,n,i){"use strict";var e=i("c981"),o=i.n(e);o.a},e2f6:function(t,n,i){"use strict";var e=i("0e31"),o=i.n(e);o.a},e6e9:function(t,n,i){},fed0:function(t,n,i){"use strict";var e=i("e6e9"),o=i.n(e);o.a}}]);
//# sourceMappingURL=login.e787848b.js.map