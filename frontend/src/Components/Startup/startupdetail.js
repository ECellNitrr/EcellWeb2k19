import React, { Component } from 'react'

export default class startupdetail extends Component {
    state={
        startup_id: null
    }
    
    componentDidMount() {
        this.setState({
            startup_id: this.props.match.params.id
        })
    }
    
    
    render() {
        return (
            <div>
                startup detail {this.state.startup_id}
            </div>
        )
    }
}
