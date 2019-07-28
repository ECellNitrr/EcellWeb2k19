import React,{ Component } from 'react';
import {Link} from 'react-router-dom';
import './sponsors.css';
import Navbar from '../Navbar/navbar';
import Footer from '../Footer/footer';
import faxios from '../../axios';



class Sponsors extends Component{
    
    axios = faxios()
    state={
        spons_years:[]
    }

    componentDidMount(){
        this.axios.get('/sponsors/spons_years/').then(res=>{
            
            let data = res.data.spons_year;
            console.log(data);
            this.setState({
                spons_years:data
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
                        {/*<div><Link to="/sponsors/2019" ><button className="btn" >Sponsors 2019</button></Link></div>*/}
                        {spons_year_html}
                        
                    </div>
                </div>

                {/*<h2 className="header3">SPONSORSHIP GALLERY</h2>
                <div className="container-fluid ctn15">
                    <div>
                        <div><a href="#"><button className="btn" >Sponsors Of E-Summit'19</button></a></div>
                        <div><a href="#"><button className="btn" >Sponsors Of E-Summit'18</button></a></div>
                        <div><a href="#"><button className="btn" >Sponsors Of E-Summit'17</button></a></div>
                        <div><a href="#"><button className="btn" >Sponsors Of E-Summit'16</button></a></div>
                        <div><a href="#"><button className="btn" >Sponsors Of E-Summit'15</button></a></div>
                    </div>
        </div>*/}
                
                
                <Footer/>
            </div>
        )
    }

}
    

export default Sponsors;

