import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import '../index.css';
const axios = require('axios');

export default class SignUp extends Component {

    constructor(props) {
        super(props);
        this.state = {
          username: '',
          password: '',
          repassword: '',
          email: '',
          error: '',
        };
        //this.submitHandleLogin = this.submitHandleLogin.bind(this);
        this.dismissError = this.dismissError.bind(this);
        this.handlePassChange = this.handlePassChange.bind(this);
        this.handleUserChange = this.handleUserChange.bind(this);
        this.handlerePassChange = this.handlerePassChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        
        //this.delta = this.delta.bind(this);
    }
    
    dismissError() {
        this.setState({ error: '' });
      }
      
    /*submitHandleLogin() {
        this.setState({ error: '' });
      }*/
      submitHandleSignup = (evt) =>  {
        evt.preventDefault();
        /*this.handleUserChange(evt);
        this.handlePassChange(evt);*/
        if (!this.state.email ||!this.state.password||!this.state.username||!this.state.repassword) {
             this.setState({ error: 'All the fields are mandatory' });
          }
    
    /*    if (!this.state.email) {
           this.setState({ error: 'Email is required' });
        }
    
        if (!this.state.password) {
           this.setState({ error: 'Password is required' });
        }
        if (!this.state.repassword) {
            this.setState({ error: 'Confirm the Password' });
        }
         if (!this.state.username) {
            this.setState({ error: 'Username is required' });
        }*/
    
        
        //axios.get('/login').then(res => {

    //res.send(res.data);
//});
axios.post('/register', {
        "email": this.state.email,
        "password": this.state.password,
        "username" : this.state.username,
        "passwordConf" : this.state.repassword
      })
      .then(response => {
        if(response.data.Success !== "You are registered,You can login now.")
          this.setState({ error: response.data.Success});
        else{
          alert("You are registered,You can login now.");
          window.location = "/userDetails";
        }
      })
                   
      


      //return this.setState({ error: '' });
}

      
    
      handleUserChange(evt) {
        this.setState({
          username: evt.target.value,
        });
      };
      handleEmailChange(evt) {
        this.setState({
          email: evt.target.value,
        });
      };
      handlerePassChange(evt) {
        this.setState({
          repassword: evt.target.value,
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
                <h3>Sign Up</h3>
                
                
                
                <div className="form-group">
                    <label>Username</label>
                    <input type="text" className="form-control" placeholder="Enter username" value={this.state.username} onChange={this.handleUserChange} />
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" value={this.state.email} onChange={this.handleEmailChange}/>
                </div>






                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" value={this.state.password} onChange={this.handlePassChange}/>
                </div>
                <div className="form-group">
                    <label>Re-enter Password</label>
                    <input type="password" className="form-control" placeholder="Re-enter password" value={this.state.repassword} onChange={this.handlerePassChange}/>
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
                
                
                <button type="submit" onClick = {this.submitHandleSignup} className="btn btn-primary btn-block">Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered <a href="#">sign in?</a>
                </p>
            </form>
        </div>
 </div></div></div>       );
    }
}