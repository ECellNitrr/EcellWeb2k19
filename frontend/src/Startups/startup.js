import React from 'react';
import s1 from '../Images/start/1.png';
import s2 from '../Images/start/2.jpg';
import s3 from '../Images/start/3.jpeg';
import s4 from '../Images/start/4.jpg';
import '../Startups/startup.css';

const startup=()=> (
    <section id="start">
      <div class="container">
        <div class="section-header">
          <h3>Our Startups</h3>
          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</p>
        </div>

        <div class="row">

          <div class="col-lg-3 col-md-6 wow fadeInUp">
            <div class="member">
              <img src={s1} alt=""></img>
              <div class="member-info">
                <div class="member-info-content">
                  <h4>SmileBots</h4>
                  <span></span>
                  <div class="social">
                    <a href=""><i class="fa fa-globe"></i> Visit Website</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          

          <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
            <div class="member">
              <img src={s2} alt=""></img>
              <div class="member-info">
                <div class="member-info-content">
                  <h4>Pollzy</h4>
                  <span></span>
                  <div class="social">
                    <a href=""><i class="fa fa-globe"></i> Visit Website</a>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
		  
		  <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
            <div class="member">
              <img src={s3}></img>
              <div class="member-info">
                <div class="member-info-content">
                  <h4>Innolat Technologies</h4>
                  <span></span>
                  <div class="social">
                   <a href=""><i class="fa fa-globe"></i> Visit Website</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
		  
		  <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
            <div class="member">
              <img src={s4}></img>
              <div class="member-info">
                <div class="member-info-content">
                  <h4>Lokus News</h4>
                  <div class="social">
                   <a href=""><i class="fa fa-globe"></i> Visit Website</a>
                  </div>
                </div>
              </div>
            </div>
          </div>


        </div>

      </div>
    </section>
)

export default startup;