(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[37],{49:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var n=a(74),r=a.n(n),o=a(34),s="https://ecell.nitrr.ac.in";s="",t.b=function(){var e=void 0,t=o.store.getState().auth;return t&&(e=t.loggedin?t.token:void 0),r.a.create({baseURL:s,headers:{Authorization:e,Access:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbGllbnQiOiJhbmRyb2lkIiwib3JnYW5pemF0aW9uIjoiRUNlbGwifQ.H2aaDJuOxK44D2kwRCWwv9s5rzJGCNYKT3thtQqN-hQ"}})}},552:function(e,t,a){"use strict";a.r(t);var n=a(11),r=a(12),o=a(14),s=a(13),i=a(0),l=a.n(i),c=a(49),u=a(25),p=a(61),d=(a(79),function(e){Object(o.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,o=new Array(r),s=0;s<r;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).job_id=Number(e.props.match.params.job_id),e.state={uploading:!1,loading:!1,job_detail:{},progress:0,file:null,validate:!0,err_num:[],error:!1,check:!1},e._upload_application=function(t){if(t.preventDefault(),e.setState({uploading:!0,loading:!0,error:!1}),e.college.value.length<1)return e.setState({error:!0,uploading:!1,loading:!1}),void console.log("This runs 2");if(e.ques1.value.length<1)return e.setState({error:!0,uploading:!1,loading:!1}),void console.log("This runs 2");if(e.ques2.value.length<1)e.setState({error:!0,uploading:!1,loading:!1});else{var a=new FormData,n=new XMLHttpRequest;a.append("resume",e.resume.files[0]),a.append("college",e.college.value),a.append("ques1",e.ques1.value),a.append("ques2",e.ques2.value),a.append("job",e.job_id),a.append("applicant",e.props.auth.id),n.addEventListener("load",(function(t){var a=JSON.parse(t.target.response);e.setState({uploading:!1,progress:0}),a.id?e.props.history.goBack():e.setState({error:!0})})),n.upload.addEventListener("progress",(function(t){var a=Math.round(t.loaded/t.total*100);console.log({progress:a}),100===a&&e.setState({loading:!1,check:!0}),e.setState({progress:a})})),n.open("post",c.a+"/iportal/job_application/"),n.setRequestHeader("Authorization",e.props.auth.token),n.send(a),e.setState({uploading:!1})}},e}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this;Object(c.b)().get("/iportal/job/".concat(this.job_id,"/")).then((function(t){var a=t.data;console.log(a),e.setState({job_detail:a})}))}},{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement("div",{className:"container jumbotron"},l.a.createElement("div",null,l.a.createElement("button",{onClick:function(){return e.props.history.goBack()},className:"btn align-self-center font-weight-bold btn-primary"},"Go Back")),l.a.createElement("h1",{className:"mt-5 jb_app font-weight-bold text-center",style:{paddingTop:"-40px"}},"Job Application"),l.a.createElement("h2",{className:"mt-4 jb_apps font-weight-bold text-center"},this.state.job_detail.name," (",this.state.job_detail.job_type,")"),l.a.createElement("div",{className:"text-center font-weight-bold my-5"},"Upload your Resume : ",l.a.createElement("input",{className:"btn btn-success text-center font-weight-bold",ref:function(t){return e.resume=t},type:"file"})," ",l.a.createElement("span",{className:"font-weight-bold"},this.state.progress?"".concat(this.state.progress,"%"):null)),this.state.uploading?l.a.createElement("span",null,this.state.progress?l.a.createElement(i.Fragment,null,l.a.createElement("div",{class:"progress md-progress",style:"height: 20px"},l.a.createElement("div",{class:"progress-bar",role:"progressbar",style:{width:"".concat(this.state.progress,"%"),height:"20px"},"aria-valuemin":"0","aria-valuemax":"100"},this.state.progress,"%"))):null):null,l.a.createElement("div",{className:"font-weight-bold my-4"},"College Name"),l.a.createElement("input",{type:"text",ref:function(t){return e.college=t},className:"form-control"}),l.a.createElement("div",{className:"font-weight-bold my-4"},"How you are suitable for this job?"),l.a.createElement("textarea",{className:"form-control",id:"exampleFormControlTextarea1",rows:"12",ref:function(t){return e.ques1=t}}),l.a.createElement("div",{className:"font-weight-bold my-4"},"During what timeframe you are available for the job?"),l.a.createElement("textarea",{className:"form-control",id:"exampleFormControlTextarea1",rows:"12",ref:function(t){return e.ques2=t}}),l.a.createElement("div",{className:"text-center"},l.a.createElement("div",{className:"text center text-danger"},this.state.error?"Please ensure that all questions are answered and resume file selected for upload.":null),l.a.createElement("button",{onClick:this._upload_application,type:"submit",className:"btn font-weight-bold my-4 btn-primary"},this.state.loading?l.a.createElement("i",{className:"fa fa-spinner fa-spin"}):this.state.check?"Redirecting..":"Submit"))))}}]),a}(i.Component));t.default=Object(u.b)((function(e){return e}),p)(d)},79:function(e,t,a){"use strict";a.d(t,"a",(function(){return g}));var n=a(11),r=a(12),o=a(14),s=a(13),i=a(0),l=a.n(i),c=(a(80),a(111),a(112)),u=a(86),p=a(116),d=a.n(p),m=a(117),h=a.n(m),g=function(e){Object(o.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,o=new Array(r),s=0;s<r;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).state={editorState:u.EditorState.createEmpty()},e.set_value=function(t){var a=h()(t);if(a){var n=u.ContentState.createFromBlockArray(a.contentBlocks),r=u.EditorState.createWithContent(n);e.setState({editorState:r})}},e.get_value=function(){return d()(Object(u.convertToRaw)(e.state.editorState.getCurrentContent()))},e.check_input=function(){return e.state.editorState.getCurrentContent().hasText()},e}return Object(r.a)(a,[{key:"componentDidMount",value:function(){this.props.onRef(this)}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"wysiwyg"},l.a.createElement(c.Editor,{editorState:this.state.editorState,toolbarClassName:"toolbarClassName",wrapperClassName:"wrapperClassName",editorClassName:"editorClassName",onEditorStateChange:function(t){return e.setState({editorState:t})}}))}}]),a}(i.Component)},80:function(e,t,a){}}]);
//# sourceMappingURL=37.953ba6b9.chunk.js.map