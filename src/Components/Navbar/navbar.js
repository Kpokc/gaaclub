import React, { Component, useState } from 'react';
import { debounce } from 'lodash';
import WidthDetector from './windowWidthListener';
import './navbar.css'

export default class NavBar extends Component{

    constructor(props) {
        super(props);
        this.state = {
            isNarrow: window.innerWidth <= 1024,
            isMenuOpen: false,
        };
        this.handleWidthChange = debounce(this.handleWidthChange.bind(this), 600);
        this.toggleMenu = this.toggleMenu.bind(this);
    }

    handleWidthChange(isNarrow) {
        this.setState({ isNarrow });
    }

    toggleMenu(){
        this.setState((prevState) => ({
            isMenuOpen: !prevState.isMenuOpen
        }));
    }

    render() {
        const { isNarrow } = this.state;
        return(
            <nav id="navbar" >
                {/* <NavBar/> */}
                <button className={`burger-menu ${!isNarrow ? 'narrow' : ''}`} onClick={this.toggleMenu}>
                    &#9776;
                </button>
                <ul className="nav-menu">
                    {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map((item, index) => (
                        <li key={index} className={isNarrow ? 'narrow' : ''}>
                            <WidthDetector onWidthChange={this.handleWidthChange} />
                            <a href={`#${item.toLowerCase()}`} className={`btn btn--4`}  role="button" aria-label={item}>
                            
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        );
    };
};