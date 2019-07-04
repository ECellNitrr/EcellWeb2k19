<<<<<<< HEAD
import React,{Component} from 'react';
import faxios from '../../axios';
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

=======
import React from 'react';
import './startup.css';
import Navbar from '../Navbar/navbar';

const startup=()=>(
    <div>
        <Navbar/>
        <div className="startup">
            Site Under Construction
        </div>
    </div>
)
>>>>>>> ecell/master
export default startup;