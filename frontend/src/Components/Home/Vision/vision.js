 import React from 'react';
 import './vision.css';
 import run from '../../../assets/run.png';

 const vision = () =>{
    // document.querySelector("#adforcaModal_toggle").click();
    return (
        <div className="vision">
         <div className="container-fluid ctn-3">
            <div className="row">
                
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-7">
                    <h2 className="heading-5">Our Vision</h2>
                    <p className="text-6">The Entrepreneurship cell, NIT Raipur is a non-profit organization that manifests the essence of entrepreneurship in the passionate youngsters who have the zeal to pursue entrepreneurship and advocate this vehement enthusiasm in the generations to come. Keeping this ideology in mind we not only provide the foundation to the entrepreneurial capabilities of the promising young minds but also help in nurturing their skills by providing resources such as new ideas.</p>

                </div>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-5 col3">
                    <p className="run"><img alt='Running Man' className="running-man" src={run}></img></p>
                </div>
            </div>
         </div>
     </div>
    )
 }
     

 export default vision;