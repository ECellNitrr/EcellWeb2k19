import React, { Component } from 'react'
import { Switch,Route } from 'react-router-dom'

import Dashboard from './dashboard'

export default class iportal extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path='/iportal/startup/' component={Dashboard}/>
                </Switch>
            </div>
        )
    }
}
