import React, { Component, Fragment } from 'react'
import faxios,{baseURL} from '../.././../axios'

import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import * as actions from '../../../actions/authActions'


class job_application extends Component {

    state={
        uploading:false,
        job_detail:[],
        progress:0,
        file:null
    }

    static propTypes = {
        auth: PropTypes.object.isRequired,
        updateUser: PropTypes.func.isRequired,
    }


    componentDidMount(){
        const job_id=this.props.match.params.job_id
        faxios().get(`/iportal/job/${job_id}/`).then(res =>{
            
            let data=res.data
            console.log(data)
            this.setState({
                job_detail:data
            })
        })
    }

    _upload_resume=(e)=>{

        
        e.preventDefault()

        let input_resume = document.createElement('input')
        input_resume.type = 'file'
        // input_resume.accept = "image/x-png,image/gif,image/jpeg,image/svg+xml"
        input_resume.click()


        input_resume.addEventListener('change',e=>{

            this.setState({
                uploading:true
            })
            let files = e.target.files

            var fr = new FileReader();
            fr.readAsDataURL(files[0])

            fr.addEventListener('load',e =>{
                var data = new FormData();
                var request = new XMLHttpRequest();


                data.append('resume',files[0])
                data.append('ques1',this.ques1)
                data.append('ques1',this.ques2)
                data.append('job',this.props.match.params.job_id)
                data.append('applicant',this.props.auth.user_id)


                // load event
                request.addEventListener('load', (e) => {
                    console.log(e)
                   
                    
                    this.setState({
                        uploading: false,
                        progress: 0,
                    })
                });

                 // monitor progress of upload
                 request.upload.addEventListener('progress', (e) => {
                    var progress = Math.round((e.loaded / e.total) * 100)
                    console.log({ progress })
                    
                    this.setState({ progress })
                })



                request.open('post', baseURL + 'iportal/job_application/');
                request.setRequestHeader('Authorization', this.props.auth.token)
                request.send(data);
                this.setState({ uploading: true })

            })


        })

    }

    
    render() {
        return (
            <div>
                <button
                    disabled={this.state.uploading}
                    onClick={this._upload_resume}
                    className="btn btn-success">
                    {this.state.uploading? 'uploading': 'Add Resume'}
                </button>

                {this.state.uploading ?
                        <span>
                            {this.state.progress ? <Fragment>
                                <div class="progress md-progress" style="height: 20px">
                                    <div class="progress-bar" role="progressbar" style={{width:`${this.state.progress}%`,height:"20px"}}  aria-valuemin="0" aria-valuemax="100">{this.state.progress}%</div>
                                </div>
                            </Fragment> : null}
                        </span>
                        :
                null}
                
                <div>Ques1</div>
                <input ref={ele => this.ques1 = ele}  type="text"></input>
                
                <div>Ques2</div>
                <input ref={ele => this.ques2 = ele}  type="text"></input>
            </div>
        )
    }
}


const mapStateToProps = (state) => state
export default connect(mapStateToProps, actions)(job_application)