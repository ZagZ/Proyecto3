import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import EditInterest from './EditInterest'

class InterestDetail extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    componentDidMount(){
        this.getSingleInterest()
    }

    getSingleInterest = ()=>{
        const {params} = this.props.match
        console.log(params);
        
        axios.get(`http://localhost:5000/api/interests/${params.id}`)
        .then(response => {
            const theInterest = response.data
            console.log(theInterest);
            this.setState(theInterest)
        })
        .catch(err=>console.log(err))
        
    }

    renderEditForm = ()=>{
        if(!this.state.from){
            this.getSingleInterest()
        } else {
            return <EditInterest theInterest={this.state} getTheInterest={this.getSingleInterest} />
        }
    }

    render() {
        return (
            <div>
                <h1>{this.state.from}</h1>
                <p>{this.state.work}</p>
                <p>{this.state.favfood}</p>
                <p>{this.state.favmovie}</p>
                <p>{this.state.favsong}</p>
                <div>{this.renderEditForm()} </div> 
                <Link to={'/profile'}>Back to profile</Link>
            </div>
        );
    }
}

export default InterestDetail;