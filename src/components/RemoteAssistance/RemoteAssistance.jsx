import React from 'react';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import RemoteContent from "../RemoteContent/RemoteContent";
import Form from "../Form/Form";

const RemoteAssistance = () => {
    return (
        <div className="App">
            <Header/>
            <RemoteContent/>
            <Form/>
            <Footer/>
        </div>
    );
};

export default RemoteAssistance;