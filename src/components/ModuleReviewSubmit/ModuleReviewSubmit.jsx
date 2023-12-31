import React from 'react';
import "./ModuleReviewSubmit.css"
import {motion} from "framer-motion";
import reviewImg from "../../images/review.png";

const ModuleReviewSubmit = () => {
    return (
        <div
            className="position__module"
        >
            <motion.div
                className="container__module"
                animate={{
                    scale: [1,2,1],
                }}
            >
                <div className="container__img-review">
                    <img src={reviewImg} alt="review" className="img__review"/>
                </div>
                <p className="text__module">
                    Спасибо за оставленный отзыв!!
                </p>
            </motion.div>
        </div>
    );
};

export default ModuleReviewSubmit;