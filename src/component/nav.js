import React, { Component } from 'react';
import {NavLink , Link} from 'react-router-dom';

class Nav extends Component {
    render() {
        return (
            <div className = 'Nav'>
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className = 'container'>
                        <a className="navbar-brand" to="/">Mohamed Khattab</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <NavLink className="nav-link" exact to="/">Home <span class="sr-only">(current)</span></NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/about">About</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/skills">Skills</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/portfolio">Portfolio</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
export default Nav
