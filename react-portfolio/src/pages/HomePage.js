import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Tile from '../components/Tile';
import NavBar from '../components/NavBar';

const HomePage = () => {

    return (
        <div>
            <Header />
            <Footer />
            <NavBar />
            <div>
                hello
                <Tile />
                <Tile />
                <Tile /> 

            </div>
            
        </div>
    );
};

export default HomePage;
