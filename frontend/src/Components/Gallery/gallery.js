import React,{Component, useState, useCallback } from 'react';
import faxios from '../../axios';
import './gallery.css';
import Navbar from '../Navbar/navbar';
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";

class gallery extends Component{

    axios=faxios()
    state={
        yearwise_pics:[]
    }

    componentDidMount(){
        this.axios.get('/gallery/list/').then(res=>{
            
            let yearwise_images= res.data.gallery;
            this.setState({
                yearwise_pics:yearwise_images
            })

            console.log(this.state.yearwise_pics)
        })
    }

    render(){

        const [currentImage, setCurrentImage] = useState(0);
        const [viewerIsOpen, setViewerIsOpen] = useState(false);

        const openLightbox = useCallback((event, { photo, index }) => {
            setCurrentImage(index);
            setViewerIsOpen(true);
        }, []);

        const closeLightbox = () => {
            setCurrentImage(0);
            setViewerIsOpen(false);
        };

        return(
            <div className="whole-gallery">
                <Navbar/>
                <div className="gallery container-fluid" style={{maxWidth:"1500px"}}>
                   {/* <Gallery photos={photos} onClick={openLightbox} />
                    <ModalGateway>
                        {viewerIsOpen ? (
                        <Modal onClose={closeLightbox}>
                            <Carousel
                            currentIndex={currentImage}
                            views={photos.map(x => ({
                                ...x,
                                srcset: x.srcSet,
                                caption: x.title
                            }))}
                            />
                        </Modal>
                        ) : null}
                        </ModalGateway>*/}
                </div>
            </div>
        )
    }
}

export default gallery;