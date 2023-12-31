import React from 'react';
import './Logo.css'
import {motion} from "framer-motion";
import {Link} from "react-router-dom";
//images
import logo from '../../images/logo.svg'

const Logo = () => {
    return (
        <motion.div className="logo"
                    animate={{
                        x:[-100,0]
                    }}
                    initial={{ opacity: 0 }}
                    viewport={{ once: true }}
                    whileInView={{ opacity: 1 }}
                    transition={{ ease: [0.17, 0.67, 0.83, 0.67] }}
        >
            <div className="container__logo">
                <Link to="/">
                    <img src={logo} alt="logo" className="img__logo"/>
                </Link>
            </div>
        </motion.div>
    );
};

export default Logo;