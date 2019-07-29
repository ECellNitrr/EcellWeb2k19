import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import './for_admin.scss'

import UserDetails from './user_details'
import UserList from './users_list'
import Dashboard from './dashboard'
import Navbar from './navbar'


export default class For_admin extends Component {
    base_route = '/caportal/admin/'

    render() {
        return (
            <div>
                <Navbar/>
                <Switch>
                    <Route path={this.base_route + 'users/:user_id'} component={UserDetails}/>
                    <Route path={this.base_route + 'users/'} component={UserList}/>
                    <Route path={this.base_route + ''} component={Dashboard}/>
                </Switch>
            </div>
        )
    }
}
