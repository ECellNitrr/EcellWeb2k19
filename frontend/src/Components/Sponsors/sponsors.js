import React,{ Component } from 'react';
import './sponsors.css';
import faxios from '../../axios';
import inc36 from '../../assets/sponsors/2018/36_inc.jpg';
import Navbar from '../Navbar/navbar';


class Sponsors extends Component{
    
    axios = faxios();
    state={
        sponsors_18:[]
    }

    componentDidMount(){
        this.axios.get("/sponsors/list/").then(res=>{
            const data = res.data;
            const spons= data.spons;
            
            const section_list=[];
            for(const x in spons){
                const section= spons[x].section_name;
                if(section_list.indexOf(section)===-1){
                    section_list.push(section);
                }
            }

            let spons18=[];
            for(const x in spons){
                
            }

            
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