import React, {Component} from 'react';
//import logo from './logo.svg';
import '../box2.css';

class Box2 extends React.Component {
    constructor(){
        super();
        this.state={
            value: "",
            edit: false,
            error: ""
        }
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
      <input type="text" size="50"ref="textInput"
      defaultValue={this.state.value}/>
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
  export default Box2;