import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import Carousel from '../Carousel/Carousel';
import NewEvent from '../Event/NewEvent';
import Review from '../Review/Review';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Carousel></Carousel>
            <Services></Services>
            <NewEvent></NewEvent>
            <Review></Review>
            <Footer></Footer>  
        </div>
    );
};

export default Home;