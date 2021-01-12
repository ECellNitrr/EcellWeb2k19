/*! For license information please see 21.00ff14a8.chunk.js.LICENSE.txt */
(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[21],{100:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),s=o(a(0)),i=(o(a(5)),o(a(101))),r=o(a(102)),l=o(a(66));function o(e){return e&&e.__esModule?e:{default:e}}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var p=function(e){function t(){return c(this,t),u(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,s.default.Component),n(t,[{key:"isFirstPageVisible",value:function(e){var t=this.props,a=t.hideDisabled;return t.hideNavigation,!(t.hideFirstLastPages||a&&!e)}},{key:"isPrevPageVisible",value:function(e){var t=this.props,a=t.hideDisabled;return!(t.hideNavigation||a&&!e)}},{key:"isNextPageVisible",value:function(e){var t=this.props,a=t.hideDisabled;return!(t.hideNavigation||a&&!e)}},{key:"isLastPageVisible",value:function(e){var t=this.props,a=t.hideDisabled;return t.hideNavigation,!(t.hideFirstLastPages||a&&!e)}},{key:"buildPages",value:function(){for(var e=[],t=this.props,a=t.itemsCountPerPage,n=t.pageRangeDisplayed,o=t.activePage,c=t.prevPageText,u=t.nextPageText,p=t.firstPageText,d=t.lastPageText,f=t.totalItemsCount,g=t.onChange,h=t.activeClass,m=t.itemClass,v=t.itemClassFirst,b=t.itemClassPrev,_=t.itemClassNext,y=t.itemClassLast,C=t.activeLinkClass,x=t.disabledClass,P=(t.hideDisabled,t.hideNavigation,t.linkClass),k=t.linkClassFirst,E=t.linkClassPrev,N=t.linkClassNext,w=t.linkClassLast,j=(t.hideFirstLastPages,t.getPageUrl),O=new i.default(a,n).build(f,o),T=O.first_page;T<=O.last_page;T++)e.push(s.default.createElement(r.default,{isActive:T===o,key:T,href:j(T),pageNumber:T,pageText:T+"",onClick:g,itemClass:m,linkClass:P,activeClass:h,activeLinkClass:C}));return this.isPrevPageVisible(O.has_previous_page)&&e.unshift(s.default.createElement(r.default,{key:"prev"+O.previous_page,pageNumber:O.previous_page,onClick:g,pageText:c,isDisabled:!O.has_previous_page,itemClass:(0,l.default)(m,b),linkClass:(0,l.default)(P,E),disabledClass:x})),this.isFirstPageVisible(O.has_previous_page)&&e.unshift(s.default.createElement(r.default,{key:"first",pageNumber:1,onClick:g,pageText:p,isDisabled:!O.has_previous_page,itemClass:(0,l.default)(m,v),linkClass:(0,l.default)(P,k),disabledClass:x})),this.isNextPageVisible(O.has_next_page)&&e.push(s.default.createElement(r.default,{key:"next"+O.next_page,pageNumber:O.next_page,onClick:g,pageText:u,isDisabled:!O.has_next_page,itemClass:(0,l.default)(m,_),linkClass:(0,l.default)(P,N),disabledClass:x})),this.isLastPageVisible(O.has_next_page)&&e.push(s.default.createElement(r.default,{key:"last",pageNumber:O.total_pages,onClick:g,pageText:d,isDisabled:O.current_page===O.total_pages,itemClass:(0,l.default)(m,y),linkClass:(0,l.default)(P,w),disabledClass:x})),e}},{key:"render",value:function(){var e=this.buildPages();return s.default.createElement("ul",{className:this.props.innerClass},e)}}]),t}();p.defaultProps={itemsCountPerPage:10,pageRangeDisplayed:5,activePage:1,prevPageText:"\u27e8",firstPageText:"\xab",nextPageText:"\u27e9",lastPageText:"\xbb",innerClass:"pagination",itemClass:void 0,linkClass:void 0,activeLinkClass:void 0,hideFirstLastPages:!1,getPageUrl:function(e){return"#"}},t.default=p},101:function(e,t){function a(e,t){if(!(this instanceof a))return new a(e,t);this.per_page=e||25,this.length=t||10}e.exports=a,a.prototype.build=function(e,t){var a=Math.ceil(e/this.per_page);e=parseInt(e,10),(t=parseInt(t,10)||1)<1&&(t=1),t>a&&(t=a);var n=Math.max(1,t-Math.floor(this.length/2)),s=Math.min(a,t+Math.floor(this.length/2));s-n+1<this.length&&(t<a/2?s=Math.min(a,s+(this.length-(s-n))):n=Math.max(1,n-(this.length-(s-n)))),s-n+1>this.length&&(t>a/2?n++:s--);var i=this.per_page*(t-1);i<0&&(i=0);var r=this.per_page*t-1;return r<0&&(r=0),r>Math.max(e-1,0)&&(r=Math.max(e-1,0)),{total_pages:a,pages:Math.min(s-n+1,a),current_page:t,first_page:n,last_page:s,previous_page:t-1,next_page:t+1,has_previous_page:t>1,has_next_page:t<a,total_results:e,results:Math.min(r-i+1,e),first_result:i,last_result:r}}},102:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),s=a(0),i=l(s),r=(l(a(5)),l(a(66)));function l(e){return e&&e.__esModule?e:{default:e}}function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var p=function(e){function t(){return c(this,t),u(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,s.Component),n(t,[{key:"handleClick",value:function(e){var t=this.props,a=t.isDisabled,n=t.pageNumber;e.preventDefault(),a||this.props.onClick(n)}},{key:"render",value:function(){var e,t=this.props,a=t.pageText,n=(t.pageNumber,t.activeClass),s=t.itemClass,l=t.linkClass,c=t.activeLinkClass,u=t.disabledClass,p=t.isActive,d=t.isDisabled,f=t.href,g=(0,r.default)(s,(o(e={},n,p),o(e,u,d),e)),h=(0,r.default)(l,o({},c,p));return i.default.createElement("li",{className:g,onClick:this.handleClick.bind(this)},i.default.createElement("a",{className:h,href:f},a))}}]),t}();p.defaultProps={activeClass:"active",disabledClass:"disabled",itemClass:void 0,linkClass:void 0,activeLinkCLass:void 0,isActive:!1,isDisabled:!1,href:"#"},t.default=p},119:function(e,t,a){},172:function(e,t,a){e.exports=a.p+"static/media/no-logo.5fd90280.svg"},49:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(74),s=a.n(n),i=a(34),r="https://ecell.nitrr.ac.in";r="",t.b=function(){var e=void 0,t=i.store.getState().auth;return t&&(e=t.loggedin?t.token:void 0),s.a.create({baseURL:r,headers:{Authorization:e,Access:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbGllbnQiOiJhbmRyb2lkIiwib3JnYW5pemF0aW9uIjoiRUNlbGwifQ.H2aaDJuOxK44D2kwRCWwv9s5rzJGCNYKT3thtQqN-hQ"}})}},586:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return f}));var n=a(11),s=a(12),i=a(14),r=a(13),l=a(0),o=a.n(l),c=a(49),u=(a(119),a(100)),p=a.n(u),d=a(24),f=(a(55),function(e){Object(i.a)(u,e);var t=Object(r.a)(u);function u(){var e;Object(n.a)(this,u);for(var a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={startups:[],activePage:1,totalStartups:1,totalPages:1,loading:!0},e.handlePageChange=function(t){console.log("active page is ".concat(t)),e.setState({loading:!0}),Object(c.b)().get("/iportal/startup/?page=".concat(t,"&idea_approved=true&search=").concat(e.search_box.value)).then((function(a){var n=a.data.results;e.setState({loading:!1,activePage:t,startups:n,totalStartups:a.data.count,totalPages:a.data.total_pages})}))},e._search=function(t){t.preventDefault(),e.setState({loading:!0}),Object(c.b)().get("/iportal/startup/?search=".concat(e.search_box.value)).then((function(t){console.log(t);var a=t.data.results;console.log(a),e.setState({loading:!1,startups:a,activePage:t.data.current_page,totalStartups:t.data.count})}))},e}return Object(s.a)(u,[{key:"componentDidMount",value:function(){var e=this;Object(c.b)().get("/iportal/startup/?idea_approved=true").then((function(t){console.log(t);var a=t.data.results;console.log(a),e.setState({loading:!1,startups:a,activePage:t.data.current_page,totalStartups:t.data.count})}))}},{key:"render",value:function(){var e=this,t=a(172),n=this.state.startups.map((function(e){var a=e.jobs;console.log(a);var n=0,s=a.map((function(e){return n++,o.a.createElement("div",{key:e.id,style:{fontSize:"15px"}},n,".\xa0 ",o.a.createElement("i",{className:"font-weight-bold text-dark"}," ",e.name)," : ",e.brief)}));return o.a.createElement("div",{className:"jumbotron text-center hoverable p-4",key:e.id},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-lg-3 offset-md-1 mx-3 my-3"},o.a.createElement("div",{className:"view overlay d-flex",style:{alignItems:"center",justifyContent:"center"}},o.a.createElement("img",{width:"300px",height:"300px",src:e.logo?e.logo:t,className:"img-fluid",alt:e.name}),o.a.createElement(d.b,{style:{display:"none"},to:"/internship/jobs/".concat(e.name,"/").concat(e.id)},o.a.createElement("div",{className:"mask rgba-white-slight"}))),""!==e.idea_in_a_nutshell?o.a.createElement(l.Fragment,null,o.a.createElement("div",{className:"my-3 text-center font-weight-bold"},e.idea_in_a_nut_shell)):null,o.a.createElement(l.Fragment,null,o.a.createElement(d.b,{className:"btn font-weight-bold btn-primary",to:"/internship/jobs/".concat(e.id)},"Read More"))),o.a.createElement("div",{className:"col-lg-8 text-md-left"},o.a.createElement("div",null,o.a.createElement("div",{className:"font-weight-bold mb-1"},"Beneficiaries:"),o.a.createElement("p",null,e.beneficiaries)),o.a.createElement("div",null,o.a.createElement("div",{className:"font-weight-bold"},"Innovation:"),o.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.innovation_in_this}})),e.can_hire_interns&&0!==a.length?o.a.createElement(l.Fragment,null,o.a.createElement("div",{className:"my-2"},o.a.createElement("div",{className:"font-weight-bold my-3"},"Work Profiles :"),o.a.createElement("div",{className:""},s)),o.a.createElement("br",null)):o.a.createElement(l.Fragment,null,o.a.createElement("div",{className:"font-weight-bold"},"Description:"),o.a.createElement("div",null,o.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.describe_idea}}))))))}));return 0==this.state.startups.length&&0==this.state.loading&&(n=o.a.createElement("h1",{className:"text-center my-5"},"Great startups and ideas coming soon...")),o.a.createElement("div",{id:"outer-container",style:{background:"lightgray"}},o.a.createElement("form",{className:"text-center d-flex mb-5",style:{maxWidth:"1100px",alignItems:"center",justifyContent:"center",margin:"auto"}},o.a.createElement("input",{style:{height:"50px"},className:"form-control m-3",ref:function(t){return e.search_box=t},placeholder:"Search for Startups and Jobs",type:"text"}),o.a.createElement("button",{onClick:this._search,className:"m-3 font-weight-bold btn btn-primary"},"Search")),o.a.createElement("div",{className:"container",style:{paddingTop:"10% 0 0 0"}},this.state.loading?o.a.createElement("div",{className:"my-5 text-center"},o.a.createElement("i",{className:"fa fa-2x fa-spinner fa-spin"})):n),o.a.createElement("div",{className:"d-flex justify-content-center"},o.a.createElement(p.a,{activePage:this.state.activePage,itemsCountPerPage:14,totalItemsCount:this.state.totalStartups,pageRangeDisplayed:10,itemClass:"page-item",linkClass:"page-link",onChange:this.handlePageChange})))}}]),u}(l.Component))},66:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function s(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var i=typeof n;if("string"===i||"number"===i)e.push(n);else if(Array.isArray(n)&&n.length){var r=s.apply(null,n);r&&e.push(r)}else if("object"===i)for(var l in n)a.call(n,l)&&n[l]&&e.push(l)}}return e.join(" ")}e.exports?(s.default=s,e.exports=s):void 0===(n=function(){return s}.apply(t,[]))||(e.exports=n)}()}}]);
//# sourceMappingURL=21.00ff14a8.chunk.js.map