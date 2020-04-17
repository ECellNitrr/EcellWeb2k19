import React, { Component, Fragment } from 'react'
import faxios, { baseURL } from '../../../axios'
import UploadLogo from './upload_logo'
import './dashboard.scss'

import {professions} from '../../constants'

import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Wysiwyg from '../../common/wysiwyg'


class submitIdea extends Component {
    isEdit = this.props.location.pathname.indexOf('edit_idea') > -1
    
    state = {
        uploading:false,
        progress:0,
        errors: {},
        requesting: false,
        success: false,
        startup: {},
        pfsn:""
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
            requesting: false
        })

        let reqType = faxios().post
        let url = '/iportal/startup/'
        
        if(this.props.auth.startup_id){
            reqType= faxios().put
            url = `/iportal/startup/${this.props.auth.startup_id}/`
        }

        reqType(url, {
            'idea_in_a_nut_shell': this.idea.value,
            'beneficiaries': this.benef.value,
            'describe_idea': this.description.get_value(),
            'ideator_designation': this.sector.value==="Student"?"student":"faculty",
            'end_product':this.ep.value,
           'mentor_name':this.state.pfsn==="Student"?this.mn.value:"",
           'mentor_designation':this.state.pfsn==="Student"?this.dg.value:"",
           'innovation_in_this':this.innovation.get_value(),
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
    //             this.setState({error:true})
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
        this.idea.value = ''
        this.benef.value = ''
        this.sector.value = ''
        this.description.set_value('')
        this.innovation.set_value('')
        this.ep.value=''
        this.mn.value=''
        this.dg.value=''
    }




    render() {

        let sector_options = professions.map(sectors =>(
            <option value={sectors}>{sectors}</option>
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


        return (
            <div className="reg-pad">
                <div className='container hoverable jumbotron' >

                <div className="">
                    <button onClick={() => this.props.history.goBack()} className="btn font-weight-bold btn-primary">Go Back</button>
                </div>

                <div>
                    <h1 className="open text-center font-weight-bold my-5">
                        {this.isEdit?'Edit Idea' :'Submit Idea'}
                    </h1>

                    {/* <div className="text-center">
                        <UploadLogo />
                    </div> */}

                    <form>
                        <div className="form-group">
                            <label className="font-weight-bold">Idea in a Nutshell</label>
                            <input type="text" ref={ele => this.idea = ele} required maxLength="40" className="form-control" />
                            {error_html['name']}
                        </div>
                        <div className="form-group">
                            <label className="font-weight-bold">Describe Your Idea</label>
                            {error_html['description']}
                            <Wysiwyg onRef={ref => this.description = ref} />
                        </div>

                        <div className="form-group">
                            <label className="font-weight-bold">Innovation in this</label>
                            {error_html['innovation']}
                            <Wysiwyg onRef={ref => this.innovation = ref} />
                        </div>

                        <div className="form-group">
                            <label className="font-weight-bold">End Product</label>
                            <input type="text" ref={ele => this.ep = ele} required className="form-control" />
                            {error_html['contact']}
                        </div>
                        <div className="form-group">
                            <label className="font-weight-bold">Beneficiaries</label>
                            <input type="text" ref={ele => this.benef = ele} required className="form-control" />
                            {error_html['brief']}
                        </div>
                     
                        <div className="form-group">
                            <label ><span className="font-weight-bold">Registration Ideator</span>*&nbsp;</label>
                            <select className="form-control" onChange={(e) => this.setState({pfsn: e.target.value})} ref={ele => this.sector = ele}>
                                {sector_options}
                            </select>
                            {error_html['sector']}
                        </div>
                        
                        {this.state.pfsn==="Student"?<Fragment>
                        <div className="form-group">
                            <label className="font-weight-bold">Mentor Name</label>
                            <input type="text" ref={ele => this.mn = ele} required maxLength="40" className="form-control" />
                            {error_html['name']}
                        </div>
                        <div className="form-group">
                            <label className="font-weight-bold">Designation of Mentor</label>
                            <input type="text" ref={ele => this.dg = ele} required maxLength="40" className="form-control" />
                            {error_html['name']}
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

                        <div className="text-center">
                        {/* <button onClick={this._upload_application} disabled={this.state.uploading || this.state.success} type="submit" className="btn font-weight-bold my-4 btn-primary">{this.state.uploading ? <i className="fa fa-spinner fa-spin"></i> : 'Submit'}</button> */}
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
