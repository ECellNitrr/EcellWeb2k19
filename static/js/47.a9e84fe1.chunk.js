(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[47],{55:function(e,a,n){"use strict";n.d(a,"f",(function(){return s})),n.d(a,"a",(function(){return r})),n.d(a,"c",(function(){return m})),n.d(a,"d",(function(){return c})),n.d(a,"e",(function(){return l})),n.d(a,"b",(function(){return o}));var t,i=n(26),s=(t={GST:"Guest",VLT:"Voluteer",EXE:"Executive",MNG:"Manager",HCO:"Head Co-ordinator",OCO:"Overall Co-ordinator",CAB:"Campus Ambassador"},Object(i.a)(t,"CAB","Campus Ambassador"),Object(i.a)(t,"DRT","Director"),Object(i.a)(t,"CDC","CDC Admin"),t),r={PND:"pending",RJD:"rejected",HRD:"hired",URV:"under review"},m=function(e){try{return e=(e=new Date(e)).toISOString(),"".concat(e.slice(8,10),"-").concat(e.slice(5,7),"-").concat(e.slice(0,4))}catch(a){return"invalid-format"}},c=["Accountancy","Banking","Finance","Business","Consulting","Management","Charity","Design","Engineering","Agriculture","Healthcare","Hospitality","IT","Law","Security","Leisure","Sport","Tourism","Marketing","Advertising","PR","Media","Construction","Public Services","Administration","Retail","Sales","Science","Social Care","Teacher Training","Education","Transport","Logistics","Others"],l=["Select","Student","Faculty"],o=[{course:"B Tech",display_name:"Bachelor of Technology",branch:[{name:"Biomed",display_name:"Bio Medical Engineering",semester:["2","4","6","8"]},{name:"Biotech",display_name:"Bio Technology Engineering",semester:["2","4","6","8"]},{name:"Chemical",display_name:"Chemical Engineering",semester:["2","4","6","8"]},{name:"Civil",display_name:"Civil Engineering",semester:["2","4","6","8"]},{name:"CSE",display_name:"Computer Science Engineering",semester:["2","4","6","8"]},{name:"ELEX",display_name:"Electronics and communication Engineering",semester:["2","4","6","8"]},{name:"Electrical",display_name:"Electrical Engineering",semester:["2","4","6","8"]},{name:"IT",display_name:"Information Technology",semester:["2","4","6","8"]},{name:"Mech",display_name:"Mechanical Engineering",semester:["2","4","6","8"]},{name:"Meta",display_name:"Metallurgical and Materials Engineering",semester:["2","4","6","8"]},{name:"Mining",display_name:"Mining Engineering",semester:["2","4","6","8"]},{name:"Others",display_name:"",semester:["2","4","6","8"]}]},{course:"M Tech",display_name:"Master of Technology",branch:[{name:"Biomed",display_name:"Bio Medical Engineering",semester:["2","4"]},{name:"Biotech",display_name:"Bio Technology Engineering",semester:["2","4"]},{name:"Chemical",display_name:"Chemical Engineering",semester:["2","4"]},{name:"Civil",display_name:"Civil Engineering",semester:["2","4"]},{name:"CSE",display_name:"Computer Science Engineering",semester:["2","4"]},{name:"ELEX",display_name:"Electronics and communication Engineering",semester:["2","4"]},{name:"Electrical",display_name:"Electrical Engineering",semester:["2","4"]},{name:"IT",display_name:"Information Technology",semester:["2","4"]},{name:"Mech",display_name:"Mechanical Engineering",semester:["2","4"]},{name:"Meta",display_name:"Metallurgical and Materials Engineering",semester:["2","4","6","8"]},{name:"Mining",display_name:"Mining Engineering",semester:["2","4","6","8"]},{name:"Others",display_name:"",semester:["2","4","6","8"]}]},{course:"MBA",display_name:"Master of Business Administration",branch:[{name:"Finance",display_name:"Finance",semester:["2","4"]},{name:"Marketing",display_name:"Marketing",semester:["2","4"]},{name:"HRM",display_name:"Human Recourse Management",semester:["2","4"]},{name:"IB",display_name:"International Business",semester:["2","4"]},{name:"OM",display_name:"Operation Management",semester:["2","4"]},{name:"SCM",display_name:"Supply Chain Management",semester:["2","4"]},{name:"RM",display_name:"Rural Management",semester:["2","4"]},{name:"ABM",display_name:"Agri Business Management",semester:["2","4"]},{name:"HCM",display_name:"Health Care Management",semester:["2","4"]},{name:"Others",display_name:"Others",semester:["2","4"]}]},{course:"B Arch",display_name:"Bachelor of Science",branch:[{name:"LA",display_name:"Landscape Architecture",semester:["2","4","6","8","10"]},{name:"AC",display_name:"Architectural Conservation",semester:["2","4","6","8","10"]},{name:"HA",display_name:"Housing Architecture",semester:["2","4","6","8","10"]},{name:"UP",display_name:"Urban Planning",semester:["2","4","6","8","10"]},{name:"RP",display_name:"Regional Planning",semester:["2","4","6","8","10"]}]},{course:"B Sc",display_name:"Bachelor of Architecture",branch:[{name:"HM",display_name:"Hotel Management",semester:["2","4","6"]},{name:"AS",display_name:"Aernautical Science",semester:["2","4","6"]},{name:"Medical",display_name:"Medical Science",semester:["2","4","6"]},{name:"Biology",display_name:"Biologcal Science",semester:["2","4","6"]},{name:"AVE",display_name:"Animation and Visual Effects",semester:["2","4","6"]},{name:"Chemistry",display_name:"Applied Chemistry",semester:["2","4","6"]},{name:"Maths",display_name:"Applied Mathemartics",semester:["2","4","6"]},{name:"Physics",display_name:"Applied Physics",semester:["2","4","6"]}]}]},611:function(e,a,n){"use strict";n.r(a);var t=n(11),i=n(12),s=n(14),r=n(13),m=n(0),c=n.n(m),l=n(49),o=n(24),d=(n(71),n(25)),p=(n(55),function(e){Object(s.a)(n,e);var a=Object(r.a)(n);function n(){var e;Object(t.a)(this,n);for(var i=arguments.length,s=new Array(i),r=0;r<i;r++)s[r]=arguments[r];return(e=a.call.apply(a,[this].concat(s))).job_id=Number(e.props.match.params.job_id),e.state={job:{},applications:[]},e._status_func=function(e){return"RJD"===e.status||"rejected"===e.status?c.a.createElement("span",{class:"badge py-2 badge-danger"},"Rejected"):"HRD"===e.status||"hired"===e.status?c.a.createElement("span",{class:"badge py-2 badge-success"},"Hired"):"PND"===e.status||"pending"===e.status?c.a.createElement("span",{class:"badge py-2 badge-warning"},"Pending"):"URV"===e.status||"Under Review"===e.status?c.a.createElement("span",{class:"badge py-2 badge-info"},"Reviewing"):void 0},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;Object(l.b)().get("/iportal/job/".concat(this.job_id,"/")).then((function(a){var n=a.data;console.log({job:n}),e.setState({job:n})})),Object(l.b)().get("/iportal/job_application/?job=".concat(this.job_id)).then((function(a){var n=a.data.results;console.log(n),n=n.map((function(e){return e.created_at=new Date(e.created_at).toISOString().slice(0,10),e})),console.log({applications:n}),e.setState({applications:n})}))}},{key:"render",value:function(){var e=this,a=this.state.applications.map((function(a,n){return c.a.createElement("tr",{key:a.id},c.a.createElement("th",{scope:"row"},n+1),c.a.createElement("td",null,c.a.createElement(o.b,{className:"text-primary font-weight-bold",to:"/internship/startup/application_detail/".concat(a.id,"/")},a.applicant_obj.first_name," ",a.applicant_obj.last_name)),c.a.createElement("td",null,e._status_func(a)),c.a.createElement("td",null,a.created_at))}));return c.a.createElement("div",{className:"container jumbo2 jumbotron hoverable"},c.a.createElement("div",{className:"my-5",style:{position:"relative",top:"30px"}},c.a.createElement("button",{onClick:function(){return e.props.history.goBack()},className:"btn font-weight-bold btn-primary"},"Go Back")),c.a.createElement("div",null,c.a.createElement("h1",{className:"text-center open font-weight-bold flex-grow-1 my-1"},"Applicants - ",this.state.job.name,"(",this.state.job.job_type,")")),c.a.createElement("div",{className:"table-responsive"},c.a.createElement("table",{className:"table table-striped"},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",{className:"font-weight-bold"},"#"),c.a.createElement("th",{className:"font-weight-bold"},"Name"),c.a.createElement("th",{className:"font-weight-bold"},"Status"),c.a.createElement("th",{className:"font-weight-bold"},"Applied on"))),c.a.createElement("tbody",null,a))))}}]),n}(m.Component));a.default=Object(d.b)((function(e){return e}))(p)}}]);
//# sourceMappingURL=47.a9e84fe1.chunk.js.map