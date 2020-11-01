import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./components/login.component";
import SignUp from "./components/signup.component";
import LoggedIn from "./components/loggedIn";
import  userDetails from "./components/userDetails.component";
import  One from "./components/One";
import  Two from "./components/two";

//import  userDetails2 from "./components/userDetails2.component";
function App() {
  window.MyLib = {}
  return (
  
  <Router>
    
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path="/sign-up" component={SignUp} />
            <Route path="/userDetails" component={userDetails} />
            
            <Route path="/sign-in" component={Login} />
            
            <Route path="/loggedIn" component={LoggedIn} />
            <Route path="/personal" component={One} />
            <Route path="/professional" component={Two} />

          </Switch>
        </Router>
  );
}

export default App;
