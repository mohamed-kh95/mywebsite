import React, { Component } from 'react';
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons';
class Skills extends Component {
    render() {
        return (
            <div className = 'Skills'>
                <div className = 'container'>
                    <h2>Skills</h2>
                    <div className = 'myskills row'>
                        <ul className = 'col-md-4 list-unstyled'>
                            <li>HTML/HTML5</li>
                            <li>Css/Css3</li>
                            <li>Javascript</li>
                            <li>jQuery</li>
                            <li>Bootstrap</li>
                            <li>Pug</li>
                            <li>Sass</li>
                        </ul>
                        <ul className = 'col-md-7 list-unstyled'>
                            <li>Accepting feedback &amp; taking constructive criticism well.</li>
                            <li>Ability to produce consistently accurate work even whilst under pressur</li>
                            <li>Willingness to learn new thing</li>
                            <li>Willingness to share skills, knowledge, and expertise</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
export default Skills
