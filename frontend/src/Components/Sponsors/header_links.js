import React from 'react';
import {Link} from 'react-router-dom';

const links =()=>{
    return(
        
            <div className="ctn10">
                <div><Link className="links" to="/sponsors/yearwise">Yearwise Sponsors</Link></div>
                {/*<div><a className="links" to="">Sponsorship Gallery</a></div>*/}
                <div><Link className="links link-text" to="/sponsors/sponsors_heads">Head Co-ordinators of Sponsorship</Link></div>
            </div>
        
        
    )
}

export default links