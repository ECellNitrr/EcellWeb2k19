import React, { Component ,Fragment} from 'react'
import faxios, { baseURL } from '../../../axios'
import UploadLogo from './upload_logo'
import './dashboard.scss'

import {job_sectors} from '../../constants'

import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Wysiwyg from '../../common/wysiwyg'


class RegisterStartup extends Component {
    isEdit = this.props.location.pathname.indexOf('edit') > -1
    
    state = {
        errors: {},
        requesting: false,
        success: false,
        startup: {},
        validate:true,
        err_num:[],
        email_check:true,
        contact_check:true
    }

    static propTypes = {
        auth: PropTypes.object.isRequired,
    }


    componentDidMount() {
        
            faxios().get(`/iportal/startup/${this.props.auth.startup_id}/`)
                .then(d=>{
                    const data=d.data 

                    this.setState({startup:data})
                    console.log(data,"running")

                    this.name.value = data.name
                    this.email.value = data.email
                    this.contact.value = data.contact
                    this.brief.value = data.brief
                    this.sector.value = data.sector
                    this.address1.value = data.address1
                    this.address2.value = data.address2
                    this.district.value = data.district
                    this.lstate.value = data.state
                    this.country.value = data.country
                    this.description.set_value(data.description)
                })
        
    }
    

