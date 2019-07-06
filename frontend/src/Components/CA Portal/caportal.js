import React,{Component} from 'react';
import faxios from '../../axios';
import './caportal.css';
import Navbar from '../Navbar/navbar';

class caportal extends Component{

    render(){
        return(
            <div>
                <Navbar/>
                <div className="caportal">
                Site Under Construction
                </div>
            </div>
        )
    }
}

export default caportal;