webpackJsonp([1,4],{"/fcW":function(t,e){function n(t){throw new Error("Cannot find module '"+t+"'.")}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id="/fcW"},0:function(t,e,n){t.exports=n("x35b")},"1A80":function(t,e,n){"use strict";function r(t){return s._15(0,[s._16(402653184,1,{canvasElement:0}),(t()(),s._17(0,[[1,0],["canvas",1]],null,0,"canvas",[["class","area"],["height","256"],["width","512"]],null,null,null,null,null)),(t()(),s._18(null,["\n"])),(t()(),s._17(0,null,null,1,"button",[],null,[[null,"click"]],function(t,e,n){var r=!0,i=t.component;if("click"===e){r=!1!==i.doStep()&&r}return r},null,null)),(t()(),s._18(null,["",""]))],null,function(t,e){t(e,4,0,e.component.stepName)})}function i(t){return s._15(0,[(t()(),s._17(0,null,null,1,"app-root",[],null,null,null,r,h)),s._19(4308992,null,0,o.a,[],null,null)],function(t,e){t(e,1,0)},null)}var _=n("l0Vc"),s=n("3j3K"),o=n("YWx4");n.d(e,"a",function(){return l});var a=[_.a],h=s._14({encapsulation:0,styles:a,data:{}}),l=s._20("app-root",o.a,i,{},{},[])},Iksp:function(t,e,n){"use strict";n.d(e,"a",function(){return r});var r=function(){function t(){}return t}()},YWx4:function(t,e,n){"use strict";n.d(e,"a",function(){return r});var r=function(){function t(){this.title="app works!",this.initPop=6,this.step=0,this.stepName="Cross",this.boards=[],this.scores=[]}return t.prototype.ngOnInit=function(){var t=this;this.canvas=this.canvasElement.nativeElement,this.ctx=this.canvas.getContext("2d"),this.board=document.createElement("img"),this.board.src="assets/board.png",this.board.onload=function(){t.render()},this.queen=document.createElement("img"),this.queen.src="assets/queen.png",this.queen.onload=function(){t.render()},this.boards=this.randomPopulation()},t.prototype.ngAfterViewInit=function(){this.scoreAll(),this.render()},t.prototype.randomHouse=function(){return Math.floor(8*Math.random())},t.prototype.randomBoard=function(){for(var t=[],e=0;e<8;e++)t.push(this.randomHouse());return t},t.prototype.randomPopulation=function(){for(var t=[],e=0;e<this.initPop;e++)t.push(this.randomBoard());return t},t.prototype.scoreAll=function(){for(var t,e,n={x:0,y:0},r={x:0,y:0},i=0;i<this.boards.length;i++){t=0,e=this.boards[i];for(var _=0;_<e.length;_++){n.x=e[_],n.y=_;for(var s=_+1;s<e.length;s++)r.x=e[s],r.y=s,n.x!=r.x&&Math.abs(r.x-n.x)!=Math.abs(r.y-n.y)||t++}this.scores[i]=t}},t.prototype.doStep=function(){this.step=this.step%3,0===this.step?(this.cross(),this.stepName="Mutate"):1===this.step?(this.mutate(),this.stepName="Select"):2===this.step&&(this.select(),this.stepName="Cross"),this.step++},t.prototype.cross=function(){for(var t,e,n=0;n<this.initPop;n+=2)t=this.boards[n].slice(0,4),e=this.boards[n+1].slice(4,8),t=t.concat(e),this.boards.push(t),t=this.boards[n+1].slice(0,4),e=this.boards[n].slice(4,8),t=t.concat(e),this.boards.push(t);this.scoreAll(),this.render()},t.prototype.mutate=function(){for(var t,e=0,n=this.boards.length,r=this.initPop;r>0;r--)t=[],e=this.randomHouse(),t=t.concat(this.boards[n-r]),t[e]=this.randomHouse(),this.boards.push(t);this.scoreAll(),this.render()},t.prototype.select=function(){for(var t=this.boards.splice(0,this.boards.length),e=this.scores.splice(0,this.scores.length),n={index:-1,score:64},r=0;r<this.initPop;r++){n={index:-1,score:64};for(var i=0;i<e.length;i++)e[i]<n.score&&(n.score=e[i],n.index=i);this.boards.push(t.splice(n.index,1)[0]),this.scores.push(e.splice(n.index,1)[0])}this.scoreAll(),this.render()},t.prototype.render=function(){this.ctx.setTransform(1,0,0,1,0,0),this.ctx.clearRect(0,0,512,512);for(var t=[0,0],e=0;e<this.boards.length;e++){var n=e%6,r=(e-n)/6;this.ctx.setTransform(1,0,0,1,0,0),this.ctx.translate(80*n,80*r),this.ctx.drawImage(this.board,0,0,64,64),this.ctx.fillText(this.scores[e]+"",64,64);for(var i=0;i<this.boards[e].length;i++)t[0]=8*this.boards[e][i],t[1]=8*i,this.ctx.drawImage(this.queen,t[0],t[1],8,8)}},t}()},kZql:function(t,e,n){"use strict";n.d(e,"a",function(){return r});var r={production:!0}},kke6:function(t,e,n){"use strict";var r=n("3j3K"),i=n("Iksp"),_=n("2Je8"),s=n("Qbdm"),o=n("NVOs"),a=n("Fzro"),h=n("1A80");n.d(e,"a",function(){return c});var l=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),u=function(t){function e(e){return t.call(this,e,[h.a],[h.a])||this}return l(e,t),Object.defineProperty(e.prototype,"_LOCALE_ID_12",{get:function(){return null==this.__LOCALE_ID_12&&(this.__LOCALE_ID_12=r.b(this.parent.get(r.c,null))),this.__LOCALE_ID_12},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_NgLocalization_13",{get:function(){return null==this.__NgLocalization_13&&(this.__NgLocalization_13=new _.a(this._LOCALE_ID_12)),this.__NgLocalization_13},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_Compiler_14",{get:function(){return null==this.__Compiler_14&&(this.__Compiler_14=new r.d),this.__Compiler_14},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_APP_ID_15",{get:function(){return null==this.__APP_ID_15&&(this.__APP_ID_15=r.e()),this.__APP_ID_15},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_IterableDiffers_16",{get:function(){return null==this.__IterableDiffers_16&&(this.__IterableDiffers_16=r.f()),this.__IterableDiffers_16},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_KeyValueDiffers_17",{get:function(){return null==this.__KeyValueDiffers_17&&(this.__KeyValueDiffers_17=r.g()),this.__KeyValueDiffers_17},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_DomSanitizer_18",{get:function(){return null==this.__DomSanitizer_18&&(this.__DomSanitizer_18=new s.b(this.parent.get(s.c))),this.__DomSanitizer_18},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_Sanitizer_19",{get:function(){return null==this.__Sanitizer_19&&(this.__Sanitizer_19=this._DomSanitizer_18),this.__Sanitizer_19},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_HAMMER_GESTURE_CONFIG_20",{get:function(){return null==this.__HAMMER_GESTURE_CONFIG_20&&(this.__HAMMER_GESTURE_CONFIG_20=new s.d),this.__HAMMER_GESTURE_CONFIG_20},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_EVENT_MANAGER_PLUGINS_21",{get:function(){return null==this.__EVENT_MANAGER_PLUGINS_21&&(this.__EVENT_MANAGER_PLUGINS_21=[new s.e(this.parent.get(s.c)),new s.f(this.parent.get(s.c)),new s.g(this.parent.get(s.c),this._HAMMER_GESTURE_CONFIG_20)]),this.__EVENT_MANAGER_PLUGINS_21},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_EventManager_22",{get:function(){return null==this.__EventManager_22&&(this.__EventManager_22=new s.h(this._EVENT_MANAGER_PLUGINS_21,this.parent.get(r.h))),this.__EventManager_22},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_ɵDomSharedStylesHost_23",{get:function(){return null==this.__ɵDomSharedStylesHost_23&&(this.__ɵDomSharedStylesHost_23=new s.i(this.parent.get(s.c))),this.__ɵDomSharedStylesHost_23},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_ɵDomRendererFactory2_24",{get:function(){return null==this.__ɵDomRendererFactory2_24&&(this.__ɵDomRendererFactory2_24=new s.j(this._EventManager_22,this._ɵDomSharedStylesHost_23)),this.__ɵDomRendererFactory2_24},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_RendererFactory2_25",{get:function(){return null==this.__RendererFactory2_25&&(this.__RendererFactory2_25=this._ɵDomRendererFactory2_24),this.__RendererFactory2_25},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_ɵSharedStylesHost_26",{get:function(){return null==this.__ɵSharedStylesHost_26&&(this.__ɵSharedStylesHost_26=this._ɵDomSharedStylesHost_23),this.__ɵSharedStylesHost_26},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_Testability_27",{get:function(){return null==this.__Testability_27&&(this.__Testability_27=new r.i(this.parent.get(r.h))),this.__Testability_27},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_Meta_28",{get:function(){return null==this.__Meta_28&&(this.__Meta_28=new s.k(this.parent.get(s.c))),this.__Meta_28},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_Title_29",{get:function(){return null==this.__Title_29&&(this.__Title_29=new s.l(this.parent.get(s.c))),this.__Title_29},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_ɵi_30",{get:function(){return null==this.__ɵi_30&&(this.__ɵi_30=new o.a),this.__ɵi_30},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_BrowserXhr_31",{get:function(){return null==this.__BrowserXhr_31&&(this.__BrowserXhr_31=new a.a),this.__BrowserXhr_31},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_ResponseOptions_32",{get:function(){return null==this.__ResponseOptions_32&&(this.__ResponseOptions_32=new a.b),this.__ResponseOptions_32},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_XSRFStrategy_33",{get:function(){return null==this.__XSRFStrategy_33&&(this.__XSRFStrategy_33=a.c()),this.__XSRFStrategy_33},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_XHRBackend_34",{get:function(){return null==this.__XHRBackend_34&&(this.__XHRBackend_34=new a.d(this._BrowserXhr_31,this._ResponseOptions_32,this._XSRFStrategy_33)),this.__XHRBackend_34},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_RequestOptions_35",{get:function(){return null==this.__RequestOptions_35&&(this.__RequestOptions_35=new a.e),this.__RequestOptions_35},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_Http_36",{get:function(){return null==this.__Http_36&&(this.__Http_36=a.f(this._XHRBackend_34,this._RequestOptions_35)),this.__Http_36},enumerable:!0,configurable:!0}),e.prototype.createInternal=function(){return this._CommonModule_0=new _.b,this._ErrorHandler_1=s.m(),this._APP_INITIALIZER_2=[r.j,s.n(this.parent.get(s.o,null),this.parent.get(r.k,null))],this._ApplicationInitStatus_3=new r.l(this._APP_INITIALIZER_2),this._ɵf_4=new r.m(this.parent.get(r.h),this.parent.get(r.n),this,this._ErrorHandler_1,this.componentFactoryResolver,this._ApplicationInitStatus_3),this._ApplicationRef_5=this._ɵf_4,this._ApplicationModule_6=new r.o(this._ApplicationRef_5),this._BrowserModule_7=new s.p(this.parent.get(s.p,null)),this._ɵba_8=new o.b,this._FormsModule_9=new o.c,this._HttpModule_10=new a.g,this._AppModule_11=new i.a,this._AppModule_11},e.prototype.getInternal=function(t,e){return t===_.b?this._CommonModule_0:t===r.p?this._ErrorHandler_1:t===r.q?this._APP_INITIALIZER_2:t===r.l?this._ApplicationInitStatus_3:t===r.m?this._ɵf_4:t===r.r?this._ApplicationRef_5:t===r.o?this._ApplicationModule_6:t===s.p?this._BrowserModule_7:t===o.b?this._ɵba_8:t===o.c?this._FormsModule_9:t===a.g?this._HttpModule_10:t===i.a?this._AppModule_11:t===r.c?this._LOCALE_ID_12:t===_.c?this._NgLocalization_13:t===r.d?this._Compiler_14:t===r.s?this._APP_ID_15:t===r.t?this._IterableDiffers_16:t===r.u?this._KeyValueDiffers_17:t===s.q?this._DomSanitizer_18:t===r.v?this._Sanitizer_19:t===s.r?this._HAMMER_GESTURE_CONFIG_20:t===s.s?this._EVENT_MANAGER_PLUGINS_21:t===s.h?this._EventManager_22:t===s.i?this._ɵDomSharedStylesHost_23:t===s.j?this._ɵDomRendererFactory2_24:t===r.w?this._RendererFactory2_25:t===s.t?this._ɵSharedStylesHost_26:t===r.i?this._Testability_27:t===s.k?this._Meta_28:t===s.l?this._Title_29:t===o.a?this._ɵi_30:t===a.a?this._BrowserXhr_31:t===a.h?this._ResponseOptions_32:t===a.i?this._XSRFStrategy_33:t===a.d?this._XHRBackend_34:t===a.j?this._RequestOptions_35:t===a.k?this._Http_36:e},e.prototype.destroyInternal=function(){this._ɵf_4.ngOnDestroy(),this.__ɵDomSharedStylesHost_23&&this._ɵDomSharedStylesHost_23.ngOnDestroy()},e}(r.x),c=new r.y(u,i.a)},l0Vc:function(t,e,n){"use strict";n.d(e,"a",function(){return r});var r=[".area{width:512px;height:256px}  .area .board{fill:#ea4;x:0;y:0;width:64px;height:64px}"]},x35b:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("3j3K"),i=n("kZql"),_=n("Qbdm"),s=n("kke6");i.a.production&&n.i(r.a)(),n.i(_.a)().bootstrapModuleFactory(s.a)}},[0]);