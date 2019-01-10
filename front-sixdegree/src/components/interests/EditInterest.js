import React, { Component } from 'react';
import axios from 'axios'

class EditInterest extends Component {

    constructor(props) {
        super(props);
        this.state={
            from: this.props.theInterest.from,
            work: this.props.theInterest.work,
            favfood: this.props.theInterest.favfood,
            favmovie: this.props.theInterest.favmovie,
            favsong: this.props.theInterest.favsong,  
        }
    }

    handleFormSubmit = (event) => {
        event.preventDefault()
        const from = this.state.from.toUpperCase();
        const work = this.state.work.toUpperCase();
        const favfood = this.state.favfood.toUpperCase();
        const favmovie = this.state.favmovie.toUpperCase();
        const favsong = this.state.favsong.toUpperCase();
    
        event.preventDefault();
    
        axios.put(`https://sixdegrees-mx.herokuapp.com/api/interests/${this.props.theInterest._id}`, { from, work, favfood,favmovie,favsong })
        .then( () => {
            this.props.getTheInterest();
        })
        .catch( error => console.log(error) )
      }
    
      handleChangeFrom = (event) => {  
        this.setState({
          from:event.target.value
        })
      }
    
      handleChangeWork = (event) => {  
        this.setState({
          work:event.target.value
        })
      }
    
      handleChangeFavfood = (event) => {  
        this.setState({
          favfood:event.target.value
        })
      }
    
      handleChangeFavmovie = (event) => {  
        this.setState({
          favmovie:event.target.value
        })
      }
    
      handleChangeFavsong = (event) => {  
        this.setState({
          favsong:event.target.value
        })
      }
    
    
    render() {
        return (
            <div className='add-interest'>
                <form onSubmit={this.handleFormSubmit} >
                    <label> Soy de: </label>
                    <input type='text' name='from' value={this.state.from} onChange={e => this.handleChangeFrom(e)} />
                    <label> Me enfoco ahora en: </label>
                    <input type='textarea' name='work' value={this.state.work} onChange={e => this.handleChangeWork(e)} />
                    <label> Mi mejor comida seria: </label>
                    <input type='text' name='favfood' value={this.state.favfood} onChange={e => this.handleChangeFavfood(e)} />
                    <label> La pelicula que mas me impacto fue: </label>
                    <input type='text' name='favmovie' value={this.state.favmovie} onChange={e => this.handleChangeFavmovie(e)} />
                    <label> Quiza te gustaria escuchar una fabulosa cancion como: </label>
                    <input type='text' name='favsong' value={this.state.favsong} onChange={e => this.handleChangeFavsong(e)} />
    
                    <input type='submit' value='Submit' />
                </form>
            </div>
        );
    }
}

export default EditInterest;

