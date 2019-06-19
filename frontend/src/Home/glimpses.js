import React from 'react';

import {g1} from '../Images/g1.jpeg';
import {g2} from '../Images/g2.jpeg';
import {g3} from '../Images/g3.jpeg';
import {g4} from '../Images/g4.jpeg';
import {g5} from '../Images/g5.jpeg';
import {g6} from '../Images/g6.jpeg';
import {g7} from '../Images/g7.jpeg';
import {g8} from '../Images/g8.jpeg';
import {g9} from '../Images/g9.jpeg';
import {g10} from '../Images/g10.jpeg';


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