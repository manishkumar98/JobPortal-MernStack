import React, {Component} from 'react';
//import logo from './logo.svg';
import '../box.css';

const axios = require('axios');

class Box extends React.Component {
    constructor(){
        super();
        this.state = {
            value: "",
            edit: false,
            error: ""
            
        };
        var config = {
            method: 'get',
            url: 'http://localhost:4000/' + window.name,
            headers: { 
              'Content-Type': 'application/json'
            }
              
          };
          
          axios(config)
          .then(response =>  {
              console.log(response.data.userProfile.description);
            if(this.props.heading==="Description")
                {
                    this.setState({
                        value : response.data.userProfile.description
                    });
                }
            
          })
          .catch(error => {
            console.log(error);
          });
          console.log(this.state.value);
    }
    
    changeEdit=()=>{
        this.setState({edit:!this.state.edit})
        
    }
    changeText=()=>{
        if(this.refs.textInput.value==="")
        {
            this.setState({
                error:"Input cant be null",
                edit:true
    
            })
        }
        else{
            this.setState({
                value:this.refs.textInput.value,
                edit:false,
                error:""
            })
        }    
        
    }
    renderEdit=()=>{
      return <div>
      <textarea ref="textInput" rows="4" cols="35">
      {this.state.value}</textarea>
        <button className="updatex" onClick={this.changeEdit}>x</button>
        <button className="updateOk" onClick={this.changeText}>ok</button>
      </div>
    }
    renderDefault=()=>{
        return <p>{this.state.value}</p>

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
     <div className="card">
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
  export default Box;