import React from 'react';
import './CardsInformation.css'
import {motion} from "framer-motion";
//images
import delivery from '../../images/delivery.png'
import diagnostic from '../../images/diagnostic.png'
import graphic_card from '../../images/graphic_card.png'
import license from '../../images/license.png'

const CardsInformation = () => {

    const cardInformation = [
        {
            id:1,
            img:delivery,
            text:'Бесплатная доставка'
        },
        {
            id:2,
            img:diagnostic,
            text:'Бесплатная диагностика'
        },
        {
            id:3,
            img:graphic_card,
            text:'Запчасти в наличии'
        },
        {
            id:4,
            img:license,
            text:'Чесная горантия'
        }
    ]

    return (
        <section className="section">
            <motion.div
                className="container__cards-information"
                animate={{
                    x:[-100,0]
                }}
                initial={{ opacity: 0 }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1 }}
                transition={{ ease: [0.17, 0.67, 0.83, 0.67] }}
            >
                {
                    cardInformation.map(item => {
                        return (
                            <div className="container__card-information" key={item.id}>
                                <div className="container__img-information">
                                    <img src={item.img} alt='images' className="img__card-information"/>
                                </div>
                                <div className="container__text-information">
                                    <p className="text__information">
                                        {item.text}
                                    </p>
                                </div>
                            </div>
                        )
                    })
                }
            </motion.div>
        </section>
    );
};

export default CardsInformation;