import React, { Component } from 'react'
import faxios, {baseURL} from '../../../axios'

import PropTypes from 'prop-types'
import { connect } from 'react-redux'

class upload_logo extends Component {
    state = {
        progress: 0,
        uploading: false,
        startup: {}
    }


    static propTypes = {
        auth: PropTypes.object.isRequired,
    }


    componentDidMount() {
        faxios().get(`/iportal/startup/${this.props.auth.startup_id}/`)
            .then(d => {
                console.log(d.data)
                this.setState({
                    loading: false,
                    startup: d.data
                })
            })
    }
    

    _upload_logo = async e => {
        e.preventDefault()

        if (this.state.startup.logo_id) {
            await faxios().delete(`/iportal/logo/${this.state.startup.logo_id}/`)
                .then(d => {
                    this.setState({
                        startup: {
                            ...this.state.startup,
                            logo_id: null,
                            logo: null,
                        }
                    })
                })
        }

        let input_img = document.createElement('input')
        input_img.type = 'file'
        input_img.accept = "image/x-png,image/gif,image/jpeg,image/svg+xml"
        input_img.click()

        input_img.addEventListener('change', e => {
            let files = e.target.files

            var fr = new FileReader();
            fr.readAsDataURL(files[0])

            fr.addEventListener('load', e => {
                this.setState({
                    startup: {
                        ...this.state.startup,
                        logo: fr.result
                    }
                })


                var data = new FormData();
                var request = new XMLHttpRequest();

                data.append('logo', files[0])
                data.append('startup', this.props.auth.startup_id);


                // load event
                request.addEventListener('load', (e) => {
                    let data = JSON.parse(e.target.response)
                    console.log(data)

                    this.setState({
                        uploading: false,
                        progress: 0,
                        startup: {
                            ...this.state.startup,
                            logo: data.logo,
                            logo_id: data.id,
                        }
                    })
                });

                // monitor progress of upload
                request.upload.addEventListener('progress', (e) => {
                    var progress = Math.round((e.loaded / e.total) * 100)
                    console.log({ progress })

                    this.setState({ progress })
                })


                request.open('post', baseURL + '/iportal/logo/');
                request.setRequestHeader('Authorization', this.props.auth.token)
                request.send(data);
                this.setState({ uploading: true })
            })
        })

    }

    render() {
        if(!this.props.auth.startup_id){
            return null
        }

        let logo_url = this.state.startup.logo ? this.state.startup.logo : require('../../../assets/no_pic.svg')

        return (
            <div>
                <img style={{outline:"4px solid #57C952",outlineOffset:"12px",maxWidth:"300px",maxHeight:"250px"}} className='logo_img' src={logo_url} alt="" />
                <div>
                    <button
                        disabled={this.state.uploading}
                        onClick={this._upload_logo}
                        className="btn font-weight-bold btn-success">
                        {this.state.uploading ? 'uploading' : 'Change logo'}
                        {this.state.uploading ?
                            <span>
                                <i className="fa fa-spinner fa-spin"></i>
                                {this.state.progress ? this.state.progress : null}
                            </span>
                            :
                            null}
                    </button>
                </div>
            </div>
        )
    }
}



const mapStateToProps = (state) => state

export default connect(mapStateToProps)(upload_logo)