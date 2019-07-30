import React, { Component } from 'react'
import faxios from '../../../axios'


export default class task_detail extends Component {
    task_id = this.props.match.params.task_id

    state = {
        error: {}
    }

    componentDidMount() {
        console.log(this.props)

        faxios().get(`/portal/tasks/${this.task_id}/`).then(d => {
            let task = d.data

            this.author.value = task['madeby']
            this.platform.value = task['platform']
            this.description.value = task['description']
            this.url.value = task['url']
            this.name.value = task['name']

            this.setState(d.data)
        })
    }

    _updateTask = e => {
        e.preventDefault()

        faxios().put(`/portal/tasks/${this.task_id}/`, {
            madeby: this.author.value,
            name: this.name.value,
            description: this.name.value,
            url: this.url.value,
            platform: this.platform.value
        }).then(d => {
            console.log(d.data)

            this.props.history.goBack()
        })
    }

    _deleteTask = e => {
        e.preventDefault()

        faxios().delete(`/portal/tasks/${this.task_id}/`).then(d => {
            console.log(d.data)
            this.props.history.goBack()
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
                    <h2>User details</h2>
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
                        </select>
                    </div>
                    <div className="text-center mt-3">
                        <button onClick={this._deleteTask} className="btn btn-danger">Delete</button>
                        <button onClick={this._updateTask} className="btn btn-success">Update</button>
                    </div>
                </form>
            </div>
        )
    }
}
