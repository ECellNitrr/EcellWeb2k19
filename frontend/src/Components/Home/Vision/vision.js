 import React from 'react';
 import './vision.css';
 import run from '../../../Images/run.png';


 const vision = () =>(
     <div className="vision">
         <div className="container-fluid ctn-3">
            <div className="row">
                
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
                    <h3 className="heading-5">Our Vision</h3>
                    <p className="text-6">The Entrepreneurship cell, NIT Raipur is a non-profit organization that manifests the essence of entrepreneurship in the passionate youngsters who have the zeal to pursue entrepreneurship and advocate this vehement enthusiasm in the generations to come. Keeping this ideology in mind we not only provide the foundation to the entrepreneurial capabilities of the promising young minds but also help in nurturing their skills by providing resources such as new ideas.</p>

                </div>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col3">
                    <p className="run"><img className="running-man" src={run}></img></p>
                </div>
            </div>
         </div>
     </div>
 )

 export default vision;