import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { compose } from 'redux'
import faxios from '../../axios'
import Loader from '../api_loader/api_loader'
import { format_date } from '../constants'
import Confetti from './confetti'

import PropTypes from 'prop-types'
import { connect } from 'react-redux'

class inauguration extends Component {
    state = {
        loading: true,
        inaugrated: true,
        iportal: {},
        timer: 15,
        inaug_started: false,
        inaug_finished: false,
    }

    static propTypes = {
        auth: PropTypes.object.isRequired,
    }

    componentDidMount() {
        faxios().get('/events/inauguration/').then(d => {
            let data = d.data
            console.log(this.props.auth)

            this.setState({ loading: false })
            let iportal = data.find(event => event.name == 'iportal')

            if (iportal) {
                this.setState({
                    inaugrated: false,
                    iportal
                })
            }
        })
    }


    _inaugurate = e => {
        e.preventDefault()


        this.setState({ inaug_started: true })
        let interval = setInterval(() => {
            this.setState({ timer: this.state.timer - 1 })
            if (!this.state.timer) {
                clearInterval(interval)
                this.setState({ loading: true })
                faxios().delete(`/events/inauguration/${this.state.iportal.id}/`).then(d => {
                    this.setState({
                        inaug_started: false,
                        loading: false,
                        inaug_finished: true,
                    })
                })
            }
        }, 200)
    }

    render() {
        if (this.state.loading) {
            return <Loader dark />
        }

        if (this.state.inaug_started) {
            return (
                <div className='my-5 text-center'>
                    <h1 className='font-weight-bold'>Inaugurating I-PORTAL in</h1>
                    <h1>{this.state.timer}</h1>
                </div>
            )
        }

        if (this.state.inaug_finished) {
            window.scrollTo(0,0)
            
            return (
                <div className='text-center'>
                    <button className="btn btn-primary" onClick={() => this.props.history.push('/startups/')}>Go to Iportal</button>
                    <Confetti/>
                </div>
            )
        }

        let inaugBtn = <button className="btn btn-primary mt-5" onClick={this._inaugurate}>Inagurate IPortal</button>

        if (!this.state.inaugrated) {
            let date = this.state.iportal.date
            return (
                <div className='text-center mt-5'>
                    <h2>Internship Portal will be inaugurated by</h2>
                    <h1 className='font-weight-bold'>Dr. A. M Rawani, Director NIT Raipur</h1>
                    <h3>on</h3>
                    <h2>{format_date(date)}</h2>
                    {this.props.auth.loggedin && this.props.auth.user_type == 'DRT' ? inaugBtn : null}
                </div>
            )
        } else {
            return null
        }
    }
}


const mapStateToProps = (state) => state
export default compose(withRouter, connect(mapStateToProps))(inauguration)