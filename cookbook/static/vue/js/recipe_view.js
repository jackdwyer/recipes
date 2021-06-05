(function(e){function t(t){for(var n,s,o=t[0],c=t[1],l=t[2],p=0,u=[];p<o.length;p++)s=o[p],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&u.push(a[s][0]),a[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);d&&d(t);while(u.length)u.shift()();return r.push.apply(r,l||[]),i()}function i(){for(var e,t=0;t<r.length;t++){for(var i=r[t],n=!0,o=1;o<i.length;o++){var c=i[o];0!==a[c]&&(n=!1)}n&&(r.splice(t--,1),e=s(s.s=i[0]))}return e}var n={},a={recipe_view:0},r=[];function s(t){if(n[t])return n[t].exports;var i=n[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,s),i.l=!0,i.exports}s.m=e,s.c=n,s.d=function(e,t,i){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(i,n,function(t){return e[t]}.bind(null,n));return i},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var d=c;r.push([1,"chunk-vendors"]),i()})({"0671":function(e,t,i){"use strict";i.r(t);i("e260"),i("e6cf"),i("cca6"),i("a79d");var n=i("a026"),a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"app"}},[e.loading?[i("loading-spinner")]:e._e(),e.loading?e._e():i("div",[i("div",{staticClass:"row"},[i("div",{staticClass:"col-12",staticStyle:{"text-align":"center"}},[i("h3",[e._v(e._s(e.recipe.name))])])]),i("div",{staticClass:"my-auto"},[i("div",{staticClass:"col-12",staticStyle:{"text-align":"center"}},[i("i",[e._v(e._s(e.recipe.description))])])]),i("div",{staticStyle:{"text-align":"center"}},[i("keywords",{attrs:{recipe:e.recipe}})],1),i("hr"),i("div",{staticClass:"row"},[i("div",{staticClass:"col col-md-3"},[i("div",{staticClass:"row d-flex",staticStyle:{"padding-left":"16px"}},[e._m(0),i("div",{staticClass:"my-auto",staticStyle:{"padding-right":"4px"}},[i("span",{staticClass:"text-primary"},[i("b",[e._v(e._s(e.$t("Preparation")))])]),i("br"),e._v(" "+e._s(e.recipe.working_time)+" "+e._s(e.$t("min"))+" ")])])]),i("div",{staticClass:"col col-md-3"},[i("div",{staticClass:"row d-flex"},[e._m(1),i("div",{staticClass:"my-auto",staticStyle:{"padding-right":"4px"}},[i("span",{staticClass:"text-primary"},[i("b",[e._v(e._s(e.$t("Waiting")))])]),i("br"),e._v(" "+e._s(e.recipe.waiting_time)+" "+e._s(e.$t("min"))+" ")])])]),i("div",{staticClass:"col col-md-4 col-10"},[i("div",{staticClass:"row d-flex",staticStyle:{"padding-left":"16px"}},[e._m(2),i("div",{staticClass:"my-auto",staticStyle:{"padding-right":"4px"}},[i("input",{directives:[{name:"model",rawName:"v-model.number",value:e.servings,expression:"servings",modifiers:{number:!0}}],staticClass:"form-control form-control-lg",staticStyle:{"text-align":"right","border-width":"0px",border:"none",padding:"0px","padding-left":"0.5vw","padding-right":"8px","max-width":"80px"},attrs:{value:"1",maxlength:"3",min:"0",type:"number"},domProps:{value:e.servings},on:{input:function(t){t.target.composing||(e.servings=e._n(t.target.value))},blur:function(t){return e.$forceUpdate()}}})]),i("div",{staticClass:"my-auto"},[i("b",[""===e.recipe.servings_text?[e._v(e._s(e.$t("Servings")))]:[e._v(e._s(e.recipe.servings_text))]],2)])])]),i("div",{staticClass:"col col-md-2 col-2 my-auto",staticStyle:{"text-align":"right","padding-right":"1vw"}},[i("recipe-context-menu",{attrs:{recipe:e.recipe,servings:e.servings}})],1)]),i("hr"),i("div",{staticClass:"row"},[e.recipe&&e.ingredient_count>0?i("div",{staticClass:"col-md-6 order-md-1 col-sm-12 order-sm-2 col-12 order-2"},[i("div",{staticClass:"card border-primary"},[i("div",{staticClass:"card-body"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col col-md-8"},[i("h4",{staticClass:"card-title"},[i("i",{staticClass:"fas fa-pepper-hot"}),e._v(" "+e._s(e.$t("Ingredients")))])])]),i("br"),i("div",{staticClass:"row"},[i("div",{staticClass:"col-md-12"},[i("table",{staticClass:"table table-sm"},[e._l(e.recipe.steps,(function(t){return[e._l(t.ingredients,(function(t){return[i("Ingredient",{key:t.id,attrs:{ingredient:t,ingredient_factor:e.ingredient_factor},on:{"checked-state-changed":e.updateIngredientCheckedState}})]}))]}))],2)])])])])]):e._e(),i("div",{staticClass:"col-12 order-1 col-sm-12 order-sm-1 col-md-6 order-md-2"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-12"},[null!==e.recipe.image?i("img",{staticClass:"img img-fluid rounded",staticStyle:{"max-height":"30vh"},attrs:{src:e.recipe.image,alt:e.$t("Recipe_Image")}}):e._e()])]),i("div",{staticClass:"row",staticStyle:{"margin-top":"2vh","margin-bottom":"2vh"}},[i("div",{staticClass:"col-12"},[i("Nutrition",{attrs:{recipe:e.recipe,ingredient_factor:e.ingredient_factor}})],1)])])]),e.recipe.internal?e._e():[e.recipe.file_path.includes(".pdf")?i("div",[i("PdfViewer",{attrs:{recipe:e.recipe}})],1):e._e(),e.recipe.file_path.includes(".png")||e.recipe.file_path.includes(".jpg")||e.recipe.file_path.includes(".jpeg")||e.recipe.file_path.includes(".gif")?i("div",[i("ImageViewer",{attrs:{recipe:e.recipe}})],1):e._e()],e._l(e.recipe.steps,(function(t,n){return i("div",{key:t.id,staticStyle:{"margin-top":"1vh"}},[i("Step",{attrs:{recipe:e.recipe,step:t,ingredient_factor:e.ingredient_factor,index:n,start_time:e.start_time},on:{"update-start-time":e.updateStartTime,"checked-state-changed":e.updateIngredientCheckedState}})],1)}))],2),i("add-recipe-to-book",{attrs:{recipe:e.recipe}})],2)},r=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"my-auto",staticStyle:{"padding-right":"4px"}},[i("i",{staticClass:"fas fa-user-clock fa-2x text-primary"})])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"my-auto",staticStyle:{"padding-right":"4px"}},[i("i",{staticClass:"far fa-clock fa-2x text-primary"})])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"my-auto",staticStyle:{"padding-right":"4px"}},[i("i",{staticClass:"fas fa-pizza-slice fa-2x text-primary"})])}],s=i("b85c"),o=i("5f5b"),c=(i("2dd8"),i("7c15")),l=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("hr"),"TEXT"===e.step.type?[e.recipe.steps.length>1?i("div",{staticClass:"row"},[i("div",{staticClass:"col col-md-8"},[i("h5",{staticClass:"text-primary"},[e.step.name?[e._v(e._s(e.step.name))]:[e._v(e._s(e.$t("Step"))+" "+e._s(e.index+1))],0!==e.step.time?i("small",{staticClass:"text-muted",staticStyle:{"margin-left":"4px"}},[i("i",{staticClass:"fas fa-user-clock"}),e._v(" "+e._s(e.step.time)+" "+e._s(e.$t("min"))+" ")]):e._e(),""!==e.start_time?i("small",{staticClass:"d-print-none"},[i("b-link",{attrs:{id:"id_reactive_popover_"+e.step.id,href:"#"},on:{click:e.openPopover}},[e._v(" "+e._s(e.moment(e.start_time).add(e.step.time_offset,"minutes").format("HH:mm"))+" ")])],1):e._e()],2)]),i("div",{staticClass:"col col-md-4",staticStyle:{"text-align":"right"}},[i("b-button",{staticClass:"shadow-none",class:{"text-primary":e.details_visible,"text-success":!e.details_visible},staticStyle:{border:"none",background:"none"},on:{click:function(t){e.details_visible=!e.details_visible}}},[i("i",{staticClass:"far fa-check-circle"})])],1)]):e._e(),i("b-collapse",{attrs:{id:"collapse-1"},model:{value:e.details_visible,callback:function(t){e.details_visible=t},expression:"details_visible"}},[i("div",{staticClass:"row"},[e.step.ingredients.length>0&&e.recipe.steps.length>1?i("div",{staticClass:"col col-md-4"},[i("table",{staticClass:"table table-sm"},[e._l(e.step.ingredients,(function(t){return[i("Ingredient",{key:t.id,attrs:{ingredient:t,ingredient_factor:e.ingredient_factor},on:{"checked-state-changed":function(i){return e.$emit("checked-state-changed",t)}}})]}))],2)]):e._e(),i("div",{staticClass:"col",class:{"col-md-8":e.recipe.steps.length>1,"col-md-12":e.recipe.steps.length<=1}},[i("compile-component",{attrs:{code:e.step.ingredients_markdown,ingredient_factor:e.ingredient_factor}})],1)])])]:e._e(),"TIME"===e.step.type?[i("div",{staticClass:"row"},[i("div",{staticClass:"col-md-8 offset-md-2",staticStyle:{"text-align":"center"}},[i("h4",{staticClass:"text-primary"},[e.step.name?[e._v(e._s(e.step.name))]:[e._v(e._s(e.$t("Step"))+" "+e._s(e.index+1))]],2),0!==e.step.time?i("span",{staticClass:"text-muted",staticStyle:{"margin-left":"4px"}},[i("i",{staticClass:"fa fa-stopwatch"}),e._v(" "+e._s(e.step.time)+" "+e._s(e.$t("min")))]):e._e(),""!==e.start_time?i("b-link",{staticClass:"d-print-none",attrs:{id:"id_reactive_popover_"+e.step.id,href:"#"},on:{click:e.openPopover}},[e._v(" "+e._s(e.moment(e.start_time).add(e.step.time_offset,"minutes").format("HH:mm"))+" ")]):e._e()],1),i("div",{staticClass:"col-md-2",staticStyle:{"text-align":"right"}},[i("b-button",{staticClass:"shadow-none",class:{"text-primary":e.details_visible,"text-success":!e.details_visible},staticStyle:{border:"none",background:"none"},on:{click:function(t){e.details_visible=!e.details_visible}}},[i("i",{staticClass:"far fa-check-circle"})])],1)]),i("b-collapse",{attrs:{id:"collapse-1"},model:{value:e.details_visible,callback:function(t){e.details_visible=t},expression:"details_visible"}},[""!==e.step.instruction?i("div",{staticClass:"row"},[i("div",{staticClass:"col col-md-12",staticStyle:{"text-align":"center"}},[i("compile-component",{attrs:{code:e.step.ingredients_markdown,ingredient_factor:e.ingredient_factor}})],1)]):e._e()])]:e._e(),""!==e.start_time?i("div",[i("b-popover",{ref:"id_reactive_popover_"+e.step.id,attrs:{target:"id_reactive_popover_"+e.step.id,triggers:"click",placement:"bottom",title:e.$t("Step start time")}},[i("div",[i("b-form-group",{staticClass:"mb-1",attrs:{label:"Time","label-for":"popover-input-1","label-cols":"3"}},[i("b-form-input",{attrs:{type:"datetime-local",id:"popover-input-1",size:"sm"},model:{value:e.set_time_input,callback:function(t){e.set_time_input=t},expression:"set_time_input"}})],1)],1),i("div",{staticClass:"row",staticStyle:{"margin-top":"1vh"}},[i("div",{staticClass:"col-12",staticStyle:{"text-align":"right"}},[i("b-button",{staticStyle:{"margin-right":"8px"},attrs:{size:"sm",variant:"secondary"},on:{click:e.closePopover}},[e._v("Cancel")]),i("b-button",{attrs:{size:"sm",variant:"primary"},on:{click:e.updateTime}},[e._v("Ok")])],1)])])],1):e._e()],2)},d=[],p=(i("a9e3"),i("fa7d")),u=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("tr",{on:{click:function(t){return e.$emit("checked-state-changed",e.ingredient)}}},[e.ingredient.is_header?[i("td",{attrs:{colspan:"5"}},[i("b",[e._v(e._s(e.ingredient.note))])])]:[i("td",[e.ingredient.checked?i("i",{staticClass:"far fa-check-circle text-success"}):e._e(),e.ingredient.checked?e._e():i("i",{staticClass:"far fa-check-circle text-primary"})]),i("td",[0!==e.ingredient.amount?i("span",{domProps:{innerHTML:e._s(e.calculateAmount(e.ingredient.amount))}}):e._e()]),i("td",[null===e.ingredient.unit||e.ingredient.no_amount?e._e():i("span",[e._v(e._s(e.ingredient.unit.name))])]),i("td",[null!==e.ingredient.food?[null!==e.ingredient.food.recipe?i("a",{attrs:{href:e.resolveDjangoUrl("view_recipe",e.ingredient.food.recipe),target:"_blank",rel:"noopener noreferrer"}},[e._v(e._s(e.ingredient.food.name))]):e._e(),null===e.ingredient.food.recipe?i("span",[e._v(e._s(e.ingredient.food.name))]):e._e()]:e._e()],2),i("td",[e.ingredient.note?i("div",[i("span",{directives:[{name:"b-popover",rawName:"v-b-popover.hover",value:e.ingredient.note,expression:"ingredient.note",modifiers:{hover:!0}}],staticClass:"d-print-none"},[i("i",{staticClass:"far fa-comment"})]),i("div",{staticClass:"d-none d-print-block"},[i("i",{staticClass:"far fa-comment-alt"}),e._v(" "+e._s(e.ingredient.note)+" ")])]):e._e()])]],2)},f=[],_={name:"Ingredient",props:{ingredient:Object,ingredient_factor:{type:Number,default:1}},mixins:[p["b"]],data:function(){return{checked:!1}},methods:{calculateAmount:function(e){return Object(p["d"])(e,this.ingredient_factor)}}},m=_,g=i("2877"),v=Object(g["a"])(m,u,f,!1,null,null,null),b=v.exports,h=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i(e.compiled,{tag:"component",attrs:{ingredient_factor:e.ingredient_factor,code:e.code}})],1)},j=[],k=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("span",{domProps:{innerHTML:e._s(e.calculateAmount(e.number))}})},C=[],y={name:"ScalableNumber",props:{number:Number,factor:{type:Number,default:4}},methods:{calculateAmount:function(e){return Object(p["d"])(e,this.factor)}}},w=y,S=Object(g["a"])(w,k,C,!1,null,null,null),x=S.exports,O={name:"CompileComponent",props:["code","ingredient_factor"],data:function(){return{compiled:null}},mounted:function(){this.compiled=n["default"].component("compiled-component",{props:["ingredient_factor","code"],components:{ScalableNumber:x},template:"<div>".concat(this.code,"</div>")})}},E=O,R=Object(g["a"])(E,h,j,!1,null,null,null),I=R.exports,$=i("c1df"),P=i.n($);n["default"].prototype.moment=P.a;var A={name:"Step",mixins:[p["a"]],components:{Ingredient:b,CompileComponent:I},props:{step:Object,ingredient_factor:Number,index:Number,recipe:Object,start_time:String},data:function(){return{details_visible:!0,set_time_input:""}},mounted:function(){this.set_time_input=P()(this.start_time).add(this.step.time_offset,"minutes").format("yyyy-MM-DDTHH:mm")},methods:{calculateAmount:function(e){return Object(p["d"])(e,this.ingredient_factor)},updateTime:function(){var e=P()(this.set_time_input).add(-1*this.step.time_offset,"minutes").format("yyyy-MM-DDTHH:mm");this.$emit("update-start-time",e),this.closePopover()},closePopover:function(){this.$refs["id_reactive_popover_".concat(this.step.id)].$emit("close")},openPopover:function(){this.$refs["id_reactive_popover_".concat(this.step.id)].$emit("open")}}},N=A,z=Object(g["a"])(N,l,d,!1,null,null,null),B=z.exports,L=i("fc0d"),D=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("iframe",{staticStyle:{border:"none"},attrs:{src:e.pdfUrl,width:"100%",height:"700px"}})])},M=[],T={name:"PdfViewer",mixins:[p["b"]],props:{recipe:Object},computed:{pdfUrl:function(){return"/static/pdfjs/viewer.html?file="+Object(p["g"])("api_get_recipe_file",this.recipe.id)}}},U=T,V=Object(g["a"])(U,D,M,!1,null,null,null),H=V.exports,K=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticStyle:{"text-align":"center"}},[i("b-img",{attrs:{src:e.pdfUrl,alt:e.$t("External_Recipe_Image")}})],1)},F=[],Z={name:"ImageViewer",props:{recipe:Object},computed:{pdfUrl:function(){return Object(p["g"])("api_get_recipe_file",this.recipe.id)}}},W=Z,J=Object(g["a"])(W,K,F,!1,null,null,null),q=J.exports,G=function(){var e=this,t=e.$createElement,i=e._self._c||t;return null!==e.recipe.nutrition?i("div",[i("div",{staticClass:"card border-success"},[i("div",{staticClass:"card-body"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-12"},[i("h4",{staticClass:"card-title"},[i("i",{staticClass:"fas fa-carrot"}),e._v(" "+e._s(e.$t("Nutrition")))])])]),i("div",{staticClass:"row"},[i("div",{staticClass:"col-6"},[i("i",{staticClass:"fas fa-fire fa-fw text-primary"}),e._v(" "+e._s(e.$t("Calories"))+" ")]),i("div",{staticClass:"col-6"},[i("span",{domProps:{innerHTML:e._s(e.calculateAmount(e.recipe.nutrition.calories))}}),e._v(" kcal ")])]),i("div",{staticClass:"row"},[i("div",{staticClass:"col-6"},[i("i",{staticClass:"fas fa-bread-slice fa-fw text-primary"}),e._v(" "+e._s(e.$t("Carbohydrates"))+" ")]),i("div",{staticClass:"col-6"},[i("span",{domProps:{innerHTML:e._s(e.calculateAmount(e.recipe.nutrition.carbohydrates))}}),e._v(" g ")])]),i("div",{staticClass:"row"},[i("div",{staticClass:"col-6"},[i("i",{staticClass:"fas fa-cheese fa-fw text-primary"}),e._v(" "+e._s(e.$t("Fats"))+" ")]),i("div",{staticClass:"col-6"},[i("span",{domProps:{innerHTML:e._s(e.calculateAmount(e.recipe.nutrition.fats))}}),e._v(" g ")])]),i("div",{staticClass:"row"},[i("div",{staticClass:"col-6"},[i("i",{staticClass:"fas fa-drumstick-bite fa-fw text-primary"}),e._v(" "+e._s(e.$t("Proteins"))+" ")]),i("div",{staticClass:"col-6"},[i("span",{domProps:{innerHTML:e._s(e.calculateAmount(e.recipe.nutrition.proteins))}}),e._v(" g ")])])])])]):e._e()},X=[],Q={name:"Nutrition",props:{recipe:Object,ingredient_factor:Number},methods:{calculateAmount:function(e){return Object(p["d"])(e,this.ingredient_factor)}}},Y=Q,ee=Object(g["a"])(Y,G,X,!1,null,null,null),te=ee.exports,ie=i("81d5"),ne=i("d76c"),ae=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("b-modal",{staticClass:"modal",attrs:{id:"id_modal_add_book",title:e.$t("Add_to_Book"),"ok-title":e.$t("Add"),"cancel-title":e.$t("Close")},on:{ok:function(t){return e.addToBook()}}},[i("multiselect",{attrs:{options:e.books,"preserve-search":!0,placeholder:e.$t("Select_Book"),label:"name","track-by":"id",id:"id_books",multiple:!1},on:{"search-change":e.loadBook},model:{value:e.selected_book,callback:function(t){e.selected_book=t},expression:"selected_book"}})],1)],1)},re=[],se=i("8e5f"),oe=i.n(se);n["default"].prototype.moment=P.a,n["default"].use(o["a"]);var ce={name:"AddRecipeToBook",components:{Multiselect:oe.a},props:{recipe:Object},data:function(){return{books:[],selected_book:null}},mounted:function(){this.loadBook("")},methods:{loadBook:function(e){var t=this;Object(c["b"])(e).then((function(e){t.books=e}))},addToBook:function(){Object(c["a"])({recipe:this.recipe.id,book:this.selected_book.id})}}},le=ce,de=(i("60bc"),Object(g["a"])(le,ae,re,!1,null,null,null)),pe=de.exports;n["default"].prototype.moment=P.a,n["default"].use(o["a"]);var ue={name:"RecipeView",mixins:[p["b"],p["c"]],components:{PdfViewer:H,ImageViewer:q,Ingredient:b,Step:B,RecipeContextMenu:L["a"],Nutrition:te,Keywords:ie["a"],LoadingSpinner:ne["a"],AddRecipeToBook:pe},computed:{ingredient_factor:function(){return this.servings/this.recipe.servings}},data:function(){return{loading:!0,recipe:void 0,ingredient_count:0,servings:1,start_time:""}},mounted:function(){this.loadRecipe(window.RECIPE_ID)},methods:{loadRecipe:function(e){var t=this;Object(c["c"])(e).then((function(e){0!==window.USER_SERVINGS&&(e.servings=window.USER_SERVINGS),t.servings=e.servings;var i,n=0,a=Object(s["a"])(e.steps);try{for(a.s();!(i=a.n()).done;){var r=i.value;t.ingredient_count+=r.ingredients.length;var o,c=Object(s["a"])(r.ingredients);try{for(c.s();!(o=c.n()).done;){var l=o.value;t.$set(l,"checked",!1)}}catch(d){c.e(d)}finally{c.f()}r.time_offset=n,n+=r.time}}catch(d){a.e(d)}finally{a.f()}n>0&&(t.start_time=P()().format("yyyy-MM-DDTHH:mm")),t.recipe=e,t.loading=!1}))},updateStartTime:function(e){this.start_time=e},updateIngredientCheckedState:function(e){var t,i=Object(s["a"])(this.recipe.steps);try{for(i.s();!(t=i.n()).done;){var n,a=t.value,r=Object(s["a"])(a.ingredients);try{for(r.s();!(n=r.n()).done;){var o=n.value;o.id===e.id&&this.$set(o,"checked",!o.checked)}}catch(c){r.e(c)}finally{r.f()}}}catch(c){i.e(c)}finally{i.f()}}}},fe=ue,_e=Object(g["a"])(fe,a,r,!1,null,null,null),me=_e.exports,ge=i("9225");n["default"].config.productionTip=!1,new n["default"]({i18n:ge["a"],render:function(e){return e(me)}}).$mount("#app")},1:function(e,t,i){e.exports=i("0671")},4678:function(e,t,i){var n={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf755","./tlh.js":"cf755","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function a(e){var t=r(e);return i(t)}function r(e){if(!i.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}a.keys=function(){return Object.keys(n)},a.resolve=r,e.exports=a,a.id="4678"},"49f8":function(e,t,i){var n={"./de.json":"6ce2","./en.json":"edd4","./nl.json":"a625","./sv.json":"4c5b"};function a(e){var t=r(e);return i(t)}function r(e){if(!i.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}a.keys=function(){return Object.keys(n)},a.resolve=r,e.exports=a,a.id="49f8"},"4c5b":function(e){e.exports=JSON.parse('{"import_running":"Import pågår, var god vänta!","all_fields_optional":"Alla rutor är valfria och kan lämnas tomma.","convert_internal":"Konvertera till internt recept","Log_Recipe_Cooking":"Logga tillagningen av receptet","External_Recipe_Image":"Externt receptbild","Add_to_Book":"Lägg till i kokbok","Add_to_Shopping":"Lägg till i handelslista","Add_to_Plan":"Lägg till i matsedel","Step_start_time":"Steg starttid","Select_Book":"Välj kokbok","Recipe_Image":"Receptbild","Import_finished":"Importering klar","View_Recipes":"Visa recept","Log_Cooking":"Logga tillagning","Proteins":"Protein","Fats":"Fett","Carbohydrates":"Kolhydrater","Calories":"Kalorier","Nutrition":"Näringsinnehåll","Date":"Datum","Share":"Dela","Export":"Exportera","Rating":"Betyg","Close":"Stäng","Add":"Lägg till","Ingredients":"Ingredienser","min":"min","Servings":"Portioner","Waiting":"Väntan","Preparation":"Förberedelse","Edit":"Redigera","Open":"Öppna","Save":"Spara","Step":"Steg","Search":"Sök","Import":"Importera","Print":"Skriv ut","Information":"Information"}')},"6ce2":function(e){e.exports=JSON.parse('{"Import":"Import","import_running":"Import läuft, bitte warten!","Import_finished":"Import fertig","View_Recipes":"Rezepte Ansehen","Information":"Information","all_fields_optional":"Alle Felder sind optional und können leer gelassen werden.","convert_internal":"Zu internem Rezept wandeln","Log_Recipe_Cooking":"Kochen protokollieren","External_Recipe_Image":"Externes Rezept Bild","Add_to_Book":"Zu Buch hinzufügen","Add_to_Shopping":"Zu Einkaufsliste hinzufügen","Add_to_Plan":"Zu Plan hinzufügen","Step_start_time":"Schritt Startzeit","Select_Book":"Buch wählen","Recipe_Image":"Rezept Bild","Log_Cooking":"Kochen protokollieren","Proteins":"Proteine","Fats":"Fette","Carbohydrates":"Kohlenhydrate","Calories":"Kalorien","Nutrition":"Nährwerte","Keywords":"Stichwörter","Books":"Bücher","show_only_internal":"Nur interne Rezepte anzeigen","Ingredients":"Zutaten","min":"Min","Servings":"Portionen","Waiting":"Wartezeit","Preparation":"Zubereitung","Edit":"Bearbeiten","Open":"Öffnen","Save":"Speichern","Step":"Schritt","Search":"Suchen","Print":"Drucken","New_Recipe":"Neues Rezept","Url_Import":"URL Import","Reset_Search":"Suche zurücksetzen","or":"oder","and":"und","Recently_Viewed":"Kürzlich angesehen","External":"Extern","Settings":"Einstellungen","Meal_Plan":"Speiseplan","Date":"Datum","Share":"Teilen","Export":"Exportieren","Rating":"Bewertung","Close":"Schließen","Add":"Hinzufügen"}')},"7c15":function(e,t,i){"use strict";i.d(t,"c",(function(){return s})),i.d(t,"d",(function(){return o})),i.d(t,"b",(function(){return c})),i.d(t,"a",(function(){return l}));var n=i("bc3a"),a=i.n(n),r=i("fa7d");function s(e){var t=Object(r["g"])("api:recipe-detail",e);return void 0!==window.SHARE_UID&&(t+="?share="+window.SHARE_UID),a.a.get(t).then((function(e){return e.data})).catch((function(e){d(e,"There was an error loading a resource!","danger")}))}function o(e){return a.a.post(Object(r["g"])("api:cooklog-list"),e).then((function(e){Object(r["f"])("Saved","Cook Log entry saved!","success")})).catch((function(e){d(e,"There was an error creating a resource!","danger")}))}function c(e){return a.a.get(Object(r["g"])("api:recipebook-list")+"?query="+e).then((function(e){return e.data})).catch((function(e){}))}function l(e){return a.a.post(Object(r["g"])("api:recipebookentry-list"),e).then((function(e){Object(r["f"])("Saved","Recipe Book entry saved!","success")})).catch((function(e){d(e,"There was an error creating a resource!","danger")}))}function d(e,t){if("response"in e){console.log(e.response);var i="statusText"in e.response?e.response.statusText:Object(r["e"])("Error");t+="\n\n"+JSON.stringify(e.response.data),Object(r["f"])(i,t,"danger")}else Object(r["f"])("Error",t,"danger"),console.log(e)}a.a.defaults.xsrfCookieName="csrftoken",a.a.defaults.xsrfHeaderName="X-CSRFTOKEN"},"81d5":function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return e.recipe.keywords.length>0?i("div",e._l(e.recipe.keywords,(function(t){return i("small",{key:t.id,staticStyle:{padding:"2px"}},[i("b-badge",{attrs:{pill:"",variant:"light"}},[e._v(e._s(t.label))])],1)})),0):e._e()},a=[],r={name:"Keywords",props:{recipe:Object}},s=r,o=i("2877"),c=Object(o["a"])(s,n,a,!1,null,null,null);t["a"]=c.exports},9225:function(e,t,i){"use strict";i("159b"),i("d3b7"),i("ddb0"),i("ac1f"),i("466d");var n=i("a026"),a=i("a925");function r(){var e=i("49f8"),t={};return e.keys().forEach((function(i){var n=i.match(/([A-Za-z0-9-_]+)\./i);if(n&&n.length>1){var a=n[1];t[a]=e(i)}})),t}n["default"].use(a["a"]),t["a"]=new a["a"]({locale:Object({NODE_ENV:"production",BASE_URL:""}).VUE_APP_I18N_LOCALE||"en",fallbackLocale:Object({NODE_ENV:"production",BASE_URL:""}).VUE_APP_I18N_FALLBACK_LOCALE||"en",messages:r()})},a625:function(e){e.exports=JSON.parse('{"import_running":"Er wordt geïmporteerd, even geduld!","all_fields_optional":"Alle velden zijn optioneel en kunnen leeg gelaten worden.","convert_internal":"Zet om naar intern recept","Log_Recipe_Cooking":"Log Bereiding","External_Recipe_Image":"Externe Afbeelding Recept","Add_to_Book":"Voeg toe aan Boek","Add_to_Shopping":"Voeg toe aan Boodschappenlijst","Add_to_Plan":"Voeg toe aan Plan","Step_start_time":"Starttijd stap","Select_Book":"Selecteer Boek","Recipe_Image":"Afbeelding Recept","Import_finished":"Importeren gereed","View_Recipes":"Bekijk Recepten","Log_Cooking":"Log Bereiding","Proteins":"Eiwitten","Fats":"Vetten","Carbohydrates":"Koolhydraten","Calories":"Calorieën","Nutrition":"Voedingswaarde","Date":"Datum","Share":"Deel","Export":"Exporteren","Rating":"Beoordeling","Close":"Sluiten","Add":"Voeg toe","Ingredients":"Ingrediënten","min":"min","Servings":"Porties","Waiting":"Wachten","Preparation":"Bereiding","Edit":"Bewerken","Open":"Open","Save":"Opslaan","Step":"Stap","Search":"Zoeken","Import":"Importeer","Print":"Afdrukken","Information":"Informatie","Keywords":"Etiketten","Books":"Boeken","show_only_internal":"Toon alleen interne recepten","New_Recipe":"Nieuw Recept","Url_Import":"Importeer URL","Reset_Search":"Zoeken resetten","or":"of","and":"en","Recently_Viewed":"Recent bekeken","External":"Externe","Settings":"Instellingen","Meal_Plan":"Maaltijdplan","New":"Nieuw"}')},d76c:function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},a=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"row"},[i("div",{staticClass:"col",staticStyle:{"text-align":"center"}},[i("i",{staticClass:"fas fa-spinner fa-spin fa-10x"})])])}],r={name:"LoadingSpinner",props:{recipe:Object}},s=r,o=i("2877"),c=Object(o["a"])(s,n,a,!1,null,null,null);t["a"]=c.exports},edd4:function(e){e.exports=JSON.parse('{"import_running":"Import running, please wait!","all_fields_optional":"All fields are optional and can be left empty.","convert_internal":"Convert to internal recipe","show_only_internal":"Show only internal recipes","Log_Recipe_Cooking":"Log Recipe Cooking","External_Recipe_Image":"External Recipe Image","Add_to_Book":"Add to Book","Add_to_Shopping":"Add to Shopping","Add_to_Plan":"Add to Plan","Step_start_time":"Step start time","Meal_Plan":"Meal Plan","Select_Book":"Select Book","Recipe_Image":"Recipe Image","Import_finished":"Import finished","View_Recipes":"View Recipes","Log_Cooking":"Log Cooking","New_Recipe":"New Recipe","Url_Import":"Url Import","Reset_Search":"Reset Search","Recently_Viewed":"Recently Viewed","Keywords":"Keywords","Books":"Books","Proteins":"Proteins","Fats":"Fats","Carbohydrates":"Carbohydrates","Calories":"Calories","Nutrition":"Nutrition","Date":"Date","Share":"Share","Export":"Export","Rating":"Rating","Close":"Close","Add":"Add","New":"New","Ingredients":"Ingredients","min":"min","Servings":"Servings","Waiting":"Waiting","Preparation":"Preparation","External":"External","Edit":"Edit","Open":"Open","Save":"Save","Step":"Step","Search":"Search","Import":"Import","Print":"Print","Settings":"Settings","or":"or","and":"and","Information":"Information","Advanced Search Settings":"Advanced Search Settings"}')},fa7d:function(e,t,i){"use strict";i.d(t,"c",(function(){return r})),i.d(t,"f",(function(){return s})),i.d(t,"a",(function(){return o})),i.d(t,"e",(function(){return c})),i.d(t,"b",(function(){return l})),i.d(t,"g",(function(){return d})),i.d(t,"d",(function(){return u}));i("99af");var n=i("59e4");function a(e,t,i){var n=Math.floor(e),a=1,r=n+1,s=1;if(e!==n)while(a<=t&&s<=t){var o=(n+r)/(a+s);if(e===o){a+s<=t?(a+=s,n+=r,s=t+1):a>s?s=t+1:a=t+1;break}e<o?(r=n+r,s=a+s):(n+=r,a+=s)}if(a>t&&(a=s,n=r),!i)return[0,n,a];var c=Math.floor(n/a);return[c,n-c*a,a]}var r={methods:{makeToast:function(e,t){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return s(e,t,i)}}};function s(e,t){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,a=new n["a"];a.$bvToast.toast(t,{title:e,variant:i,toaster:"b-toaster-top-center",solid:!0})}var o={methods:{_:function(e){return c(e)}}};function c(e){return window.gettext(e)}var l={methods:{resolveDjangoUrl:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return d(e,t)}}};function d(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return null!==t?window.Urls[e](t):window.Urls[e]()}function p(e){return window.USER_PREF[e]}function u(e,t){if(p("use_fractions")){var i="",n=a(e*t,9,!0);return n[0]>0&&(i+=n[0]),n[1]>0&&(i+=" <sup>".concat(n[1],"</sup>&frasl;<sub>").concat(n[2],"</sub>")),i}return f(e*t)}function f(e){var t=p("user_fractions")?p("user_fractions"):2;return+(Math.round(e+"e+".concat(t))+"e-".concat(t))}},fc0d:function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("div",{staticClass:"dropdown"},[e._m(0),i("div",{staticClass:"dropdown-menu dropdown-menu-right",attrs:{"aria-labelledby":"dropdownMenuLink"}},[i("a",{staticClass:"dropdown-item",attrs:{href:e.resolveDjangoUrl("edit_recipe",e.recipe.id)}},[i("i",{staticClass:"fas fa-pencil-alt fa-fw"}),e._v(" "+e._s(e.$t("Edit")))]),e.recipe.internal?e._e():i("a",{staticClass:"dropdown-item",attrs:{href:e.resolveDjangoUrl("edit_convert_recipe",e.recipe.id)}},[i("i",{staticClass:"fas fa-exchange-alt fa-fw"}),e._v(" "+e._s(e.$t("convert_internal")))]),i("button",{staticClass:"dropdown-item",on:{click:function(t){return e.$bvModal.show("id_modal_add_book")}}},[i("i",{staticClass:"fas fa-bookmark fa-fw"}),e._v(" "+e._s(e.$t("Add_to_Book"))+" ")]),e.recipe.internal?i("a",{staticClass:"dropdown-item",attrs:{href:e.resolveDjangoUrl("view_shopping")+"?r=["+e.recipe.id+","+e.servings_value+"]",target:"_blank",rel:"noopener noreferrer"}},[i("i",{staticClass:"fas fa-shopping-cart fa-fw"}),e._v(" "+e._s(e.$t("Add_to_Shopping"))+" ")]):e._e(),i("a",{staticClass:"dropdown-item",attrs:{href:e.resolveDjangoUrl("new_meal_plan")+"?recipe="+e.recipe.id,target:"_blank",rel:"noopener noreferrer"}},[i("i",{staticClass:"fas fa-calendar fa-fw"}),e._v(" "+e._s(e.$t("Add_to_Plan"))+" ")]),i("button",{staticClass:"dropdown-item",on:{click:function(t){return e.$bvModal.show("id_modal_cook_log")}}},[i("i",{staticClass:"fas fa-clipboard-list fa-fw"}),e._v(" "+e._s(e.$t("Log_Cooking"))+" ")]),i("button",{staticClass:"dropdown-item",attrs:{onclick:"window.print()"}},[i("i",{staticClass:"fas fa-print fa-fw"}),e._v(" "+e._s(e.$t("Print"))+" ")]),i("a",{staticClass:"dropdown-item",attrs:{href:e.resolveDjangoUrl("view_export")+"?r="+e.recipe.id,target:"_blank",rel:"noopener noreferrer"}},[i("i",{staticClass:"fas fa-file-export fa-fw"}),e._v(" "+e._s(e.$t("Export")))]),e.recipe.internal?i("a",{staticClass:"dropdown-item",attrs:{href:e.resolveDjangoUrl("new_share_link",e.recipe.id),target:"_blank",rel:"noopener noreferrer"}},[i("i",{staticClass:"fas fa-share-alt fa-fw"}),e._v(" "+e._s(e.$t("Share")))]):e._e()])]),i("cook-log",{attrs:{recipe:e.recipe}})],1)},a=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("a",{staticClass:"btn shadow-none",attrs:{href:"#",role:"button",id:"dropdownMenuLink","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[i("i",{staticClass:"fas fa-ellipsis-v"})])}],r=(i("a9e3"),i("fa7d")),s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("b-modal",{staticClass:"modal",attrs:{id:"id_modal_cook_log",title:e.$t("Log_Recipe_Cooking"),"ok-title":e.$t("Save"),"cancel-title":e.$t("Close")},on:{ok:function(t){return e.logCook()}}},[i("p",[e._v(e._s(e.$t("all_fields_optional")))]),i("form",[i("label",{attrs:{for:"id_log_servings"}},[e._v(e._s(e.$t("Servings")))]),i("input",{directives:[{name:"model",rawName:"v-model",value:e.logObject.servings,expression:"logObject.servings"}],staticClass:"form-control",attrs:{type:"number",id:"id_log_servings"},domProps:{value:e.logObject.servings},on:{input:function(t){t.target.composing||e.$set(e.logObject,"servings",t.target.value)}}}),i("label",{staticStyle:{"margin-top":"2vh"}},[e._v(e._s(e.$t("Rating"))+" - "),i("span",{attrs:{id:"id_rating_show"}},[e._v(e._s(e.logObject.rating)+"/5")])]),i("b-form-rating",{model:{value:e.logObject.rating,callback:function(t){e.$set(e.logObject,"rating",t)},expression:"logObject.rating"}}),i("label",{staticStyle:{"margin-top":"2vh"},attrs:{for:"id_date"}},[e._v(e._s(e.$t("Date")))]),i("input",{directives:[{name:"model",rawName:"v-model",value:e.logObject.created_at,expression:"logObject.created_at"}],staticClass:"form-control",attrs:{type:"datetime-local",id:"id_date"},domProps:{value:e.logObject.created_at},on:{input:function(t){t.target.composing||e.$set(e.logObject,"created_at",t.target.value)}}})],1)])],1)},o=[],c=i("c1df"),l=i.n(c),d=i("a026"),p=i("5f5b"),u=i("7c15");d["default"].prototype.moment=l.a,d["default"].use(p["a"]);var f={name:"CookLog",props:{recipe:Object},data:function(){return{logObject:{recipe:this.recipe.id,servings:0,rating:0,created_at:l()().format("yyyy-MM-DDTHH:mm")}}},methods:{logCook:function(){Object(u["d"])(this.logObject)}}},_=f,m=i("2877"),g=Object(m["a"])(_,s,o,!1,null,null,null),v=g.exports,b={name:"RecipeContextMenu",mixins:[r["b"]],components:{CookLog:v},data:function(){return{servings_value:0}},props:{recipe:Object,servings:{type:Number,default:-1}},mounted:function(){this.servings_value=-1===this.servings?this.recipe.servings:this.servings}},h=b,j=Object(m["a"])(h,n,a,!1,null,null,null);t["a"]=j.exports}});