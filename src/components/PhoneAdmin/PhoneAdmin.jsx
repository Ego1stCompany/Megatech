import React from 'react';
import './PhoneAdmin.css'
import {motion} from "framer-motion";
//image
import phone from "../../images/phone.png";

const PhoneAdmin = () => {
    return (
        <motion.div className="phoneAdmin"
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
                <a href="tel:8-(910)-407-20-38">8-(910)-407-20-38</a>
            </p>
        </motion.div>
    );
};

export default PhoneAdmin;