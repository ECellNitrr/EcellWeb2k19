import React,{ Component } from 'react';
import './sponsors.css';
import faxios from '../../axios';
import Navbar from '../Navbar/navbar';
import Footer from '../Footer/footer';
import Header_Links from './header_links';


class Sponsors extends Component{
    
    

    render(){
        
        return(
            <div className="sponsors">
                <Navbar/>
                <div className="header1">OUR SPONSORS</div>
                <div className="container-fluid ctn11">
                    <div><a href="#"><button>Sponsors 2019</button></a></div>
                    <div><a href="#"><button>Sponsors 2019</button></a></div>
                    <div><a href="#"><button>Sponsors 2019</button></a></div>
                    <div><a href="#"><button>Sponsors 2019</button></a></div>
                    <div><a href="#"><button>Sponsors 2019</button></a></div>
                </div>
                
                
                <Footer/>
            </div>
        )
    }

}
    

export default Sponsors;

