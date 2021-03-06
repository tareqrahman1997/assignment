import React from 'react';
import logo from '../../image/javascript.png';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt=""/>
            <nav>
                <a href="/home">Home</a>
                <a href="/about">About</a>
                <a href="/contact">Contact</a>
                <a href="/tareq-rahman">TareqRahman</a>
            </nav>
        </div>
    );
};

export default Header;