import React, { Component } from 'react';
import axios from 'axios';

class AddInterests extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            from: '',
            work: '',
            favfood: '',
            favmovie: '',
            favsong: '',
        }
    }

    handleFormSubmit = (event)=>{
        event.preventDefault()
        const from = this.state.from.toUpperCase();
        const work = this.state.work.toUpperCase();
        const favfood = this.state.favfood.toUpperCase();
        const favmovie = this.state.favmovie.toUpperCase();
        const favsong = this.state.favsong.toUpperCase();

        axios.post('https://sixdegrees-mx.herokuapp.com/api/interests/',
        {from, work, favfood, favmovie, favsong})
        .then(()=>{
            this.props.getData()
            this.setState({
                from: '',
                work: '',
                favfood: '',
                favmovie: '',
                favsong: '',})
        })
        .catch(err=>console.log(err))
    }
    
    
    handleChange = (event) => {  
        const {name, value} = event.target;
        this.setState({[name]: value});
    }

    render() {
        return (
            <div className='add-interest'>
                <form onSubmit={this.handleFormSubmit} >
                    <label> Soy de: </label>
                    <input type='text' name='from' value={this.state.from} onChange={e => this.handleChange(e)} />
                    <label> Me enfoco ahora en: </label>
                    <input type='textarea' name='work' value={this.state.work} onChange={e => this.handleChange(e)} />
                    <label> Mi mejor comida seria: </label>
                    <input type='text' name='favfood' value={this.state.favfood} onChange={e => this.handleChange(e)} />
                    <label> La pelicula que mas me impacto fue: </label>
                    <input type='text' name='favmovie' value={this.state.favmovie} onChange={e => this.handleChange(e)} />
                    <label> Quiza te gustaria escuchar una fabulosa cancion como: </label>
                    <input type='text' name='favsong' value={this.state.favsong} onChange={e => this.handleChange(e)} />

                    <input type='submit' value='Submit' />
                </form>
            </div>
        );
    }
}

export default AddInterests;