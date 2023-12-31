import React from 'react';
import {motion} from "framer-motion";
import "./HeaderInformation.css"

const HeaderInformation = () => {
    return (
        <motion.div className="header__information"
             animate={{
                 x:[-100,0]
             }}
             initial={{ opacity: 0 }}
             viewport={{ once: true }}
             whileInView={{ opacity: 1 }}
             transition={{ ease: [0.17, 0.67, 0.83, 0.67] }}
        >
            <p className="header__information-text">
                офис: <span className="color">с 9-00 до 18-00</span>
            </p>
            <p className="header__information-text">
                выезд мастера: <span className="color">с 8-00 до 21-00</span>
            </p>
        </motion.div>
    );
};

export default HeaderInformation;