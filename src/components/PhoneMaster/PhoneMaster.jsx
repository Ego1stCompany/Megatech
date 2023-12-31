import React from 'react';
import "./PhoneMaster.css"
import {motion} from "framer-motion";
import phone from "../../images/phone.png";

const PhoneMaster = () => {
    return (
        <motion.div className="phoneMaster"
             animate={{
                 x:[-100,0]
             }}
             initial={{ opacity: 0 }}
             viewport={{ once: true }}
             whileInView={{ opacity: 1 }}
             transition={{ ease: [0.17, 0.67, 0.83, 0.67] }}
        >
            <div className="container__phone">
                <img src={phone} alt="phone" className="img__phone"/>
            </div>
            <p className="phone_text">
                <a href="tel:8-(499)-707-28-01">8-(499)-707-28-01</a>
            </p>
        </motion.div>
    );
};

export default PhoneMaster;