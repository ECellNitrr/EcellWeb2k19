import React,{ Component } from 'react';
import {Link} from 'react-router-dom';
import './sponsors.css';
import Navbar from '../Navbar/navbar';
import Footer from '../Footer/footer';
import faxios from '../../axios';
import Loader from '../api_loader/api_loader'



class Sponsors extends Component{
    
    axios = faxios()
    state={
        spons_years:[],
        loading:true
    }

    componentDidMount(){
        this.axios.get('/sponsors/spons_years/').then(res=>{
            
            let data = res.data.spons_year;
            console.log(data);
            this.setState({
                spons_years:data,
                loading:false
            })


        })
    }
    

    render(){

        console.log(this.state)
        let spons_year_html= this.state.spons_years.map(year=>{
            return <div key={year}><Link to={`/sponsors/${year}`}><button className="btn" >Sponsors {year}</button></Link></div> 
        })
        
        return(
            <div className="sponsors">
                <Navbar/>

                <div className="header1">OUR SPONSORS</div>
                <div className="container-fluid ctn11">
                        <div>
                            {this.state.loading ? (<Loader/>):(spons_year_html) }
                        </div>
                </div>    
                
                <Footer/>
            </div>
        )
    }

}
    

export default Sponsors;

