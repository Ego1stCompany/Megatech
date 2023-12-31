import React from 'react';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import OrganizationsContent from "../OrganizationsContent/OrganizationsContent";

const Organizations = () => {
    return (
        <div className="App">
            <Header/>
            <OrganizationsContent/>
            <Footer/>
        </div>
    );
};

export default Organizations;