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
        login_btn.innerHTML='<i class="fa fa-cog fa-spin"></i>'
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
              
<div class="modal fade" id="modalLRForm" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
  <div class="modal-dialog cascading-modal" role="document">
    
    <div class="modal-content">

      
      <div class="modal-c-tabs">

        
        <ul class="nav nav-tabs md-tabs tabs-2 light-blue darken-3" role="tablist">
          <li class="nav-item">
            <a class="nav-link active" data-toggle="tab" href="#panel7" role="tab"><i class="fas fa-user mr-1"></i>
              Login</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-toggle="tab" href="#panel8" role="tab"><i class="fas fa-user-plus mr-1"></i>
              Signup</a>
          </li>
        </ul>

        
        <div class="tab-content">
          
          <div class="tab-pane fade in show active" id="panel7" role="tabpanel">

            
            <div class="modal-body mb-1">
              <div class="md-form form-sm mb-5">
                <i class="fas fa-envelope prefix"></i>
                <input type="email" id="modalLRInput10 user-email" class="form-control form-control-sm validate" placeholder="Your email"></input>
                <label data-error="wrong" data-success="right" for="modalLRInput10"></label>
              </div>

              <div class="md-form form-sm mb-4">
                <i class="fas fa-lock prefix"></i>
                <input type="password" id="modalLRInput11 user-password" class="form-control form-control-sm validate" placeholder="Your password"></input>
                <label data-error="wrong" data-success="right" for="modalLRInput11"></label>
              </div>
              <div class="text-center mt-2">
                <button class="btn btn-info login-button">Log in <i class="fas fa-sign-in ml-1"></i></button>
              </div>
            </div>
            
            <div class="modal-footer">
              <div class="options text-center text-md-right mt-1">
                <p>Not a member? <a href="#" class="blue-text">Sign Up</a></p>
                <p>Forgot <a href="#" class="blue-text">Password?</a></p>
              </div>
              <button type="button" class="btn btn-outline-info waves-effect ml-auto" data-dismiss="modal">Close</button>
            </div>

          </div>
          

          
          <div class="tab-pane fade" id="panel8" role="tabpanel">

            
            <div class="modal-body">

              <div class="md-form form-sm mb-5">
                <i class="fas fa-user prefix"></i>
                <input type="text" id="modalLRInput12" class="form-control form-control-sm validate" placeholder="Your Name"></input>
                <label data-error="wrong" data-success="right" for="modalLRInput12"></label>
              </div>

              <div class="md-form form-sm mb-5">
                <i class="fas fa-phone prefix"></i>
                <input type="tel" id="modalLRInput12" class="form-control form-control-sm validate" placeholder="Your Contact"></input>
                <label data-error="wrong" data-success="right" for="modalLRInput12"></label>
              </div>

              <div class="md-form form-sm mb-5">
                <i class="fas fa-envelope prefix"></i>
                <input type="email" id="modalLRInput12" class="form-control form-control-sm validate" placeholder="Your email"></input>
                <label data-error="wrong" data-success="right" for="modalLRInput12"></label>
              </div>

              <div class="md-form form-sm mb-5">
                <i class="fas fa-lock prefix"></i>
                <input type="password" id="modalLRInput13" class="form-control form-control-sm validate" placeholder="Your password"></input>
                <label data-error="wrong" data-success="right" for="modalLRInput13"></label>
              </div>


              <div class="text-center form-sm mt-2">
                <button class="btn btn-info">Sign up <i class="fas fa-sign-in ml-1"></i></button>
              </div>

            </div>
            
            <div class="modal-footer">
              <div class="options text-right">
                <p class="pt-1">Already have an account? <a href="#" class="blue-text">Log In</a></p>
              </div>
              <button type="button" class="btn btn-outline-info waves-effect ml-auto" data-dismiss="modal">Close</button>
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