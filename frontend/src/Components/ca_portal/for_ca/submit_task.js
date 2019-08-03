import React, { Component, Fragment } from 'react'
import faxios, { baseURL } from '../../../axios'

import PropTypes from 'prop-types'
import { connect } from 'react-redux'


class submit_task extends Component {
    task_id = Number(this.props.match.params.task_id)
    review_id = Number(this.props.match.params.review_id)
    review = this.props.location.pathname.indexOf('submited_tasks') > 0

    state = {
        error: {},
        task: {},
        selected_imgs: [],
        uploaded_imgs: [],
    }

    static propTypes = {
        auth: PropTypes.object.isRequired,
    }

    componentDidMount() {
        faxios().get(`/portal/tasks/${this.task_id}/`).then(d => {
            console.log(d.data)
            let task = d.data

            let task_date = new Date(task.created_at)
            task.created_at = task_date.toDateString()

            const uploaded_imgs = task.uploaded_imgs.map(img => {
                img.proof_pic = baseURL + img.proof_pic
                return img
            })
            
            this.setState({
                task: {
                    ...task,
                    uploaded_imgs: undefined
                },
                uploaded_imgs
            })
        })
    }



    _upload_img = (e, src) => {
        e.preventDefault()

        let img_obj = this.state.selected_imgs.find(img => img.src === src)

        var data = new FormData();
        var request = new XMLHttpRequest();

        data.append('proof_by', this.props.auth.id)
        data.append('proof_pic', img_obj.file);
        data.append('task', this.task_id);


        // load event
        request.addEventListener('load', (e) => {
            console.log(e)
            this.setState({
                selected_imgs: this.state.selected_imgs.filter(img => img.src !== src),
                uploaded_imgs: [...this.state.uploaded_imgs, JSON.parse(e.target.response)]
            })
        });

        // monitor progress of upload
        request.upload.addEventListener('progress', (e) => {
            var progress = Math.round((e.loaded / e.total) * 100)
            console.log({progress})

            this.setState({
                selected_imgs: [
                    ...this.state.selected_imgs.filter(img => img.src!==src),
                    {...img_obj, progress}
                ]
            })
        })


        request.open('post', baseURL + '/portal/reviews/');
        request.setRequestHeader('Authorization', this.props.auth.token)
        request.send(data);
    }



    _select_img = e => {
        e.preventDefault()

        let input_img = document.createElement('input')
        input_img.type = 'file'
        input_img.multiple = true
        input_img.accept = "image/x-png,image/gif,image/jpeg"
        input_img.click()

        input_img.addEventListener('change', e => {
            let files = e.target.files

            Array.from(files).forEach(file => {
                var fr = new FileReader();

                fr.addEventListener('load', e => {
                    this.setState({
                        selected_imgs: [...this.state.selected_imgs, {
                            src: fr.result,
                            file
                        }]
                    })
                })
                fr.readAsDataURL(file)
            })
        })
    }

    _remove_img = (e, src) => {
        e.preventDefault()
        this.setState({
            selected_imgs: this.state.selected_imgs.filter(img => img.src !== src)
        })
    }


    render() {
        const errors = this.state.error
        const err_msg = Object.keys(errors).map(x => <div className='text-danger text-center' key={x}>{x}: {errors[x].join('')}</div>)


        let task = this.state.task
        if (this.review) {
            task = task.task_obj
        }

        let selected_imgs = this.state.selected_imgs.map((img, i) =>
            <div className='upload_img' key={i}>
                <div>
                    <img src={img.src} alt="selected img shadow" />
                    <div className="d-flex justify-content-center">
                        {img.progress > 0 ?
                            <Fragment>
                                <div className="progress flex-grow-1">
                                    <div className="progress-bar progress-bar-striped" role="progressbar" style={{ width: `${img.progress}%` }}></div>
                                </div>
                                <div className="text-center font-weight-bold">{img.progress}%</div>
                            </Fragment>
                            :
                            <Fragment>
                                <button onClick={(e) => this._upload_img(e, img.src)} className='btn btn-success mt-0'>
                                        <i className="fa fa-upload"></i> Upload
                                </button>
                                <button onClick={(e) => this._remove_img(e, img.src)} className='btn btn-danger mt-0'>
                                        <i className="fa fa-times"></i> Remove
                                </button>
                            </Fragment>
                        }
                    </div>
                </div>
            </div >
        )

        let uploaded_imgs = this.state.uploaded_imgs.map((img, i) =>
            <div className='upload_img' key={i}>
                <div>
                    <img src={img.proof_pic} alt="selected img shadow" />
                </div>
                <div className="points">
                    Points: {img.points > -1 ? img.points : 'review pending'}
                </div>
            </div>
        )

        selected_imgs = <div className='d-flex flex-wrap justify-content-center'>{selected_imgs}</div>


        return (
            <div className='user_detail container'>
                <div className="d-flex my-5 justify-content-between">
                    <button className='btn btn-warning' onClick={() => this.props.history.goBack()}>go back</button>
                    <h2>{this.review ? 'Submitted for review' : 'Submit for review'}</h2>
                    <div></div>
                </div>

                <div className="task">
                    <div>
                        <span className="font-weight-bold mr-3">Post title:</span>
                        <span>{task.name}</span>
                    </div>
                    <div>
                        <span className="font-weight-bold mr-3">Description:</span>
                        <span>{task.description ? task.description : 'none'}</span>
                    </div>
                    <div>
                        <span className="font-weight-bold mr-3">Platform:</span>
                        <span>{task.platform}</span>
                    </div>

                    <div>
                        <span className="font-weight-bold mr-3">URL:</span>
                        <span>{task.url ? task.url : 'none'}</span>
                    </div>
                    <div>
                        <span className="font-weight-bold mr-3">Create on:</span>
                        <span>{task.created_at}</span>
                    </div>

                </div>

                <form className=''>
                    {err_msg}
                    {this.state.error ? err_msg : null}

                    <div className="text-center">
                        <button onClick={this._select_img} className="btn btn-primary"><i className="fa fa-image"></i> Select screenshots</button>
                    </div>

                    <div className="my-3 text-center">
                        <h3>Selected imgs:</h3>
                        {this.state.selected_imgs.length > 0 ? selected_imgs : 'none'}
                    </div>

                    {this.state.uploaded_imgs.length > 0 ?
                        <div className="my-3 text-center">
                            <h3>Uploaded imgs:</h3>
                            <div className='d-flex flex-wrap justify-content-center'>
                                {uploaded_imgs}
                            </div>
                        </div>
                        : null}

                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => state

export default connect(mapStateToProps)(submit_task)
