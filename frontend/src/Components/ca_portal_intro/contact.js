import React,{Component} from 'react';
import "./caportal.css";

export default class contacts extends Component{

    render(){
        return(
            <div >
                <div><h2 className="heading-1 hd">PUBLIC RELATIONS TEAM</h2></div>
                <div><p style={{textAlign:"center"}}>In case of any queries,contact-</p></div>
                <div className="flex-box justify-content-center">
                    <div className="individual-tabs">
                        <p style={{textAlign:"center",fontSize:"100px",color:"#254C6D"}}><i className="fas fa-user-circle"></i></p>
                        <h4 style={{textAlign:"center",fontWeight:"800",color:"black"}}>Nishu Chandravanshi</h4>
                        <h6 style={{textAlign:"center",fontWeight:"800",color:"black"}} ><a href="mailto:nishu181099@gmail.com">nishu181099@gmail.com</a></h6>
                        <h5 style={{textAlign:"center",fontWeight:"800",color:"black"}} ><a style={{color:"black"}} href="tel:8435249197">8435249197</a></h5>
                    </div>

                    <div className="individual-tabs">
                        <p style={{textAlign:"center",fontSize:"100px",color:"#254C6D"}}><i className="fas fa-user-circle"></i></p>
                        <h4 style={{textAlign:"center",fontWeight:"800",color:"black"}}>Kuldeep Narayan Minj</h4>
                        <h6 style={{textAlign:"center",fontWeight:"800",color:"black"}} ><a href="mailto:knarayanmj@gmail.com">knarayanmj@gmail.com</a></h6>
                        <h5 style={{textAlign:"center",fontWeight:"800",color:"black"}} ><a style={{color:"black"}} href="tel:7974443722">7974443722</a></h5>
                    </div>

                    <div className="individual-tabs">
                        <p style={{textAlign:"center",fontSize:"100px",color:"#254C6D"}}><i className="fas fa-user-circle"></i></p>
                        <h4 style={{textAlign:"center",fontWeight:"800",color:"black"}}>Vaishnavi Sharma</h4>
                        <h6 style={{textAlign:"center",fontWeight:"800",color:"black"}} ><a href="mailto:vaishnavisharma40928@gmail.com">vaishnavisharma40928@gmail.com</a></h6>
                        <h5 style={{textAlign:"center",fontWeight:"800",color:"black"}} ><a style={{color:"black"}} href="tel:9571542120">9571542120</a></h5>
                    </div>
                </div>
            </div>
        )
    }
}