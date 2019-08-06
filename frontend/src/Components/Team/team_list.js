import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import faxios from '../../axios';
import Navbar from '../Navbar/navbar';
import Footer from '../Footer/footer';
import Loader from '../api_loader/api_loader'
import './team.css'

export default class team_list extends Component {

    state={
        team_years:[],
        loading:true
    }

    componentDidMount(){
        faxios().get('team/team_years/').then(res=>{
            
            let data=res.data.years
            let team_extract=[]

            data.forEach(el => {
                let year = el[0];
                team_extract.push(year);
            });

            let year_sorted=team_extract.sort().reverse();
            
            this.setState({
                team_years:year_sorted,
                loading:false
            })
        })
    }


    render() {
        
        let team_year_html= this.state.team_years.map(year=>{
            return <div key={year}><Link to={`/team/${year}`}><button className="btn" >Team of {year}-{year-2000+1}</button></Link></div>
        })

        return (
            <div className="team-whole">
                <Navbar/>

                <div className="header1">TEAM E-CELL</div>
                <div className="container-fluid ctn11">
                        <div style={{marginTop:"-250px"}}>
                            {this.state.loading ? (<Loader/>):(team_year_html) }
                        </div>
                </div>    
                
                <Footer/>
            </div>
        )
    }
}
