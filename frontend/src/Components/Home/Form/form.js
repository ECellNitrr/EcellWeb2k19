import React from 'react';
import './form.css';
import $ from 'jquery';

const form = () =>{

    $(document).ready(function() {
        $(window).resize(function() {
        if ($(window).width() < 1220 && $(window).width() >991) {
            $('textarea').attr('rows', '2')
        } else {
            $('textarea').attr('rows', '5')
        }
        }
    )})
    



    return(
        <div className="container-fluid ctn-6">
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-7">
                    <div class="embed-responsive embed-responsive-16by9 map">
                        <iframe className="embed-responsive-item" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.5453983644497!2d81.60270025099706!3d21.249868185498716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28dde241e3e46d%3A0xf42216385880421e!2sEntrepreneurship+Cell!5e0!3m2!1sen!2sin!4v1561393367581!5m2!1sen!2sin" width="600" height="400" frameborder="0" allowfullscreen></iframe>
                    </div>
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