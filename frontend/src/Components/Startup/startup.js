import React,{Component} from 'react';

 
import './startup.css';
import Navbar from '../Navbar/navbar';

class startup extends Component{

    render(){
        return(
            <div>
                <Navbar/>
                <div className="startup">
                Site Under Construction
                </div>
            </div>
        )
    }
}
export default startup;
