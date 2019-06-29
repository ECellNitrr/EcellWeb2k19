import React from 'react';
import './glimpses.css';


const glimpses =()=>(
    <div className="glimpses">
        <div className="container-fluid ctn-5">
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
                    <div className="center">
                        <div className="text textblock1">LAST YEAR</div>
                        <div className="text textblock2">GLIMPSES</div>
                    </div>
                </div>

                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col4">
                    <div className="embed-responsive embed-responsive-16by9 shadow-lg p-3 mb-5 bg-white rounded" style={{marginTop:'20px'}}>
                        <iframe className="embed-responsive-item " width="560" height="315" src="https://www.youtube.com/embed/wmHhRVO9nDU" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default glimpses;