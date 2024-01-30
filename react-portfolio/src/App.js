import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import ServicesPage from './pages/ServicesPage';
import OpinionsPage from './pages/OpinionsPage';
import ContactPage from './pages/ContactPage';

function App() {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path="/HomePage" element={<HomePage />} />
                <Route path="/ProjectsPage" element={<ProjectsPage />} />
                <Route path="/ServicesPage" element={<ServicesPage />} />
                <Route path="/OpinionsPage" element={<OpinionsPage />} />
                <Route path="/ContactPage" element={<ContactPage />} />
            </Routes>
        </Router>
    );
}

export default App;