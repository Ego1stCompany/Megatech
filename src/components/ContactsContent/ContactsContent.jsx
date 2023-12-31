import React from 'react';
import './ContactsContent.css'
import {motion} from "framer-motion";
import PhoneAdmin from "../PhoneAdmin/PhoneAdmin";
import PhoneMaster from "../PhoneMaster/PhoneMaster";

const ContactsContent = () => {
    return (
        <div className="section">
            <motion.div className="container__content"
                        animate={{
                            x: [-100, 0]
                        }}
                        initial={{opacity: 0}}
                        viewport={{once: true}}
                        whileInView={{opacity: 1}}
                        transition={{ease: [0.17, 0.67, 0.83, 0.67]}}
            >
                <div className="container-title_content">
                    <h2 className="title__content">
                        Контакты и адрес сервисного центра <span className="color">Megatech</span>
                    </h2>
                </div>
                <div className="container__content-text"
                >
                    <ul className="list__content">
                        <li className="item__content">
                            - <span className="color">Адрес:</span> Россия, Москва, 9-я Парковая улица, 61А с1 (ТЦ
                            Вектор)
                        </li>
                        <li className="item__content">
                            - <span className="color">Часы работы СЦ</span>: Пн - Вскр, 8.00 - 21.00
                        </li>
                        <li className="item__content">
                            - <span className="color">Эл. почта:</span> support@Megatech.ru
                        </li>
                        <li className="item__content">
                            - <span className="color">Телефон:</span>прием заявок круглосуточно
                        </li>
                    </ul>
                    <PhoneAdmin/>
                    <PhoneMaster/>
                </div>
            </motion.div>
        </div>
    );
};

export default ContactsContent;