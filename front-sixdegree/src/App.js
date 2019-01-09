import React, { Component } from 'react';
import './App.css';
import { Switch,Route } from "react-router-dom";

import Navbar from './components/navbar/Navbar';
import InterestList from './components/interests/InterestList';
import InterestDetail from './components/interests/InterestDetail';
import Home from './components/home/Home';
import Profile from './components/profile/Profile';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/interests' component={InterestList}/>
          <Route exact path='/interests/:id' component={InterestDetail}/>
          <Route exact path='/profile' component={Profile}/>
        </Switch>
      </div>
    );
  }
}

export default App;
