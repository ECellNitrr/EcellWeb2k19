import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import faxios from '../../../axios'


export default class task_list extends Component {
    state = {
        tasks: [],
        loading: true
    }

    componentDidMount() {
        faxios().get('/portal/non_submited_tasks/').then(d => {
            console.log(d.data)
            let tasks = d.data.sort((a,b)=>b.id-a.id)
            tasks = tasks.map(task => {
                let created_date = new Date(task.created_at)
                task.created_at = created_date.toDateString()
                return task
            })
            
            this.setState({
                tasks,
                loading: false
            })
        })
    }


    _createTask = () => {
        this.props.history.push('/caportal/admin/create_task/')
    }


    render() {
        let tasks_html = this.state.tasks.map((task, i) =>
            <tr key={i}>
                <td>{i + 1}</td>
                <td><Link className='detail_link' to={`/caportal/ca/tasks/${task.id}/`}>{task.name}</Link></td>
                <td>{task.platform}</td>
                <td>{task.created_at}</td>
            </tr>
        )

        if(this.state.loading){
            tasks_html =  <h3 className='text-center'>...loading</h3>
        }else if(!this.state.loading && this.state.tasks.length === 0){
            tasks_html = <h3 className="text-center">no new posts :)</h3>
        }

        return (
            <div className='tasks_list container'>
                <div className="d-flex my-4">
                    <h2 className=" flex-grow-1 text-center">Posts List</h2>
                </div>
                <table className='table table-striped'>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Task name</th>
                            <th>Platform</th>
                            <th>Created on</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tasks_html}
                    </tbody>
                </table>
            </div>
        )
    }
}
