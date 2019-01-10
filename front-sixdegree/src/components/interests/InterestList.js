import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

import AddInterest from './AddInterests'

class InterestList extends Component {

    constructor(props) {
        super(props);
        this.state = {listOfInterests:[]}
    }
        

    getAllInterest = ()=>{
        axios.get(`https://sixdegrees-mx.herokuapp.com/api/interests`)
        .then(response=>{
            this.setState({
                listOfInterests: response.data
                
            })
        })
    }

    componentDidMount(){
        this.getAllInterest()
    }

    render() {

        return (
            <div>
                <div>
                    {this.state.listOfInterests.map((interest,index) => {
                        return(
                            <div key={interest._id}>
                                <Link to={`/interests/${interest._id}`}>
                                    <h3> {interest.from} </h3>
                                </Link>
                            </div>
                        )
                    })}
                </div>
                <div>
                    <AddInterest getData= {()=> this.getAllInterest()} />
                </div>
            </div>
        );
    }
}

export default InterestList;