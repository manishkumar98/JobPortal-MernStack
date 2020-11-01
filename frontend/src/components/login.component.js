import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import '../index.css';
const axios = require('axios');

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
          email: '',
          password: '',
          error: '',
        };
        //this.submitHandleLogin = this.submitHandleLogin.bind(this);
        this.dismissError = this.dismissError.bind(this);
        this.handlePassChange = this.handlePassChange.bind(this);
        this.handleUserChange = this.handleUserChange.bind(this);
        //this.delta = this.delta.bind(this);
    }
    
    dismissError() {
        this.setState({ error: '' });
      }
      
    /*submitHandleLogin() {
        this.setState({ error: '' });
      }*/
      submitHandleLogin = (evt) =>  {
        evt.preventDefault();
        /*this.handleUserChange(evt);
        this.handlePassChange(evt);*/
        if (!this.state.email &&!this.state.password) {
             this.setState({ error: 'Email and password is required' });
          }
    
        if (!this.state.email) {
           this.setState({ error: 'Email is required' });
        }
    
        if (!this.state.password) {
           this.setState({ error: 'Password is required' });
        }
    
        
        //axios.get('/login').then(res => {

    //res.send(res.data);
//});
   var flag = 0;
axios.post('/login', {
        "email": this.state.email,
        "password": this.state.password
      })
      .then(response => {
         if(response.data.Success === "Success!")
{
    window.name = this.state.email;
window.location = "/loggedIn";   
          }
          else{
            this.setState({ error: response.data.Success});    
          }
      })
                   
//return this.setState({ error: '' });
}
      
    
      handleUserChange(evt) {
        this.setState({
          email: evt.target.value,
        });
      };
    
      handlePassChange(evt) {
        this.setState({
          password: evt.target.value,
        });
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
                    <Link className="nav-link" to={"/sign-in"}>Login</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
                  </li>
                </ul>
                
              </div>
            </div>
          </nav>
    
            <form>
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" value={this.state.email} onChange={this.handleUserChange}/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" value={this.state.password} onChange={this.handlePassChange} />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>
{
                this.state.error &&
            <h6 className="errors" data-test="error" onClick={this.dismissError}>
              <button className="errbutton"onClick={this.dismissError}>X   </button>
              {this.state.error}
            </h6>
            
               }
               <br/>
               <br/>
               
               
                <button type="submit" onClick = {this.submitHandleLogin} className="btn btn-primary btn-block">Submit</button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
              
            </form>
</div>
</div></div></div>        );
    }
}
