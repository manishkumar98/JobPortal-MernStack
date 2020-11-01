import React from 'react';
import Box from './Box';
import Box2 from './Box2';
import Box3 from './Box3';
import Box4 from './Box4inputs';

import Profile from './Profile';
import Navbars from './Navbars';
//import '../App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import '../two.css';
import * as ReactBootStrap from "react-bootstrap";

const axios = require('axios');

class Two extends React.Component {
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
    <div className = "auth-inne2">

  <Navbars/>
<Box4 key = {1} heading="Previous Job" subHeading1="Current Employment Status" subHeading2="Working In" subHeading4="Start Date" subHeading3="Job Title" data="suppp broooo??"/>
<br/>
<Box3 key = {3} heading="Preferred Job" subHeading1="Seeking Job Title" subHeading2="Industry"/>
<br/>

{/* <Box heading="Industry" data="asdasd"/> */}
<br/>

</div>
</div>
    </div>
  )
}
}

export default Two;