import React, { Component } from 'react';
import logo from 'logo.svg';
import './App.css';
import { BrowserRouter as Router, Link, } from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
            <Link to='/profile'>Profile</Link>
          </header>
          {this.props.routes}
        </div>
      </Router>
    );
  }
}
