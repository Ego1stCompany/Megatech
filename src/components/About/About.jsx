import React from 'react';
import './About.css'
import {motion} from 'framer-motion'
import about from "../../images/about.png";
import PhoneMaster from "../PhoneMaster/PhoneMaster";
import {observer} from "mobx-react-lite";

const About = observer (() => {

    const aboutList = [
        {
            id:1,
            text:'Московский сервисный центр «Megatech» занимается профессиональным ремонтом ноутбуков и ПК в Москве с 2013 года.'
        },
        {
            id:2,
            text:'Наши сертифицированные инженеры быстро помогут вам решить любые проблемы с компьютерной техникой.'
        },
    ]

    return (
        <section className="section">
            <motion.div className="container__about"
                 animate={{
                     x:[-100,0]
                 }}
                 initial={{ opacity: 0 }}
                 viewport={{ once: true }}
                 whileInView={{ opacity: 1 }}
                 transition={{ ease: [0.17, 0.67, 0.83, 0.67] }}
            >
                <div className="container__information-about">
                    <h2 className="title__about">
                        Компьютерный Серверсный Центр <span className="color">Megatech</span>
                    </h2>

                    <ul className="about__list">
                        {
                            aboutList.map(item => {
                                return (
                                    <li className="about__item" key={item.id}>
                                        {item.text}
                                    </li>
                                )
                            })
                        }
                    </ul>

                    <PhoneMaster/>
                </div>

                <div className="container__img-about">
                    <img src={about} alt="about" className="img__about"/>
                </div>
            </motion.div>
        </section>
    );
});

export default About;