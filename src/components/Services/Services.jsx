import React from 'react';
import './Services.css'
import {motion} from "framer-motion";
import services from "../../images/services.png";
import {observer} from "mobx-react-lite";


const Services = observer(() => {

    const servicesFirstList = [
        {
            id:1,
            text:'Ремонт компьютеров, ноутбуков, планшетов, моноблоков, смартфонов и техники Apple;'
        },
        {
            id:2,
            text:'Апгрейд/Модернизация ноутбуков и системных блоков ПК;'
        },
        {
            id:3,
            text:'Восстановление данных с поврежденных носителей;'
        },
        {
            id:4,
            text:'Удаление вирусов и шпионских программ;'
        },
        {
            id:5,
            text:'Обслуживание компьютерных сетей и ремонт сетевого оборудования;'
        },
        {
            id:6,
            text:'Сборка компьютеров на заказ любых конфигураций;'
        },
        {
            id:7,
            text:'Установка ОС и ПО обучение пользователей и поддержка;'
        },
        {
            id:8,
            text:'Оптимизация производительности операционных систем;'
        },
        {
            id:9,
            text:'Дистанционная компьютерная помощь через Интернет.'
        }
    ]

    const servicesLastList = [
        {
            id:1,
            text:'Абонентское обслуживание компьютеров;'
        },
        {
            id:2,
            text:'Удаленное администрирование серверов на Microsoft или Linux;'
        },
        {
            id:3,
            text:'Сборка сервера на заказ любой конфигурации;'
        },
        {
            id:4,
            text:'Диагностика, модернизация и аппаратный ремонт серверов;'
        },
        {
            id:5,
            text:'ОРазовый оптовый ремонт компьютерной техники;'
        },
        {
            id:6,
            text:'Обслуживание и ремонт офисной оргтехники.'
        },
    ]

    return (
        <section className="section">
            <motion.div className="container__services"
                 animate={{
                     x:[-100,0]
                 }}
                 initial={{ opacity: 0 }}
                 viewport={{ once: true }}
                 whileInView={{ opacity: 1 }}
                 transition={{ ease: [0.17, 0.67, 0.83, 0.67] }}
            >
                <div className="container__img-services">
                    <img src={services} alt="about" className="img__services"/>
                </div>

                <div className="container__information-services">
                    <h2 className="title__service">
                        Сервисные <span className="color">Услуги:</span>
                    </h2>

                    <ul className="services__list">
                        {
                            servicesFirstList.map(item => {
                                return (
                                    <li className="services__item" key={item.id}>
                                        {item.text}
                                    </li>
                                )
                            })
                        }
                    </ul>

                    <h2 className="title__service">
                        <span className="color">Услуги </span> для организаций г. Москва:
                    </h2>

                    <ul className="services__list">
                        {
                            servicesLastList.map(item => {
                                return (
                                    <li className="services__item" key={item.id}>
                                        {item.text}
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </motion.div>
        </section>
    );
});

export default Services;