    _register_startup = e => {
        e.preventDefault()

        this.setState({
            requesting: true
        })

        if(this.name.value.length<1){
            this.setState({
                success:false,
                err_num:[...this.state.err_num,0],
                validate:false,
                requesting: false
            })

            

            console.log("This runs 0")

            return
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

        if(this.brief.value.length<1){
            this.setState({
                success:false,
                err_num:[...this.state.err_num,1],
                validate:false,
                requesting: false
            })
            return
        }

       

        if(!this.description.check_input()){
            this.setState({
                success:false,
                err_num:[...this.state.err_num,2],
                validate:false,
                requesting: false
            })

            console.log("This runs 2")
            return
        }

        if(this.sector.value==="" ){
            this.setState({
                success:false,
                err_num:[...this.state.err_num,6],
                validate:false,
                requesting: false
            })
            return
        }

        if(this.address1.value.length<1 ){
            this.setState({
                success:false,
                err_num:[...this.state.err_num,3],
                validate:false,
                requesting: false
            })
            return
        }

        if(this.district.value.length<1 ){
            this.setState({
                success:false,
                err_num:[...this.state.err_num,4],
                validate:false,
                requesting: false
            })
            return
        }

        if(this.lstate.value.length<1 ){
            this.setState({
                success:false,
                err_num:[...this.state.err_num,15],
                validate:false,
                requesting: false
            })
            return
        }

        if(this.country.value.length<1 ){
            this.setState({
                success:false,
                err_num:[...this.state.err_num,16],
                validate:false,
                requesting: false
            })
            return
        }

        
        

        let reqType = faxios().post
        let url = '/iportal/startup/'
        
        if(this.props.auth.startup_id){
            reqType= faxios().put
            url = `/iportal/startup/${this.props.auth.startup_id}/`
        }

        reqType(url, {
            'name': this.name.value,
            'email': this.email.value,
            'contact': this.contact.value,
            'brief': this.brief.value,
            'description': this.description.get_value(),
            'sector': this.sector.value,
            'address1': this.address1.value,
            'address2': this.address2.value,
            'district': this.district.value,
            'state': this.lstate.value,
            'country': this.country.value,
            user: this.props.auth.id
        }).then(d => {
            const data = d.data
            console.log(data)

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


    _reset_form = e => {
        e.preventDefault()
        this.name.value = ''
        this.email.value = ''
        this.contact.value = ''
        this.brief.value = ''
        this.sector.value = ''
        this.address1.value = ''
        this.address2.value = ''
        this.district.value = ''
        this.lstate.value = ''
        this.country.value = ''

        this.description.set_value('')
    }




    render() {

        let sector_options = job_sectors.map(sectors =>(
            <option value={sectors}>{sectors}</option>
        ))

        if (this.state.success && !this.state.startup.can_hire_interns) {
            return (
                <div>
                    <h2 className="mt-5 text-center">Successfully submited for verification</h2>
                    <h4 className="text-center mt-3">You will receive confirmation by E-mail and SMS once the verification is complete.</h4>
                    <div className="text-center">
                        <button className="btn btn-primary mt-5" onClick={() => this.props.history.goBack()}>Go to homepage</button>
                    </div>
                </div>
            )
        }

        if (this.state.success && this.state.startup.can_hire_interns) {
            return (
                <div>
                    <h2 className="mt-5 text-center font-weight-bold">Successfully edited the details!!</h2>
                    {/* <h4 className="text-center mt-3">You will receive confirmation by E-mail and SMS once the verification is complete.</h4> */}
                    <div className="text-center">
                        <button className="btn btn-primary mt-5" onClick={() => this.props.history.goBack()}>Go to homepage</button>
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


        return (
            <div className="reg-pad">
                <div className='container hoverable jumbotron' >

                <div className="">
                    <button onClick={() => this.props.history.push("/internship/idea/")} className="btn font-weight-bold btn-primary">Go Back</button>
                </div>

                <div>
                    <h1 className="open text-center font-weight-bold my-5">
                        {this.isEdit?'Edit Startup Profile' :<Fragment>
                                <div className="font-weight-bold">Startup Profile</div>
                                <h6><i className="font-weight-bold">(All fields are mandatory)</i></h6>
                            </Fragment>}
                    </h1>

                    <div className="text-center">
                        <UploadLogo />
                    </div>

                    <form>
                        <div className="form-group">
                            <label className="font-weight-bold">Name</label>
                            <input type="text" ref={ele => this.name = ele} className="form-control" />
                            {this.state.err_num.indexOf(0)!=-1 && this.state.validate==false && this.name.value.length===0 ?<Fragment>
                                <div className="font-weight-bold text-danger">This field is required</div>
                            </Fragment>:null}
                            {/* {error_html['name']} */}
                        </div>
                        <div className="form-group">
                            <label className="font-weight-bold">Email</label>
                            <input type="email" ref={ele => this.email = ele} className="form-control" />
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
                            <input type="text" ref={ele => this.contact = ele} className="form-control" />
                            {/* {error_html['contact']} */}

                            {this.state.err_num.indexOf(9)!=-1 && this.state.validate==false && this.contact.value.length===0?<Fragment>
                                <div className="font-weight-bold text-danger">This field is required</div>
                            </Fragment>:null}
                            {this.state.err_num.indexOf(10)!=-1 && this.state.validate==false && this.contact.value.length!==0 && this.state.contact_check?<Fragment>
                                <div className="font-weight-bold text-danger">Contact is invalid</div>
                            </Fragment>:null}
                        </div>
                        <div className="form-group">
                            <label className="font-weight-bold">Brief</label>
                            <input type="text" ref={ele => this.brief = ele} className="form-control" />
                            {this.state.err_num.indexOf(1)!=-1 && this.state.validate==false && this.brief.value.length===0 ?<Fragment>
                                <div className="font-weight-bold text-danger">This field is required</div>
                            </Fragment>:null}
                            {/* {error_html['brief']} */}
                        </div>
                        <div className="form-group">
                            <label className="font-weight-bold">Description</label>
                            {/* {error_html['description']} */}
                            <Wysiwyg onRef={ref => this.description = ref} />
                            {this.state.err_num.indexOf(2)!=-1 && this.state.validate==false && this.description.get_value().length===8?<Fragment>
                                <div className="font-weight-bold text-danger">This field is required</div>
                            </Fragment>:null}
                        </div>
                        <div className="form-group">
                            <label ><span className="font-weight-bold">Sector</span>*&nbsp; <i>(eg: technical, education)</i></label>
                            <select className="form-control" ref={ele => this.sector = ele}>
                                {sector_options}
                            </select>

                            {this.state.err_num.indexOf(6)!=-1 && this.state.validate==false && this.sector.value===""?<Fragment>
                                <div className="font-weight-bold text-danger">This field is required</div>
                            </Fragment>:null}
                            {/* {error_html['sector']} */}
                        </div>
                        <div className="form-group">
                            <label className="font-weight-bold">Address line 1</label>
                            <input type="text" ref={ele => this.address1 = ele} className="form-control" />
                            {this.state.err_num.indexOf(3)!=-1 && this.state.validate==false && this.address1.value.length===0?<Fragment>
                                <div className="font-weight-bold text-danger">This field is required</div>
                            </Fragment>:null}
                            {/* {error_html['address1']} */}
                        </div>
                        <div className="form-group">
                            <label className="font-weight-bold">Address line 2</label>
                            <input type="text" ref={ele => this.address2 = ele} className="form-control" />
                            {/* {error_html['address2']} */}
                        </div>
                        <div className="form-group">
                            <label className="font-weight-bold">District</label>
                            <input type="text" ref={ele => this.district = ele} className="form-control" />
                            {this.state.err_num.indexOf(4)!=-1 && this.state.validate==false && this.district.value.length===0?<Fragment>
                                <div className="font-weight-bold text-danger">This field is required</div>
                            </Fragment>:null}
                            {/* {error_html['district']} */}
                        </div>
                        <div className="form-group">
                            <label className="font-weight-bold">State</label>
                            <input type="text" ref={ele => this.lstate = ele} className="form-control" />
                            {this.state.err_num.indexOf(15)!=-1 && this.state.validate==false && this.lstate.value.length===0?<Fragment>
                                <div className="font-weight-bold text-danger">This field is required</div>
                            </Fragment>:null}
                            {/* {error_html['district']} */}
                            {/* {error_html['state']} */}
                        </div>
                        <div className="form-group">
                            <label className="font-weight-bold">Country</label>
                            <input type="text" ref={ele => this.country = ele} className="form-control" />
                            {this.state.err_num.indexOf(16)!=-1 && this.state.validate==false && this.country.value.length===0?<Fragment>
                                <div className="font-weight-bold text-danger">This field is required</div>
                            </Fragment>:null}
                            {/* {error_html['country']} */}
                        </div>

                        <div className="text-center">
                            {this.state.validate==false?<div><i className="font-weight-bold text-danger">(Some fields are empty or invalid, recheck and try again)</i></div>:null}
                            <button disabled={this.state.requesting || this.state.success} onClick={this._register_startup} className="btn font-weight-bold btn-primary">{this.state.requesting ? <i className="fa fa-spinner fa-spin"></i> : 'submit'}</button>
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

export default connect(mapStateToProps)(RegisterStartup)
