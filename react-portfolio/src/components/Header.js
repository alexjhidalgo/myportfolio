import React from 'react';
import '../styles/Header.css'; 

const Header = () => {
    return (
        <header className="header">
            <div className="ornamental-graphic left">Home Grown/Organic JavaScript and React!</div>
            <div className="center-graphic"><h1>Hidalgo Post</h1></div>
            <div className="ornamental-graphic right">Built From Scratch by Alex Hidalgo!</div>
            <div className="ornamental-graphic right-2">Truly a Vision for AJH!</div>
        </header>
    );
};

export default Header;
