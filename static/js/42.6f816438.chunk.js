(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[42],{610:function(e,t,a){"use strict";a.r(t);var n=a(91),r=a(11),l=a(12),i=a(14),s=a(13),o=a(0),c=a.n(o),u=a(49),m=(a(71),a(25)),d=a(80),f=a(571),h=a.n(f),p=h.a.moment().subtract(1,"day"),_=function(e){return e.isAfter(p)},b=function(e){Object(i.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(r.a)(this,a);for(var l=arguments.length,i=new Array(l),s=0;s<l;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).job_id=Number(e.props.match.params.job_id),e.state={errors:{},requesting:!1,success:!1,start_date:null,err_num:[],validate:!0,apply_by:null,max_chars:"",initial_load:!0},e._new_opening=function(t){if(t.preventDefault(),e.setState({requesting:!0}),e.name.value.length<1)return e.setState({success:!1,err_num:[].concat(Object(n.a)(e.state.err_num),[0]),validate:!1,requesting:!1}),void console.log("This runs 0");if(e.brief.value.length<1)e.setState({success:!1,err_num:[].concat(Object(n.a)(e.state.err_num),[1]),validate:!1,requesting:!1});else if(e.stipend.value.length<1)e.setState({success:!1,err_num:[].concat(Object(n.a)(e.state.err_num),[2]),validate:!1,requesting:!1});else if(e.location.value.length<1)e.setState({success:!1,err_num:[].concat(Object(n.a)(e.state.err_num),[3]),validate:!1,requesting:!1});else if(null!==e.state.apply_by)if(null!==e.state.start_date)if(e.no_of_opening.value<=0||null===e.no_of_opening.value)e.setState({success:!1,err_num:[].concat(Object(n.a)(e.state.err_num),[6]),validate:!1,requesting:!1});else if(e.duration.value.length<1)e.setState({success:!1,err_num:[].concat(Object(n.a)(e.state.err_num),[7]),validate:!1,requesting:!1});else{if(!e.about_the_job.check_input())return e.setState({success:!1,err_num:[].concat(Object(n.a)(e.state.err_num),[8]),validate:!1,requesting:!1}),void console.log("This runs 2");if(!e.skills_required.check_input())return e.setState({success:!1,err_num:[].concat(Object(n.a)(e.state.err_num),[9]),validate:!1,requesting:!1}),void console.log("This runs 2");if(!e.who_can_apply.check_input())return e.setState({success:!1,err_num:[].concat(Object(n.a)(e.state.err_num),[10]),validate:!1,requesting:!1}),void console.log("This runs 2");if(!e.perks.check_input())return e.setState({success:!1,err_num:[].concat(Object(n.a)(e.state.err_num),[11]),validate:!1,requesting:!1}),void console.log("This runs 2");console.log(e.state.validate);var a="/iportal/job/",r=Object(u.b)().post;e.job_id&&(a="/iportal/job/".concat(e.job_id,"/"),r=Object(u.b)().put),r(a,{startup:e.props.auth.startup_id,name:e.name.value,stipend:e.stipend.value,location:e.location.value,no_of_opening:e.no_of_opening.value,job_type:e.job_type.value,duration:e.duration.value,apply_by:e.state.apply_by,start_date:e.state.start_date,brief:e.brief.value,about_the_job:e.about_the_job.get_value(),skills_required:e.skills_required.get_value(),who_can_apply:e.who_can_apply.get_value(),perks:e.perks.get_value()}).then((function(t){var a=t.data;console.log(a),e.props.history.goBack()})).catch((function(t){var a=t.response.data;console.log(a),e.setState({errors:a,requesting:!1})}))}else e.setState({success:!1,err_num:[].concat(Object(n.a)(e.state.err_num),[5]),validate:!1,requesting:!1});else e.setState({success:!1,err_num:[].concat(Object(n.a)(e.state.err_num),[4]),validate:!1,requesting:!1})},e._delete_opening=function(){Object(u.b)().delete("/iportal/job/".concat(e.job_id,"/")).then((function(t){e.props.history.goBack()}))},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.job_id?Object(u.b)().get("/iportal/job/".concat(this.job_id,"/")).then((function(t){var a=t.data;console.log(a),e.name.value=a.name,e.stipend.value=a.stipend,e.location.value=a.location,e.no_of_opening.value=a.no_of_opening,e.job_type.value=a.job_type,e.duration.value=a.duration,e.brief.value=a.brief,e.about_the_job.set_value(a.about_the_job),e.skills_required.set_value(a.skills_required),e.who_can_apply.set_value(a.who_can_apply),e.perks.set_value(a.perks),e.setState({apply_by:new Date(a.apply_by),start_date:new Date(a.start_date),initial_load:!1})})):this.setState({initial_load:!1})}},{key:"render",value:function(){var e=this,t={};Object.keys(this.state.errors).forEach((function(a){t[a]=e.state.errors[a].map((function(e,t){return c.a.createElement("div",{key:t,className:"text-danger"},e)}))}));var a=200-this.state.max_chars.length,n=a>=0?a:c.a.createElement("i",{className:"font-weight-bold text-danger"},"Limit exceeded");return c.a.createElement("div",{className:"jumbo container hoverable jumbotron",style:{marginTop:""}},c.a.createElement("div",null,c.a.createElement("button",{onClick:function(){return e.props.history.goBack()},className:"btn btn-info font-weight-bold"},"Go back"),c.a.createElement("h1",{className:"text-center open font-weight-bold flex-grow-1 my-5"},this.job_id?"Edit Work Profile":c.a.createElement(o.Fragment,null,c.a.createElement("div",null,"Create new work profile"),c.a.createElement("div",null,c.a.createElement("h6",null,c.a.createElement("i",{className:"font-weight-bold"},"(All fields are mandatory)"))))),this.job_id?c.a.createElement("button",{onClick:this._delete_opening,className:"btn btn-danger mb-4 font-weight-bold align-self-center",style:{position:"relative",left:"50%",transform:"translate(-50%,0)"}},"Delete"):null),this.state.initial_load?c.a.createElement("div",{className:"my-5"},c.a.createElement("h1",{className:"text-center"},c.a.createElement("i",{className:"fa fa-spinner fa-spin"}))):null,c.a.createElement("form",null,c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{className:"font-weight-bold"},"Work Profile Name"),c.a.createElement("input",{type:"text",ref:function(t){return e.name=t},className:"form-control"}),-1!=this.state.err_num.indexOf(0)&&0==this.state.validate&&0===this.name.value.length?c.a.createElement(o.Fragment,null,c.a.createElement("div",{className:"font-weight-bold text-danger"},"This field is required")):null),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",null,c.a.createElement("label",{className:"font-weight-bold"},"Brief"),"\xa0\xa0",c.a.createElement("i",null,"(Chars allowed: \xa0",n,")")),c.a.createElement("input",{onChange:function(t){return e.setState({max_chars:t.target.value})},type:"text",ref:function(t){return e.brief=t},className:"form-control"}),-1!=this.state.err_num.indexOf(1)&&0==this.state.validate&&0===this.brief.value.length?c.a.createElement(o.Fragment,null,c.a.createElement("div",{className:"font-weight-bold text-danger"},"This field is required")):null),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{className:"font-weight-bold"},"Stipend"),c.a.createElement("input",{type:"text",ref:function(t){return e.stipend=t},className:"form-control"}),-1!=this.state.err_num.indexOf(2)&&0==this.state.validate&&0===this.stipend.value.length?c.a.createElement(o.Fragment,null,c.a.createElement("div",{className:"font-weight-bold text-danger"},"This field is required")):null),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{className:"font-weight-bold"},"Location"),c.a.createElement("input",{type:"email",ref:function(t){return e.location=t},className:"form-control"}),-1!=this.state.err_num.indexOf(3)&&0==this.state.validate&&0===this.location.value.length?c.a.createElement(o.Fragment,null,c.a.createElement("div",{className:"font-weight-bold text-danger"},"This field is required")):null),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{className:"font-weight-bold"},"Apply by"),c.a.createElement(h.a,{isValidDate:_,value:this.state.apply_by,onChange:function(t){return e.setState({apply_by:t})}}),-1!=this.state.err_num.indexOf(4)&&0==this.state.validate&&null===this.state.apply_by?c.a.createElement(o.Fragment,null,c.a.createElement("div",{className:"font-weight-bold text-danger"},"This field is required")):null),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{className:"font-weight-bold"},"Start Date"),c.a.createElement(h.a,{isValidDate:_,value:this.state.start_date,onChange:function(t){return e.setState({start_date:t})}}),-1!=this.state.err_num.indexOf(5)&&0==this.state.validate&&null===this.state.start_date?c.a.createElement(o.Fragment,null,c.a.createElement("div",{className:"font-weight-bold text-danger"},"This field is required")):null),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{className:"font-weight-bold"},"No of Openings"),c.a.createElement("input",{type:"number",ref:function(t){return e.no_of_opening=t},className:"form-control"}),-1!=this.state.err_num.indexOf(6)&&0==this.state.validate&&(this.no_of_opening.value<=0||null===this.no_of_opening.value)?c.a.createElement(o.Fragment,null,c.a.createElement("div",{className:"font-weight-bold text-danger"},"This field is required with valid input")):null),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{className:"font-weight-bold"},"Duration"),c.a.createElement("input",{type:"text",ref:function(t){return e.duration=t},className:"form-control"}),-1!=this.state.err_num.indexOf(7)&&0==this.state.validate&&0===this.duration.value.length?c.a.createElement(o.Fragment,null,c.a.createElement("div",{className:"font-weight-bold text-danger"},"This field is required")):null),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{className:"mr-2 font-weight-bold d-inline-block"},"Job type"),c.a.createElement("select",{className:"form-control",ref:function(t){return e.job_type=t}},c.a.createElement("option",{value:"Internship"},"Internship"),c.a.createElement("option",{value:"Internship with job offer"},"Internship with job offer"),c.a.createElement("option",{value:"Full time employee"},"Full time employee"),c.a.createElement("option",{value:"Parttime"},"Part time"),c.a.createElement("option",{value:"Freelance"},"Freelance"))),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{className:"font-weight-bold"},"About the job"),c.a.createElement(d.a,{onRef:function(t){return e.about_the_job=t}}),-1==this.state.err_num.indexOf(8)||0!=this.state.validate||this.about_the_job.check_input()?null:c.a.createElement(o.Fragment,null,c.a.createElement("div",{className:"font-weight-bold text-danger"},"This field is required"))),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{className:"font-weight-bold"},"Skills required"),c.a.createElement(d.a,{onRef:function(t){return e.skills_required=t}}),-1==this.state.err_num.indexOf(9)||0!=this.state.validate||this.skills_required.check_input()?null:c.a.createElement(o.Fragment,null,c.a.createElement("div",{className:"font-weight-bold text-danger"},"This field is required"))),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{className:"font-weight-bold"},"Who can apply"),c.a.createElement(d.a,{onRef:function(t){return e.who_can_apply=t}}),-1==this.state.err_num.indexOf(10)||0!=this.state.validate||this.who_can_apply.check_input()?null:c.a.createElement(o.Fragment,null,c.a.createElement("div",{className:"font-weight-bold text-danger"},"This field is required"))),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{className:"font-weight-bold"},"Perks"),c.a.createElement(d.a,{onRef:function(t){return e.perks=t}}),-1==this.state.err_num.indexOf(11)||0!=this.state.validate||this.perks.check_input()?null:c.a.createElement(o.Fragment,null,c.a.createElement("div",{className:"font-weight-bold text-danger"},"This field is required"))),c.a.createElement("div",{className:"text-center"},c.a.createElement("div",null,0==this.state.validate?c.a.createElement("i",{className:"font-weight-bold text-danger"},"(Some fields are empty or invalid, recheck and try agin)"):null),c.a.createElement("button",{disabled:this.state.requesting,onClick:this._new_opening,className:"btn btn-primary font-weight-bold"},this.state.requesting?c.a.createElement("i",{className:"fa fa-spinner fa-spin"}):"submit"))))}}]),a}(o.Component);t.default=Object(m.b)((function(e){return e}))(b)},80:function(e,t,a){"use strict";a.d(t,"a",(function(){return p}));var n=a(11),r=a(12),l=a(14),i=a(13),s=a(0),o=a.n(s),c=(a(81),a(112),a(113)),u=a(87),m=a(117),d=a.n(m),f=a(118),h=a.n(f),p=function(e){Object(l.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,l=new Array(r),i=0;i<r;i++)l[i]=arguments[i];return(e=t.call.apply(t,[this].concat(l))).state={editorState:u.EditorState.createEmpty()},e.set_value=function(t){var a=h()(t);if(a){var n=u.ContentState.createFromBlockArray(a.contentBlocks),r=u.EditorState.createWithContent(n);e.setState({editorState:r})}},e.get_value=function(){return d()(Object(u.convertToRaw)(e.state.editorState.getCurrentContent()))},e.check_input=function(){return e.state.editorState.getCurrentContent().hasText()},e}return Object(r.a)(a,[{key:"componentDidMount",value:function(){this.props.onRef(this)}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"wysiwyg"},o.a.createElement(c.Editor,{editorState:this.state.editorState,toolbarClassName:"toolbarClassName",wrapperClassName:"wrapperClassName",editorClassName:"editorClassName",onEditorStateChange:function(t){return e.setState({editorState:t})}}))}}]),a}(s.Component)},81:function(e,t,a){}}]);
//# sourceMappingURL=42.6f816438.chunk.js.map