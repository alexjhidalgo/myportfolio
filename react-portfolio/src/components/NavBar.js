import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <nav>
            <Link to="/HomePage">Home</Link>
            <Link to="/ProjectsPage">Projects</Link>
            <Link to="/ServicesPage">Services</Link>
            <Link to="/OpinionsPage">Opinions</Link>
            <Link to="/ResumePage">Resumé</Link>
            <Link to="/ContactPage">Contact</Link>
        </nav>
    );
}

export default NavBar;