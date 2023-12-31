import React from 'react';
import "./Message.css"
import {motion} from "framer-motion";

import message from '../../images/message.png'

const Message = () => {
    return (
        <motion.div className="message"
             animate={{
                 x:[-100,0]
             }}
             initial={{ opacity: 0 }}
             viewport={{ once: true }}
             whileInView={{ opacity: 1 }}
             transition={{ ease: [0.17, 0.67, 0.83, 0.67] }}
        >
            <div className="container__image-message">
                <img src={message} alt="" className="img__message"/>
            </div>
            <p className="text__message">
                <a href="mailto:support@Megatech.ru">support@Megatech.ru</a>
            </p>
        </motion.div>
    );
};

export default Message;