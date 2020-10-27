import React from 'react'
import { Navbar } from 'react-bootstrap'
import { MenuItems } from './MenuItems'
import {Button} from "../Button"
import './Navbar.css'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import '../../index.css';
 
const axios = require('axios');

export default class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
          email: '',
          password: '',
          error: '',
        };    
    }
    
    

    
    render(){
        return (
            <nav className="NavbarItems">
                <h1 className="navbar-logo"></h1>
                <div className="menu-icon"></div>
                <ul>
                    {MenuItems.map((index,item) => {
                        return(
                            <li key={index}>
                            <a className={item.cName} href={item.url}>{item.title}</a>
                            </li>
                        )
                    })}
                   
                </ul>
                <Button>Sign Up</Button>
            </nav>    
        )
    }
}

export default Navbar