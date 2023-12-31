import React from 'react';
import './NavigationDashboard.css'
import {Link} from "react-router-dom";
import iconOrders from "../../images/orders.png";

const NavigationDashboard = () => {
    return (
        <div className="main__dashboard">
            <div className="navigation__dashboard">
                <div className="navigation__item-dashboard">
                    <Link to={'/admin/orders'}>
                        <img
                            src={iconOrders}
                            alt="home"
                            className="img__dashboard"
                        />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NavigationDashboard;