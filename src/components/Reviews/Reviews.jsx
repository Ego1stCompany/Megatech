import React from 'react';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import ReviewsContent from "../ReviewsContent/ReviewsContent";

const Reviews = () => {
    return (
        <div className="App">
            <Header/>
            <ReviewsContent/>
            <Footer/>
        </div>
    );
};

export default Reviews;