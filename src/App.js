import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Landing from './components/landing';
import Login from './components/login';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import { withRouter } from 'react-router';
import { Router } from 'react-router';




class App extends React.Component {
  render() {
    return (
      <HashRouter>
      <div className="App">
        <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Login} />
        </Switch>
      </div>
      </HashRouter>
    );
  }
}

export default App;
