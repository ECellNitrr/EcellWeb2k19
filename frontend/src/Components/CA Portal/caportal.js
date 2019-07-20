import React,{Component} from 'react';
import './caportal.css';
import Navbar from '../Navbar/navbar';

class caportal extends Component{

    render(){
        return(
            <div>
                <Navbar/>
                <div className="caportal text-center">
                    <h1>Will be up on Monday!(22/07/2019)</h1>
                    <h1>Stay tuned</h1>
                    <img src={require('../../assets/wink_emoji.png')} height='300' width='300' alt="wink emoji"/>
                </div>
            </div>
        )
    }
}

export default caportal;