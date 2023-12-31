import React, {useState} from 'react';
import "./BurgerNavigation.css"
import NavigationBarMobile from "../NavigationBarMobile/NavigationBarMobile";

const BurgerNavigation = () => {

    const [active, setActive] = useState(false)

    const onNavigationActive = () => {
        return setActive(!active)
    }


    return (
        <div>
            <div
                className="burger"
                onClick={onNavigationActive}
            >
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>

            {
                active === true
                    ?
                    <NavigationBarMobile/>
                    :
                    ''
            }
        </div>
    );
};

export default BurgerNavigation;