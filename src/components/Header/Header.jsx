import React from 'react';
import './Header.css'
//components
import Logo from "../Logo/Logo";
import PhoneAdmin from "../PhoneAdmin/PhoneAdmin";
import NavigationBar from "../NavigationBar/NavigationBar";
import HeaderInformation from "../HeaderInformation/HeaderInformation";
import BurgerNavigation from "../BurgerNavigation/BurgerNavigation";

const Header = () => {

    return (
        <header className="header">
            <div className="container__header">
                <Logo/>
                <BurgerNavigation/>
                <NavigationBar/>
                <HeaderInformation/>
                <PhoneAdmin/>
            </div>
        </header>
    );
};

export default Header;