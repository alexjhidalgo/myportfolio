import React from 'react';
import '../styles/Header.css'; 

const Header = () => {
    return (
        <header className="header">
            <div className="ornamental-graphic-left">Home Grown/Organic <br></br>JavaScript and React!</div>
            <div className="center-graphic"><h1>Hidalgo Post</h1></div>
            <div className="ornamental-graphic-right">Built From Scratch by Alex Hidalgo!<br></br>A True Vision from AJH!</div>
        </header>
    );
};

export default Header;
