import React, { Component, useState } from 'react';
import { debounce } from 'lodash';
import WidthDetector from './windowWidthListener';
import './navbar.css'

export default class NavBar extends Component{

    constructor(props) {
        super(props);
        this.state = {
            isNarrow: window.innerWidth <= 1024
        };
        this.handleWidthChange = debounce(this.handleWidthChange.bind(this), 1000);
    }

    handleWidthChange(isNarrow) {
        this.setState({ isNarrow });
    }

    render() {
        const { isNarrow } = this.state;
        return(
            <nav id="navbar" >
                {/* <NavBar/> */}
                <ul className="nav-menu">
                    {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map((item, index) => (
                        <li key={index} className={isNarrow ? 'narrow' : ''}>
                            <WidthDetector onWidthChange={this.handleWidthChange} />
                            <a href={`#${item.toLowerCase()}`} className={`btn btn--4`}  role="button" aria-label={item}>
                            
                            </a>
                            {/* <button className="button-17" role="button">Button 17</button> */}
                        </li>
                    ))}
                </ul>
            </nav>
        );
    };
};