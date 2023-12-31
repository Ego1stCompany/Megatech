import React from 'react';
import './Footer.css'
import {motion} from "framer-motion";


import PhoneAdmin from "../PhoneAdmin/PhoneAdmin";
import Message from "../Message/Message";
import PhoneMaster from "../PhoneMaster/PhoneMaster";

const Footer = () => {

    const column_1 = [
        {
            id:1,
            text:'Ремонт компьютеров'
        },
        {
            id:2,
            text:'Ремонт моноблоков'
        },
        {
            id:3,
            text:'Ремонт ноутбуков'
        },
        {
            id:4,
            text:'Ремонт планшетов'
        },
        {
            id:5,
            text:'Ремонт телефонов'
        },
        {
            id:6,
            text:'Ремонт серверов'
        },
        {
            id:7,
            text:'Ремонт техники Apple'
        },
        {
            id:8,
            text:'Сборка ПК на заказ'
        },
        {
            id:9,
            text:'Установка Windows'
        },
    ]

    const column_2 = [
        {
            id:1,
            text:'Диагностика ноутбука'
        },
        {
            id:2,
            text:'Компонентный и BGA ремонт'
        },
        {
            id:3,
            text:'Ремонт северного и южного моста'
        },
        {
            id:4,
            text:'Замена разъемов на ноутбуке'
        },
        {
            id:5,
            text:'Ремонт экрана ноутбука замена матрицы'
        },
        {
            id:6,
            text:'Замена клавиатуры и тачпада'
        },
        {
            id:7,
            text:'Модернизация ноутбуков'
        },
        {
            id:8,
            text:'Ремонт ноутбука после залития'
        },
        {
            id:9,
            text:'Чистка ноутбука от пыли'
        },
    ]

    return (
        <footer className="footer">
            <motion.div className="container__footer"
                 animate={{
                     x:[-100,0]
                 }}
                 initial={{ opacity: 0 }}
                 viewport={{ once: true }}
                 whileInView={{ opacity: 1 }}
                 transition={{ ease: [0.17, 0.67, 0.83, 0.67] }}
            >
                <div className="footer__column">
                    <h2 className="title__footer">
                        <span className="color">Услуги сервисного центра:</span>
                    </h2>
                    <ul className="list__footer">
                        {
                            column_1.map(item => {
                                return (
                                    <li className="item__footer" key={item.id}>
                                        {item.text}
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className="footer__column">
                    <h2 className="title__footer">
                        <span className="color">Сервис-ремонт ноутбуков:</span>
                    </h2>
                    <ul className="list__footer">
                        {
                            column_2.map(item => {
                                return (
                                    <li className="item__footer" key={item.id}>
                                        {item.text}
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className="footer__column">
                    <h2 className="title__footer">
                        <span className="color">Контакты</span>
                    </h2>

                    <p className="footer__address">
                        Москва, 9-я Парковая улица, 61А с1 (ТЦ Вектор)
                    </p>

                    <Message/>
                    <PhoneAdmin/>
                    <PhoneMaster/>
                </div>
            </motion.div>
           <motion.div className="container__footer"
                animate={{
                    x:[-100,0]
                }}
                initial={{ opacity: 0 }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1 }}
                transition={{ ease: [0.17, 0.67, 0.83, 0.67] }}
           >
               <div className="footer_text">
                   <div className="footer__row">
                       <p className="footer__row-text">
                           <span className="color">Московский Сервисный Центр по ремонту ноутбуков Megatech</span> © 2013-2023. Megatech.ru Все права защищены.
                       </p>
                   </div>
                   <div className="footer__row">
                       <p className="footer__row-text">
                           Политика конфиденциальности
                       </p>
                   </div>
                   <div className="footer__row">
                       <p className="footer__row-text">
                           Зарегистрированные товарные знаки и знаки обслуживания являются собственностью их правообладателей. Mac, iPhone, iPad — товарные знаки Apple, Inc. Windows Server и Windows
                           Phone — товарные знаки Microsoft Corporation, зарегистрированные в Соединенных Штатах Америки и в других странах. Android — товарный знак Google, Inc. Вся информация на этом
                           сайте, включая цены, носит характер исключительно информационный и ни при каких обстоятельствах не является публичной офертой,
                           определяемой <span className="color">положениями Статьи 437 (2) Гражданского кодекса РФ.</span>
                       </p>
                   </div>
               </div>
           </motion.div>
        </footer>
    );
};

export default Footer;