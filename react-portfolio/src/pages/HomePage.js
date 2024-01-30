import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Tile from '../components/Tile';

const HomePage = () => {

    return (
        <div>
            <Header />
            
            <div>
                hello
                <Tile />
                <Tile />
                <Tile /> 
            </div>
            <Footer />
        </div>
    );
};

export default HomePage;
