import React from 'react';
import './form.css';

const form = () =>{
    return(
        <div className="container-fluid ctn-6">
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-7">
                    <img src={require('../../../assets/gmap.jpg')} alt="gmap" className='w-100'/>
                </div>

                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-5" style={{textAlign:"center"}}>
                    <h2 style={{fontWeight:"800",borderBottom:"5px solid",borderRadius:"20px",marginBottom:"15px",marginTop:"30px",paddingBottom:"15px"}} >Contact Us</h2>
                    <h6 style={{fontWeight:"600",marginBottom:"15px"}} >Leave a Message</h6>
                    <form>
                       <div><input type="text" name="Name" id="visitor-name" required minLength="5" maxLength="30" placeholder="Your Name"></input></div>
                       <div><input id="visitor-email" type="email" required placeholder="Your Email"></input></div>
                       <div><textarea id="message" required minLength="30" maxLength="100"rows="5" placeholder="Your Message"></textarea></div>
                       <div><button className="submit" type="submit">SUBMIT</button></div> 
                    </form>
                    
                </div>
            </div>
        </div>
    )
}

export default form;