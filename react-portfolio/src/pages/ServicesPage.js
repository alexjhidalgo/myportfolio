import React from 'react';
import NavBar from '../components/NavBar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Tile from '../components/Tile';

const ServicesPage = () => {
    return (
        <div>
            <NavBar />
            <Header />
            <div>
                <Tile />
                <Tile />
                <Tile />
                {/* Add more Tile components as needed */}
            </div>
            <Footer />
        </div>
    );
};

export default ServicesPage;
