(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[17],{121:function(e,t,n){"use strict";var a=n(356);function r(e,t){var n;return t>0?(n=1e5*e/t+5,Math.floor(n/10)/100):100}function o(e){this.data=e?e instanceof o?e.data:e:{lines:{total:0,covered:0,skipped:0,pct:"Unknown"},statements:{total:0,covered:0,skipped:0,pct:"Unknown"},functions:{total:0,covered:0,skipped:0,pct:"Unknown"},branches:{total:0,covered:0,skipped:0,pct:"Unknown"}},function(e){if(!(e&&e.lines&&e.statements&&e.functions&&e.branches))throw new Error("Invalid summary coverage object, missing keys, found:"+Object.keys(e).join(","))}(this.data)}function c(e){if(!e)throw new Error("Coverage must be initialized with a path or an object");if("string"===typeof e)this.data={path:e,statementMap:{},fnMap:{},branchMap:{},s:{},f:{},b:{}};else if(e instanceof c)this.data=e.data;else{if("object"!==typeof e)throw new Error("Invalid argument to coverage constructor");this.data=e}!function(e){if(!(e&&e.path&&e.statementMap&&e.fnMap&&e.branchMap&&e.s&&e.f&&e.b))throw new Error("Invalid file coverage object, missing keys, found:"+Object.keys(e).join(","))}(this.data)}["lines","statements","functions","branches"].forEach((function(e){Object.defineProperty(o.prototype,e,{enumerable:!0,get:function(){return this.data[e]}})})),o.prototype.merge=function(e){var t=this;return["lines","statements","branches","functions"].forEach((function(n){t[n].total+=e[n].total,t[n].covered+=e[n].covered,t[n].skipped+=e[n].skipped,t[n].pct=r(t[n].covered,t[n].total)})),this},o.prototype.toJSON=function(){return this.data},o.prototype.isEmpty=function(){return 0===this.lines.total},c.prototype.getLineCoverage=function(){var e=this.data.statementMap,t=this.data.s,n=Object.create(null);return Object.keys(t).forEach((function(a){if(e[a]){var r=e[a].start.line,o=t[a],c=n[r];(void 0===c||c<o)&&(n[r]=o)}})),n},c.prototype.getUncoveredLines=function(){var e=this.getLineCoverage(),t=[];return Object.keys(e).forEach((function(n){0===e[n]&&t.push(n)})),t},c.prototype.getBranchCoverageByLine=function(){var e=this.branchMap,t=this.b,n={};return Object.keys(e).forEach((function(r){var o,c=e[r].line||e[r].loc.start.line,i=t[r];n[c]=n[c]||[],(o=n[c]).push.apply(o,a(i))})),Object.keys(n).forEach((function(e){var t=n[e],a=t.filter((function(e){return e>0})),r=a.length/t.length*100;n[e]={covered:a.length,total:t.length,coverage:r}})),n},["path","statementMap","fnMap","branchMap","s","f","b"].forEach((function(e){Object.defineProperty(c.prototype,e,{enumerable:!0,get:function(){return this.data[e]}})})),c.prototype.toJSON=function(){return this.data},c.prototype.merge=function(e){var t=this;Object.keys(e.s).forEach((function(n){t.data.s[n]+=e.s[n]})),Object.keys(e.f).forEach((function(n){t.data.f[n]+=e.f[n]})),Object.keys(e.b).forEach((function(n){var a,r=t.data.b[n],o=e.b[n];if(r)for(a=0;a<r.length;a+=1)r[a]+=o[a];else t.data.b[n]=o}))},c.prototype.computeSimpleTotals=function(e){var t=this[e],n={total:0,covered:0,skipped:0};return"function"===typeof t&&(t=t.call(this)),Object.keys(t).forEach((function(e){var a=!!t[e];n.total+=1,a&&(n.covered+=1)})),n.pct=r(n.covered,n.total),n},c.prototype.computeBranchTotals=function(){var e=this.b,t={total:0,covered:0,skipped:0};return Object.keys(e).forEach((function(n){var a=e[n];a.forEach((function(e){e>0&&(t.covered+=1)})),t.total+=a.length})),t.pct=r(t.covered,t.total),t},c.prototype.resetHits=function(){var e=this.s,t=this.f,n=this.b;Object.keys(e).forEach((function(t){e[t]=0})),Object.keys(t).forEach((function(e){t[e]=0})),Object.keys(n).forEach((function(e){var t=n[e];n[e]=t.map((function(){return 0}))}))},c.prototype.toSummary=function(){var e={};return e.lines=this.computeSimpleTotals("getLineCoverage"),e.functions=this.computeSimpleTotals("f","fnMap"),e.statements=this.computeSimpleTotals("s","statementMap"),e.branches=this.computeBranchTotals(),new o(e)},e.exports={CoverageSummary:o,FileCoverage:c}},139:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(24);t.a=function(){return r.a.createElement("div",{className:"ctn10"},r.a.createElement("div",null,r.a.createElement(o.b,{className:"links",to:"/sponsors/yearwise"},"Yearwise Sponsors")),r.a.createElement("div",null,r.a.createElement(o.b,{className:"links link-text",to:"/sponsors/sponsors_heads"},"Head Co-ordinators of Sponsorship")))}},187:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}},355:function(e,t,n){"use strict";var a=n(121).CoverageSummary,r=n(121).FileCoverage,o=n(361).CoverageMap;e.exports={createCoverageSummary:function(e){return e&&e instanceof a?e:new a(e)},createCoverageMap:function(e){return e&&e instanceof o?e:new o(e)},createFileCoverage:function(e){return e&&e instanceof r?e:new r(e)}},e.exports.classes={FileCoverage:r}},356:function(e,t,n){var a=n(357),r=n(358),o=n(359),c=n(360);e.exports=function(e){return a(e)||r(e)||o(e)||c()}},357:function(e,t,n){var a=n(187);e.exports=function(e){if(Array.isArray(e))return a(e)}},358:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},359:function(e,t,n){var a=n(187);e.exports=function(e,t){if(e){if("string"===typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(e,t):void 0}}},360:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},361:function(e,t,n){"use strict";var a=n(121).FileCoverage,r=n(121).CoverageSummary;function o(e){this.data=e?e instanceof o?e.data:function(e){var t=Object.create(null);return Object.keys(e).forEach((function(n){var r=e[n];t[n]=r instanceof a?r:new a(r)})),t}(e):Object.create(null)}o.prototype.merge=function(e){var t,n=this;t=e instanceof o?e:new o(e),Object.keys(t.data).forEach((function(e){var a=t.data[e];n.data[e]?n.data[e].merge(a):n.data[e]=a}))},o.prototype.filter=function(e){var t=this;Object.keys(this.data).forEach((function(n){e(n)||delete t.data[n]}))},o.prototype.toJSON=function(){return this.data},o.prototype.files=function(){return Object.keys(this.data)},o.prototype.fileCoverageFor=function(e){var t=this.data[e];if(!t)throw new Error("No file coverage available for: "+e);return t},o.prototype.addFileCoverage=function(e){var t=new a(e),n=t.path;this.data[n]?this.data[n].merge(t):this.data[n]=t},o.prototype.getCoverageSummary=function(){var e=this,t=new r;return this.files().forEach((function(n){t.merge(e.fileCoverageFor(n).toSummary())})),t},e.exports={CoverageMap:o}},52:function(e,t){var n,a,r=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function c(){throw new Error("clearTimeout has not been defined")}function i(e){if(n===setTimeout)return setTimeout(e,0);if((n===o||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"===typeof setTimeout?setTimeout:o}catch(e){n=o}try{a="function"===typeof clearTimeout?clearTimeout:c}catch(e){a=c}}();var s,l=[],u=!1,f=-1;function p(){u&&s&&(u=!1,s.length?l=s.concat(l):f=-1,l.length&&m())}function m(){if(!u){var e=i(p);u=!0;for(var t=l.length;t;){for(s=l,l=[];++f<t;)s&&s[f].run();f=-1,t=l.length}s=null,u=!1,function(e){if(a===clearTimeout)return clearTimeout(e);if((a===c||!a)&&clearTimeout)return a=clearTimeout,clearTimeout(e);try{a(e)}catch(t){try{return a.call(null,e)}catch(t){return a.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function d(){}r.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];l.push(new h(e,t)),1!==l.length||u||i(m)},h.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=d,r.addListener=d,r.once=d,r.off=d,r.removeListener=d,r.removeAllListeners=d,r.emit=d,r.prependListener=d,r.prependOnceListener=d,r.listeners=function(e){return[]},r.binding=function(e){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}},57:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n(11),r=n(12),o=n(14),c=n(13),i=n(0),s=n.n(i),l=(n(33),function(e){Object(o.a)(n,e);var t=Object(c.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return s.a.createElement("div",{className:"loader"},s.a.createElement("div",{className:"l_main ".concat(this.props.dark?"dark":null)},s.a.createElement("div",{className:"l_square"},s.a.createElement("span",null),s.a.createElement("span",null),s.a.createElement("span",null)),s.a.createElement("div",{className:"l_square"},s.a.createElement("span",null),s.a.createElement("span",null),s.a.createElement("span",null)),s.a.createElement("div",{className:"l_square"},s.a.createElement("span",null),s.a.createElement("span",null),s.a.createElement("span",null)),s.a.createElement("div",{className:"l_square"},s.a.createElement("span",null),s.a.createElement("span",null),s.a.createElement("span",null))))}}]),n}(i.Component))},589:function(e,t,n){"use strict";n.r(t);var a=n(11),r=n(12),o=n(14),c=n(13),i=n(0),s=n.n(i),l=(n(99),n(49)),u=n(62),f=n(58),p=n(139),m=n(57),h=(n(355),function(e){Object(o.a)(n,e);var t=Object(c.a)(n);function n(){var e;Object(a.a)(this,n);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).axios=Object(l.b)(),e.state={sponsors:{},loading:!0,year:null},e}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.year;this.axios.get("/sponsors/sorted_list/".concat(t,"/")).then((function(n){var a=n.data.data;console.log(a),e.setState({sponsors:a,loading:!1,year:t})}))}},{key:"render",value:function(){var e=this.state.sponsors,t=Object.keys(e).map((function(t){var n=e[t].map((function(e){return s.a.createElement("div",{key:e.id},s.a.createElement("div",{className:"col m-1",key:e.id},s.a.createElement("div",{className:"cont"},s.a.createElement("div",{className:"front shadow-lg p-3 mb-5 bg-white rounded"},s.a.createElement("img",{alt:e.name,className:"spons-Image",src:e.pic_url})),s.a.createElement("div",{className:"back shadow-lg p-3 mb-5 bg-white rounded"},s.a.createElement("div",{className:"inner"},s.a.createElement("h6",{style:{fontWeight:"800"}},e.name),s.a.createElement("p",{className:"ph-no"},e.contact),s.a.createElement("p",null,e.details),s.a.createElement("p",null,s.a.createElement("a",{className:"web",href:e.website},"Website")))))))}));return s.a.createElement("div",{className:"my-5"},s.a.createElement("div",{style:{marginBottom:"20px"},className:"team-year"},t,"\xa0 Sponsors"),s.a.createElement("div",{className:"ctn9"},n))}));return s.a.createElement("div",{className:"sponsors"},s.a.createElement(u.a,null),s.a.createElement("div",{className:"header1"},"SPONSORS ",this.state.year),s.a.createElement("div",{className:"container-fluid",style:{maxWidth:"1200px",paddingTop:"300px"}},s.a.createElement(p.a,null)),s.a.createElement("div",{className:"container-fluid ",style:{maxWidth:"1500px",paddingTop:"0px"}},this.state.loading?s.a.createElement(m.a,{style:{margin:"50px auto"}}):t),s.a.createElement("div",{className:"container-fluid",style:{maxWidth:"1200px",paddingTop:"50px"}},s.a.createElement(p.a,null)),s.a.createElement(f.a,null))}}]),n}(i.Component));t.default=h},99:function(e,t,n){}}]);
//# sourceMappingURL=17.f28a230e.chunk.js.map