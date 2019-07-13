import React from 'react';
import {BrowserRouter,Route,Switch,Redirect} from 'react-router-dom';
import yearwise from '../Sponsors/yearwise_sponsors';

const links =()=>{
    return(
        
            <div className="ctn10">
                <div><a className="links" href="#">Yearwise Sponsors</a></div>
                <div><a className="links" href="#">Sponsorship Gallery</a></div>
                <div><a className="links link-text" href="#">Head Co-ordinators of Sponsorship</a></div>
            </div>
        
        
    )
}

export default links