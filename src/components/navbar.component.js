import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from "./logo.png";
import UserIcon from "./user.png";

export default class Navbar extends Component {
    
    render(){
        return (
            <nav className = "navbar navbar-light bg-light navbar-expand-lg">
                <div className="col-sm-9">
                <Link to = "/" className = "navbar-brand">
                    <h4><img src={ Logo } alt="nav-logo" id="nav-logo"></img>Notes</h4></Link>
                </div>
                <div className="col-sm-3">
                    <ul className = "navbar-nav mr-auto">
                        <li className = "navbar-item" id="create-user">
                            <Link to = "/user" className = "btn btn-outline-secondary"><img src={UserIcon} alt="user-icon" id="user-icon"></img>Create User</Link>
                        </li>
                        <li className = "navbar-item" id="create-note">
                            <Link to = "/create" className = "btn btn-outline-primary"><b>+</b> Create Note</Link>
                        </li>
                        </ul>
                    </div>
            </nav>
        )
    }
}