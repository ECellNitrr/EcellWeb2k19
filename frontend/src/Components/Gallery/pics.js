import React,{Component} from 'react'
import './gallery.css'
import faxios from '../../axios'

export default class pics extends Component{
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

            
        })
    }



    render(){
        return(null)
    }
   
}