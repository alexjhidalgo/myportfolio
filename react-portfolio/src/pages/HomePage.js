import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Tile from '../components/Tile';

const HomePage = () => {

    return (
        <div>
            <Header />
            
            <div class="personal-column-left-narrow">
                <Tile 
                    title="History" 
                    description="La Quinta, CA, a Charmed Life" 
                    image="example.jpg"/>

                <Tile 
                    title="Family" 
                    description="Hidalgo, Hays, and Valdivia, legacies of entrepreneurship." 
                    image="example.jpg"/>
            </div>

            <div class="main-column-top">

                <div class="main-column-left">
                    <Tile 
                        title="Handwritten" 
                        description="iOS App using text recognition to digitize your handwriting to send personal letters." 
                        image="example.jpg"/>

                    <Tile 
                        title="Doge Farms" 
                        description="Example Description" 
                        image="example.jpg"/>

                    <Tile 
                        title="Hidalgo Properties" 
                        description="Business Website for Property Management, Listings, and Leads on New Properties." 
                        image="example.jpg"/>

                    <Tile 
                        title="Shelter Space" 
                        description="iOS App for finding available shelter space for the unhoused." 
                        image="example.jpg"/>
                </div>

                <div class="main-column-right">
                    <Tile 
                        title="Big Farma" 
                        description="Example Description" 
                        image="example.jpg"/>

                    <Tile 
                        title="Travel Perspective" 
                        description="Historically never been easier" 
                        image="example.jpg"/>

                    <Tile 
                        title="California Real Estate" 
                        description="Why the price jumps kinda make sense" 
                        image="example.jpg"/>

                    <Tile 
                        title="Know Thyself, Relish Each Step" 
                        description="A persuasive essay about writing habitually" 
                        image="example.jpg"/>

                    <Tile 
                        title="Healthcare.. I've Got It?" 
                        description="It's not perfect, yet still the best." 
                        image="example.jpg"/>

                </div>

            </div>

            <div class="business-column-right-narrow">
                <Tile 
                    title="Travel" 
                    description="Did you read that opinion piece? or puff piece? .. either way, get on my level! (i'll help you)" 
                    image="example.jpg"/>

                <Tile 
                    title="Legal Services" 
                    description="Don't get taken for a ride. We'll also write your will with you." 
                    image="example.jpg"/>

                <Tile 
                    title="Real Estate Services (License Pending)" 
                    description="I can help; im kind of obsessed." 
                    image="example.jpg"/>

                <Tile 
                    title="Financial Planning" 
                    description="I see the opportunities for surplus in your future!" 
                    image="example.jpg"/>

                <Tile 
                    title="Education Consultation" 
                    description="Let's get you learned." 
                    image="example.jpg"/>
            </div>
            <Footer />
        </div>
    );
};

export default HomePage;
