import React,{Component} from 'react';
import './register.css';
import Navbar from '../Navbar/navbar';
import Footer from '../Footer/footer'

class register extends Component{

    render(){
        return(
            <div className="whole-register">
                <Navbar/>
                <div className="register">
                    <div className="embed-responsive embed-responsive-16by9">
                        {/* <iframe className="embed-responsive-item"  src="https://docs.google.com/forms/d/e/1FAIpQLSfe6H-Q_buK4a8LFtj-o6zx6TbeWxuOs3-8laFw_sFUaKxJww/viewform?embedded=true" width="1000" height="1843" frameBorder="0" marginheight="0" marginwidth="0">Loading…</iframe> */}
                        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfe6H-Q_buK4a8LFtj-o6zx6TbeWxuOs3-8laFw_sFUaKxJww/viewform?embedded=true" width="1000" height="2000" frameborder="0" marginheight="0" marginwidth="0"></iframe>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}
export default register;
