import React, { Component } from 'react'
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
        startup: {}
    }

    static propTypes = {
        auth: PropTypes.object.isRequired,
    }


    componentDidMount() {
        if(this.isEdit){
            faxios().get(`/iportal/startup/${this.props.auth.startup_id}/`)
                .then(d=>{
                    const data=d.data 
                    console.log(data)

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
    }
    

    _register_startup = e => {
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

        if (this.state.success) {
            return (
                <div>
                    <h2 className="mt-5 text-center">Successfully submited for verification</h2>
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
                        {this.isEdit?'Edit Startup' :'Register Startup'}
                    </h1>

                    <div className="text-center">
                        <UploadLogo />
                    </div>

                    <form>
                        <div className="form-group">
                            <label className="font-weight-bold">Name</label>
                            <input type="text" ref={ele => this.name = ele} className="form-control" />
                            {error_html['name']}
                        </div>
                        <div className="form-group">
                            <label className="font-weight-bold">Email</label>
                            <input type="email" ref={ele => this.email = ele} className="form-control" />
                            {error_html['email']}
                        </div>
                        <div className="form-group">
                            <label className="font-weight-bold">Contact</label>
                            <input type="text" ref={ele => this.contact = ele} className="form-control" />
                            {error_html['contact']}
                        </div>
                        <div className="form-group">
                            <label className="font-weight-bold">Brief</label>
                            <input type="text" ref={ele => this.brief = ele} className="form-control" />
                            {error_html['brief']}
                        </div>
                        <div className="form-group">
                            <label className="font-weight-bold">Description</label>
                            {error_html['description']}
                            <Wysiwyg onRef={ref => this.description = ref} />
                        </div>
                        <div className="form-group">
                            <label ><span className="font-weight-bold">Sector</span>*&nbsp; <i>(eg: technical, education)</i></label>
                            <select className="form-control" ref={ele => this.sector = ele}>
                                {sector_options}
                            </select>
                            {error_html['sector']}
                        </div>
                        <div className="form-group">
                            <label className="font-weight-bold">Address line 1</label>
                            <input type="text" ref={ele => this.address1 = ele} className="form-control" />
                            {error_html['address1']}
                        </div>
                        <div className="form-group">
                            <label className="font-weight-bold">Address line 2</label>
                            <input type="text" ref={ele => this.address2 = ele} className="form-control" />
                            {error_html['address2']}
                        </div>
                        <div className="form-group">
                            <label className="font-weight-bold">District</label>
                            <input type="text" ref={ele => this.district = ele} className="form-control" />
                            {error_html['district']}
                        </div>
                        <div className="form-group">
                            <label className="font-weight-bold">State</label>
                            <input type="text" ref={ele => this.lstate = ele} className="form-control" />
                            {error_html['state']}
                        </div>
                        <div className="form-group">
                            <label className="font-weight-bold">Country</label>
                            <input type="text" ref={ele => this.country = ele} className="form-control" />
                            {error_html['country']}
                        </div>

                        <div className="text-center">
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
