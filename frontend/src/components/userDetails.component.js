import React,{ Component } from 'react';
import '../userDetails.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import '../index.css';
import { Button, Form, Container, Row, Col } from 'react-bootstrap';
import "react-datepicker/dist/react-datepicker.css";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
const axios = require('axios');
var FormData = require('form-data');
//var fs = require('fs');
 








class userDetails extends React.Component{
  
  constructor(props) {
        super(props);


        this.state = {
  

          firstName:"",
            lastName:"",
            email:"",
            phone:"",
            country:"",
            city:"",
            dateOfBirth: "",
            inUserDetails1 : true,
            currentEmploymentStatus : "Employed",
          currentJobTitle : "",
          seekingJobTitle : "",
          industry : "",
          description : "",
          resume: {},
        //  resume : "",
          currentlyWorkingIn : "",
          startDate : "",
         
            error : ""

          };
      
      
        }
        dismissError = () => {
          this.setState({ error: '' });
        }
      

        handleFirstName=(evt)=>{
          this.setState({
              firstName: evt.target.value,
            });
        }
        handleLastName=(evt)=>{
          this.setState({
              lastName: evt.target.value,
            });
        }
        handleEmail=(evt)=>{
          this.setState({
              email: evt.target.value,
            });
        }
        handlePhone=(evt)=>{
          this.setState({
              phone: evt.target.value,
            });
        }
        handleCountry=(evt)=>{
          this.setState({
              country: evt.target.value,
            });
        }
        handleCity=(evt)=>{
          this.setState({
              city: evt.target.value,
            });
        }
        handleDateOfBirth=(evt)=>{
          this.setState({
              dateOfBirth: evt.target.value,
            });
        }

            handleCurrentEmploymentStatus=(evt)=>{
          //this.setState({
            //  currentEmploymentStatus: evt.target.selected,
            console.log(this.state.currentEmploymentStatus);
            this.setState({currentEmploymentStatus : evt.target.value},()=>{});
            //});
        }
     
   
        handleCurrentJobTitle=(evt)=>{
          this.setState({
              currentJobTitle: evt.target.value,
            });
        }
        handleSeekingJobTitle=(evt)=>{
          this.setState({
              seekingJobTitle: evt.target.value,
            });
        }
        handleIndustry=(evt)=>{
          this.setState({
              industry: evt.target.value,
            });
        }
        handleDescription=(evt)=>{
          this.setState({
              description: evt.target.value,
            });
        }
        handleResume=(evt)=>{
            this.setState({resume : evt.target.files[0]},()=>{});
        
         
        }

        handleCurrentlyWorkingIn=(evt)=>{
          this.setState({
              currentlyWorkingIn: evt.target.value,
            });
        }
         
        handleStartDate=(evt)=>{
          this.setState({
              startDate: evt.target.value,
            });
        }
         
        handleBack=(evt)=>{
          window.location = "/userDetails";
        }


 





        










        
        handleInUserDetails1=(evt)=>{
          
          if (!this.state.firstName ||!this.state.lastName||!this.state.email||!this.state.phone||!this.state.country||!this.state.city) {
            this.setState({ error: 'All the fields are mandatory' });
            
          }  
          else{
          
          
          this.setState({
              inUserDetails1: false,
            });
          }
        }
  

