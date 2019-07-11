import React,{ Component } from 'react';
import './sponsors.css';
import faxios from '../../axios';
import inc36 from '../../assets/sponsors/2018/36_inc.jpg';
import Navbar from '../Navbar/navbar';


class Sponsors extends Component{
    
    axios = faxios();
    state={
        sponsors_18:{}
    }

    componentDidMount(){
        this.axios.get("/sponsors/list/").then(res=>{
            const data = res.data;
            const spons= data.spons;
            const year=2018;
            const dict_year={};
            
            
            spons.forEach((particular)=>{
                let type = particular.section_name;
                let sub_array =particular.sponsors;
                let filtered_sub_array=sub_array.filter((individual_sponsor)=>{
                    return(individual_sponsor.year===year);
                
                });
                dict_year[type]=filtered_sub_array;
            });
          

            this.setState({
                sponsors_18:dict_year
            })

            console.log(this.state);
        })
    }

    

    render(){
        return(
            <div className="sponsors">
                
            </div>
        )
    }

}
    

export default Sponsors;