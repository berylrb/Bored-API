webpackJsonp([2],{"5r78":function(t,n){},"VN/9":function(t,n){},wDQo:function(t,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=a("v4YQ"),o=a("xa4f"),i={render:function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"info"},[a("div",{staticClass:"info-about"},[a("i",{staticClass:"fas fa-info-circle"}),t._v(" "),a("h6",[t._v("Find out more "),a("router-link",{attrs:{to:{name:"About",params:{}}}},[t._v("about")]),t._v(" this project")],1)]),t._v(" "),a("div",{staticClass:"info-documentation"},[a("i",{staticClass:"fas fa-book"}),t._v(" "),a("h6",[t._v("Check out the "),a("router-link",{attrs:{to:{name:"Documentation",params:{}}}},[t._v("documentation")])],1)])])},staticRenderFns:[]};var s=a("VU/8")({name:"Info",data:function(){return{}},methods:{}},i,!1,function(t){a("VN/9")},"data-v-345c1a8c",null).exports,r=a("yrbm"),c={name:"Home",components:{Topbar:e.a,Intro:o.a,Info:s,Bottombar:r.a},data:function(){return{endpoint:"activity/",response:""}},methods:{query:function(t){var n=this;this.$http.get("/api/"+t).then(function(t){n.response=t.body})}},mounted:function(){this.query(this.endpoint)}},v={render:function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"home container-fluid"},[a("div",{staticClass:"topbar-div"},[a("Topbar")],1),t._v(" "),a("div",{staticClass:"intro-div"},[a("Intro",{attrs:{home:""}})],1),t._v(" "),a("div",{staticClass:"info-div"},[a("Info")],1),t._v(" "),a("div",{staticClass:"content"},[a("h1",[t._v("Try it out")]),t._v(" "),a("div",{staticClass:"search"},[a("span",[t._v("https://boredapi.com/api/")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.endpoint,expression:"endpoint"}],attrs:{type:"text"},domProps:{value:t.endpoint},on:{input:function(n){n.target.composing||(t.endpoint=n.target.value)}}}),t._v(" "),a("button",{on:{click:function(n){t.query(t.endpoint)}}},[t._v("Submit")])]),t._v(" "),a("div",{staticClass:"well"},[a("pre",[t._v(t._s(t.response))])])]),t._v(" "),a("div",{staticClass:"bottombar-div"},[a("Bottombar")],1)])},staticRenderFns:[]};var u=a("VU/8")(c,v,!1,function(t){a("5r78")},"data-v-39098768",null);n.default=u.exports}});
//# sourceMappingURL=2.13534149b436acc4690b.js.map