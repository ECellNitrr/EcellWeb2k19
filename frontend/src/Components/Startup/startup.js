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

  componentDidMount(){
    for(let i=2016; i<=2020;i++){
      this.axios.get(`/startups/list/${i}/`).then(res=>{
        console.log(res)
        let  data = res.data.data
        if(data.length>0){
          this.setState({
            loading: false,
            startups: [
              ...this.state.startups,
              ...data
            ]
          })
        }
      })
    }
  }

  
  
  render(){
    console.log(this.state.startups)
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