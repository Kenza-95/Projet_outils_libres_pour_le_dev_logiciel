import React, { Component } from 'react'
import App_home from './components/App';
import Register from './components/registe';
import Login from './components/authentification';
import Profil from './components/profil';
import { BrowserRouter as Router, Route } from "react-router-dom";

export class App extends Component {
  
  render() {
    return (
      <Router>
        <Route path="/" exact component={App_home} />
        <Route path="/register" exact component={Register} />
        <Route path="/login" exact component={Login} />
        <Route path="/profil" exact component={Profil} />
      </Router>
    )
  }
}

export default App;
