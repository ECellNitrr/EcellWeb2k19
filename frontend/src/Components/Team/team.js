<<<<<<< HEAD
import React,{Component} from 'react';
import faxios from '../../axios';
import './team.css';
import Navbar from '../Navbar/navbar';

class team extends Component{

    render(){
        return(
            <div>
                <Navbar/>
                <div className="team">
                Site Under Construction
                </div>
            </div>
        )
    }
}

=======
import React from 'react';
import './team.css';
import Navbar from '../Navbar/navbar';

const team=()=>(
    <div>
        <Navbar/>
        <div className="team">
            Site Under Construction
        </div>
    </div>
)
>>>>>>> ecell/master
export default team;