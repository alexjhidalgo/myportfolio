import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import ProjectsPage from '../pages/ProjectsPage';
import ServicesPage from '../pages/ServicesPage';
import OpinionsPage from '../pages/OpinionsPage';
import ContactPage from '../pages/ContactPage';

const NavBar = () => {
    return (
    <div>uhhhh
            <Router>
                <Routes>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/projectsPage" component={ProjectsPage} />
                    <Route path="/servicesPage" component={ServicesPage} />
                    <Route path="/opinionsPage" component={OpinionsPage} />
                    <Route path="/contactPage" component={ContactPage} />
                </Routes>
            </Router>
    </div>
    );
};

export default NavBar;
