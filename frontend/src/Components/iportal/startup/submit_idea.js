import React, { Component, Fragment } from 'react'
import faxios, { baseURL } from '../../../axios'
import UploadLogo from './upload_logo'
import './dashboard.scss'

import {professions} from '../../constants'
import {education_status} from '../../constants'

import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Wysiwyg from '../../common/wysiwyg'

//idea in a nutshell less thn 30 characters

class submitIdea extends Component {
    isEdit = this.props.location.pathname.indexOf('edit_idea') > -1
    
    state = {
        uploading:false,
        progress:0,
        validate:true,
        errors: {},
        err_num:[],
        requesting: false,
        success: false,
        startup: {},
        pfsn:"",
        course:"",
        branch:"",
        semester:"",
        max_chars:"",
        email_check:true,
        contact_check:true
    }

    static propTypes = {
        auth: PropTypes.object.isRequired,
    }


    componentDidMount() {
        if(this.isEdit){
            faxios().get(`/iportal/startup/${this.props.auth.startup_id}/`)
                .then(d=>{
                    const data=d.data 
                    console.log(data,"running")

                    this.idea.value = data.idea_in_a_nut_shell
                    this.benef.value = data.beneficiaries
                    if(data.ideator_designation==="student"){
                        this.sector.value="Student"
                        this.course.value=data.course
                        this.branch.value=data.value
                        this.semester.value=data.semester
                    }else if(data.ideator_designation==="faculty"){
                        this.sector.value="Faculty"   
                    }else{
                        this.sector.value="Select"  
                    }
                    this.description.set_value(data.describe_idea)
                    this.ep.value=data.end_product
                    this.mn.value=data.mentor_name
                    this.dg.value=data.mentor_designation
                    this.innovation=data.innovation_in_this
                })
        }
    }
    

