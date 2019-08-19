import React, { Component } from 'react'
import { Switch,Route } from 'react-router-dom'

import StartupList from './startup_list'

export default class iportal extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path='/iportal/jobs/' component={StartupList}/>
                </Switch>
            </div>
        )
    }
}
