<<<<<<< HEAD
import React,{Component} from 'react';
import faxios from '../../axios';
import './register.css';
import Navbar from '../Navbar/navbar';

class register extends Component{

    render(){
        return(
            <div>
                <Navbar/>
                <div className="register">
                Site Under Construction
                </div>
            </div>
        )
    }
}

=======
import React from 'react';
import './register.css';
import Navbar from '../Navbar/navbar';

const register=()=>(
    <div>
        <Navbar/>
        <div className="register">
            Site Under Construction
        </div>
    </div>
)
>>>>>>> ecell/master
export default register;