    _register_idea = e => {
        e.preventDefault()

        this.setState({
            requesting: true
        })

        if(this.idea.value.length<1){
            this.setState({
                success:false,
                err_num:[...this.state.err_num,0],
                validate:false,
                requesting:false
            })

            

            console.log("This runs 0")

            return
        }

        if(this.idea.value.length>30){
            this.setState({
                success:false,
                err_num:[...this.state.err_num,1],
                validate:false,
                requesting:false
            })
            return
        }

        if(this.description.get_value().length<9){
            this.setState({
                success:false,
                err_num:[...this.state.err_num,2],
                validate:false,
                requesting:false
            })

            console.log("This runs 2")
            return
        }

        if(this.innovation.get_value().length<9){
            this.setState({
                success:false,
                err_num:[...this.state.err_num,3],
                validate:false,
                requesting:false
            })
            return
        }

        if(this.ep.value.length<1){
            this.setState({
                success:false,
                err_num:[...this.state.err_num,4],
                validate:false,
                requesting:false
            })
            return
        }

        if(this.benef.value.length<1){
            this.setState({
                success:false,
                err_num:[...this.state.err_num,5],
                validate:false,requesting:false
            })
            return
        }

        if(this.sector.value==="Select"){
            this.setState({
                success:false,
                err_num:[...this.state.err_num,6],
                validate:false,
                requesting:false
            })
            return
        }



        if(this.sector.value==="Student" && this.mn.value.length<1 ){
            this.setState({
                success:false,
                err_num:[...this.state.err_num,7],
                validate:false,
                requesting:false
            })
            return
        }

        if(this.sector.value==="Student" && this.dg.value.length<1 ){
            this.setState({
                success:false,
                err_num:[...this.state.err_num,8],
                validate:false,
                requesting:false
            })
            return
        }


        if(this.sector.value==="Student") {
            if(this.course.value==="Select"){
                this.setState({
                    success:false,
                    err_num:[...this.state.err_num,13],
                    validate:false,
                    requesting:false
                })
                return
            }
    
            if(this.branch.value==="Select"){
                this.setState({
                    success:false,
                    err_num:[...this.state.err_num,14],
                    validate:false,
                    requesting:false
                })
                return
            }
    
            if(this.semester.value==="Select"){
                this.setState({
                    success:false,
                    err_num:[...this.state.err_num,15],
                    validate:false,
                    requesting:false
                })
                return
            }
        }

        if(this.email.value.length<1){
            this.setState({
                success:false,
                err_num:[...this.state.err_num,11],
                validate:false,
                requesting:false
            })
            return
        }

        

        let email_value= this.email.value

        let verify_email=(email)=>{
            let re = /\S+@\S+\.\S+/;
            return re.test(String(email).toLowerCase());
        }

        if(verify_email(email_value)===false){
            this.setState({
                success:false,
                err_num:[...this.state.err_num,12],
                validate:false,
                requesting:false
            })
            return
        }

        if(verify_email(email_value)===true){
            this.setState({
                email_check:false
            })
        }

        if(this.contact.value.length<1){
            this.setState({
                success:false,
                err_num:[...this.state.err_num,9],
                validate:false,
                requesting:false
            })
            return
        }

        let contact_value = this.contact.value

        let verify_contact = (contact) =>{

            let re = /^[0][1-9]\d{9}$|^[1-9]\d{9}$/;
            return re.test(String(contact));
        }

        if(verify_contact(contact_value)===false){
            this.setState({
                success:false,
                err_num:[...this.state.err_num,10],
                validate:false,
                requesting:false
            })
            return
        }

        if(verify_contact(contact_value)===true){
            this.setState({
                contact_check:false
            })
        }

        

        let reqType = faxios().post
        let url = '/iportal/startup/'
        
        // if(this.props.auth.startup_id){
        //     reqType= faxios().put
        //     url = `/iportal/startup/${this.props.auth.startup_id}/`
        // }

        reqType(url, {
            'idea_in_a_nut_shell': this.idea.value,
            'beneficiaries': this.benef.value,
            'describe_idea': this.description.get_value(),
            'ideator_designation': this.sector.value==="Student"?"student":"faculty",
            'end_product':this.ep.value,
            'email':this.email.value,
            'course':this.state.pfsn==="Student"?this.course.value:"",
            'branch':this.state.pfsn==="Student"?this.branch.value:"",
            'semester':this.state.pfsn==="Student"?this.semester.value:"",
            'contact':this.contact.value,
            'mentor_name':this.state.pfsn==="Student"?this.mn.value:"",
            'mentor_designation':this.state.pfsn==="Student"?this.dg.value:"",
            'innovation_in_this':this.innovation.get_value(),
            user: this.props.auth.id
        }).then(d => {
            const data = d.data
            console.log(data)
            this.setState({
                requesting:false
            })
            if(this.isEdit){
                this.props.history.goBack()
            }else{
                this.setState({ success: true, requesting: false })
            }
        }).catch(d => {
            let data = d.response.data
            console.log(data)
            this.setState({ errors: data, requesting: false })

            if (data.user) {
                alert('your startup is already registered')
                this.props.history.push('/startups')
            }
        })
    }

    // _upload_application = (e) => {
    //     e.preventDefault()
    //     this.setState({
    //         uploading: true
    //     })

    //     var data = new FormData();
    //     var request = new XMLHttpRequest();


    //     data.append('startup_plan_file', this.resume.files[0])
    //     data.append('idea_in_a_nut_shell', this.idea.value)
    //     data.append('beneficiaries', this.benef.value)
    //     data.append('describe_idea', this.description.get_value())
    //     data.append('ideator_designation',this.sector.value==="Student"?"student":"faculty")
    //     data.append('end_product',this.ep.value)
    //     data.append('mentor_name',this.mn.value)
    //     data.append('mentor_designation',this.dg.value)
    //     data.append('innovation_in_this',this.innovation.get_value())


    //     // load event
    //     request.addEventListener('load', (e) => {
    //         const data = JSON.parse(e.target.response)

    //         this.setState({
    //             uploading: false,
    //             progress: 0
    //         })

    //         if(data.id){
    //             //this.props.history.goBack()
    //             this.setState({success:true})
    //         }else{
                // this.setState({error:true})
    //             console.log(this.state.error)
    //         }
    //     });

    //     // monitor progress of upload
    //     request.upload.addEventListener('progress', (e) => {
    //         var progress = Math.round((e.loaded / e.total) * 100)
    //         console.log({ progress })

