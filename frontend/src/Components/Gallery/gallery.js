import React,{Component} from 'react';
import './gallery.css';
import {Link} from 'react-router-dom';
import Navbar from '../Navbar/navbar';
import Footer from '../Footer/footer';


class gallery extends Component{

    render(){  
        
        return(
            <div className="whole-gallery">
                <Navbar/>
                
                <div className="container-fluid" style={{maxWidth:"700px",paddingTop:"200px"}}>
                    <div className="header66">Gallery</div>
                    <div className="gal-link"><Link to="gallery/E-Summit'18"><button className="btn lgtabs lgback" >GALLERY OF E-SUMMIT'18</button></Link></div> 
                    <div className="gal-link"><Link to="gallery/E-Summit'17"><button className="btn lgtabs lgback" >GALLERY OF E-SUMMIT'17</button></Link></div> 
                    <div className="gal-link"><Link to="gallery/E-Summit'16"><button className="btn lgtabs lgback" >GALLERY OF E-SUMMIT'16</button></Link></div> 
                </div>
                <Footer/>
            </div>
        )
    }
}

export default gallery;