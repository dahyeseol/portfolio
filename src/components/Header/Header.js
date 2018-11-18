import React, { Component } from 'react';

class Header extends Component {
    state = {
    }
    renderLogo = () => {
    }

    render() {
        return (<div className="header">
            <div className="logo">
                {this.renderLogo()}
            </div>
            <ul className="nav">
                <li className="menu1">
                    <a className="projects" href="/">
                        Projects
                    </a>
                </li>
                <li className="menu2">
                    <a className="about" href="">
                        About
                    </a>
                </li>
            </ul>
        </div>)
    
    }
}

export default Header;