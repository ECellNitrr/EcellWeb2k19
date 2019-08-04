import React, { Component } from 'react';
import faxios from '../../axios';
import { NavLink } from 'react-router-dom'
import './events.css';
import Navbar from '../Navbar/navbar';
import Footer from '../Footer/footer';
import Loader from '../api_loader/api_loader'

class events extends Component {
  axios = faxios()
  state = {
    events: [],
    loading:true
  }

  componentDidMount() {
    this.axios.get('/events/list/2019/')
      .then(d => {
        const events = d.data.data
        console.log({ events })
        this.setState({ events,loading:false })
      })
  }


  render() {
    let events = this.state.events.map(event =>

      <div className="event" key={event.id}>
        <div className="cont1">
          <div className="front1 shadow-lg p-3 mb-5 bg-white rounded"><img className="event-pic" src={event.icon_url} alt={event.name} /></div>
          <div className="back2 shadow-lg p-3 mb-5 bg-white rounded">
            <div className="inner1">
              <h4 className="event-name" style={{ fontWeight: "800" }}>{event.name}</h4>
              <div className="image-text"><NavLink className="event-detail-link" to={`/events/${event.id}`}>Know More</NavLink></div>
            </div>
          </div>
        </div>
      </div>

    )


    return (
      <div className='events'>
        <Navbar />
        <div className="container-fluid ctn16">
          <h2 className="header6">Our Events</h2>
          <div className="list">
            {this.state.loading?(<Loader/>):(events)}
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default events;