import React from 'react';
import Header from "../Header/Header";
import About from "../About/About";
import Services from "../Services/Services";
import CardsInformation from "../CardsInformation/CardsInformation";
import LaptopText from "../LaptopText/LaptopText";
import CardServices from "../CardServices/CardServices";
import Form from "../Form/Form";
import Footer from "../Footer/Footer";
import {observer} from "mobx-react-lite";

const Home = observer(() => {
    return (
        <div>
            <Header/>
            <About/>
            <Services/>
            <CardsInformation/>
            <LaptopText/>
            <CardServices/>
            <Form/>
            <Footer/>
        </div>
    );
});

export default Home;