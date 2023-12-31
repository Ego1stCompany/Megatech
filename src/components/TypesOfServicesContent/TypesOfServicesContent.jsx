import React from 'react';
import {motion} from "framer-motion";

const TypesOfServicesContent = () => {
    return (
        <div className="section">
            <motion.div className="container__content"
                        animate={{
                            x:[-100,0]
                        }}
                        initial={{ opacity: 0 }}
                        viewport={{ once: true }}
                        whileInView={{ opacity: 1 }}
                        transition={{ ease: [0.17, 0.67, 0.83, 0.67] }}
            >
                <div className="container-title_content">
                    <h2 className="title__content">
                        Услуги по ремонту и обслуживанию помощь <span className="color">компьютерной техники</span>
                    </h2>
                </div>
                <div className="container__content-text">
                    <h3 className="title__content-information">
                        Ремонт ноутбуков:
                    </h3>
                    <ul className="list__content">
                        <li className="item__content">
                            - Ремонт материнской платы;
                        </li>
                        <li className="item__content">
                            - Замена матрицы;
                        </li>
                        <li className="item__content">
                            - Замена клавиатуры;
                        </li>
                        <li className="item__content">
                            - Замена разъема;
                        </li>
                        <li className="item__content">
                            - Ремонт корпуса и замена петель;
                        </li>
                        <li className="item__content">
                            - Чистка ноутбука от пыли;
                        </li>
                        <li className="item__content">
                            - Ремонт залитого ноутбука;
                        </li>
                        <li className="item__content">
                            - Модернизация ноутбука
                        </li>
                    </ul>
                    <h3 className="title__content-information">
                        Ремонт персональных компьютеров:
                    </h3>
                    <ul className="list__content">
                        <li className="item__content">
                            - Ремонт стационарных компьютеров;
                        </li>
                        <li className="item__content">
                            - Ремонт моноблочных компьютеров;
                        </li>
                        <li className="item__content">
                            - Сборка системных блоков на заказ;
                        </li>
                        <li className="item__content">
                            - Апгрейд ПК
                        </li>
                    </ul>
                    <h3 className="title__content-information">
                        Ремонт техники Apple:
                    </h3>
                    <ul className="list__content">
                        <li className="item__content">
                            - Ремонт iPhone;
                        </li>
                        <li className="item__content">
                            - Ремонт iPad;
                        </li>
                        <li className="item__content">
                            - Ремонт iMac;
                        </li>
                        <li className="item__content">
                            - MacBook
                        </li>
                    </ul>
                    <h3 className="title__content-information">
                        Ремонт сетевого оборудования:
                    </h3>
                    <ul className="list__content">
                        <li className="item__content">
                            - Ремонт сетевого оборудования;
                        </li>
                        <li className="item__content">
                            - Ремонт серверов;
                        </li>
                        <li className="item__content">
                            - Ремонт Cisco
                        </li>
                    </ul>
                    <h3 className="title__content-information">
                        Программное обеспечение:
                    </h3>
                    <ul className="list__content">
                        <li className="item__content">
                            - Установка Windows;
                        </li>
                        <li className="item__content">
                            - Удаление вирусов;
                        </li>
                        <li className="item__content">
                            - Установка антивируса;
                        </li>
                        <li className="item__content">
                            - Восстановление данных
                        </li>
                    </ul>
                    <h3 className="title__content-information">
                        Интернет и сети:
                    </h3>
                    <ul className="list__content">
                        <li className="item__content">
                            - Настройка Wi-Fi на ноутбуке
                        </li>
                    </ul>
                    <h3 className="title__content-information">
                        Прочие услуги:
                    </h3>
                    <ul className="list__content">
                        <li className="item__content">
                            - Ремонт сотовых телефонов и смартфонов;
                        </li>
                        <li className="item__content">
                            - Ремонт ASIC майнеров и GPU ферм;
                        </li>
                        <li className="item__content">
                            - Скорая компьютерная помощь на дому;
                        </li>
                        <li className="item__content">
                            - Компьютерные услуги для организаций
                        </li>
                    </ul>
                </div>
            </motion.div>
        </div>
    );
};

export default TypesOfServicesContent;