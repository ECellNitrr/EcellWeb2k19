import React, { Component } from 'react'

export default class event_detail extends Component {
    state={
        event_detail: null
    }
    
    componentDidMount() {
        this.setState({
            event_detail: this.props.match.params.id
        })
    }
    
    
    render() {
        return (
            <div>
                event detail {this.state.event_detail}
            </div>
        )
    }
}