        submitHandleUserDetails = (evt) =>  {
          evt.preventDefault();
          if (!this.state.currentEmploymentStatus||!this.state.seekingJobTitle||!this.state.description||!this.state.firstName ||!this.state.lastName||!this.state.email||!this.state.phone||!this.state.country||!this.state.city) {
            this.setState({ error: 'All the starred fields are mandatory' });
         }
       else
         {  
          var data = new FormData();

          data.append('firstName', this.state.firstName);
          data.append('lastName', this.state.lastName);
          data.append('email', this.state.email);
          data.append('phone', this.state.phone);
          data.append('country', this.state.country);
          data.append('city', this.state.city);
          data.append('dateOfBirth', this.state.dateOfBirth);
          data.append('currentEmploymentStatus', this.state.currentEmploymentStatus);
          data.append('currentJobTitle', this.state.currentJobTitle);
          data.append('seekingJobTitle', this.state.currentEmploymentStatus);
          data.append('industry', this.state.industry);
          data.append('description', this.state.description);
          data.append('resume', this.state.resume);
          data.append('currentlyWorkingIn', this.state.currentlyWorkingIn);
          data.append('startDate', this.state.startDate);
          
/*
          const instance = axios.create({
            baseURL: 'http://localhost:4000/myProfile',
            headers: {
              'Accept-Version': 1,
              'Accept': 'application/json',
              'Access-Control-Allow-Origin': '*',
              'Content-Type': 'application/json; charset=utf-8',
            },
          });
          */


          var config = {
            method: 'post',
            url: 'http://localhost:4000/myProfile',
            headers: { 
              'Content-Type': 'multipart/form-data'
              //...data.getHeaders()
            },
            data : data
          };
          
          axios(config)
          .then(response => {
            if(response.data.Success !== "User details saved successfully")
              this.setState({ error: response.data.Success});
            else{
              alert("User details saved successfully");
              window.location = "/sign-in";
            }
          })
    

}}    
    render(){
      if(this.state.inUserDetails1){
        return(
          <div className="App">
   
      <div className="auth-wrapper">
        <div className="auth-inner">
    
          <div>
          <nav className="navbar navbar-expand-lg navbar-light fixed-top">
            <div className="container">
              <Link className="navbar-brand" to={"/sign-in"}>LinkIn</Link>
              
            </div>
          </nav>
    
    
   
<form>
              <div className="margin">
                    <Form.Group controlId="formBasicEmail">
        <Form.Label style={{color: "black"}} class="label-txt">First Name </Form.Label>
        <Form.Control  type="text" value={this.state.firstName} placeholder="Enter first name" onChange={this.handleFirstName} />
      </Form.Group>

    
      <Form.Group controlId="formBasicEmail">
        <Form.Label style={{color: "black"}} class="label-txt">Last Name </Form.Label>
        <Form.Control value={this.state.lastName} type="text" onChange={this.handleLastName} placeholder="Enter last name" />
      </Form.Group>
    
  
  
    
      <Form.Group controlId="formBasicEmail">
        <Form.Label style={{color: "black"}} class="label-txt">Email address </Form.Label>
        <Form.Control value={this.state.email} type="email" onChange={this.handleEmail} placeholder="Enter email" />
      </Form.Group>
    
   
      <Form.Group controlId="formBasicEmail">
        <Form.Label style={{color: "black"}} class="label-txt">Phone </Form.Label>
        <Form.Control value={this.state.phone} onChange={this.handlePhone} type="text" placeholder="Enter phone number" />
      </Form.Group>
      

       

      
      <Form.Group controlId="formBasicEmail">
        <Form.Label style={{color: "black"}} class="label-txt">Country </Form.Label>
        <Form.Control value={this.state.country} onChange={this.handleCountry} type="text" placeholder="Enter country name" />
      </Form.Group>
  
      <Form.Group controlId="formBasicEmail">
        <Form.Label style={{color: "black"}} class="label-txt">City </Form.Label>
        <Form.Control value={this.state.city} onChange={this.handleCity} type="text" placeholder="Enter city name" />
      </Form.Group>
      
      <Form.Group controlId="formBasicEmail">
        <Form.Label style={{color: "black"}} class="label-txt">Date Of Birth </Form.Label>
        <Form.Control value={this.state.dateOfBirth} onChange={this.handleDateOfBirth} type="text" placeholder="mm/dd/yyyy" />
      </Form.Group>

      <Form.Group controlId="exampleForm.ControlSelect1">
        <Form.Label class="label-txt"> Upload Resume*</Form.Label>
      </Form.Group>
      <Form.Group>
      <input type="file" name="file" onChange={this.handleResume}/>
      </Form.Group>                        

      <Button className="button" variant="primary" onClick ={this.handleInUserDetails1} >Continue <text>{'->'}</text></Button>{' '}
        
      {
                this.state.error &&
            <h6 className="errors" data-test="error" onClick={this.dismissError}>
              <button className="errbutton"onClick={this.dismissError}>X</button>
              {this.state.error}
            </h6>
    } 
    
  
  
  </div>
  </form>
   </div>
   </div>
   </div>
   </div>     );
}
else{
  return(
    <div className="App">
   
      <div className="auth-wrapper">
        <div className="auth-inner">
    
    <div>
    <nav className="navbar navbar-expand-lg navbar-light fixed-top">
      <div className="container">
        <Link className="navbar-brand" to={"/sign-in"}>LinkIn</Link>
        
      </div>
    </nav>


   
    <form>
        <div className="margin">

    
        <div className = "backButton">               
<Button classname = "button" variant="primary" onClick = {this.handleBack}> <text>{'<-'}</text> Back</Button>{' '}

</div>

<Form.Group controlId="exampleForm.SelectCustom">
<Form.Label class="label-txt">Current Employment Status*</Form.Label>
<Form.Control as="select" custom  value = {this.state.currentEmploymentStatus} onChange = {this.handleCurrentEmploymentStatus}>
  <option>Employed</option>
  <option>Unemployed</option>
  <option>Self Employed</option>
 
</Form.Control>  </Form.Group>






<Form.Group controlId="formBasicEmail">
<Form.Label class="label-txt">Current Job Title</Form.Label>
<Form.Control type="text" placeholder="Enter job title" value = {this.state.currentJobTitle} onChange = {this.handleCurrentJobTitle}/>
</Form.Group>
<Form.Group controlId="formBasicEmail">
<Form.Label class="label-txt">Seeking Job Title*</Form.Label>
<Form.Control type="text" placeholder="e.g. Software Developer" value = {this.state.seekingJobTitle} onChange = {this.handleSeekingJobTitle}/>
</Form.Group>
<Form.Group controlId="formBasicEmail">
<Form.Label class="label-txt">Current Working In</Form.Label>
<Form.Control type="text" placeholder="e.g. Microsoft" value = {this.state.currentlyWorkingIn} onChange = {this.handleCurrentlyWorkingIn}/>
</Form.Group>
<Form.Group controlId="formBasicEmail">
<Form.Label style={{color: "black"}} class="label-txt">Start Date </Form.Label>
<Form.Control value={this.state.startDate} onChange={this.handleStartDate} type="text" placeholder="mm/dd/yyyy" />
</Form.Group>
<Form.Group controlId="exampleForm.SelectCustom">
<Form.Label class="label-txt">Industry</Form.Label>
<Form.Control type="text" placeholder="Enter industry" value = {this.state.industry} onChange = {this.handleIndustry}/>
</Form.Group>
<Form.Group controlId="formBasicEmail">
<Form.Label class="label-txt">Description *</Form.Label>
<Form.Control type="textarea" placeholder="Enter description" value = {this.state.description} onChange = {this.handleDescription}/>
</Form.Group>  
<div>
<div className = "submitButton">               
<Button classname = "button" variant="primary" onClick = {this.submitHandleUserDetails}>Submit<text>{'->'}</text></Button>{' '}
</div>
{
        this.state.error &&
    <h6 className="errors" data-test="error" onClick={this.dismissError}>
      <button className="errbutton"onClick={this.dismissError}>X</button>
      {this.state.error}
    </h6>
}
</div>
</div>

</form>


</div>
</div>
</div>
</div>

);
}

}

}

export default userDetails;