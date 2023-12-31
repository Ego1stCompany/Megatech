import React from 'react';
import {motion} from "framer-motion";
import './CardServices.css'

//images
import windows from '../../images/windows.png'
import virus from '../../images/virus.png'
import guard from '../../images/guard.png'
import internet from '../../images/internet.png'
import progress_4 from '../../images/progress_1.png'
import progress_3 from '../../images/progress_2.png'
import progress_2 from '../../images/progress_3.png'
import progress_1 from '../../images/progress_4.png'

const CardServices = () => {

    const imgServices = [
        {
            id:1,
            img:windows,
            text:'Установка Windows'
        },
        {
            id:2,
            img:virus,
            text:'Удаление вирусов'
        },
        {
            id:3,
            img:guard,
            text:'Установка антивируса'
        },
        {
            id:4,
            img:internet,
            text:'Настойка интернета'
        }
    ]

    const imgProgress = [
        {
            id:1,
            img:progress_1,
            title:'Обращений',
            text:'по рекомендации друзей и знакомых'
        },
        {
            id:2,
            img:progress_2,
            title:'Клиентов',
            text:'обращаются к нам в дальнейшем'
        },
        {
            id:3,
            img:progress_3,
            title:'Ремонт',
            text:'выполняется в день обращения'
        },
        {
            id:4,
            img:progress_4,
            title:'Клиентов',
            text:'Довольны нашей работы'
        }
    ]

    return (
        <section className="section">
            <motion.div
                className="container__cards-services-home"
                animate={{
                    x:[-100,0]
                }}
                initial={{ opacity: 0 }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1 }}
                transition={{ ease: [0.17, 0.67, 0.83, 0.67] }}
            >
                <div className="container__title">
                    <h2  className="title__services">
                        <span className="color">Компьютерный сервис</span> на дому
                    </h2>
                </div>

                <motion.div className="container__cards-services">
                    {
                        imgServices.map(item => {
                            return (
                                <div className="container__card-services" key={item.id}>
                                    <div className="container__images-services">
                                        <img
                                            src={item.img}
                                            alt='images'
                                            className="img__card-services"
                                        />
                                    </div>
                                    <div className="container__text-services">
                                        <p className="text__services">
                                            {item.text}
                                        </p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </motion.div>

                <div className="container__cards-services">
                    {
                        imgProgress.map(item => {
                            return (
                                <div className="container__card-progress" key={item.id}>
                                    <div className="container__images-progress">
                                        <img
                                            src={item.img}
                                            alt='images'
                                            className="img__card-progress"
                                        />
                                    </div>
                                    <div className="container__text-progress">
                                        <p className="text__progress">
                                            <span className="color">{item.title}</span>
                                        </p>
                                    </div>
                                    <div className="container__text-progress">
                                        <p className="text__progress">
                                            {item.text}
                                        </p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </motion.div>
        </section>
    );
};

export default CardServices;