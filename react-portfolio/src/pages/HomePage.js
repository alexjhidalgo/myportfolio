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
                <Tile title="Example Title" description="Example Description" image="example.jpg"/>
                <Tile title="Example Title" description="Example Description" image="example.jpg"/>
                <Tile title="Example Title" description="Example Description" image="example.jpg"/> 
            </div>
            <Footer />
        </div>
    );
};

export default HomePage;
