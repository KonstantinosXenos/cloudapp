(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["login"],{"0083":function(t,i,n){},"0557":function(t,i,n){},"09fe":function(t,i,n){"use strict";var e=n("d53b"),o=n.n(e);o.a},"0e31":function(t,i,n){},"0f4a":function(t,i,n){},"0fa6":function(t,i,n){"use strict";var e=n("db22"),o=n.n(e);o.a},1016:function(t,i,n){"use strict";var e=n("4ba2"),o=n.n(e);o.a},"10e6":function(t,i,n){"use strict";var e=n("0f4a"),o=n.n(e);o.a},"16b3":function(t,i,n){"use strict";var e=n("0083"),o=n.n(e);o.a},1902:function(t,i,n){},"1c92":function(t,i,n){"use strict";var e=n("b208"),o=n.n(e);o.a},"1d4c":function(t,i,n){},"30df":function(t,i,n){"use strict";var e=n("1902"),o=n.n(e);o.a},"34c9":function(t,i,n){"use strict";var e=n("9947"),o=n.n(e);o.a},"389c":function(t,i,n){"use strict";var e=n("9fa9"),o=n.n(e);o.a},"3d8a":function(t,i,n){"use strict";var e=n("8718"),o=n.n(e);o.a},"4ba2":function(t,i,n){},"4e68":function(t,i,n){"use strict";var e=n("1d4c"),o=n.n(e);o.a},"5c0e":function(t,i,n){},"5c96":function(t,i,n){},"5d60":function(t,i,n){"use strict";var e=n("7688"),o=n.n(e);o.a},"66d3":function(t,i,n){"use strict";var e=n("c0b3"),o=n.n(e);o.a},"6bc6":function(t,i,n){"use strict";var e=n("5c0e"),o=n.n(e);o.a},"741b":function(t,i,n){"use strict";var e=n("d0e2"),o=n.n(e);o.a},7688:function(t,i,n){},8718:function(t,i,n){},"89d2":function(t,i,n){"use strict";n.r(i);var e=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{staticClass:"flex-column flex-center",attrs:{id:"login"}},[n("div",{staticClass:"login-container flex-column flex-center"},[n("div",{staticClass:"flex-column flex-center"},[n("div",{staticClass:"margin title"},[t._v("A Z T E C")]),n("div",{staticStyle:{padding:"10px",border:"solid 2px white","border-radius":"10px","box-shadow":"10px 10px 20px black",position:"relative"}},[n("font-awesome-icon",{staticClass:"margin",attrs:{icon:["fas","user-circle"],size:"5x"}}),t.loading?n("looping-rhombuses-spinner",{staticClass:"spinner",attrs:{"animation-duration":1e3,size:100,color:"rgb(45, 160, 255)"}}):t._e()],1),n("form",{staticClass:"flex-column flex-center margin",on:{submit:t.checkForm}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"},{name:"focus",rawName:"v-focus"}],staticClass:"inputs",attrs:{id:"username",placeholder:"Username",autocomplete:"username",required:""},domProps:{value:t.username},on:{input:function(i){i.target.composing||(t.username=i.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"inputs",attrs:{id:"password",type:"password",placeholder:"Password",autocomplete:"current-password",required:""},domProps:{value:t.password},on:{input:function(i){i.target.composing||(t.password=i.target.value)}}}),n("button",{staticClass:"sign-in-button"},[t._v("Sign in")])]),t.errors.length?n("p",[n("b",[t._v("Please correct the following error:")]),n("ul",t._l(t.errors,(function(i){return n("li",{key:i,staticStyle:{color:"red"}},[t._v(t._s(i))])})),0)]):t._e()])])])},o=[],s=(n("b0c0"),function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{staticClass:"hollow-dots-spinner",style:t.spinnerStyle},t._l(t.dotsStyles,(function(t,i){return n("div",{key:i,staticClass:"dot",style:t})})),0)}),a=[],r=(n("a9e3"),{name:"HollowDotsSpinner",props:{animationDuration:{type:Number,default:1e3},dotSize:{type:Number,default:15},dotsNum:{type:Number,default:3},color:{type:String,default:"#fff"}},computed:{horizontalMargin:function(){return this.dotSize/2},spinnerStyle:function(){return{height:"".concat(this.dotSize,"px"),width:"".concat((this.dotSize+2*this.horizontalMargin)*this.dotsNum,"px")}},dotStyle:function(){return{animationDuration:"".concat(this.animationDuration,"ms"),width:"".concat(this.dotSize,"px"),height:"".concat(this.dotSize,"px"),margin:"0 ".concat(this.horizontalMargin,"px"),borderWidth:"".concat(this.dotSize/5,"px"),borderColor:this.color}},dotsStyles:function(){for(var t=[],i=.3,n=1e3,e=1;e<=this.dotsNum;e++){var o=Object.assign({animationDelay:"".concat(n*e*i,"ms")},this.dotStyle);t.push(o)}return t}}}),c=r,l=(n("16b3"),n("0c7c")),u=Object(l["a"])(c,s,a,!1,null,"5a033c16",null),h=(u.exports,function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{staticClass:"pixel-spinner",style:t.spinnerStyle},[n("div",{staticClass:"pixel-spinner-inner",style:t.spinnerInnerStyle})])}),p=[],d=(n("99af"),{appendKeyframes:function(t,i){const n=document.createElement("style");n&&(n.setAttribute("id",t),n.innerHTML=`@keyframes ${t} {${i}}`,document.body.appendChild(n))},removeKeyframes:function(t){const i=document.getElementById(t);if(!i)return;const n=i.parentNode;n.removeChild(i)}}),m={name:"PixelSpinner",props:{animationDuration:{type:Number,default:1500},size:{type:Number,default:70},color:{type:String,default:"#fff"}},data:function(){return{animationName:"pixel-spinner-animation-".concat(Date.now())}},computed:{pixelSize:function(){return this.size/7},spinnerStyle:function(){return{width:"".concat(this.size,"px"),height:"".concat(this.size,"px")}},spinnerInnerStyle:function(){return{animationDuration:"".concat(this.animationDuration,"ms"),animationName:this.animationName,width:"".concat(this.pixelSize,"px"),height:"".concat(this.pixelSize,"px"),backgroundColor:this.color,color:this.color,boxShadow:"\n                      ".concat(1.5*this.pixelSize,"px ").concat(1.5*this.pixelSize,"px 0 0,\n                      ").concat(-1.5*this.pixelSize,"px ").concat(-1.5*this.pixelSize,"px 0 0,\n                      ").concat(1.5*this.pixelSize,"px ").concat(-1.5*this.pixelSize,"px 0 0,\n                      ").concat(-1.5*this.pixelSize,"px ").concat(1.5*this.pixelSize,"px 0 0,\n                      0 ").concat(1.5*this.pixelSize,"px 0 0,\n                      ").concat(1.5*this.pixelSize,"px 0 0 0,\n                      ").concat(-1.5*this.pixelSize,"px 0 0 0,\n                      0 ").concat(-1.5*this.pixelSize,"px 0 0\n                    ")}}},watch:{size:{handler:"updateAnimation",immediate:!0}},mounted:function(){this.updateAnimation()},beforeDestroy:function(){d.removeKeyframes(this.animationName)},methods:{updateAnimation:function(){d.removeKeyframes(this.animationName),d.appendKeyframes(this.animationName,this.generateKeyframes())},generateKeyframes:function(){return"\n      50% {\n        box-shadow:  ".concat(2*this.pixelSize,"px ").concat(2*this.pixelSize,"px 0 0,\n                     ").concat(-2*this.pixelSize,"px ").concat(-2*this.pixelSize,"px 0 0,\n                     ").concat(2*this.pixelSize,"px ").concat(-2*this.pixelSize,"px 0 0,\n                     ").concat(-2*this.pixelSize,"px ").concat(2*this.pixelSize,"px 0 0,\n                     0 ").concat(this.pixelSize,"px 0 0,\n                     ").concat(this.pixelSize,"px 0 0 0,\n                     ").concat(-1*this.pixelSize,"px 0 0 0,\n                     0 ").concat(-1*this.pixelSize,"px 0 0;\n      }\n\n\n      75% {\n        box-shadow:  ").concat(2*this.pixelSize,"px ").concat(2*this.pixelSize,"px 0 0,\n                     ").concat(-2*this.pixelSize,"px ").concat(-2*this.pixelSize,"px 0 0,\n                     ").concat(2*this.pixelSize,"px ").concat(-2*this.pixelSize,"px 0 0,\n                     ").concat(-2*this.pixelSize,"px ").concat(2*this.pixelSize,"px 0 0,\n                     0 ").concat(this.pixelSize,"px 0 0,\n                     ").concat(this.pixelSize,"px 0 0 0,\n                     ").concat(-1*this.pixelSize,"px 0 0 0,\n                     0 ").concat(-1*this.pixelSize,"px 0 0;\n      }\n\n      100% {\n        transform: rotate(360deg);\n      }")}}},f=m,y=(n("6bc6"),Object(l["a"])(f,h,p,!1,null,"c76fc818",null)),S=(y.exports,function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{staticClass:"flower-spinner",style:t.spinnerStyle},[n("div",{staticClass:"dots-container",style:t.dotsContainerStyle},[n("div",{staticClass:"big-dot",style:t.biggerDotStyle},[n("div",{staticClass:"small-dot",style:t.smallerDotStyle})])])])}),x=[],b={name:"FlowerSpinner",props:{animationDuration:{type:Number,default:2500},size:{type:Number,default:70},color:{type:String,default:"#fff"}},data:function(){return{smallDotName:"flower-spinner-small-dot-".concat(Date.now()),bigDotName:"flower-spinner-big-dot-".concat(Date.now())}},computed:{dotSize:function(){return this.size/7},spinnerStyle:function(){return{width:"".concat(this.size,"px"),height:"".concat(this.size,"px")}},dotsContainerStyle:function(){return{width:"".concat(this.dotSize,"px"),height:"".concat(this.dotSize,"px")}},smallerDotStyle:function(){return{background:this.color,animationDuration:"".concat(this.animationDuration,"ms"),animationName:this.smallDotName}},biggerDotStyle:function(){return{background:this.color,animationDuration:"".concat(this.animationDuration,"ms"),animationName:this.bigDotName}}},watch:{size:{handler:"updateAnimation",immediate:!0},color:{handler:"updateAnimation",immediate:!0}},beforeDestroy:function(){d.removeKeyframes(this.smallDotName),d.removeKeyframes(this.bigDotName)},methods:{updateAnimation:function(){d.removeKeyframes(this.smallDotName),d.appendKeyframes(this.smallDotName,this.generateSmallDotKeyframes()),d.removeKeyframes(this.bigDotName),d.appendKeyframes(this.bigDotName,this.generateBigDotKeyframes())},generateSmallDotKeyframes:function(){return"0%, 100% {\n                  box-shadow: 0 0 0 ".concat(this.color,",\n                              0 0 0 ").concat(this.color,",\n                              0 0 0 ").concat(this.color,",\n                              0 0 0 ").concat(this.color,",\n                              0 0 0 ").concat(this.color,",\n                              0 0 0 ").concat(this.color,",\n                              0 0 0 ").concat(this.color,",\n                              0 0 0 ").concat(this.color,";\n                }\n                25%, 75% {\n                  box-shadow: ").concat(1.4*this.dotSize,"px 0 0 ").concat(this.color,",\n                              -").concat(1.4*this.dotSize,"px 0 0 ").concat(this.color,",\n                              0 ").concat(1.4*this.dotSize,"px 0 ").concat(this.color,",\n                              0 -").concat(1.4*this.dotSize,"px 0 ").concat(this.color,",\n                              ").concat(this.dotSize,"px -").concat(this.dotSize,"px 0 ").concat(this.color,",\n                              ").concat(this.dotSize,"px ").concat(this.dotSize,"px 0 ").concat(this.color,",\n                              -").concat(this.dotSize,"px -").concat(this.dotSize,"px 0 ").concat(this.color,",\n                              -").concat(this.dotSize,"px ").concat(this.dotSize,"px 0 ").concat(this.color,";\n\n                }\n                100% {\n                  box-shadow: 0 0 0 ").concat(this.color,",\n                              0 0 0 ").concat(this.color,",\n                              0 0 0 ").concat(this.color,",\n                              0 0 0 ").concat(this.color,",\n                              0 0 0 ").concat(this.color,",\n                              0 0 0 ").concat(this.color,",\n                              0 0 0 ").concat(this.color,",\n                              0 0 0 ").concat(this.color,";\n                }")},generateBigDotKeyframes:function(){return"0%, 100% {\n                  box-shadow: 0 0 0 ".concat(this.color,",\n                              0 0 0 ").concat(this.color,",\n                              0 0 0 ").concat(this.color,",\n                              0 0 0 ").concat(this.color,",\n                              0 0 0 ").concat(this.color,",\n                              0 0 0 ").concat(this.color,",\n                              0 0 0 ").concat(this.color,",\n                              0 0 0 ").concat(this.color,";\n                }\n                50% {\n                  transform: rotate(180deg);\n                }\n                25%, 75% {\n                  box-shadow: ").concat(2.6*this.dotSize,"px 0 0 ").concat(this.color,",\n                              -").concat(2.6*this.dotSize,"px 0 0 ").concat(this.color,",\n                              0 ").concat(2.6*this.dotSize,"px 0 ").concat(this.color,",\n                              0 -").concat(2.6*this.dotSize,"px 0 ").concat(this.color,",\n                              ").concat(1.9*this.dotSize,"px -").concat(1.9*this.dotSize,"px 0 ").concat(this.color,",\n                              ").concat(1.9*this.dotSize,"px ").concat(1.9*this.dotSize,"px 0 ").concat(this.color,",\n                              -").concat(1.9*this.dotSize,"px -").concat(1.9*this.dotSize,"px 0 ").concat(this.color,",\n                              -").concat(1.9*this.dotSize,"px ").concat(1.9*this.dotSize,"px 0 ").concat(this.color,";\n\n                }\n                100% {\n                  transform: rotate(360deg);\n                  box-shadow: 0 0 0 ").concat(this.color,",\n                              0 0 0 ").concat(this.color,",\n                              0 0 0 ").concat(this.color,",\n                              0 0 0 ").concat(this.color,",\n                              0 0 0 ").concat(this.color,",\n                              0 0 0 ").concat(this.color,",\n                              0 0 0 ").concat(this.color,",\n                              0 0 0 ").concat(this.color,";\n                }")}}},g=b,z=(n("389c"),Object(l["a"])(g,S,x,!1,null,"f15101b8",null)),v=(z.exports,function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{staticClass:"intersecting-circles-spinner",style:t.spinnerStyle},[n("div",{staticClass:"spinnerBlock",style:t.spinnerBlockStyle},t._l(t.circleStyles,(function(t,i){return n("span",{key:i,staticClass:"circle",style:t})})),0)])}),D=[],C=(n("d81d"),{name:"IntersectingCirclesSpinner",props:{animationDuration:{type:Number,default:1200},size:{type:Number,default:70},color:{type:String,default:"#fff"}},computed:{circleSize:function(){return this.size/2},spinnerStyle:function(){return{width:"".concat(this.size,"px"),height:"".concat(this.size,"px")}},spinnerBlockStyle:function(){return{animationDuration:"".concat(this.animationDuration,"ms"),width:"".concat(this.circleSize,"px"),height:"".concat(this.circleSize,"px")}},circleStyle:function(){return{borderColor:this.color}},circleStyles:function(){var t=this,i=[{top:0,left:0},{left:"".concat(-.36*this.circleSize,"px"),top:"".concat(.2*this.circleSize,"px")},{left:"".concat(-.36*this.circleSize,"px"),top:"".concat(-.2*this.circleSize,"px")},{left:0,top:"".concat(-.36*this.circleSize,"px")},{left:"".concat(.36*this.circleSize,"px"),top:"".concat(-.2*this.circleSize,"px")},{left:"".concat(.36*this.circleSize,"px"),top:"".concat(.2*this.circleSize,"px")},{left:0,top:"".concat(.36*this.circleSize,"px")}];return i.map((function(i){return Object.assign(i,t.circleStyle)}))}}}),w=C,N=(n("4e68"),Object(l["a"])(w,v,D,!1,null,"91c71956",null)),_=(N.exports,function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{staticClass:"orbit-spinner",style:t.spinnerStyle},[n("div",{staticClass:"orbit one",style:t.orbitStyle}),n("div",{staticClass:"orbit two",style:t.orbitStyle}),n("div",{staticClass:"orbit three",style:t.orbitStyle})])}),q=[],k={name:"OrbitSpinner",props:{animationDuration:{type:Number,default:1e3},size:{type:Number,default:50},color:{type:String,default:"#fff"}},computed:{spinnerStyle:function(){return{height:"".concat(this.size,"px"),width:"".concat(this.size,"px")}},orbitStyle:function(){return{borderColor:this.color,animationDuration:"".concat(this.animationDuration,"ms")}}}},O=k,j=(n("1c92"),Object(l["a"])(O,_,q,!1,null,"34a3fdef",null)),$=(j.exports,function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{staticClass:"fingerprint-spinner",style:t.spinnerStyle},t._l(t.ringsStyles,(function(t,i){return n("div",{key:i,staticClass:"spinner-ring",style:t})})),0)}),E=[],K={name:"FingerprintSpinner",props:{animationDuration:{type:Number,default:1500},size:{type:Number,default:60},color:{type:String,default:"#fff"}},data:function(){return{ringsNum:9,containerPadding:2}},computed:{outerRingSize:function(){return this.size-2*this.containerPadding},spinnerStyle:function(){return{height:"".concat(this.size,"px"),width:"".concat(this.size,"px"),padding:"".concat(this.containerPadding,"px")}},ringStyle:function(){return{borderTopColor:this.color,animationDuration:"".concat(this.animationDuration,"ms")}},ringsStyles:function(){for(var t=[],i=this.outerRingSize/this.ringsNum,n=i,e=1;e<=this.ringsNum;e++){var o=Object.assign({animationDelay:"".concat(50*e,"ms"),height:"".concat(i+(e-1)*n,"px"),width:"".concat(i+(e-1)*n,"px")},this.ringStyle);t.push(o)}return t}}},R=K,P=(n("10e6"),Object(l["a"])(R,$,E,!1,null,"077ae5a6",null)),W=(P.exports,function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{staticClass:"trinity-rings-spinner",style:t.spinnerStyle},[n("div",{staticClass:"circle circle1",style:t.ring1Style}),n("div",{staticClass:"circle circle2",style:t.ring2Style}),n("div",{staticClass:"circle circle3",style:t.ring3Style})])}),T=[],A={name:"TrinityRingsSpinner",props:{animationDuration:{type:Number,default:1500},size:{type:Number,default:60},color:{type:String,default:"#fff"}},data:function(){return{containerPadding:3}},computed:{outerRingSize:function(){return this.size-2*this.containerPadding},spinnerStyle:function(){return{height:"".concat(this.size,"px"),width:"".concat(this.size,"px"),padding:"".concat(this.containerPadding,"px")}},ring1Style:function(){return{height:"".concat(this.outerRingSize,"px"),width:"".concat(this.outerRingSize,"px"),borderColor:this.color,animationDuration:"".concat(this.animationDuration,"ms")}},ring2Style:function(){return{height:"".concat(.65*this.outerRingSize,"px"),width:"".concat(.65*this.outerRingSize,"px"),borderColor:this.color,animationDuration:"".concat(this.animationDuration,"ms")}},ring3Style:function(){return{height:"".concat(.1*this.outerRingSize,"px"),width:"".concat(.1*this.outerRingSize,"px"),borderColor:this.color,animationDuration:"".concat(this.animationDuration,"ms")}}}},B=A,L=(n("fed0"),Object(l["a"])(B,W,T,!1,null,"19bbdf0e",null)),I=(L.exports,function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{staticClass:"fulfilling-square-spinner",style:t.spinnerStyle},[n("div",{staticClass:"spinner-inner",style:t.spinnerInnerStyle})])}),M=[],F={name:"FulfillingSquareSpinner",props:{animationDuration:{type:Number,default:4e3},size:{type:Number,default:50},color:{type:String,default:"#fff"}},computed:{spinnerStyle:function(){return{height:"".concat(this.size,"px"),width:"".concat(this.size,"px"),borderColor:this.color}},spinnerInnerStyle:function(){return{backgroundColor:this.color}}}},H=F,J=(n("89df"),Object(l["a"])(H,I,M,!1,null,"3f451d6f",null)),U=(J.exports,function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{staticClass:"circles-to-rhombuses-spinner",style:t.spinnertStyle},t._l(t.circlesStyles,(function(t,i){return n("div",{key:i,staticClass:"circle",style:t})})),0)}),Z=[],G={name:"CirclesToRhombusesSpinner",props:{animationDuration:{type:Number,default:1200},circleSize:{type:Number,default:15},color:{type:String,default:"#fff"},circlesNum:{type:Number,default:3}},computed:{circleMarginLeft:function(){return 1.125*this.circleSize},spinnertStyle:function(){return{height:"".concat(this.circleSize,"px"),width:"".concat((this.circleSize+this.circleMarginLeft)*this.circlesNum,"px")}},circleStyle:function(){return{borderColor:this.color,animationDuration:"".concat(this.animationDuration,"ms"),height:"".concat(this.circleSize,"px"),width:"".concat(this.circleSize,"px"),marginLeft:"".concat(this.circleMarginLeft,"px")}},circlesStyles:function(){for(var t=[],i=150,n=1;n<=this.circlesNum;n++){var e=Object.assign({animationDelay:"".concat(n*i,"ms")},this.circleStyle);1===n&&(e.marginLeft=0),t.push(e)}return t}}},Q=G,V=(n("0fa6"),Object(l["a"])(Q,U,Z,!1,null,"7a6e17e5",null)),X=(V.exports,function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{staticClass:"semipolar-spinner",style:t.spinnerStyle},t._l(t.ringsStyles,(function(t,i){return n("div",{key:i,staticClass:"ring",style:t})})),0)}),Y=[],tt={name:"SemipolarSpinner",props:{animationDuration:{type:Number,default:2e3},size:{type:Number,default:65},color:{type:String,default:"#fff"}},data:function(){return{ringsNum:5}},computed:{spinnerStyle:function(){return{height:"".concat(this.size,"px"),width:"".concat(this.size,"px")}},ringStyle:function(){return{animationDuration:"".concat(this.animationDuration,"ms"),borderTopColor:this.color,borderLeftColor:this.color}},ringsStyles:function(){for(var t=[],i=.1,n=.05*this.size,e=2*n,o=.2*this.size,s=0;s<this.ringsNum;s++){var a="".concat(this.size-o*s,"px"),r="".concat(e*s,"px"),c=Object.assign({animationDelay:"".concat(this.animationDuration*i*(this.ringsNum-s-1),"ms"),height:a,width:a,left:r,top:r,borderWidth:"".concat(n,"px")},this.ringStyle);t.push(c)}return t}}},it=tt,nt=(n("30df"),Object(l["a"])(it,X,Y,!1,null,"9544fc1a",null)),et=(nt.exports,function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{staticClass:"breeding-rhombus-spinner",style:t.spinnerStyle},[t._l(t.rhombusesStyles,(function(t,i){return n("div",{key:i,staticClass:"rhombus",class:"child-"+(i+1),style:t})})),n("div",{staticClass:"rhombus big",style:t.bigRhombusStyle})],2)}),ot=[],st={name:"BreedingRhombusSpinner",props:{animationDuration:{type:Number,default:2e3},size:{type:Number,default:150},color:{type:String,default:"#fff"}},data:function(){return{animationBaseName:"breeding-rhombus-spinner-animation-child",rhombusesNum:8}},computed:{spinnerStyle:function(){return{height:"".concat(this.size,"px"),width:"".concat(this.size,"px")}},rhombusStyle:function(){return{height:"".concat(this.size/7.5,"px"),width:"".concat(this.size/7.5,"px"),animationDuration:"".concat(this.animationDuration,"ms"),top:"".concat(this.size/2.3077,"px"),left:"".concat(this.size/2.3077,"px"),backgroundColor:this.color}},rhombusesStyles:function(){for(var t=[],i=.05*this.animationDuration,n=1;n<=this.rhombusesNum;n++)t.push(Object.assign({animationDelay:"".concat(i*(n+1),"ms")},this.rhombusStyle));return t},bigRhombusStyle:function(){return{height:"".concat(this.size/3,"px"),width:"".concat(this.size/3,"px"),animationDuration:"".concat(this.animationDuration),top:"".concat(this.size/3,"px"),left:"".concat(this.size/3,"px"),backgroundColor:this.color}}}},at=st,rt=(n("e2f6"),Object(l["a"])(at,et,ot,!1,null,"8fa7a3fc",null)),ct=(rt.exports,function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{staticClass:"swapping-squares-spinner",style:t.spinnerStyle},t._l(t.squaresStyles,(function(t,i){return n("div",{key:i,staticClass:"square",class:"square-"+(i+1),style:t})})),0)}),lt=[],ut={name:"SwappingSquaresSpinner",props:{animationDuration:{type:Number,default:1e3},size:{type:Number,default:65},color:{type:String,default:"#fff"}},data:function(){return{animationBaseName:"swapping-squares-animation-child",squaresNum:4}},computed:{spinnerStyle:function(){return{height:"".concat(this.size,"px"),width:"".concat(this.size,"px")}},squareStyle:function(){return{height:"".concat(.25*this.size/1.3,"px"),width:"".concat(.25*this.size/1.3,"px"),animationDuration:"".concat(this.animationDuration,"ms"),borderWidth:"".concat(.04*this.size/1.3,"px"),borderColor:this.color}},squaresStyles:function(){for(var t=[],i=.5*this.animationDuration,n=1;n<=this.squaresNum;n++)t.push(Object.assign({animationDelay:"".concat(n%2===0?i:0,"ms")},this.squareStyle));return t}}},ht=ut,pt=(n("ca9a"),Object(l["a"])(ht,ct,lt,!1,null,"8265a670",null)),dt=(pt.exports,function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{staticClass:"scaling-squares-spinner",style:t.spinnerStyle},t._l(t.squaresStyles,(function(t,i){return n("div",{key:i,staticClass:"square",class:"square-"+(i+1),style:t})})),0)}),mt=[],ft={name:"ScalingSquaresSpinner",props:{animationDuration:{type:Number,default:1250},size:{type:Number,default:65},color:{type:String,default:"#fff"}},data:function(){return{squaresNum:4}},computed:{spinnerStyle:function(){return{height:"".concat(this.size,"px"),width:"".concat(this.size,"px"),animationDuration:"".concat(this.animationDuration,"ms")}},squareStyle:function(){return{height:"".concat(.25*this.size/1.3,"px"),width:"".concat(.25*this.size/1.3,"px"),animationDuration:"".concat(this.animationDuration,"ms"),borderWidth:"".concat(.04*this.size/1.3,"px"),borderColor:this.color}},squaresStyles:function(){for(var t=[],i=1;i<=this.squaresNum;i++)t.push(Object.assign({},this.squareStyle));return t}}},yt=ft,St=(n("09fe"),Object(l["a"])(yt,dt,mt,!1,null,"dbacb9de",null)),xt=(St.exports,function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{staticClass:"fulfilling-bouncing-circle-spinner",style:t.spinnerStyle},[n("div",{staticClass:"circle",style:t.circleStyle}),n("div",{staticClass:"orbit",style:t.orbitStyle})])}),bt=[],gt={name:"FulfillingBouncingCircleSpinner",props:{animationDuration:{type:Number,default:4e3},size:{type:Number,default:60},color:{type:String,default:"#fff"}},computed:{spinnerStyle:function(){return{height:"".concat(this.size,"px"),width:"".concat(this.size,"px"),animationDuration:"".concat(this.animationDuration,"ms")}},orbitStyle:function(){return{height:"".concat(this.size,"px"),width:"".concat(this.size,"px"),borderColor:this.color,borderWidth:"".concat(.03*this.size,"px"),animationDuration:"".concat(this.animationDuration,"ms")}},circleStyle:function(){return{height:"".concat(this.size,"px"),width:"".concat(this.size,"px"),borderColor:this.color,color:this.color,borderWidth:"".concat(.1*this.size,"px"),animationDuration:"".concat(this.animationDuration,"ms")}}}},zt=gt,vt=(n("5d60"),Object(l["a"])(zt,xt,bt,!1,null,"e5e606d8",null)),Dt=(vt.exports,function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{staticClass:"radar-spinner",style:t.spinnerStyle},t._l(t.circlesStyles,(function(i,e){return n("div",{key:e,staticClass:"circle",style:i},[n("div",{staticClass:"circle-inner-container",style:t.circleInnerContainerStyle},[n("div",{staticClass:"circle-inner",style:t.circleInnerStyle})])])})),0)}),Ct=[],wt={name:"RadarSpinner",props:{animationDuration:{type:Number,default:2e3},size:{type:Number,default:110},color:{type:String,default:"#fff"}},data:function(){return{circlesNum:4}},computed:{borderWidth:function(){return 5*this.size/110},spinnerStyle:function(){return{height:"".concat(this.size,"px"),width:"".concat(this.size,"px")}},circleStyle:function(){return{animationDuration:"".concat(this.animationDuration,"ms")}},circleInnerContainerStyle:function(){return{borderWidth:"".concat(this.borderWidth,"px")}},circleInnerStyle:function(){return{borderLeftColor:this.color,borderRightColor:this.color,borderWidth:"".concat(this.borderWidth,"px")}},circlesStyles:function(){for(var t=[],i=.15*this.animationDuration,n=0;n<this.circlesNum;n++)t.push(Object.assign({padding:"".concat(2*this.borderWidth*n,"px"),animationDelay:"".concat(n===this.circlesNum-1?0:i,"ms")},this.circleStyle));return t}}},Nt=wt,_t=(n("3d8a"),Object(l["a"])(Nt,Dt,Ct,!1,null,"5710a196",null)),qt=(_t.exports,function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{staticClass:"self-building-square-spinner",style:t.spinnerStyle},t._l(t.squaresStyles,(function(t,i){return n("div",{key:i,staticClass:"square",class:{clear:i&&i%3===0},style:t})})),0)}),kt=[],Ot={name:"SelfBuildingSquareSpinner",props:{animationDuration:{type:Number,default:6e3},size:{type:Number,default:40},color:{type:String,default:"#fff"}},data:function(){return{squaresNum:9}},computed:{squareSize:function(){return this.size/4},initialTopPosition:function(){return 2*-this.squareSize/3},spinnerStyle:function(){return{top:"".concat(-this.initialTopPosition,"px"),height:"".concat(this.size,"px"),width:"".concat(this.size,"px")}},squareStyle:function(){return{height:"".concat(this.squareSize,"px"),width:"".concat(this.squareSize,"px"),top:"".concat(this.initialTopPosition,"px"),marginRight:"".concat(this.squareSize/3,"px"),marginTop:"".concat(this.squareSize/3,"px"),animationDuration:"".concat(this.animationDuration,"ms"),background:this.color}},squaresStyles:function(){for(var t=[],i=[6,7,8,3,4,5,0,1,2],n=.05*this.animationDuration,e=0;e<this.squaresNum;e++)t.push(Object.assign({animationDelay:"".concat(n*i[e],"ms")},this.squareStyle));return t}}},jt=Ot,$t=(n("e2ed"),Object(l["a"])(jt,qt,kt,!1,null,"eb840b8e",null)),Et=($t.exports,function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{staticClass:"spring-spinner",style:t.spinnerStyle},[n("div",{staticClass:"spring-spinner-part top",style:t.spinnerPartStyle},[n("div",{staticClass:"spring-spinner-rotator",style:t.rotatorStyle})]),n("div",{staticClass:"spring-spinner-part bottom",style:t.spinnerPartStyle},[n("div",{staticClass:"spring-spinner-rotator",style:t.rotatorStyle})])])}),Kt=[],Rt={name:"SpringSpinner",props:{animationDuration:{type:Number,default:3e3},size:{type:Number,default:70},color:{type:String,default:"#fff"}},data:function(){return{animationName:"spring-spinner-animation-".concat(Date.now())}},computed:{spinnerStyle:function(){return{height:"".concat(this.size,"px"),width:"".concat(this.size,"px")}},spinnerPartStyle:function(){return{height:"".concat(this.size/2,"px"),width:"".concat(this.size,"px")}},rotatorStyle:function(){return{height:"".concat(this.size,"px"),width:"".concat(this.size,"px"),borderRightColor:this.color,borderTopColor:this.color,borderWidth:"".concat(this.size/7,"px"),animationDuration:"".concat(this.animationDuration,"ms"),animationName:this.animationName}}},watch:{size:{handler:"updateAnimation",immediate:!0},color:{handler:"updateAnimation",immediate:!0}},mounted:function(){this.updateAnimation()},beforeDestroy:function(){d.removeKeyframes(this.animationName)},methods:{updateAnimation:function(){d.removeKeyframes(this.animationName),d.appendKeyframes(this.animationName,this.generateKeyframes())},generateKeyframes:function(){return"\n        0% {\n          border-width: ".concat(this.size/7,"px;\n        }\n        25% {\n          border-width: ").concat(this.size/23.33,"px;\n        }\n        50% {\n          transform: rotate(115deg);\n          border-width: ").concat(this.size/7,"px;\n        }\n        75% {\n          border-width: ").concat(this.size/23.33,"px;\n         }\n        100% {\n         border-width: ").concat(this.size/7,"px;\n        }")}}},Pt=Rt,Wt=(n("34c9"),Object(l["a"])(Pt,Et,Kt,!1,null,"1ae1dc20",null)),Tt=(Wt.exports,function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{staticClass:"looping-rhombuses-spinner",style:t.spinnerStyle},t._l(t.rhombusesStyles,(function(t,i){return n("div",{staticClass:"rhombus",style:t,attrs:{ikey:i}})})),0)}),At=[],Bt={name:"LoopingRhombusesSpinner",props:{animationDuration:{type:Number,default:2500},rhombusSize:{type:Number,default:15},color:{type:String,default:"#fff"}},data:function(){return{rhombusesNum:3}},computed:{spinnerStyle:function(){return{height:"".concat(this.rhombusSize,"px"),width:"".concat(4*this.rhombusSize,"px")}},rhombusStyle:function(){return{height:"".concat(this.rhombusSize,"px"),width:"".concat(this.rhombusSize,"px"),backgroundColor:this.color,animationDuration:"".concat(this.animationDuration,"ms"),left:"".concat(4*this.rhombusSize,"px")}},rhombusesStyles:function(){for(var t=[],i=-this.animationDuration/1.5,n=1;n<=this.rhombusesNum;n++){var e=Object.assign({animationDelay:"".concat(n*i,"ms")},this.rhombusStyle);t.push(e)}return t}}},Lt=Bt,It=(n("1016"),Object(l["a"])(Lt,Tt,At,!1,null,"49d9ad28",null)),Mt=It.exports,Ft=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{staticClass:"half-circle-spinner",style:t.spinnerStyle},[n("div",{staticClass:"circle circle-1",style:t.circle1Style}),n("div",{staticClass:"circle circle-2",style:t.circle2Style})])},Ht=[],Jt={name:"HalfCircleSpinner",props:{animationDuration:{type:Number,default:1e3},size:{type:Number,default:60},color:{type:String,default:"#fff"}},computed:{spinnerStyle:function(){return{height:"".concat(this.size,"px"),width:"".concat(this.size,"px")}},circleStyle:function(){return{borderWidth:"".concat(this.size/10,"px"),animationDuration:"".concat(this.animationDuration,"ms")}},circle1Style:function(){return Object.assign({borderTopColor:this.color},this.circleStyle)},circle2Style:function(){return Object.assign({borderBottomColor:this.color},this.circleStyle)}}},Ut=Jt,Zt=(n("66d3"),Object(l["a"])(Ut,Ft,Ht,!1,null,"669f3b60",null)),Gt=(Zt.exports,function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{staticClass:"atom-spinner",style:t.spinnerStyle},[n("div",{staticClass:"spinner-inner"},[n("div",{staticClass:"spinner-line",style:t.lineStyle}),n("div",{staticClass:"spinner-line",style:t.lineStyle}),n("div",{staticClass:"spinner-line",style:t.lineStyle}),n("div",{staticClass:"spinner-circle",style:t.circleStyle},[t._v(" ● ")])])])}),Qt=[],Vt={name:"AtomSpinner",props:{animationDuration:{type:Number,default:1e3},size:{type:Number,default:60},color:{type:String,default:"#fff"}},computed:{spinnerStyle:function(){return{height:"".concat(this.size,"px"),width:"".concat(this.size,"px")}},circleStyle:function(){return{color:this.color,fontSize:"".concat(.24*this.size,"px")}},lineStyle:function(){return{animationDuration:"".concat(this.animationDuration,"ms"),borderLeftWidth:"".concat(this.size/25,"px"),borderTopWidth:"".concat(this.size/25,"px"),borderLeftColor:this.color}}}},Xt=Vt,Yt=(n("741b"),Object(l["a"])(Xt,Gt,Qt,!1,null,"fb9a33c4",null)),ti=(Yt.exports,{name:"login",components:{LoopingRhombusesSpinner:Mt},mounted:function(){this.requestcsrftoken()},methods:{checkForm:function(t){this.username&&this.password&&(t.preventDefault(),this.login()),t.preventDefault()},requestcsrftoken:function(){var t=this;window.api.get("/authentication/getcsrftoken/").then((function(i){return t.savetoken(i)})).catch((function(t){t.response&&(console.log(t.response.data),console.log(t.response.status),console.log(t.response.headers))}))},savetoken:function(t){this.$cookie.set(t.data.name,t.data.token,t.data.duration/86400)},login:function(){var t=this;this.loading=!0,window.api.post("/authentication/login/",{username:this.username,password:this.password}).then((function(i){return t.post_login(i)})).catch((function(i){t.loading=!1,i.response&&400==i.response.status?t.errors=["Invalid credentials"]:t.errors=["There was a problem communicating with the server. Please contact your administrators."]}))},post_login:function(t){this.$cookie.set(t.data.name,t.data.token),this.$router.push({name:"Desktop"})}},data:function(){return{username:"",password:"",errors:[],loading:!1}}}),ii=ti,ni=(n("9a0c"),Object(l["a"])(ii,e,o,!1,null,"7f2b267a",null));i["default"]=ni.exports},"89df":function(t,i,n){"use strict";var e=n("c4a3"),o=n.n(e);o.a},9947:function(t,i,n){},"9a0c":function(t,i,n){"use strict";var e=n("0557"),o=n.n(e);o.a},"9fa9":function(t,i,n){},b208:function(t,i,n){},c0b3:function(t,i,n){},c4a3:function(t,i,n){},c981:function(t,i,n){},ca9a:function(t,i,n){"use strict";var e=n("5c96"),o=n.n(e);o.a},d0e2:function(t,i,n){},d53b:function(t,i,n){},db22:function(t,i,n){},e2ed:function(t,i,n){"use strict";var e=n("c981"),o=n.n(e);o.a},e2f6:function(t,i,n){"use strict";var e=n("0e31"),o=n.n(e);o.a},e6e9:function(t,i,n){},fed0:function(t,i,n){"use strict";var e=n("e6e9"),o=n.n(e);o.a}}]);
//# sourceMappingURL=login.e8daa209.js.map