(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[24],{381:function(e,t){t.lookup=t.resolve4=t.resolve6=t.resolveCname=t.resolveMx=t.resolveNs=t.resolveTxt=t.resolveSrv=t.resolveNaptr=t.reverse=t.resolve=function(){if(arguments.length){var e=arguments[arguments.length-1];e&&"function"===typeof e&&e(null,"0.0.0.0")}}},52:function(e,t){var n,r,a=e.exports={};function l(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function o(e){if(n===setTimeout)return setTimeout(e,0);if((n===l||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"===typeof setTimeout?setTimeout:l}catch(e){n=l}try{r="function"===typeof clearTimeout?clearTimeout:s}catch(e){r=s}}();var c,i=[],u=!1,m=-1;function f(){u&&c&&(u=!1,c.length?i=c.concat(i):m=-1,i.length&&p())}function p(){if(!u){var e=o(f);u=!0;for(var t=i.length;t;){for(c=i,i=[];++m<t;)c&&c[m].run();m=-1,t=i.length}c=null,u=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===s||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function v(e,t){this.fun=e,this.array=t}function h(){}a.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];i.push(new v(e,t)),1!==i.length||u||o(p)},v.prototype.run=function(){this.fun.apply(null,this.array)},a.title="browser",a.browser=!0,a.env={},a.argv=[],a.version="",a.versions={},a.on=h,a.addListener=h,a.once=h,a.off=h,a.removeListener=h,a.removeAllListeners=h,a.emit=h,a.prependListener=h,a.prependOnceListener=h,a.listeners=function(e){return[]},a.binding=function(e){throw new Error("process.binding is not supported")},a.cwd=function(){return"/"},a.chdir=function(e){throw new Error("process.chdir is not supported")},a.umask=function(){return 0}},57:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(11),a=n(12),l=n(14),s=n(13),o=n(0),c=n.n(o),i=(n(33),function(e){Object(l.a)(n,e);var t=Object(s.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(a.a)(n,[{key:"render",value:function(){return c.a.createElement("div",{className:"loader"},c.a.createElement("div",{className:"l_main ".concat(this.props.dark?"dark":null)},c.a.createElement("div",{className:"l_square"},c.a.createElement("span",null),c.a.createElement("span",null),c.a.createElement("span",null)),c.a.createElement("div",{className:"l_square"},c.a.createElement("span",null),c.a.createElement("span",null),c.a.createElement("span",null)),c.a.createElement("div",{className:"l_square"},c.a.createElement("span",null),c.a.createElement("span",null),c.a.createElement("span",null)),c.a.createElement("div",{className:"l_square"},c.a.createElement("span",null),c.a.createElement("span",null),c.a.createElement("span",null))))}}]),n}(o.Component))},600:function(e,t,n){"use strict";n.r(t);var r=n(11),a=n(12),l=n(14),s=n(13),o=n(0),c=n.n(o),i=n(24),u=(n(99),n(62)),m=n(58),f=n(49),p=n(57),v=(n(381),function(e){Object(l.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(r.a)(this,n);for(var a=arguments.length,l=new Array(a),s=0;s<a;s++)l[s]=arguments[s];return(e=t.call.apply(t,[this].concat(l))).axios=Object(f.b)(),e.state={spons_years:[],loading:!0},e}return Object(a.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.axios.get("/sponsors/spons_years/").then((function(t){var n=t.data.spons_year;n.reverse();console.log(n),e.setState({spons_years:n,loading:!1})}))}},{key:"render",value:function(){console.log(this.state);var e=this.state.spons_years.map((function(e){return c.a.createElement("div",{key:e},c.a.createElement(i.b,{to:"/sponsors/".concat(e)},c.a.createElement("button",{className:"btn"},"Sponsors ",e)))}));return c.a.createElement("div",{className:"sponsors"},c.a.createElement(u.a,null),c.a.createElement("div",{className:"header1"},"OUR SPONSORS"),c.a.createElement("div",{className:"container-fluid ctn11",style:{marginTop:"-90px"}},c.a.createElement("div",null,this.state.loading?c.a.createElement(p.a,null):e)),c.a.createElement(m.a,null))}}]),n}(o.Component));t.default=v},99:function(e,t,n){}}]);
//# sourceMappingURL=24.c4969de9.chunk.js.map