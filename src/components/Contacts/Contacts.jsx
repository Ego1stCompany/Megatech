import React from 'react';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Form from "../Form/Form";
import ContactsContent from "../ContactsContent/ContactsContent";
import {observer} from "mobx-react-lite";

const Contacts = observer(() => {
    return (
       <div className="App">
           <Header/>
           <ContactsContent/>
           <Form/>
           <Footer/>
       </div>
    );
});

export default Contacts;