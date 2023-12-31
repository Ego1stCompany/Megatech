import React from 'react';
import {motion} from "framer-motion";
import {Link} from "react-router-dom";
import './NavigationBarMobile.css'

const NavigationBarMobile = () => {

    const navigationList = [
        {
            id:1,
            text:'Главная',
            url:'/'
        },
        {
            id:2,
            text:'Услуги',
            url:'/services'
        },
        {
            id:3,
            text:'Дистанционная помощь',
            url:'/remote-assistance'
        },
        {
            id:4,
            text:'Цены',
            url: '/repair'
        },
        {
            id:5,
            text:'Организациям',
            url: '/organizations'
        },
        {
            id:6,
            text:'Отзывы',
            url: '/reviews'
        },
        {
            id:7,
            text:'Контакты',
            url: '/contacts'
        },
    ]

    return (
        <motion.nav className="navigation__mobile"
                    animate={{
                        x:[-100,0]
                    }}
                    initial={{ opacity: 0 }}
                    viewport={{ once: true }}
                    whileInView={{ opacity: 1 }}
                    transition={{ ease: [0.17, 0.67, 0.83, 0.67] }}
        >
            <ul className="navigation__list-mobile">
                {
                    navigationList.map(item => {
                        return (
                            <li className="navigation__item-mobile" key={item.id}>
                                <Link to={item.url}>{item.text}</Link>
                            </li>
                        )
                    })
                }
            </ul>
        </motion.nav>
    );
};

export default NavigationBarMobile;