import React,{ Component } from 'react';
import {Link} from 'react-router-dom';
import './sponsors.css';
import Navbar from '../Navbar/navbar';
import Footer from '../Footer/footer';


class Sponsors extends Component{
    
    

    render(){
        
        return(
            <div className="sponsors">
                <Navbar/>
                <div className="header1">OUR SPONSORS</div>
                <div className="container-fluid ctn11">
                    <div>
                        <div><Link to="/sponsors/2019" ><button className="btn" >Sponsors 2019</button></Link></div>
                        <div><Link to="/sponsors/2018" ><button className="btn" >Sponsors 2018</button></Link></div>
                        <div><Link to="/sponsors/2017" ><button className="btn" >Sponsors 2017</button></Link></div>
                        <div><Link to="/sponsors/2016" ><button className="btn" >Sponsors 2016</button></Link></div>
                        <div><Link to="/sponsors/2015" ><button className="btn" >Sponsors 2015</button></Link></div>
                    </div>
                </div>

                <h2 className="header3">SPONSORSHIP GALLERY</h2>
                <div className="container-fluid ctn11">
                    <div>
                        <div><a href="#"><button className="btn" >Sponsors Of E-Summit'19</button></a></div>
                        <div><a href="#"><button className="btn" >Sponsors Of E-Summit'18</button></a></div>
                        <div><a href="#"><button className="btn" >Sponsors Of E-Summit'17</button></a></div>
                        <div><a href="#"><button className="btn" >Sponsors Of E-Summit'16</button></a></div>
                        <div><a href="#"><button className="btn" >Sponsors Of E-Summit'15</button></a></div>
                    </div>
                </div>
                
                
                <Footer/>
            </div>
        )
    }

}
    

export default Sponsors;

