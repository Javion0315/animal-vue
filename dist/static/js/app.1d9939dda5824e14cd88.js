webpackJsonp([1],{"0Pcg":function(t,a){},"66oR":function(t,a){},"7h0J":function(t,a){},"8C7e":function(t,a){},"9UHW":function(t,a,i){t.exports=i.p+"static/img/catLogo.ac96cc1.png"},Jmt5:function(t,a){},NHnr:function(t,a,i){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=i("7+uW"),n=i("NYxO"),s=i("mtWM"),o=i.n(s),l=i("Rf8U"),r=i.n(l),c=i("ZZvs"),d=i.n(c),u=(i("SYh3"),i("Jmt5"),i("K3J8"),i("7QTg")),p=i.n(u),v=(i("zqlM"),{render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticStyle:{height:"1000px"}},[e("div",{staticStyle:{display:"flex"}},[e("h3",{staticClass:"logoText"},[t._v(t._s(t.isActive))]),t._v(" "),"cat"===t.isActive?e("div",{staticClass:"logo",style:{"background-image":"url("+i("9UHW")+")"}}):e("div",{staticClass:"logo",style:{"background-image":"url("+i("ysKT")+")"}}),t._v(" "),e("h3",{staticClass:"logoText"},[t._v(t._s(t.isActive))])]),t._v(" "),e("nav",{staticClass:"navbar navbar-expand-sm bg-dark navbar-dark sticky-top justify-content-center"},[e("ul",{staticClass:"navbar-nav",attrs:{activeMenu:t.activeMenu}},[e("li",{staticClass:"nav-item",staticStyle:{"border-right":"2px solid white"}},[e("router-link",{staticClass:"nav-link",staticStyle:{color:"yellow"},attrs:{to:{path:"dog"},"active-class":"active"},on:{click:function(a){t.isActive="cat"}}},[t._v("dog")])],1),t._v(" "),e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link",staticStyle:{color:"salmon"},attrs:{to:{path:"cat"}},on:{click:function(a){t.isActive="dog"}}},[t._v("cat")])],1)])]),t._v(" "),e("router-view")],1)},staticRenderFns:[]});var f={components:{navbar:i("VU/8")({data:function(){return{isActive:""}},computed:{activeMenu:function(){this.isActive=this.$route.name}}},v,!1,function(t){i("8C7e")},"data-v-1ad019ce",null).exports},name:"App"},m={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",{attrs:{id:"app"}},[a("navbar")],1)},staticRenderFns:[]};var g=i("VU/8")(f,m,!1,function(t){i("0Pcg")},null,null).exports,_=i("/ocq"),h=i("WBHA"),y=i.n(h),w=i("7t+N"),b=i.n(w),C={components:{countTo:y.a},data:function(){return{petsData:[],limit:20,busy:!1,isLoading:!1,swiperOptions:{slidesPerView:3,spaceBetween:30,freeMode:!0},duration:3e3,startVal:0,endVal:0}},created:function(){this.loadMore()},computed:{swiper:function(){return this.$refs.mySwiper.$swiper},imgNotNull:function(){return this.petsData.filter(function(t){return""!=t.album_file&&"狗"==t.animal_kind})}},mounted:function(){this.swiper.slideTo(3,1e3,!1)},methods:{loadMore:function(){var t=this;this.busy=!0,this.isLoading=!0;this.$http.get("/data/Service/OpenData/TransService.aspx?UnitId=QcbUEzN6E6DL").then(function(a){t.endVal=a.data.length;var i=a.data.slice(t.petsData.length,t.petsData.length+t.limit);t.petsData=t.petsData.concat(i),t.busy=!1,t.isLoading=!1,window.setTimeout(function(){b()("#myModal").fadeOut("slow")},3e3)})}}},x={render:function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",[i("loading",{attrs:{active:t.isLoading},on:{"update:active":function(a){t.isLoading=a}}}),t._v(" "),i("div",{staticStyle:{height:"1000px"}},[t.petsData?i("swiper",{ref:"mySwiper",attrs:{options:t.swiperOptions}},[t._l(t.imgNotNull,function(a,e){return i("swiper-slide",{key:e},[e<10?i("div",{staticClass:"slider",style:{"background-image":"url("+a.album_file+")"}}):t._e()])}),t._v(" "),i("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2):t._e(),t._v(" "),i("br"),t._v(" "),t.petsData?i("div",{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:t.loadMore,expression:"loadMore"}],attrs:{"infinite-scroll-disabled":"busy","infinite-scroll-distance":"limit"}},[i("div",{staticClass:"container"},t._l(t.imgNotNull,function(a,e){return i("div",{key:e,staticClass:"card",staticStyle:{width:"20%",margin:"10px 25px",display:"inline-block"}},[i("img",{staticClass:"card-img-top",staticStyle:{width:"100%"},attrs:{src:a.album_file,alt:"Card image"}}),t._v(" "),i("div",{staticClass:"card-body"},[i("h4",{staticClass:"card-title"},[t._v(t._s(a.animal_sex))]),t._v(" "),i("p",{staticClass:"card-text"},[t._v(t._s(a.animal_colour))])])])}),0)]):t._e(),t._v(" "),0!=t.endVal?i("div",{staticClass:"modal",attrs:{id:"myModal"}},[i("div",{staticClass:"modal-content"},[i("countTo",{attrs:{startVal:t.startVal,endVal:t.endVal,duration:t.duration}})],1)]):t._e()],1)],1)},staticRenderFns:[]};var V=i("VU/8")(C,x,!1,function(t){i("7h0J")},"data-v-4f89f353",null).exports,k={components:{countTo:y.a},data:function(){return{petsData:[],limit:20,busy:!1,isLoading:!1,swiperOptions:{slidesPerView:3,spaceBetween:30,freeMode:!0},duration:3e3,startVal:0,endVal:0}},created:function(){this.loadMore()},computed:{swiper:function(){return this.$refs.mySwiper.$swiper},imgNotNull:function(){return this.petsData.filter(function(t){return""!=t.album_file&&"貓"==t.animal_kind})}},mounted:function(){this.swiper.slideTo(3,1e3,!1)},methods:{loadMore:function(){var t=this;this.busy=!0,this.isLoading=!0;this.$http.get("/data/Service/OpenData/TransService.aspx?UnitId=QcbUEzN6E6DL").then(function(a){t.endVal=a.data.length;var i=a.data.slice(t.petsData.length,t.petsData.length+t.limit);t.petsData=t.petsData.concat(i),t.busy=!1,t.isLoading=!1,window.setTimeout(function(){b()("#myModal").fadeOut("slow")},3e3)})}}},D={render:function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",[i("loading",{attrs:{active:t.isLoading},on:{"update:active":function(a){t.isLoading=a}}}),t._v(" "),i("div",{staticStyle:{height:"1000px"}},[t.petsData?i("swiper",{ref:"mySwiper",attrs:{options:t.swiperOptions}},[t._l(t.imgNotNull,function(a,e){return i("swiper-slide",{key:e},[e<10?i("div",{staticClass:"slider",style:{"background-image":"url("+a.album_file+")"}}):t._e()])}),t._v(" "),i("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2):t._e(),t._v(" "),i("br"),t._v(" "),t.petsData?i("div",{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:t.loadMore,expression:"loadMore"}],attrs:{"infinite-scroll-disabled":"busy","infinite-scroll-distance":"limit"}},[i("div",{staticClass:"container"},t._l(t.imgNotNull,function(a,e){return i("div",{key:e,staticClass:"card",staticStyle:{width:"20%",margin:"10px 25px",display:"inline-block"}},[i("img",{staticClass:"card-img-top",staticStyle:{width:"100%"},attrs:{src:a.album_file,alt:"Card image"}}),t._v(" "),i("div",{staticClass:"card-body"},[i("h4",{staticClass:"card-title"},[t._v(t._s(a.animal_sex))]),t._v(" "),i("p",{staticClass:"card-text"},[t._v(t._s(a.animal_colour))])])])}),0)]):t._e(),t._v(" "),0!=t.endVal?i("div",{staticClass:"modal",attrs:{id:"myModal"}},[i("div",{staticClass:"modal-content"},[i("countTo",{attrs:{startVal:t.startVal,endVal:t.endVal,duration:t.duration}})],1)]):t._e()],1)],1)},staticRenderFns:[]};var N=i("VU/8")(k,D,!1,function(t){i("66oR")},"data-v-6920e1a9",null).exports;e.default.use(_.a);var S=new _.a({routes:[{path:"/dog",name:"dog",component:V},{path:"/cat",name:"cat",component:N}]});e.default.use(n.a);var M=new n.a.Store({state:{isLoading:!1},actions:{updateLoading:function(t,a){t.commit("LOADING",a)}},mutations:{LOADING:function(t,a){t.isLoading=a}}}),L=i("bqTm"),T=i.n(L);window.Vue=i("7+uW"),e.default.config.productionTip=!1,e.default.use(r.a,o.a),e.default.use(n.a),e.default.use(p.a),e.default.use(T.a),e.default.component("Loading",d.a);new e.default({el:"#app",router:S,store:M,render:function(t){return t(g)}})},SYh3:function(t,a){},ysKT:function(t,a,i){t.exports=i.p+"static/img/dogLogo.2f83a6b.png"},zqlM:function(t,a){}},["NHnr"]);
//# sourceMappingURL=app.1d9939dda5824e14cd88.js.map