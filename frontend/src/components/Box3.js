import React, {Component} from 'react';
//import logo from './logo.svg';
import '../box3.css';

const axios = require('axios');

class Box3 extends React.Component {
    constructor(props){
        super(props);
        
        this.state={
            value1: "",
            value2: "",
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
            if(this.props.heading==="Contact")
                {
                this.setState({
                        value1 : response.data.userProfile.phone,
                        value2 : response.data.userProfile.email
                        
                    
                    });
                }
            else if(this.props.heading==="Location")
            {
                this.setState({
                    value1 : response.data.userProfile.city,
                    value2 : response.data.userProfile.country
                });
            }
            else if(this.props.heading==="Preferred Job")
            {
                this.setState({
                    value1 : response.data.userProfile.seekingJobTitle,
                    value2 : response.data.userProfile.industry
                });
            }
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
  export default Box3;