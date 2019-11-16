import React, { Component } from 'react';
import MyImg from '../img/profile.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faGithubAlt } from "@fortawesome/free-brands-svg-icons";
class Home extends Component {
    render() {
        let myfacebook = 'https://www.facebook.com/Mohamed.khattab.95',
            mylinkedin = 'https://www.linkedin.com/in/mohamed-khattab95/',
            mygithub = 'https://github.com/mohamed-kh95';
        return (
            <div className = 'Home'>
                <div className = 'container'>
                    <h2>Welcome To My Website</h2>
                    <div className = 'myimg'>
                        <img src = {MyImg} alt = 'Profile Img' />
                    </div>
                    <div>
                        <ul className = 'links list-unstyled'>
                            <li>
                                <a href = {myfacebook} target = '_blank'><FontAwesomeIcon icon = {faFacebookF}/></a>
                            </li>
                            <li>
                                <a href = {mygithub} target = '_blank'><FontAwesomeIcon icon = {faGithubAlt}/></a>
                            </li>
                            <li>
                                <a href = {mylinkedin} target = '_blank'><FontAwesomeIcon icon = {faLinkedinIn}/></a>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
export default Home
