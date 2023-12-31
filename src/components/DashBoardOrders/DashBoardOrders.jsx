import React, {useEffect, useState} from 'react';
import HeaderDashboard from "../HeaderDashboard/HeaderDashboard";
import NavigationDashboard from "../NavigationDashboard/NavigationDashboard";
import "./DashBoardOrders.css"

import {observer} from "mobx-react-lite";
import {getOrders} from "../../http/AdminAPI";

const DashBoardOrders = observer(() => {

    const [orders, setOrders] = useState([])

    const getOrdersList = async () => {
        const order = await getOrders()
        console.log(order)
        return setOrders(order)
    }

    useEffect(() => {
        getOrdersList()
    }, [setOrders])

    return (
        <div>
            <HeaderDashboard/>
            <main className="main">
                <NavigationDashboard/>
                <div className="container__content-dashboard">

                    <h2 className="title__dashboard">
                        Заказы
                    </h2>

                    <div className="list__orders">
                        {
                            orders.map(item => {
                                return (
                                    <div className="item__reviews" key={item.id}>
                                        <div className="item__reviews-text">
                                            <span className="name__reviews">
                                               {item.name}
                                            </span>

                                            <span className="name__reviews">
                                               {item.phone}
                                            </span>

                                            <p className="text__reviews">
                                                {item.text}
                                            </p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </main>
        </div>
    );
});

export default DashBoardOrders;