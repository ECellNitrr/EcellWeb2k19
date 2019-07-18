import React, { Component } from 'react'
import faxios from '../../axios';

export default class spons_years_list extends Component {
    axios = faxios()

    componentDidMount() {
        this.axios.get("/sponsors/list/").then(res=>{
            let sponsors = res.data.sponsors
            console.log({sponsors}) 
        })
    }
    
    
    
    render() {
        return (
            <div>
                yearwise list spons
            </div>
        )
    }
}
