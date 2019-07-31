import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import UserDetails from './user_details'
import CreateUser from './create_new_user'
import UserList from './users_list'
import TaskList from './tasks_list'
import CreateTask from './create_task'
import TaskDetail from './task_detail'
import Dashboard from './dashboard'
import Navbar from './navbar'


export default class For_admin extends Component {
    base_route = '/caportal/admin/'

    render() {
        return (
            <div>
                <Navbar/>
                <Switch>
                    <Route path={this.base_route + 'tasks/:task_id'} component={TaskDetail}/>
                    <Route path={this.base_route + 'create_task/'} component={CreateTask}/>
                    <Route path={this.base_route + 'tasks/'} component={TaskList}/>
                    <Route path={this.base_route + 'users/:user_id'} component={UserDetails}/>
                    <Route path={this.base_route + 'create_user/'} component={CreateUser}/>
                    <Route path={this.base_route + 'users/'} component={UserList}/>
                    <Route path={this.base_route + ''} component={Dashboard}/>
                </Switch>
            </div>
        )
    }
}
