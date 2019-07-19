import React,{Component} from 'react';
import faxios from '../../axios';
import Login from './login'
import Signup from './signup'

export default class form extends Component{

  axios = faxios();

    render(){
        return(
			<div className="modal fade" id="modalLRForm" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
				<div className="modal-dialog cascading-modal" role="document">

					<div className="modal-content">
						<div className="modal-c-tabs">
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
						</div>
					</div>
				</div>
			</div>
        )
    }
} 