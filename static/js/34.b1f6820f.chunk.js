(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[34],{144:function(e,a,t){},52:function(e,a){var t,n,r=e.exports={};function l(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function s(e){if(t===setTimeout)return setTimeout(e,0);if((t===l||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(a){try{return t.call(null,e,0)}catch(a){return t.call(this,e,0)}}}!function(){try{t="function"===typeof setTimeout?setTimeout:l}catch(e){t=l}try{n="function"===typeof clearTimeout?clearTimeout:o}catch(e){n=o}}();var i,c=[],m=!1,u=-1;function p(){m&&i&&(m=!1,i.length?c=i.concat(c):u=-1,c.length&&d())}function d(){if(!m){var e=s(p);m=!0;for(var a=c.length;a;){for(i=c,c=[];++u<a;)i&&i[u].run();u=-1,a=c.length}i=null,m=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===o||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(a){try{return n.call(null,e)}catch(a){return n.call(this,e)}}}(e)}}function h(e,a){this.fun=e,this.array=a}function _(){}r.nextTick=function(e){var a=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)a[t-1]=arguments[t];c.push(new h(e,a)),1!==c.length||m||s(d)},h.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=_,r.addListener=_,r.once=_,r.off=_,r.removeListener=_,r.removeAllListeners=_,r.emit=_,r.prependListener=_,r.prependOnceListener=_,r.listeners=function(e){return[]},r.binding=function(e){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}},57:function(e,a,t){"use strict";t.d(a,"a",(function(){return c}));var n=t(11),r=t(12),l=t(14),o=t(13),s=t(0),i=t.n(s),c=(t(33),function(e){Object(l.a)(t,e);var a=Object(o.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"loader"},i.a.createElement("div",{className:"l_main ".concat(this.props.dark?"dark":null)},i.a.createElement("div",{className:"l_square"},i.a.createElement("span",null),i.a.createElement("span",null),i.a.createElement("span",null)),i.a.createElement("div",{className:"l_square"},i.a.createElement("span",null),i.a.createElement("span",null),i.a.createElement("span",null)),i.a.createElement("div",{className:"l_square"},i.a.createElement("span",null),i.a.createElement("span",null),i.a.createElement("span",null)),i.a.createElement("div",{className:"l_square"},i.a.createElement("span",null),i.a.createElement("span",null),i.a.createElement("span",null))))}}]),t}(s.Component))},598:function(e,a,t){"use strict";t.r(a);var n=t(11),r=t(12),l=t(14),o=t(13),s=t(0),i=t.n(s),c=t(49),m=(t(144),t(62)),u=t(58),p=t(57),d=t(24),h=function(e){Object(l.a)(t,e);var a=Object(o.a)(t);function t(){var e;Object(n.a)(this,t);for(var r=arguments.length,l=new Array(r),o=0;o<r;o++)l[o]=arguments[o];return(e=a.call.apply(a,[this].concat(l))).axios=Object(c.b)(),e.state={members:{},loading:!0},e.members_html=function(e,a,t){return a=a.map((function(a){var t=i.a.createElement(s.Fragment,null,null===a.linkedin?null:i.a.createElement("a",{className:"profile_links",style:{margin:"0 15px"},target:"_blank",href:a.linkedin},i.a.createElement("i",{className:"fab fa-linkedin-in"})),null===a.facebook?null:i.a.createElement("a",{className:"profile_links",style:{margin:"0 15px"},target:"_blank",href:a.facebook},i.a.createElement("i",{className:"fab fa-facebook-f"})));return["FCT","HCD","DIR"].indexOf(a.member_type)>-1&&(t=null===a.profile_url?null:i.a.createElement("a",{className:"profile_links",target:"_blank",style:{color:"white"},href:a.profile_url},i.a.createElement("i",{className:"fa fa-link"}))),i.a.createElement("div",{key:a.id,className:"text-center"},i.a.createElement("div",null,"Head of Career Development Centre"===e||"Director"===e||"Faculty Incharge"===e||"Overall Co-ordinators"===e||"Head Co-ordinators"===e?i.a.createElement("div",null,i.a.createElement("div",{className:"page "},i.a.createElement("div",{className:"page__demo"},i.a.createElement("div",{className:"page__container "},i.a.createElement("div",{className:"photobox photobox_type9"},i.a.createElement("div",{className:"photobox__previewbox shadow p-3 mb-5 bg-white rounded"},i.a.createElement("img",{src:a.image,width:"270",height:"270",class:" photobox__preview member-image",alt:a.name}),i.a.createElement("div",{className:"photobox__label"},i.a.createElement("span",{style:{marginBottom:"15px"}},"Connect"),i.a.createElement("br",null),t)))))),i.a.createElement("div",null,i.a.createElement("h6",{className:"member-name"},a.name)),i.a.createElement("div",{className:"domain"},"pr"===a.domain?i.a.createElement("p",{style:{fontSize:"20px",marginBottom:"25px",marginTop:"-25px"}},i.a.createElement("i",null,"(Public Relation and Marketing)")):null,"tech"===a.domain?i.a.createElement("p",{style:{fontSize:"20px",marginBottom:"25px",marginTop:"-25px"}},i.a.createElement("i",null,"(Technical Team)")):null,"design"===a.domain?i.a.createElement("p",{style:{fontSize:"20px",marginBottom:"25px",marginTop:"-25px"}},i.a.createElement("i",null,"(Design Team)")):null,"spons"===a.domain?i.a.createElement("p",{style:{fontSize:"20px",marginBottom:"25px",marginTop:"-25px"}},i.a.createElement("i",null,"(Sponsorship Team)")):null,"doc"===a.domain?i.a.createElement("p",{style:{fontSize:"20px",marginBottom:"25px",marginTop:"-25px"}},i.a.createElement("i",null,"(Documentation Team)")):null)):i.a.createElement("div",null,i.a.createElement("h6",{className:"member-name"},a.name))))})),i.a.createElement("div",{key:t},"Head_Career_Development"===e||"Director"===e||"Faculty Incharge"===e||"Overall Co-ordinators"===e||"Head Co-ordinators"===e?i.a.createElement("h2",{style:{marginTop:"70px"},className:"position shadow p-3 mb-5 bg-white rounded"},e):i.a.createElement("h2",{style:{marginTop:"70px"},className:"position-exec shadow p-3 mb-5 bg-white rounded"},e),i.a.createElement("div",{className:"flex-containerrr justify-content-center"},a))},e}return Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this,a=this.props.match.params.year;this.axios.get("/team/list/".concat(a,"/")).then((function(a){var t=a.data.data;console.log(t);var n={Director:[],Head_Career_Development:[],Faculty_Incharge:[],Overall_Coordinator:[],Head_Coordinator:[],Manager_pr:[],Manager_tech:[],Manager_des:[],Manager_doc:[],Manager_spons:[],Executive_pr:[],Executive_tech:[],Executive_des:[],Executive_doc:[],Executive_spons:[]};t.forEach((function(e){"DIR"===e.member_type&&n.Director.push(e),"HCD"===e.member_type&&n.Head_Career_Development.push(e),"FCT"===e.member_type&&n.Faculty_Incharge.push(e),"OCO"===e.member_type&&(n.Overall_Coordinator.push(e),n.Overall_Coordinator.sort((function(e,a){var t=e.name.toLowerCase(),n=a.name.toLowerCase();return t<n?-1:t>n?1:0}))),"HCO"===e.member_type&&n.Head_Coordinator.push(e),"MNG"===e.member_type&&"pr"===e.domain&&n.Manager_pr.push(e),"MNG"===e.member_type&&"tech"===e.domain&&n.Manager_tech.push(e),"MNG"===e.member_type&&"design"===e.domain&&n.Manager_des.push(e),"MNG"===e.member_type&&"doc"===e.domain&&n.Manager_doc.push(e),"MNG"===e.member_type&&"spons"===e.domain&&n.Manager_spons.push(e),"EXC"===e.member_type&&"pr"===e.domain&&n.Executive_pr.push(e),"EXC"===e.member_type&&"tech"===e.domain&&n.Executive_tech.push(e),"EXC"===e.member_type&&"design"===e.domain&&n.Executive_des.push(e),"EXC"===e.member_type&&"doc"===e.domain&&n.Executive_doc.push(e),"EXC"===e.member_type&&"spons"===e.domain&&n.Executive_spons.push(e)})),console.log(n),e.setState({members:n,loading:!1})}))}},{key:"render",value:function(){var e={};for(var a in this.state.members){var t=this.state.members[a];switch(a){case"Director":e.Director=this.members_html("Director",t,a);break;case"Head_Career_Development":e.Head_Career_Development=this.members_html("Head of Career Development Centre",t,a);break;case"Faculty_Incharge":e.Faculty_Incharge=this.members_html("Faculty Incharge",t,a);break;case"Overall_Coordinator":e.Overall_Coordinator=this.members_html("Overall Co-ordinators",t,a);break;case"Head_Coordinator":e.Head_Coordinator=this.members_html("Head Co-ordinators",t,a);break;case"Manager_pr":e.Manager_pr=this.members_html("Public Relation and Marketing Managers",t,a);break;case"Manager_tech":e.Manager_tech=this.members_html("Technical Team Managers ",t,a);break;case"Manager_des":e.Manager_des=this.members_html("Design Team Managers ",t,a);break;case"Manager_doc":e.Manager_doc=this.members_html("Documentation Team Manager ",t,a);break;case"Manager_spons":e.Manager_spons=this.members_html("Sponsorship and Brand Management Managers ",t,a);break;case"Executive_pr":e.Executive_pr=this.members_html("Public Relation and Marketing Executives",t);break;case"Executive_tech":e.Executive_tech=this.members_html("Technical Team Executives",t);break;case"Executive_des":e.Executive_des=this.members_html("Design Team Executives",t);break;case"Executive_doc":e.Executive_doc=this.members_html("Documentation Team Executives",t);break;case"Executive_spons":e.Executive_spons=this.members_html("Sponsorship and Brand Management Executives",t);break;default:console.log("default")}}var n=this.props.match.params.year;return i.a.createElement("div",{className:"team-whole"},i.a.createElement(m.a,null),i.a.createElement("div",{className:"team-div"},i.a.createElement(d.b,{className:"team-links shadow p-3 mb-5 bg-white rounded",to:"/team/yearwise"},"Previous Year Teams")),i.a.createElement("div",{style:{marginBottom:"20px"},className:"team-year"},"Team of ",n,"-",n-2e3+1),this.state.loading?i.a.createElement("div",{style:{marginTop:"10%"}},i.a.createElement(p.a,null)):i.a.createElement("div",null,"2019"===n?e.Director:null,"2019"===n?e.Head_Career_Development:null,"2019"===n?e.Faculty_Incharge:null,"2013"===n||"2014"===n?null:e.Overall_Coordinator,e.Head_Coordinator,"2019"===n?e.Manager_pr:null,"2019"===n?e.Manager_tech:null,"2019"===n?e.Manager_des:null,"2019"===n?e.Manager_doc:null,"2019"===n?e.Manager_spons:null,"2019"===n?e.Executive_pr:null,"2019"===n?e.Executive_tech:null,"2019"===n?e.Executive_des:null,"2019"===n?e.Executive_doc:null,"2019"===n?e.Executive_spons:null),i.a.createElement("div",{className:"team-div"},i.a.createElement(d.b,{className:"team-links shadow p-3 mb-5 bg-white rounded",to:"/team/yearwise"},"Previous Year Teams")),i.a.createElement(u.a,null))}}]),t}(s.Component);a.default=h}}]);
//# sourceMappingURL=34.b1f6820f.chunk.js.map