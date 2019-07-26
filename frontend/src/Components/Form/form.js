import React,{Component} from 'react';
import Modal from './modal'
import Login from './login'
import Signup from './signup'
import './form.scss'

export default class form extends Component{
    render(){
        return(
					<React.Fragment>
						<Modal id='loginRegModal'>
							<ul className="nav nav-tabs md-tabs tabs-2 light-blue darken-3" role="tablist">
								<li className="nav-item">
									<a className="nav-link active" data-toggle="tab" href="#panel7" role="tab"><i className="fas fa-user mr-1"></i>
									Login</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" data-toggle="tab" href="#panel8" role="tab"><i className="fas fa-user-plus mr-1"></i>
									Signup</a>
								</li>
							</ul>


							<div className="tab-content">
							<Login/>
							<Signup/>
							</div>
						</Modal>
						
					</React.Fragment>
        )
    }
} 
