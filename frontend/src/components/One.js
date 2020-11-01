import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Box from './Box';
import Box3 from './Box3';
import Profile from './Profile';
import Navbars from './Navbars';
import '../One.css';
import * as ReactBootStrap from "react-bootstrap";

const axios = require('axios');

class One extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
  return (
  
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
          <div className="auth-wrapper" >
    <div className = "auth-inne1">

   <Navbars />
<Box3 key = {1} heading="Contact" subHeading1="Phone" subHeading2="E-mail" data="suppp broooo??"/>
<br/>
<Box3 key = {2} heading="Location" subHeading1="City" subHeading2="Country"/>
<br/>
<Box heading="Description" data="asdasd"/>
<br/>

<Profile/> 
</div>
</div>

    </div>
  )
}
}

export default One;