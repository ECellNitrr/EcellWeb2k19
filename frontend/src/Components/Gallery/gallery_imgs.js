import React, { Component } from "react";
import faxios from '../../axios';
import Navbar from '../Navbar/navbar';
import Footer from '../Footer/footer';
import ImageGallery from 'react-image-gallery';
import "../../../node_modules/react-image-gallery/styles/scss/image-gallery.scss";
import './gallery.css';
import Loader from '../api_loader/api_loader'


export default class gallery_imgs extends Component {
    state = {
        pic:[],
        photos:[],
        year_name:"",
        success:false,
        loading:true
    }

    componentDidMount(){
        let year_gallery= this.props.match.params.name;
        this.setState({
            year_name:year_gallery
        })
        faxios().get('/gallery/list/').then(res=>{
            let year_pics= res.data.gallery;
            let curent_year_pic= year_pics[year_gallery];
            console.log(curent_year_pic);

        curent_year_pic.forEach(ele => {
                this.state.photos.push({
                    thumbnail:ele.small,
                    original:ele.big
                })
            });

            this.setState({
                success:true,
                loading:false
            })
        
            if(this.state.success){
                document.querySelector('.image-gallery-play-button').click();
                
            }
        })
    }

    render() {
        
        return (
            <div className="whole-gallery">
                <Navbar/>
                
                <div style={{paddingTop:"200px"}}>
                    <div className="position11 shadow p-3 mb-5 bg-white rounded">Gallery of {this.state.year_name}</div>
                    <div className="gallery container-fluid ctn20 shadow p-3 mb-5 bg-white rounded" style={{maxWidth:"1300px"}}>
                    {this.state.loading?(<Loader/>):<ImageGallery className="shadow-lg p-3 mb-5 bg-white rounded" items={this.state.photos} />}

                </div>
                </div>
                <Footer/>
            </div>
        )
    }
}
