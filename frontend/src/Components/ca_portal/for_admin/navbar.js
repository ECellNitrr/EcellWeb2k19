import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class navbar extends Component {
    base_route = '/caportal/admin/'

    render() {
        return (
            <div>
                <Link to={this.base_route+''}>Dashboard</Link>     
                <Link to={this.base_route+'users/'}>EcellUsers</Link>     
            </div>
        )
    }
}