    //         this.setState({ progress })
    //     })



    //     request.open('post', baseURL + `/iportal/startup/${this.props.auth.startup_id}/`);
    //     request.setRequestHeader('Authorization', this.props.auth.token)
    //     request.send(data);
    //     this.setState({ uploading: false })




    // }


    _reset_form = e => {
        e.preventDefault()
        this.setState({max_chars:""})
        this.idea.value = ''
        this.benef.value = ''
        this.sector.value = ''
        this.description.set_value('')
        this.innovation.set_value('')
        this.email.value=''
        this.contact.value=''
        this.ep.value=''
        if(this.sector.value==="Student"){
            this.mn.value=''
            this.dg.value=''
            this.course.value=''
            this.branch.value=''
            this.semester.value=''    
        }
        
    }




    render() {

        let sector_options = professions.map(sectors =>(
            <option value={sectors}>{sectors}</option>
        ))

        let education_options_course = education_status.map(edu =>(
            <option value={edu.course}>{edu.display_name}</option>
        ))

        let education_options_branch = education_status.map(edu =>(
            this.state.course === edu.course ? edu.branch.map(dept => (
                <option value={dept.name}>{dept.display_name}</option>
            )) : null           
        ))

        let education_options_semester = education_status.map(edu =>(
            this.state.course === edu.course ? edu.branch.map(branch => (
                this.state.branch === branch.name ? branch.semester.map(sem => (
                    <option value={sem}>{sem}</option>
                )) : null
            )) : null           
        ))


        if (this.state.success) {
            return (
                <div>
                    <h2 className="mt-5 text-center">Successfully submited the idea for verification</h2>
                    <h4 className="text-center mt-3">You will receive confirmation by E-mail and SMS once the verification is complete.</h4>
                    <div className="text-center">
                        <button className="btn btn-primary mt-5" onClick={() => this.props.history.push('/startups')}>Go to homepage</button>
                    </div>
                </div>
            )
        }

        let error_html = {}
        Object.keys(this.state.errors).forEach((key) => {
            error_html[key] = this.state.errors[key].map((ele, i) =>
                <div key={i} className="text-danger">{ele}</div>
            )
        })

        let char_size=30-this.state.max_chars.length

        let idea_size_text=char_size>=0?char_size:<i className="font-weight-bold text-danger">Limit exceeded</i>;
    
        

        // if(this.state.max_chars.length===30){
        //     document.getElementById("idea").disabled=true;
        // }

        

        return (
            <div className="reg-pad">
                <div className='container hoverable jumbotron' >

                <div className="">
                    <button onClick={() => this.props.history.goBack()} className="btn font-weight-bold btn-primary">Go Back</button>
                </div>

                <div>
                    <div className="open text-center font-weight-bold my-5">
                        <h1 className="font-weight-bold">{this.isEdit?'Edit Idea' :'Submit Idea'}</h1>
                        <h6 className="font-weight-bold"><i>(All fields are mandatory)</i></h6>
                    </div>

                    {/* <div className="text-center">
                        <UploadLogo />
                    </div> */}

                    <form>
                        <div className="form-group">
                            <label><label className="font-weight-bold">Idea in a Nutshell</label>&nbsp;&nbsp;<i>(Chars allowed: &nbsp;{idea_size_text})</i></label>
                            <input id="idea" type="text" onChange={(e) => this.setState({max_chars: e.target.value})} ref={ele => this.idea = ele} className="form-control" />
                            {/* {error_html['idea']} */}
                            {this.state.err_num.indexOf(0)!=-1 && this.state.validate==false && this.idea.value.length===0 ?<Fragment>
                                <div className="font-weight-bold text-danger">This field is required with maximum 30 characters</div>
                            </Fragment>:null}
                            {this.state.err_num.indexOf(1)!=-1 && this.state.validate==false && this.idea.value.length>30 ?<Fragment>
                                <div className="font-weight-bold text-danger">This field is required with maximum 30 characters</div>
                            </Fragment>:null}
    
                        </div>
                        <div className="form-group">
                            <label className="font-weight-bold">Describe Your Idea</label>
                            {/* {error_html['description']} */}
                            <Wysiwyg onRef={ref => this.description = ref} />
                            {this.state.err_num.indexOf(2)!=-1 && this.state.validate==false && this.description.get_value().length===8?<Fragment>
                                <div className="font-weight-bold text-danger">This field is required</div>
                            </Fragment>:null}
                        </div>

                        <div className="form-group">
                            <label className="font-weight-bold">Innovation in this idea?</label>
                            {/* {error_html['innovation']} */}
                            <Wysiwyg onRef={ref => this.innovation = ref} />
                            {this.state.err_num.indexOf(3)!=-1 && this.state.validate==false && this.innovation.get_value().length===8?<Fragment>
                                <div className="font-weight-bold text-danger">This field is required</div>
                            </Fragment>:null}
                        </div>

                        <div className="form-group">
                            <label className="font-weight-bold">End Product</label>
                            <input type="text" ref={ele => this.ep = ele} className="form-control" />
                            {/* {error_html['ep']} */}

                            {this.state.err_num.indexOf(4)!=-1 && this.state.validate==false && this.ep.value.length===0?<Fragment>
                                <div className="font-weight-bold text-danger">This field is required</div>
                            </Fragment>:null}
                        </div>
                        <div className="form-group">
                            <label className="font-weight-bold">Beneficiaries</label>
                            <input type="text" ref={ele => this.benef = ele} required className="form-control" />
                            {this.state.err_num.indexOf(5)!=-1 && this.state.validate==false && this.benef.value.length===0?<Fragment>
                                <div className="font-weight-bold text-danger">This field is required</div>
                            </Fragment>:null}
                            {/* {error_html['benef']} */}
                        </div>
                     
                        <div className="form-group">
                            <label ><span className="font-weight-bold">Registration Ideator</span>*&nbsp;</label>
                            <select className="form-control" onChange={(e) => this.setState({pfsn: e.target.value})} ref={ele => this.sector = ele}>
                                {sector_options}
                            </select>

                            {this.state.err_num.indexOf(6)!=-1 && this.state.validate==false && this.sector.value==="Select"?<Fragment>
                                <div className="font-weight-bold text-danger">This field is required</div>
                            </Fragment>:null}
                            {/* {error_html['sector']} */}
                        </div>
                        
                        {this.state.pfsn==="Student"?
                        <Fragment>
                            <div className="form-group">
                                <label className="font-weight-bold">Mentor Name</label>
                                <input type="text" ref={ele => this.mn = ele} required maxLength="40" className="form-control" />
                                {this.state.err_num.indexOf(7)!=-1 && this.state.validate==false && this.mn.value.length===0?<Fragment>
                                    <div className="font-weight-bold text-danger">This field is required</div>
                                </Fragment>:null}
                                {/* {error_html['mn']} */}
                            </div>
                            <div className="form-group">
                                <label className="font-weight-bold">Designation of Mentor</label>
                                <input type="text" ref={ele => this.dg = ele} required maxLength="40" className="form-control" />
                                {this.state.err_num.indexOf(8)!=-1 && this.state.validate==false && this.dg.value.length===0?<Fragment>
                                    <div className="font-weight-bold text-danger">This field is required</div>
                                </Fragment>:null}
                                {/* {error_html['dg']} */}
                            </div>
                            <div className="form-group">
                                <label ><span className="font-weight-bold">Course</span>*&nbsp;</label>
                                <select className="form-control" onChange={(e) => this.setState({course: e.target.value})} ref={ele => this.course = ele}>
                                    <option value="Select">Select</option>
                                    {education_options_course}
                                </select>
                                {this.state.err_num.indexOf(13)!=-1 && this.state.validate==false && this.course.value==="Select"?<Fragment>
                                    <div className="font-weight-bold text-danger">This field is required</div>
                                </Fragment>:null}
                            </div>
                            <div className="form-group">
                                <label ><span className="font-weight-bold">Branch</span>*&nbsp;</label>
                                <select className="form-control" onChange={(e) => this.setState({branch: e.target.value})} ref={ele => this.branch = ele}>
                                    <option value="Select">Select</option>
                                    {education_options_branch}
                                </select>
                                {this.state.err_num.indexOf(14)!=-1 && this.state.validate==false && this.branch.value==="Select"?<Fragment>
                                    <div className="font-weight-bold text-danger">This field is required</div>
                                </Fragment>:null}
                            </div>
                            <div className="form-group">
                                <label ><span className="font-weight-bold">Semester</span>*&nbsp;</label>
                                <select className="form-control" onChange={(e) => this.setState({semester: e.target.value})} ref={ele => this.semester = ele}>
                                    <option value="Select">Select</option>
                                    {education_options_semester}
                                </select>
                                {this.state.err_num.indexOf(15)!=-1 && this.state.validate==false && this.semester.value==="Select"?<Fragment>
                                    <div className="font-weight-bold text-danger">This field is required</div>
                                </Fragment>:null}
                            </div>
                        </Fragment>:<div></div>}

                        {/* <div className="text-center font-weight-bold my-5">
                        Upload your idea(PDF) : <input className="btn btn-success text-center font-weight-bold" ref={ele => this.resume = ele} type="file" /> <span className="font-weight-bold">{this.state.progress? `${this.state.progress}%`:null}</span>   
                        </div>

                    {this.state.uploading ?
                        <span>
                            {this.state.progress ? <Fragment>
                                <div class="progress md-progress" style="height: 20px">
                                    <div class="progress-bar" role="progressbar" style={{ width: `${this.state.progress}%`, height: "20px" }} aria-valuemin="0" aria-valuemax="100">{this.state.progress}%</div>
                                </div>
                            </Fragment> : null}
                        </span>
                        :
                        null} */}

                        <div className="form-group">
                            <label className="font-weight-bold">Email</label>
                            <input type="mail" ref={ele => this.email = ele} required className="form-control" />
                            {this.state.err_num.indexOf(11)!=-1 && this.state.validate==false && this.email.value.length===0?<Fragment>
                                <div className="font-weight-bold text-danger">This field is required</div>
                            </Fragment>:null}

                            {this.state.err_num.indexOf(12)!=-1 && this.state.validate==false && this.email.value.length!==0 &&this.state.email_check?<Fragment>
                                <div className="font-weight-bold text-danger">Email provided is invalid</div>
                            </Fragment>:null}
                            {/* {error_html['email']} */}
                        </div>

                        <div className="form-group">
                            <label className="font-weight-bold">Contact</label>
                            <input type="text" ref={ele => this.contact = ele} required className="form-control" />
                            {this.state.err_num.indexOf(9)!=-1 && this.state.validate==false && this.contact.value.length===0?<Fragment>
                                <div className="font-weight-bold text-danger">This field is required</div>
                            </Fragment>:null}
                            {this.state.err_num.indexOf(10)!=-1 && this.state.validate==false && this.contact.value.length!==0 && this.state.contact_check?<Fragment>
                                <div className="font-weight-bold text-danger">Contact is invalid</div>
                            </Fragment>:null}
                            {/* {error_html['contact']} */}
                        </div>

                        <div className="text-center">
                        {/* <button onClick={this._upload_application} disabled={this.state.uploading || this.state.success} type="submit" className="btn font-weight-bold my-4 btn-primary">{this.state.uploading ? <i className="fa fa-spinner fa-spin"></i> : 'Submit'}</button> */}
                            
                            <div>
                            {this.state.validate==false?<Fragment><i className="font-weight-bold text-danger">(Some fields are empty or invalid, recheck and try again)</i></Fragment>:null}
                            </div>
                            <button disabled={this.state.requesting || this.state.success} onClick={this._register_idea} className="btn font-weight-bold btn-primary">{this.state.requesting ? <i className="fa fa-spinner fa-spin"></i> : 'submit'}</button>
                            <button onClick={this._reset_form} className="btn font-weight-bold btn-danger">reset</button>
                        </div>
                    </form>

                    
                </div>
            </div>
            </div>
        )
    }
}




const mapStateToProps = (state) => state

export default connect(mapStateToProps)(submitIdea)
