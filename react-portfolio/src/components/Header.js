import React from 'react';
import '../styles/Header.css'; 

const Header = () => {
    return (
        <header className="header">
            <div className="ornamental-graphic-left">Home Grown/Organic <br></br>JavaScript and React!</div>
            <div className="center-graphic"><h1>The Hidalgo Post</h1></div>
            <div className="ornamental-graphic-right">Built From Scratch<br></br> by Alex Hidalgo!</div>
        </header>
    );
};

export default Header;
