(function(t){function e(e){for(var n,c,i=e[0],u=e[1],d=e[2],s=0,p=[];s<i.length;s++)c=i[s],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&p.push(r[c][0]),r[c]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(t[n]=u[n]);l&&l(e);while(p.length)p.shift()();return a.push.apply(a,d||[]),o()}function o(){for(var t,e=0;e<a.length;e++){for(var o=a[e],n=!0,c=1;c<o.length;c++){var u=o[c];0!==r[u]&&(n=!1)}n&&(a.splice(e--,1),t=i(i.s=o[0]))}return t}var n={},r={app:0},a=[];function c(t){return i.p+"js/"+({about:"about"}[t]||t)+"."+{about:"a07fc062"}[t]+".js"}function i(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.e=function(t){var e=[],o=r[t];if(0!==o)if(o)e.push(o[2]);else{var n=new Promise((function(e,n){o=r[t]=[e,n]}));e.push(o[2]=n);var a,u=document.createElement("script");u.charset="utf-8",u.timeout=120,i.nc&&u.setAttribute("nonce",i.nc),u.src=c(t);var d=new Error;a=function(e){u.onerror=u.onload=null,clearTimeout(s);var o=r[t];if(0!==o){if(o){var n=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+n+": "+a+")",d.name="ChunkLoadError",d.type=n,d.request=a,o[1](d)}r[t]=void 0}};var s=setTimeout((function(){a({type:"timeout",target:u})}),12e4);u.onerror=u.onload=a,document.head.appendChild(u)}return Promise.all(e)},i.m=t,i.c=n,i.d=function(t,e,o){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(o,n,function(e){return t[e]}.bind(null,n));return o},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/",i.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],d=u.push.bind(u);u.push=e,u=u.slice();for(var s=0;s<u.length;s++)e(u[s]);var l=d;a.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"034f":function(t,e,o){"use strict";var n=o("85ec"),r=o.n(n);r.a},"0512":function(t,e,o){"use strict";var n=o("70f7"),r=o.n(n);r.a},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("2b0e"),r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("Header"),o("router-view")],1)},a=[],c=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("header",{staticClass:"header"},[o("h1",[t._v("TodoList")]),o("div",{attrs:{id:"nav"}},[o("router-link",{attrs:{to:"/"}},[t._v("Home")]),t._v("| "),o("router-link",{attrs:{to:"/about"}},[t._v("About")])],1)])},i=[],u={name:"Header"},d=u,s=(o("0512"),o("2877")),l=Object(s["a"])(d,c,i,!1,null,"70b7374a",null),p=l.exports,f={name:"App",components:{Header:p}},m=f,h=(o("034f"),Object(s["a"])(m,r,a,!1,null,null,null)),v=h.exports,b=(o("d3b7"),o("8c4f")),g=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("AddTodo",{on:{"add-todo":t.addTodo}}),o("Todos",{attrs:{todos:t.todos},on:{"del-todo":t.delTodo}})],1)},y=[],_=(o("4de4"),function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container"},t._l(t.todos,(function(e){return o("div",{key:e.id},[o("TodoItem",{attrs:{todo:e},on:{"del-todo":function(o){return t.$emit("del-todo",e.id)}}})],1)})),0)}),T=[],j=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"todo-item",class:{"is-complete":t.todo.completed}},[o("p",[o("input",{attrs:{type:"checkbox"},domProps:{checked:1==t.todo.completed},on:{change:t.status}}),t._v(" "+t._s(t.todo.title)+" "),o("button",{staticClass:"del",on:{click:function(e){return t.$emit("del-todo",t.todo.id)}}},[t._v("x")])])])},w=[],O={name:"TodoIteam",props:["todo"],methods:{status:function(){this.todo.completed=!this.todo.completed}}},x=O,k=(o("cee4"),Object(s["a"])(x,j,w,!1,null,"308d60fd",null)),P=k.exports,$={name:"Todos",components:{TodoItem:P},props:["todos"]},E=$,A=Object(s["a"])(E,_,T,!1,null,null,null),C=A.exports,H=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("form",{on:{submit:function(e){return e.preventDefault(),t.addTodo(e)}}},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],attrs:{type:"text",name:"addtodo",placeholder:"Add Todo ...."},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}}),o("input",{staticClass:"btn",attrs:{type:"submit",value:"submit"}})])])},S=[],M={name:"AddTodo",data:function(){return{title:""}},methods:{addTodo:function(){var t={title:this.title,completed:!1};this.title="",this.$emit("add-todo",t)}}},I=M,L=(o("d54d"),Object(s["a"])(I,H,S,!1,null,"0cf1f39d",null)),J=L.exports,q=o("bc3a"),D=o.n(q),N={name:"Home",components:{Todos:C,AddTodo:J},data:function(){return{todos:[]}},methods:{delTodo:function(t){D.a.delete("https://jsonplaceholder.typicode.com/todos/".concat(t)).then(this.todos=this.todos.filter((function(e){return e.id!=t}))).catch((function(t){return console.log(t)}))},addTodo:function(t){var e=this,o=t.title,n=t.completed;D.a.post("https://jsonplaceholder.typicode.com/todos",{title:o,completed:n}).then((function(t){return e.todos.push(t.data)})).catch((function(t){return console.log(t)})),console.log(this.todos)}},created:function(){var t=this;console.log("hello"),D.a.get("https://jsonplaceholder.typicode.com/todos?_limit=10").then((function(e){t.todos=e.data,console.log(e.data)})).catch((function(t){return console.log(t)}))}},z=N,B=(o("cccb"),Object(s["a"])(z,g,y,!1,null,null,null)),F=B.exports;n["a"].use(b["a"]);var G=[{path:"/",name:"Home",component:F},{path:"/about",name:"About",component:function(){return o.e("about").then(o.bind(null,"f820"))}}],K=new b["a"]({mode:"history",base:"/",routes:G}),Q=K;n["a"].config.productionTip=!1,new n["a"]({router:Q,render:function(t){return t(v)}}).$mount("#app")},"5ced":function(t,e,o){},"70f7":function(t,e,o){},"85ec":function(t,e,o){},a0c0:function(t,e,o){},cccb:function(t,e,o){"use strict";var n=o("5ced"),r=o.n(n);r.a},cee4:function(t,e,o){"use strict";var n=o("a0c0"),r=o.n(n);r.a},d172:function(t,e,o){},d54d:function(t,e,o){"use strict";var n=o("d172"),r=o.n(n);r.a}});
//# sourceMappingURL=app.132e0b3c.js.map