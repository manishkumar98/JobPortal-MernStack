import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import '../index.css';

const axios = require('axios');

export default class Loggedin extends Component {
    constructor(props) {
        super(props);
        this.state = {
          email: '',
          password: '',
          error: '',
        };    
    }
    
    
    render() {
        return (
            <div className="App">
   
            <div className="auth-wrapper">
              <div className="auth-inner">
          
    
    
    <div>
    <nav className="navbar navbar-expand-lg navbar-light fixed-top">
            <div className="container">
              <Link className="navbar-brand" to={"/sign-in"}>LinkIn</Link>
              <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul className="navbar-nav ml-auto">

                  <li className="nav-item">
                    <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
    
            <h1>Welcome, naukri toh fir bhi naa milne waali</h1>
        </div>
</div>
</div>
</div>

        );
    }
}

