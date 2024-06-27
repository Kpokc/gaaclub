import React, { Component, useState } from 'react';
import { debounce } from 'lodash';
import WidthDetector from './windowWidthListener';
import ToggleButton from './burgermenu';
import './navbar.css'

export default class NavBar extends Component{

    constructor(props) {
        super(props);
        this.state = {
            isNarrow: window.innerWidth <= 1024,
            isMenuOpen: false,
            isActive: false,
        };
        this.handleWidthChange = debounce(this.handleWidthChange.bind(this), 500);
        this.toggleMenu = this.toggleMenu.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleWidthChange(isNarrow) {
        this.setState({ isNarrow });
    }

    toggleMenu(){
        this.setState((prevState) => ({
            isMenuOpen: !prevState.isMenuOpen
        }));
    }

    handleClick(){
        this.setState((prevState) => ({
            isActive: !prevState.isActive
        }));
    }

    render() {
        const { isNarrow, isActive  } = this.state;
        
        return(
            <nav id="navbar" >
                <WidthDetector onWidthChange={this.handleWidthChange} />
                <div className={`burgers-menu ${!isNarrow ? 'narrow' : ''}`} >
                
                    <div 
                        className={`burgerButton ${isActive ? 'active mar-top' : 'not-active'}`} 
                        onClick={this.handleClick}
                    >
                        <span className={!isNarrow ? 'narrow' : ''}></span>
                        <span className={!isNarrow ? 'narrow' : ''}></span>
                        <span className={!isNarrow ? 'narrow' : ''}></span>
                    </div>
                </div>

                
                <ul className="nav-menu">
                    {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map((item, index) => (
                        <li key={index} className={isNarrow ? 'narrow' : ''}>
                            <a href={`#${item.toLowerCase()}`} className={`btn btn--4 ${isNarrow ? 'disabled' : ''}`}  role="button" aria-label={item}>
                            
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        );
    };
};