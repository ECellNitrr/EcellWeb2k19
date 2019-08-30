import React, { Component } from 'react'
import faxios  from '../../axios'
import Loader from '../api_loader/api_loader'
import { format_date } from '../constants'

import PropTypes from 'prop-types'
import { connect } from 'react-redux'

class inauguration extends Component {
    state = {
        loading: true,
        inaugrated: true,
        iportal: {}
    }
    
    static propTypes = {
        auth: PropTypes.object.isRequired,
    }

    componentDidMount() {
        faxios().get('/events/inauguration/').then(d=>{
            let data = d.data
            console.log(this.props.auth)
            
            this.setState({loading: false})
            let iportal = data.find(event=>event.name=='iportal')

            if(iportal){
                this.setState({
                    inaugrated:false,
                    iportal
                })
            }
        })
    }
    

    
    render() {
        if(this.state.loading){
            return <Loader dark />
        }

        let inaugBtn = <button className="btn btn-primary mt-5">Inagurate IPortal</button>

        if(!this.state.inaugrated){
            let date = this.state.iportal.date
            return (
                <div className='text-center mt-5'>
                    <h2><b>Internship Portal</b> is about to be inaugurated by</h2>
                    <h1>Dr. A. M Rawani, Director NIT Raipur</h1>
                    <h3>by</h3>
                    <h2>{format_date(date)} {date.slice(11,16)}hrs</h2>
                    {this.props.auth.loggedin && this.props.auth.user_type=='DRT'? inaugBtn:null}
                </div>
            )
        }else{
            return null
        }
    }
}


const mapStateToProps = (state) => state
export default connect(mapStateToProps, )(inauguration)