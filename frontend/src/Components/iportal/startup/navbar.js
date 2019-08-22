import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'

import './navbar.scss'


export default class navbar extends Component {
    render() {
        return (
            <div className='startup_navbar'>
                <NavLink exact to='/iportal/startup/'>Dashboard</NavLink>
                <NavLink to='/iportal/startup/openings/'>Openings</NavLink>
            </div>
        )
    }
}

