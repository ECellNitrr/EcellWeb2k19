(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[39],{142:function(e,t,n){},52:function(e,t){var n,r,a=e.exports={};function l(){throw new Error("setTimeout has not been defined")}function c(){throw new Error("clearTimeout has not been defined")}function i(e){if(n===setTimeout)return setTimeout(e,0);if((n===l||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"===typeof setTimeout?setTimeout:l}catch(e){n=l}try{r="function"===typeof clearTimeout?clearTimeout:c}catch(e){r=c}}();var o,u=[],s=!1,m=-1;function f(){s&&o&&(s=!1,o.length?u=o.concat(u):m=-1,u.length&&h())}function h(){if(!s){var e=i(f);s=!0;for(var t=u.length;t;){for(o=u,u=[];++m<t;)o&&o[m].run();m=-1,t=u.length}o=null,s=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===c||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function E(e,t){this.fun=e,this.array=t}function b(){}a.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];u.push(new E(e,t)),1!==u.length||s||i(h)},E.prototype.run=function(){this.fun.apply(null,this.array)},a.title="browser",a.browser=!0,a.env={},a.argv=[],a.version="",a.versions={},a.on=b,a.addListener=b,a.once=b,a.off=b,a.removeListener=b,a.removeAllListeners=b,a.emit=b,a.prependListener=b,a.prependOnceListener=b,a.listeners=function(e){return[]},a.binding=function(e){throw new Error("process.binding is not supported")},a.cwd=function(){return"/"},a.chdir=function(e){throw new Error("process.chdir is not supported")},a.umask=function(){return 0}},595:function(e,t,n){"use strict";n.r(t);var r=n(11),a=n(12),l=n(14),c=n(13),i=n(0),o=n.n(i),u=(n(142),n(24)),s=n(62),m=n(58),f=function(e){Object(l.a)(n,e);var t=Object(c.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(a.a)(n,[{key:"render",value:function(){return o.a.createElement("div",{className:"whole-gallery"},o.a.createElement(s.a,null),o.a.createElement("div",{className:"container-fluid",style:{maxWidth:"700px",paddingTop:"200px"}},o.a.createElement("div",{className:"header66"},"Gallery"),o.a.createElement("div",{className:"gal-link"},o.a.createElement(u.b,{to:"gallery/E-Summit'19"},o.a.createElement("button",{className:"btn lgtabs lgback"},"GALLERY OF E-SUMMIT'19"))),o.a.createElement("div",{className:"gal-link"},o.a.createElement(u.b,{to:"gallery/E-Summit'18"},o.a.createElement("button",{className:"btn lgtabs lgback"},"GALLERY OF E-SUMMIT'18"))),o.a.createElement("div",{className:"gal-link"},o.a.createElement(u.b,{to:"gallery/E-Summit'17"},o.a.createElement("button",{className:"btn lgtabs lgback"},"GALLERY OF E-SUMMIT'17"))),o.a.createElement("div",{className:"gal-link"},o.a.createElement(u.b,{to:"gallery/E-Summit'16"},o.a.createElement("button",{className:"btn lgtabs lgback"},"GALLERY OF E-SUMMIT'16")))),o.a.createElement(m.a,null))}}]),n}(i.Component);t.default=f}}]);
//# sourceMappingURL=39.2ea7fa39.chunk.js.map