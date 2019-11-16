import React, { Component } from 'react';
import StartUp from '../img/startup.png';
import Bouncy from '../img/bouncy.png';
import Ajy from '../img/ajy.png';
import Canvas from '../img/canvas.png';
import Prog from '../img/prog.png';
class Portfolio extends Component {
    render() {
        return (
            <div className = 'Portfolio'>
                <div className = 'container'>
                    <div>
                        <h2>Portfolio</h2>
                    </div>
                    
                    <ul className = 'list-unstyled row myport'>
                        <li className = 'col-md-6'>
                            <a href = 'https://startupsite.netlify.com' target = '_blank'>
                                <img src = {StartUp} alt = 'Start Up'/>
                            </a>
                        </li>
                        <li className = 'col-md-6'>
                            <a href = 'https://canvassite.netlify.com' target = '_blank'>
                                <img src = {Canvas} alt = 'Start Up'/>
                            </a>
                        </li>
                        <li className = 'col-md-6'>
                            <a href = 'https://ajy.netlify.com' target = '_blank'>
                                <img src = {Ajy} alt = 'Start Up'/>
                            </a>
                        </li>
                        <li className = 'col-md-6'>
                            <a href = 'https://bouncysite.netlify.com' target = '_blank'>
                                <img src = {Bouncy} alt = 'Start Up'/>
                            </a>
                        </li>
                        <li className = 'col-md-12'>
                            <a href = 'https://progsite.netlify.com' target = '_blank'>
                                <img src = {Prog} alt = 'Start Up'/>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
export default Portfolio
