import React from 'react';
import {motion} from "framer-motion";
import './LeptopText.css'

const LaptopText = () => {
    return (
        <section  className="section">
            <motion.div className="container__text-laptop"
                 animate={{
                     x:[-100,0]
                 }}
                 initial={{ opacity: 0 }}
                 viewport={{ once: true }}
                 whileInView={{ opacity: 1 }}
                 transition={{ ease: [0.17, 0.67, 0.83, 0.67] }}
            >
                <p className="text__laptop">
                    Мы обслуживаем любые модели стационарных компьютеров и ноутбуков <span className="color">Acer, Apple MacBook, ASUS, Dell, DNS, eMachines, Packard Bell, HP, Lenovo, LG, iRU, MSI, Fujitsu, Samsung, Sony Vaio, Toshiba и др.</span>
                </p>
                <p className="text__laptop">
                    Вы можете самостоятельно принести ваш компьютер в нашу мастерскую или заказать выезд сервисного инженера на дом или офис организации
                </p>
            </motion.div>
        </section>
    );
};

export default LaptopText;