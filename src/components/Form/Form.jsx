import React, {useState} from 'react';
import './Form.css'
import {motion} from "framer-motion";
import form from '../../images/forms.png'
import parsePhoneNumber, {isValidPhoneNumber} from "libphonenumber-js";
import {postOrder} from "../../http/AdminAPI";
import ModuleOrderSubmit from "../ModuleOrderSubmit/ModuleOrderSubmit";


const Form = () => {

    const [nameUserForm, setNameUserForm] = useState("")
    const [numberUserForm, setNumberUserForm] = useState("")
    const [userTextForm, setUserTextForm] = useState("")

    const [active, setActive] = useState(false)
    const [errorSubmit, setErrorSubmit] = useState(false)
    const [error, setError] = useState('')


    const convertPhone = (number) => {
        if (isValidPhoneNumber(number, 'RU')) {
            const phoneNumber = parsePhoneNumber(number, 'RU')
            return phoneNumber.formatNational()
        }
        return number
    }

    const numberSubmit = numberUserForm.replace(/[(),-]/ig, '')
        .split('')
        .filter(i => i !== ' ')
        .join('')


    const onSubmitForm = async (e) => {
        e.preventDefault()
        try {
            let data;
            data = await postOrder(nameUserForm, numberSubmit, userTextForm)
            setActive(true)
            setTimeout(() => setActive(false), 3000)

            setNameUserForm('')
            setNumberUserForm('')
            setUserTextForm('')

        } catch (error) {
            setError(`${error.response.data.message}`)
            setErrorSubmit(true)
            setTimeout(() => setErrorSubmit(false), 3000)
            console.log(error.response.data.message)
        }
    }

    return (
        <section className="section">
            <motion.div className="container__form"
                        animate={{
                            x: [-100, 0]
                        }}
                        initial={{opacity: 0}}
                        viewport={{once: true}}
                        whileInView={{opacity: 1}}
                        transition={{ease: [0.17, 0.67, 0.83, 0.67]}}
            >
                <div className="container__title">
                    <h2 className="title__form">
                        Нужна сроная компьютерная <span className="color">помощь ?</span>
                    </h2>
                </div>

                <div className="container__form-content">
                    <form className="form">
                        <div className="form__line">
                            <label className="label__form">Ваше имя:</label>
                            <input
                                type="text"
                                className="input__text"
                                value={nameUserForm}
                                onChange={(e) => setNameUserForm(e.target.value)}
                                placeholder="введите имя"
                            />
                        </div>
                        <div className="form__line">
                            <label className="label__form">Телефон:</label>
                            <input
                                type="text"
                                className="input__text"
                                value={numberUserForm}
                                onChange={(e) => setNumberUserForm(convertPhone(e.target.value))}
                                placeholder="введите номер телефона"
                            />
                        </div>
                        <div className="form__line">
                            <label className="label__form">Сообщение:</label>
                            <textarea
                                value={userTextForm}
                                onChange={(e) => setUserTextForm(e.target.value)}
                                className="textarea__form"
                                placeholder="введите сообщение"
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
                                onClick={onSubmitForm}
                            >
                                Отправить
                            </button>
                        </div>
                    </form>
                    <div className="container__img-form">
                        <img src={form} alt="form" className="img__form"/>
                    </div>
                </div>
            </motion.div>
            {
                active ? <ModuleOrderSubmit/> : ''
            }
        </section>
    );
};

export default Form;