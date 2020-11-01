import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import '../index.css';
import Login from './login.component';
import * as ReactBootStrap from "react-bootstrap";


const axios = require('axios');





export default class Loggedin extends React.Component {
  constructor(props) {

        super(props);
        };

handleProfile = () => {
  //axios.get('/',{params: {email : window.name}})
  //.then(res => {
    //  console.log(res);
  //});
  /*var config = {
    method: 'get',
    url: 'http://localhost:4000/' + window.name,
    headers: { 
      'Content-Type': 'application/json'
    },
    
  };
  
  axios(config)
  .then(function (response) {
    
  })
  .catch(function (error) {
    console.log(error);
  });
*/
window.location = "/personal";

}
handleLogout = () => {
    axios.get('/logout')
      .then(res => {
          console.log(res.Success);

          
  window.location = "/sign-in";
      })
} 

    
    render() {

            
      return (
            <div className="App">
   
            <div className="auth-wrapper">
              <div className="auth-inner">
          
    
    
    <div>
    <nav className="navbar navbar-expand-lg navbar-light fixed-top">
            <div className="container">
              <Link className="navbar-brand">LinkIn</Link>
              <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul className="navbar-nav ml-auto">

        <li><ReactBootStrap.NavDropdown title = "≡" id="collasible-nav-dropdown">
        <ReactBootStrap.NavDropdown.Item onClick = {this.handleProfile}>Profile</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item onClick= {this.handleLogout}>Logout</ReactBootStrap.NavDropdown.Item>
        
      </ReactBootStrap.NavDropdown>
   </li>
                </ul>
              </div>
            </div>
          </nav>
    
      <h1>Welcome, User</h1>
        </div>
</div>
</div>
</div>

        );
      
    }
  }
  