import React, { Component } from 'react';
class About extends Component {
    render() {
        return (
            <div className = 'About'>
                <div className = 'container'>
                    <h2>About</h2>
                    <ul className = 'list-unstyled'>
                        <li><span>Education : </span>Delta Higher Institute for Computer Science, 2018</li>
                        <li><span>Marital Status : </span>Single</li>
                        <li><span>Military Service : </span>Exemption</li>
                        <li><span>Address : </span>Giza</li>
                        <li><span>Mobile : </span>01158527744</li>
                        <li><span>Email : </span>mohamed.kh1244@gmail.com</li>
                        <li><span>Age : </span>24</li>
                    </ul>
                </div>
            </div>
        )
    }
}
export default About
