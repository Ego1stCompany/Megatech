import React from 'react';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import TypesOfServicesContent from "../TypesOfServicesContent/TypesOfServicesContent";

const TypesOfServices = () => {
    return (
        <div className="App">
            <Header/>
            <TypesOfServicesContent/>
            <Footer/>
        </div>
    );
};

export default TypesOfServices;