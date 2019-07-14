import React,{Component} from 'react';
import faxios from '../../axios';
import ReactDOM from "react-dom";
import './events.css';
import Navbar from '../Navbar/navbar';

class events extends Component{
    

    render(){
        return(
            <div>
                <Navbar/>
                <div className="events">
                    <br/><br/><br/>
                
      <div id="event1" class="event1">
        <div class="container">
          <h2>Our EVENTS</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit est
            facilis maiores, perspiciatis accusamus asperiores sint consequuntur
            debitis.
          </p>
		  <div class="row">
		  <div class="col-sm-4">

        
            <div class="icons">
              <figure>
               <a href="/event/${event.id}" class="register_btn" data-eid="${event.id}"><img src={require("../../assets/events/1.png")} alt="user" /></a>
              </figure>
              <span>Ignition</span>
            </div>
          
            <div class="icons">
              <figure>
              <a href="/event/${event.id}" class="register_btn" data-eid="${event.id}"><img src={require("../../assets/events/2.png")} alt="user" /></a>
              </figure>
              <span>Startup Camp</span>
            </div>
         
            <div class="icons">
              <figure>
              <a href="/event/${event.id}" class="register_btn" data-eid="${event.id}"><img src={require("../../assets/events/3.png")} alt="user" /></a>
              </figure>
              <span>Cricnometrica</span>
            </div>
			</div>
			
            <div class="col-sm-4">
          
              <div class="icons">
                <figure>
                <a href="/event/${event.id}" class="register_btn" data-eid="${event.id}"><img src={require("../../assets/events/4.png")} alt="user" /></a>
                </figure>
                <span>B-Quiz</span>
              </div>
           
              <div class="icons">
                <figure>
                <a href="/event/${event.id}" class="register_btn" data-eid="${event.id}"><img src={require("../../assets/events/5.png")} alt="user" /></a>
                </figure>
                <span>Wall Street</span>
              </div>
           
              <div class="icons">
                <figure>
                <a href="/event/${event.id}" class="register_btn" data-eid="${event.id}"><img src={require("../../assets/events/6.png")} alt="user" /></a>
                </figure>
                <span>Uthkristh</span>
              </div>
			 </div>
			<div class="col-sm-4">
            
            <div class="icons">
              <figure>
              <a href="/event/${event.id}" class="register_btn" data-eid="${event.id}"><img src={require("../../assets/events/7.png")} alt="user" /></a>
              </figure>
              <span>Entropy</span>
            </div>
          
            <div class="icons">
              <figure>
              <a href="/event/${event.id}" class="register_btn" data-eid="${event.id}"><img src={require("../../assets/events/8.png")} alt="user" /></a>
              </figure>
              <span>E - Gathering</span>
            </div>
          
            <div class="icons">
              <figure>
              <a href="/event/${event.id}" class="register_btn" data-eid="${event.id}"><img src={require("../../assets/events/9.png")} alt="user" /></a>
              </figure>
              <span>B-Case Study</span>
            </div>
			</div>
			</div>
          
        </div>
      </div>
    </div>
                
            </div>
        )
    }
}

export default events;