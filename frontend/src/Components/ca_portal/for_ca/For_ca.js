import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'


import Navbar from './navbar'
import SubmitTask from './submit_task'
import Dashboard from '../dashboard'
import TaskList from './task_list'
import SubmitedList from './submited_list'

export default class For_admin extends Component {
    base_route = '/caportal/ca/'

    render() {
        return (
            <div>
                <Navbar/>
                <Switch>
                    <Route path={this.base_route + 'submited_tasks/'} component={SubmitedList}/>
                    <Route path={this.base_route + 'tasks/:task_id/'} component={SubmitTask}/>
                    <Route path={this.base_route + 'tasks/'} component={TaskList}/>
                    <Route path={this.base_route + ''} component={Dashboard}/>
                </Switch>
            </div>
        )
    }
}
