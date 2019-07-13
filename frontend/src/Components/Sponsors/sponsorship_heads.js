import React,{ Component } from 'react';
import './sponsors.css';
import Navbar from '../Navbar/navbar';
import Footer from '../Footer/footer';
import Header_Links from './header_links';


class Sponsors extends Component{
    
    

    

    render(){
        
        return(
            <div className="sponsors">
                <Navbar/>
                <div className="header4">SPONSORSHIP HEAD CO-ORDINATORS</div>
                <div className="container-fluid" style={{maxWidth:"1200px",paddingTop:"250px"}}>
                    <Header_Links/>
                </div>

                <div className="container-fluid ctn12" style={{maxWidth:"1200px"}}>
                    
                        <div className="individual_heads">
                            <div><img className="hc_image shadow-lg p-3 mb-5 bg-white rounded" src={require('../../assets/rajshree.jpeg')}></img></div>
                            <h3 className="spons_hc_name">Rajshree Gavel</h3>
                            <p className="center"><a className="spons_phone" href="tel:+91 8889830313">+91 8889830313</a></p>
                            <p className="center"><a className="spons_email" href="mailto:rajshreegavel111@gmail.com">rajshreegavel111@gmail.com</a></p>
                            <p className="center1"><a href="https://m.facebook.com/people/stream/coworkers/1581298025509378/?referrer_id=100007982796447%20INTRO_CARD_WORK&referrer_type=9&ref=content_filter"><i className="social fab fa-facebook-square"></i></a>&nbsp;&nbsp;<a href="https://www.linkedin.com/in/rajshree-gavel-059973157"><i className="social fab fa-linkedin"></i></a></p>

                        </div>
    
                        <div className="individual_heads">
                            <div><img className="hc_image shadow-lg p-3 mb-5 bg-white rounded" src={require('../../assets/mohit.jpg')}></img></div>
                            <h3 className="spons_hc_name">Mohith Khatri</h3>
                            <p className="center"><a className="spons_phone" href="tel:+91 7580800939">+91 7580800939</a></p>
                            <p className="center"><a className="spons_email" href="mailto:mohithkhatri100@gmail.com">mohithkhatri100@gmail.com</a></p>
                            <p className="center1"><a href="https://m.facebook.com/profile.php?id=100001201593080&ref=content_filter"><i className="social fab fa-facebook-square"></i></a>&nbsp;&nbsp;<a href="https://www.linkedin.com/in/mohith-khatri-36403b129"><i className="social fab fa-linkedin"></i></a></p>
                            
                        </div>
    
                        <div className="individual_heads">
                            <div><img className="hc_image shadow-lg p-3 mb-5 bg-white rounded" src={require('../../assets/yashwi.jpeg')}></img></div>
                            <h3 className="spons_hc_name">Yashwi Shah</h3>
                            <p className="center"><a className="spons_phone" href="tel:+91 7898556656">+91 7898556656</a></p>
                            <p className="center"><a className="spons_email" href="mailto:iamyashwi@gmail.com">iamyashwi@gmail.com</a></p>
                            <p className="center1"><a href="https://m.facebook.com/profile.php?id=100004699122432&ref=content_filter"><i className="social fab fa-facebook-square"></i></a>&nbsp;&nbsp;<a href="https://www.linkedin.com/in/yashwi-shah-04a042129"><i className="social fab fa-linkedin"></i></a></p>
                        </div>
                   
                    
                </div>
                
                <Footer/>
            </div>
        )
    }

}
    

export default Sponsors;