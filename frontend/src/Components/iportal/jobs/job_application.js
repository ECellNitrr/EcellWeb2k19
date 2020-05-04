import React, { Component, Fragment } from 'react'
import faxios, { baseURL } from '../.././../axios'

import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import * as actions from '../../../actions/authActions'
import Wysiwyg from '../../common/wysiwyg'


class job_application extends Component {
    job_id = Number(this.props.match.params.job_id)

    state = {
        uploading: false,
        loading:false,
        job_detail: {},
        progress: 0,
        file: null,
        validate:true,
        err_num:[],
        error:false,
        check:false
    }

    static propTypes = {
        auth: PropTypes.object.isRequired,
        updateUser: PropTypes.func.isRequired,
    }


    componentDidMount() {
        
        faxios().get(`/iportal/job/${this.job_id}/`).then(res => {

            let data = res.data
            console.log(data)
            this.setState({
                job_detail: data
            })
        })
    }

    _upload_application = (e) => {
        e.preventDefault()
        this.setState({
            uploading: true,
            loading:true,
            error:false
        })

        if(this.ques1.value.length<1){
            this.setState({
              error:true,
                uploading:false,
                loading:false,
            })

            console.log("This runs 2")
            return
        }

        if(this.ques2.value.length<1){
            this.setState({
                error:true,
                uploading:false,
                loading:false
            })

          
            return
        }

        var data = new FormData();
        var request = new XMLHttpRequest();


        data.append('resume', this.resume.files[0])
        data.append('ques1', this.ques1.value)
        data.append('ques2', this.ques2.value)
        data.append('job', this.job_id)
        data.append('applicant', this.props.auth.id)


        // load event
        request.addEventListener('load', (e) => {
            const data = JSON.parse(e.target.response)

            this.setState({
                uploading: false,
                progress: 0
            })

            if(data.id){
                this.props.history.goBack()
            }else{
                this.setState({error:true})
            }
        });

        // monitor progress of upload
        request.upload.addEventListener('progress', (e) => {
            var progress = Math.round((e.loaded / e.total) * 100)
            console.log({ progress })

            if(progress===100){
                this.setState({loading:false,check:true})
            }

            this.setState({ progress })
        })



        request.open('post', baseURL + '/iportal/job_application/');
        request.setRequestHeader('Authorization', this.props.auth.token)
        request.send(data);
        this.setState({ uploading: false })




    }


    render() {
        return (
            <div>
                <div className='container jumbotron'>

                    <div>
                        <button onClick={() => this.props.history.goBack()} className="btn align-self-center font-weight-bold btn-primary">Go Back</button>
                    </div>

                    <h1 className="mt-5 jb_app font-weight-bold text-center" style={{paddingTop:"-40px"}}>Job Application</h1>
                    <h2 className="mt-4 jb_apps font-weight-bold text-center">{this.state.job_detail.name} ({this.state.job_detail.job_type})</h2>

                    <div className="text-center font-weight-bold my-5">
                        Upload your Resume : <input className="btn btn-success text-center font-weight-bold" ref={ele => this.resume = ele} type="file" /> <span className="font-weight-bold">{this.state.progress? `${this.state.progress}%`:null}</span>   
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
                        null}

                    <div className="font-weight-bold my-4">How you are suitable for this job?</div>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="12" ref={ele => this.ques1 = ele} />

                    <div className="font-weight-bold my-4">During what timeframe you are available for the job?</div>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="12" ref={ele => this.ques2 = ele} />

                    <div className="text-center">
                        <div className="text center text-danger">
                            {this.state.error? 'Please ensure that all questions are answered and resume file selected for upload.':null}
                        </div>
                        <button onClick={this._upload_application} type="submit" className="btn font-weight-bold my-4 btn-primary">{this.state.loading ?  <i className="fa fa-spinner fa-spin"></i>: this.state.check?'Redirecting..':'Submit'}</button>
                    </div>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => state
export default connect(mapStateToProps, actions)(job_application)