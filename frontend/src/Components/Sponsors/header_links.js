import React from 'react';
import { Link } from 'react-router-dom'

const links =()=>{

    return(
            <div className="ctn10">
                <div><Link to='/yearwise_sponsors/' className="links">Yearwise Sponsors</Link></div>
                {/* <div><a className="links" href="#">Sponsorship Gallery</a></div> */}
                <div><Link to='/spons_hc/' className="links link-text">Head Co-ordinators of Sponsorship</Link></div>
            </div>
    )
}

export default links