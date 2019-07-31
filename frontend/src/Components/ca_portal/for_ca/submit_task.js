import React, { Component, Fragment } from 'react'
import faxios from '../../../axios'

import PropTypes from 'prop-types'
import { connect } from 'react-redux'


class submit_task extends Component {
    task_id = this.props.match.params.task_id
    state = {
        error: {},
        task: {},
    }

    static propTypes = {
        auth: PropTypes.object.isRequired,
    }

    componentDidMount() {
        // this.proof_by = `${this.props.auth.first_name.toUpperCase()} ${this.props.auth.last_name.toUpperCase()}`
        // console.log(this.props.auth)

        faxios().get(`/portal/tasks/${this.task_id}/`).then(d=>{
            console.log(d.data)
            let task = d.data

            let task_date = new Date(task.created_at)
            task.created_at = task_date.toDateString()

            this.setState({task})
        })
    }



    _createSubmitReview = e => {
        e.preventDefault()
        this.setState({ error: {} })

        faxios().get(`/portal/tasks/`, {
            madeby: this.author.value,
            name: this.name.value,
            description: this.name.value,
            url: this.url.value,
            platform: this.platform.value
        }).then(d => {
            console.log(d.data)
            this.props.history.goBack()
        }).catch(err => {
            console.log(err.response.data)
            this.setState({
                error: err.response.data
            })
        })
    }



    render() {
        const errors = this.state.error
        console.log({errors})
        const err_msg = Object.keys(errors).map(x => <div className='text-danger text-center' key={x}>{x}: {errors[x].join('')}</div>)

        return (
            <div className='user_detail container'>
                <div className="d-flex my-5 justify-content-between">
                    <button className='btn btn-warning' onClick={() => this.props.history.goBack()}>go back</button>
                    <h2>Submit for review</h2>
                    <div></div>
                </div>

                <div className="task">
                    <div>
                        <span className="font-weight-bold">Post title:</span>
                        <span>{this.state.task.name}</span>
                    </div>
                    <div>
                        <span className="font-weight-bold">Description:</span>
                        <span>{this.state.task.description?this.state.task.description:'none'}</span>
                    </div>
                    <div>
                        <span className="font-weight-bold">Platform:</span>
                        <span>{this.state.task.platform}</span>
                    </div>
                    <div>
                        <span className="font-weight-bold">Create on:</span>
                        <span>{this.state.task.create}</span>
                    </div>

                </div>

                {/* <form className=''>
                    {err_msg}
                    {this.state.error ? err_msg : null}

                    <div className="text-center">
                        <button onClick={this._createTask} className="btn btn-success">Submit</button>
                    </div>
                </form> */}
            </div>
        )
    }
}

const mapStateToProps = (state) => state

export default connect(mapStateToProps)(submit_task)
