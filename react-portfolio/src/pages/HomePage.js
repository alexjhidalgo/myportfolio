import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Tile from '../components/Tile';
import '../styles/HomePage.css';

const HomePage = () => {

    const currentDate = new Date();
    const dayOfWeek = currentDate.toLocaleString('en-US', { weekday: 'long' });
    const month = currentDate.toLocaleString('en-US', { month: 'long' });
    const dayOfMonth = currentDate.getDate();
    const year = currentDate.getFullYear();

    return (
        <div className='homepage'>
            <Header />
            <div className="date">{dayOfWeek}, {month} {dayOfMonth}, {year}</div>
            <h2>Bytes of Alex, for</h2>
            <div className="columns">
                
                <div className="personal-column-left-narrow">

                    <Tile 
                        title="History" 
                        tileClassName="tile"
                        imgClassName="tile-img"
                        description="La Quinta, CA, a Charmed Life" 
                        image="/date-palm-inner-with-van.png"/>

                    <Tile 
                        title="Family" 
                        tileClassName="tile"
                        imgClassName="tile-img"
                        description="Hidalgo, Hays, and Valdivia, legacies of entrepreneurship." 
                        image="/kyrie-beach-stairs.png"/>
                </div>

                <div className="main-column-top">
                    
                    <div className="main-column-left">
                            <h3>The Left</h3>
                            <Tile 
                                title="Handwritten" 
                                tileClassName="tile-main"
                                imgClassName="tile-img-main" 
                                description="iOS App using text recognition to digitize your handwriting to send personal letters." 
                                image="you-are-beautiful-writing.gif"/>

                            <Tile 
                                title="Doge Farms" 
                                tileClassName="tile-main"
                                imgClassName="tile-img-main" 
                                description="Connects dog breeders (seasoned or aspiring) with loving owners." 
                                image="doge-words.gif"/>

                            <Tile 
                                title="Hidalgo Properties" 
                                tileClassName="tile-main"
                                imgClassName="tile-img-main" 
                                description="Business Website for Property Management, Listings, and Leads on New Properties." 
                                image="property-mgmt.png"/>

                            <Tile 
                                title="Shelter Space" 
                                tileClassName="tile-main"
                                imgClassName="tile-img-main" 
                                description="iOS App for finding available shelter space for the unhoused." 
                                image="homeless-shelter.png"/>
                        </div>

                        <div className="main-column-right">
                            <h3>The Right</h3>
                            <Tile 
                                title="Big Farma" 
                                tileClassName="tile-main"
                                imgClassName="tile-img-main" 
                                description="One day I shall return to my farm like old Cinncinatus." 
                                image="pompeii-vineyard.png"/>

                            <Tile 
                                title="Travel Perspective" 
                                tileClassName="tile-main"
                                imgClassName="tile-img-main" 
                                description="Historically never been easier" 
                                image="wing-over-water.png"/>

                            <Tile 
                                title="California Real Estate" 
                                tileClassName="tile-main"
                                imgClassName="tile-img-main" 
                                description="Why the price jumps kinda make sense" 
                                image="old-oakland.png"/>

                            <Tile 
                                title="Know Thyself, Relish Each Step" 
                                tileClassName="tile-main"
                                imgClassName="tile-img-main" 
                                description="A persuasive essay about writing habitually" 
                                image="journal-ios.png"/>

                            <Tile 
                                title="Healthcare.. I've Got It?" 
                                tileClassName="tile-main"
                                imgClassName="tile-img-main" 
                                description="It's not perfect, yet still the best." 
                                image="medicaid.png"/>
                        </div>

                </div>

                <div className="business-column-right-narrow">
                    <Tile 
                        title="Travel" 
                        tileClassName="tile"
                        imgClassName="tile-img"
                        description="Did you read that opinion piece? or puff piece? .. either way, get on my level! (i'll help you)" 
                        image="aina-haina-deck.png"/>

                    <Tile 
                        title="Legal Services" 
                        tileClassName="tile"
                        imgClassName="tile-img"
                        description="Don't get taken for a ride. We'll also write your will with you." 
                        image="justice-for-all.png"/>

                    <Tile 
                        title="Real Estate Services (License Pending)" 
                        tileClassName="tile"
                        imgClassName="tile-img"
                        description="I can help; im kind of obsessed." 
                        image="real-estate.png"/>

                    <Tile 
                        title="Financial Planning" 
                        tileClassName="tile"
                        imgClassName="tile-img"
                        description="I see the opportunities for surplus in your future!" 
                        image="finances.png"/>

                    <Tile 
                        title="Education Consultation" 
                        tileClassName="tile"
                        imgClassName="tile-img"
                        description="Let's get you learned." 
                        image="education-access.png"/>
                </div>
                
            </div>
            <Footer />
        </div>
    );
};

export default HomePage;
