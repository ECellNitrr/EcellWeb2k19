import React,{Component} from 'react';
import faxios from '../../axios';
import Navbar from '../Navbar/navbar';
import Footer from '../Footer/footer';

export default class yearwise extends Component{
    axios= faxios();
    state={
        year:[]
    }

    componentDidMount(){
        
    }
}