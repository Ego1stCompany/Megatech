import React, {useEffect, useState} from 'react';
import {motion} from "framer-motion";
import './ReviewsContent.css'
import PhoneMaster from "../PhoneMaster/PhoneMaster";
import formImg from "../../images/forms.png";

import ModuleReviewSubmit from "../ModuleReviewSubmit/ModuleReviewSubmit";
import {getReviews, postReview} from "../../http/AdminAPI";

const ReviewsContent = () => {

    const [formReview, setFormReview] = useState({
        userNameForm: '',
        textReviewForm: '',
    })

    const [posts, setPosts] = useState([])


    const [active, setActive] = useState(false)
    const [errorSubmit, setErrorSubmit] = useState(false)
    const [error, setError] = useState('')

    const getReviewsItem = async () => {
        try {
            let data;
            data = await getReviews()
            setPosts(data)
        } catch (e) {
            console.log(e)

        }
    }


    useEffect(() => {
        getReviewsItem()
    }, [posts])


    const onSubmit = async (e) => {
        e.preventDefault()

        try {

            if (formReview.userNameForm === "" || formReview.textReviewForm === "") {

                setErrorSubmit(true)
                return setTimeout(() => setErrorSubmit(false), 3000)
            }

            let data;
            data = await postReview(formReview.userNameForm, formReview.textReviewForm)

            setFormReview({
                textReviewForm: "",
                userNameForm: ""
            })

            setActive(true)
            setTimeout(() => setActive(false), 3000)
        } catch (error) {
            setError(`${error.response.data.message}`)
            setErrorSubmit(true)
            setTimeout(() => setErrorSubmit(false), 3000)
            console.log(error.response.data.message)
        }
    }

    return (
        <div className="section">
            <motion.div className="container__content"
                        animate={{
                            x: [-100, 0]
                        }}
                        initial={{opacity: 0}}
                        viewport={{once: true}}
                        whileInView={{opacity: 1}}
                        transition={{ease: [0.17, 0.67, 0.83, 0.67]}}
            >
                <div className="container-title_content">
                    <h2 className="title__content">
                        Отзывы <span className="color">Megatech</span>
                    </h2>
                </div>
                <div className="container__content-text">
                    <p className="text__content">
                        На этой странице публикуются <span className="color">отзывы наших клиентов</span>, которые
                        воспользовались услугами компьютерной помощи наших специалистов.
                    </p>
                    <p className="text__content">
                        Сервисный Центр <span className="color">Megatech</span> всегда рад помочь пользователям в
                        решении любых проблем с компьютерной техникой!
                    </p>
                    <PhoneMaster/>
                </div>
            </motion.div>
            <motion.div className="container__form-reviews"
                        animate={{
                            x: [-100, 0]
                        }}
                        initial={{opacity: 0}}
                        viewport={{once: true}}
                        whileInView={{opacity: 1}}
                        transition={{ease: [0.17, 0.67, 0.83, 0.67]}}
            >
                <div className="container__title-reviews">
                    <h2 className="title__form-reviews">
                        Оставить <span className="color">отзыв</span>
                    </h2>
                </div>

                <div className="content__form-reviews">
                    <form className="form-reviews">
                        <div className="form__line-reviews">
                            <label className="label__form-reviews">Ваше имя:</label>
                            <input
                                type="text"
                                className="input__text-reviews"
                                value={formReview.userNameForm}
                                onChange={event => setFormReview({
                                    ...formReview,
                                    userNameForm: event.target.value
                                })}
                                placeholder="введите имя"
                            />
                        </div>
                        <div className="form__line-reviews">
                            <label>Сообщение:</label>
                            <textarea
                                className="textarea__form-reviews"
                                placeholder="введите сообщение"
                                value={formReview.textReviewForm}
                                onChange={event => setFormReview({
                                    ...formReview,
                                    textReviewForm: event.target.value
                                })}
                            >
                            </textarea>
                            {
                                !errorSubmit ?
                                    <label className="label__form-color">''</label>
                                    :
                                    <label className="label__form-error">{error}</label>
                            }
                        </div>
                        <div className="form__line-button">
                            <button
                                className="submit__reviews"
                                onClick={onSubmit}
                            >
                                Отправить
                            </button>
                        </div>
                    </form>
                    <div className="container__img-form-reviews">
                        <img src={formImg} alt="form" className="img__form-reviews"/>
                    </div>
                </div>

                <div className="list__reviews">
                    {
                        posts.map(item => {
                            return (
                                <div className="item__reviews" key={item.id}>
                                    <div className="item__reviews-text">
                                        <span className="name__reviews">
                                           {item.name}
                                        </span>
                                        <p className="text__reviews">
                                            {item.text}
                                        </p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </motion.div>
            {
                active ? <ModuleReviewSubmit/> : ''
            }
        </div>
    );
};

export default ReviewsContent;