import React, { Component, Fragment } from 'react'
import faxios from '../../../axios'

import PropTypes from 'prop-types'
import { connect } from 'react-redux'


class task_details extends Component {
    user_id = this.props.match.params.user_id
    state = {
        error: {}
    }

    static propTypes = {
        auth: PropTypes.object.isRequired,
    }

    componentDidMount() {
        this.author.value = `${this.props.auth.first_name.toUpperCase()} ${this.props.auth.last_name.toUpperCase()}`
    }



    _createTask = e => {
        e.preventDefault()
        this.setState({ error: {} })

        faxios().post(`/portal/tasks/`, {
            madeby: this.author.value,
            name: this.name.value,
            description: this.description.value,
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
                    <h2>Create Task</h2>
                    <div></div>
                </div>

                <form className=''>
                    {err_msg}
                    {/* {this.state.error ? err_msg : null} */}
                    <div className="form-group">
                        <label>Author:</label>
                        <input disabled className='form-control' placeholder='First Name' ref={ele => this.author = ele} type="text" />
                    </div>
                    <div className="form-group">
                        <label>Task Name:</label>
                        <input className='form-control' placeholder='Task name' ref={ele => this.name = ele} type="text" />
                    </div>
                    <div className="form-group">
                        <label>Description:</label>
                        <textarea className='form-control' placeholder='description' ref={ele => this.description = ele} rows="5"></textarea>
                    </div>
                    <div className="form-group">
                        <label>URL:</label>
                        <input className='form-control' placeholder='url' ref={ele => this.url = ele} type="text" />
                    </div>
                    <div className="form-group">
                        <label>Platform:</label>
                        <select className='form-control' ref={ele => this.platform = ele}>
                            <option value="facebook">facebook</option>
                            <option value="whatsapp">whatsapp</option>
                            <option value="youtube">youtube</option>
                            <option value="instagram">instagram</option>
                            <option value="twitter">twitter</option>
                            <option value="linkedin">linkedin</option>
                        </select>
                    </div>
                    <div className="text-center">
                        <button onClick={this._createTask} className="btn btn-success">Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => state

export default connect(mapStateToProps)(task_details)
