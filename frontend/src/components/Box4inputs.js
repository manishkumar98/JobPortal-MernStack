import React, {Component} from 'react';
//import logo from './logo.svg';
import '../Box4inputs.css';

const axios = require('axios');

class Box4 extends React.Component {
    constructor(props){
        super(props);
        
        this.state={
            value1: "",
            value2: "",
            value3: "",
            value4 : "",
            edit: false,
            error: "",
            heading: this.props.heading
        };
        
        var config = {
            method: 'get',
            url: 'http://localhost:4000/' + window.name,
            headers: { 
              'Content-Type': 'application/json'
            }
              
          };
          
          axios(config)
          .then( response => {
            console.log(response.data.userProfile.country)
                this.setState({
                        value1 : response.data.userProfile.currentEmploymentStatus,
                        value2 : response.data.userProfile.currentlyWorkingIn,
                        value3 : response.data.userProfile.jobTitle,
                        value4 : response.data.userProfile.startDate
                    });
          })
          .catch(error => {
            console.log(error);
          });
          console.log(this.state.value1);
          console.log(this.state.value2);
        
    }
    
    changeEdit=()=>{
        this.setState({edit:!this.state.edit})
        
    }
    changeText=()=>{
        if(this.refs.textInput1.value===""||this.refs.textInput2.value==="")
        {
            this.setState({
                error:"Input cant be null",
                edit:true
    
            })
        }
        else{
            this.setState({
                value1:this.refs.textInput1.value,
                value2:this.refs.textInput2.value,
                value3:this.refs.textInput3.value,
                value4:this.refs.textInput4.value,
                
                edit:false,
                error:""
            })
        }    
        
    }
    renderEdit=()=>{
      return <div>
      {this.props.subHeading1}:
      <input type="text" size="20"ref="textInput1"
      defaultValue={this.state.value1}/>
      <br/>
      {this.props.subHeading2}:
      <input type="text" size="20"ref="textInput2"
      defaultValue={this.state.value2}/>
      <br/>
      {this.props.subHeading3}:
      <input type="text" size="20"ref="textInput3"
      defaultValue={this.state.value3}/>
      <br/>
      {this.props.subHeading4}:
      <input type="text" size="20"ref="textInput4"
      defaultValue={this.state.value4}/>
        <button className="updatex" onClick={this.changeEdit}>x</button>
        <button className="updateOk" onClick={this.changeText}>ok</button>
      </div>
    }
    renderDefault=()=>{
        return <div>
        {this.props.subHeading1 }:
        {this.state.value1}
        <br/>
        {this.props.subHeading2 }:
        {this.state.value2}
        <br/>
        {this.props.subHeading3 }:
        {this.state.value3}
        <br/>
        {this.props.subHeading4 }:
        {this.state.value4}
        </div>

    }
    showError=()=>{
        this.setState({
            error:"Field can't be empty"

        })
    }
    // dismissError=()=>{
    //     this.setState({
    //         error:""

    //     })
    // }

    
     render(){
     return(    
     <div className="card" style = {{height : "200px"}}>
     <h6>{this.state.error}</h6>
     
  <div className="card-header">
  <p className="heading">{this.props.heading}</p>
  

  <button type="button" onClick={this.changeEdit} className="smallButton">Edit</button>
  </div>
  <div className="card-body">
       
    {this.state.edit?this.renderEdit():this.renderDefault()}
 
  
  </div>
</div>)
     }
  }
  export default Box4;