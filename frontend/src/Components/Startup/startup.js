import React,{Component} from 'react';
import faxios from '../../axios';
import { NavLink } from 'react-router-dom'
import './startup.css';
import Navbar from '../Navbar/navbar';

class Startup extends Component{
  axios = faxios()
  state = {
    startups: []
  }

  componentDidMount() {
    this.axios.get('/startups/list/')
      .then(d=>{
        const data = d.data
        const startups=data.startups
        console.log({startups})
        this.setState({startups})
      })
  }
  
  
  render(){
    const startups = this.state.startups.map(startup => 
        <div key={startup.id} className="startup">
			<img src={startup.pic} alt=""/>
          <NavLink to={`/startups/${startup.id}`}>{startup.name}</NavLink>
        </div>  
      )

      return(
        <div className='startup'>
          <Navbar/>
          <h2>Our startup</h2>
          <div className="list">
            {startups}
          </div>
        </div>
      )
    }
}

export default Startup;