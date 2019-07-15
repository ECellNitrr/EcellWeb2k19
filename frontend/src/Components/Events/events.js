import React,{Component} from 'react';
import faxios from '../../axios';
import { NavLink } from 'react-router-dom'
import './events.css';
import Navbar from '../Navbar/navbar';

class events extends Component{
  axios = faxios()
  state = {
    events: []
  }

  componentDidMount() {
    this.axios.get('/events/list')
      .then(d=>{
        const events = d.data.events
        console.log({events})
        this.setState({events})
      })
  }
  
  
  render(){
    const events = this.state.events.map(event => 
        <div key={event.id} className="event">
			<img src={event.icon} alt=""/>
          <NavLink to={`/events/${event.id}`}>{event.name}</NavLink>
        </div>  
      )

      return(
        <div className='events'>
          <Navbar/>
          <h2>Our Events</h2>
          <div className="list">
            {events}
          </div>
        </div>
      )
    }
}

export default events;