import React,{Component} from 'react';
import faxios from '../../axios';

export default class form extends Component{

  axios = faxios();

    render(){

     /*let login_btn= document.querySelector('.login-button');
      let user_email = document.querySelector('#user-email');
      let user_password= document.querySelector('#user-password');

      login_btn.addEventListener('click',(e)=>{
        e.preventDefault();
        login_btn.innerHTML='<i className="fa fa-cog fa-spin"></i>'
        login_btn.disabled = true;

        this.componentDidMount(){
          this.axios.post('/login/',{
            body:JSON.stringify({
              email:user_email.nodeValue,
              password:user_password.nodeValue
            })
          })

          .then(d=>{
            login_btn.innerHTML='Login'
            login_btn.disabled=false
            return d.JSON()

          })
        }
      })*/





        return(
            <div>
              
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
          
          <div className="tab-pane fade in show active" id="panel7" role="tabpanel">

            
            <div className="modal-body mb-1">
              <div className="md-form form-sm mb-5">
                <i className="fas fa-envelope prefix"></i>
                <input type="email" id="mlr_10 user-email" className="form-control form-control-sm validate" placeholder="Your email"></input>
                <label data-error="wrong" data-success="right" htmlFor="mlr_10"></label>
              </div>

              <div className="md-form form-sm mb-4">
                <i className="fas fa-lock prefix"></i>
                <input type="password" id="mlr_11 user-password" className="form-control form-control-sm validate" placeholder="Your password"></input>
                <label data-error="wrong" data-success="right" htmlFor="mlr_11"></label>
              </div>
              <div className="text-center mt-2">
                <button className="btn btn-info login-button">Log in <i className="fas fa-sign-in ml-1"></i></button>
              </div>
            </div>
            
            <div className="modal-footer">
              <div className="options text-center text-md-right mt-1">
                <p>Not a member? <a href="#" className="blue-text">Sign Up</a></p>
                <p>Forgot <a href="#" className="blue-text">Password?</a></p>
              </div>
              <button type="button" className="btn btn-outline-info waves-effect ml-auto" data-dismiss="modal">Close</button>
            </div>

          </div>
          

          
          <div className="tab-pane fade" id="panel8" role="tabpanel">

            
            <div className="modal-body">

              <div className="md-form form-sm mb-5">
                <i className="fas fa-user prefix"></i>
                <input type="text" id="mlr_12" className="form-control form-control-sm validate" placeholder="Your Name"></input>
                <label data-error="wrong" data-success="right" htmlFor="mlr_12"></label>
              </div>

              <div className="md-form form-sm mb-5">
                <i className="fas fa-phone prefix"></i>
                <input type="tel" id="mlr_12" className="form-control form-control-sm validate" placeholder="Your Contact"></input>
                <label data-error="wrong" data-success="right" htmlFor="mlr_12"></label>
              </div>

              <div className="md-form form-sm mb-5">
                <i className="fas fa-envelope prefix"></i>
                <input type="email" id="mlr_12" className="form-control form-control-sm validate" placeholder="Your email"></input>
                <label data-error="wrong" data-success="right" htmlFor="mlr_12"></label>
              </div>

              <div className="md-form form-sm mb-5">
                <i className="fas fa-lock prefix"></i>
                <input type="password" id="mlr_13" className="form-control form-control-sm validate" placeholder="Your password"></input>
                <label data-error="wrong" data-success="right" htmlFor="mlr_13"></label>
              </div>


              <div className="text-center form-sm mt-2">
                <button className="btn btn-info">Sign up <i className="fas fa-sign-in ml-1"></i></button>
              </div>

            </div>
            
            <div className="modal-footer">
              <div className="options text-right">
                <p className="pt-1">Already have an account? <a href="#" className="blue-text">Log In</a></p>
              </div>
              <button type="button" className="btn btn-outline-info waves-effect ml-auto" data-dismiss="modal">Close</button>
            </div>
          </div>
          
        </div>

      </div>
    </div>
    
  </div>
</div>



            </div>
        )
    }
} 