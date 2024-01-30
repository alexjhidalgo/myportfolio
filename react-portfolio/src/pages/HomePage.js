import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Tile from '../components/Tile';

const HomePage = () => {

    return (
        <div>
            <Header />
            
            <div class="personal-column-left-narrow">
                <h3>History</h3>
                <Tile title="Example Title" description="Example Description" image="example.jpg"/>

                <h3>Family</h3>
                <Tile title="Example Title" description="Example Description" image="example.jpg"/>
            </div>

            <div class="main-column-left">
                <h3>Handwritten</h3>
                <Tile title="Example Title" description="Example Description" image="example.jpg"/>

                <h3>Doge Farms</h3>
                <Tile title="Example Title" description="Example Description" image="example.jpg"/>

                <h3>Hidalgo Properties</h3>
                <Tile title="Example Title" description="Example Description" image="example.jpg"/>

                <h3>Shelter Space</h3>
                <Tile title="Example Title" description="Example Description" image="example.jpg"/>
            </div>

            <div class="main-column-right">
                <h3>Big Farma</h3>
                <Tile title="Example Title" description="Example Description" image="example.jpg"/>

                <h3>Travel Perspective (Historically Advantaged)</h3>
                <Tile title="Example Title" description="Example Description" image="example.jpg"/>

                <h3>California Real Estate (Then and Now)</h3>
                <Tile title="Example Title" description="Example Description" image="example.jpg"/>

                <h3>Know Thyself, Relish Each Step (A persuasive essay about writing habitually)</h3>
                <Tile title="Example Title" description="Example Description" image="example.jpg"/>

            </div>

            <div class="business-column-right-narrow">
                <h3>Travel</h3>
                <Tile title="Example Title" description="Example Description" image="example.jpg"/>

                <h3>Legal Services</h3>
                <Tile title="Example Title" description="Example Description" image="example.jpg"/>

                <h3>Real Estate Services (License Pending)</h3>
                <Tile title="Example Title" description="Example Description" image="example.jpg"/>

                <h3>Financial Planning</h3>
                <Tile title="Example Title" description="Example Description" image="example.jpg"/>

                <h3>Education Consultation</h3>
                <Tile title="Example Title" description="Example Description" image="example.jpg"/>
            </div>
            <Footer />
        </div>
    );
};

export default HomePage;
