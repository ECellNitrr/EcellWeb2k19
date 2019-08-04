import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import faxios from '../../../axios'


import PropTypes from 'prop-types'
import { connect } from 'react-redux'


class submitted_list extends Component {
    state = {
        tasks: [],
        loading: true
    }

    static propTypes = {
        auth: PropTypes.object.isRequired,
    }

    componentDidMount() {
        this._fetch()
    }

    _fetch = () => {
        faxios().get(`/portal/submited_tasks/`).then(d => {
            console.log(d.data)
            let tasks = d.data.sort((a, b) => b.id - a.id)
            tasks = tasks.map(review => {
                let created_date = new Date(review.created_at)
                review.created_at = created_date.toDateString()
                return review
            })

            this.setState({ tasks,loading:false })
        })
    }


    render() {
        let tasks = this.state.tasks

        const task_html = tasks.map((task, i) =>
            <tr key={i}>
                <td>{i + 1}</td>
                <td><Link className='detail_link' to={`/caportal/ca/tasks/${task.id}/`}>{task.name}</Link></td>
                <td>{task.platform}</td>
                <td>{task.uploaded_imgs.reviewed}/{task.uploaded_imgs.total}</td>
                <td>{task.uploaded_imgs.points}</td>
            </tr>
        )

        return (
            <div className='tasks_list container'>
                <div className="d-flex my-4">
                    <h2 className=" flex-grow-1 text-center">Submitted Posts</h2>
                </div>
                <table className='table table-striped mt-3'>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Task name</th>
                            <th>Platform</th>
                            <th>Reviewed</th>
                            <th>Points</th>
                        </tr>
                    </thead>
                    <tbody>
                        {task_html}
                    </tbody>
                </table>
                {this.state.loading? <h3 className="text-center">...loading</h3>:null}
                {!this.state.loading && this.state.tasks.length===0? <h3 className='text-center'>no submitted post available</h3>:null}
            </div>
        )
    }
}


const mapStateToProps = (state) => state

export default connect(mapStateToProps)(submitted_list)