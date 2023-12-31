import React, {useContext, useState} from 'react';
import './FormRegistration.css'
import registrationImg from '../../images/registration.png'
import {useHistory} from "react-router-dom";
import {registration} from "../../http/AdminAPI";
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import ModuleReviewSubmit from "../ModuleReviewSubmit/ModuleReviewSubmit";

const FormRegistration = observer(() => {

    const {user} = useContext(Context)
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [errorPassword, setErrorPassword] = useState(false)

    const [active, setActive] = useState(false)
    const [errorSubmit, setErrorSubmit] = useState(false)
    const [error, setError] = useState('')
    const history = useHistory()

    const signIn = async () => {
        try {
            let data;
            data = await registration(email, password, firstName, lastName)
            user.setUser(user)
            user.setIsAuth(true)

            history.push("/admin/authorization")

            if (confirmPassword !== password) {
                setErrorPassword(true)
                setTimeout(() => setErrorPassword(false), 3000)
            }

            setActive(true)
            setTimeout(() => setActive(false), 3000)

        } catch (error) {
            console.log(error)
            setError(`${error.response.data.message}`)
            setErrorSubmit(true)
            setTimeout(() => setErrorSubmit(false), 3000)
        }
    }

    const onSubmitRegistration = (e) => {
        e.preventDefault()
        signIn()
    }

    return (
        <main className="main">
            <div className="transform__container">
                <div className="formAdmin__registration">
                    <div className="container__formAdmin-content">
                        <div className="container__formAdmin-image">
                            <img
                                src={registrationImg}
                                alt="image-registration"
                                className="img__formAdmin"
                            />
                        </div>
                    </div>
                    <form>
                        <div className="container__formAdmin-registration">
                            <h2 className="title__registration">
                                Регистрация
                            </h2>
                            <div className="row__formAdmin-registration">
                                <label className="label__formAdmin-registration">
                                    Имя
                                </label>
                                <input
                                    className="input__formAdmin-registration"
                                    type="text"
                                    value={firstName}
                                    onChange={e => setFirstName(e.target.value)}
                                    placeholder="введите имя..."
                                />
                            </div>
                            <div className="row__formAdmin-registration">
                                <label className="label__formAdmin-registration">
                                    Фамилия
                                </label>
                                <input
                                    className="input__formAdmin-registration"
                                    type="text"
                                    value={lastName}
                                    onChange={e => setLastName(e.target.value)}
                                    placeholder="введите фамилия..."
                                />
                            </div>
                            <div className="row__formAdmin-registration">
                                <label className="label__formAdmin-registration">
                                    Email
                                </label>
                                <input
                                    className="input__formAdmin-registration"
                                    type="email"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                    placeholder="введите почту..."
                                />
                            </div>
                            <div className="row__formAdmin-registration">
                                <label className="label__formAdmin-registration">
                                    Пароль
                                </label>
                                <input
                                    className="input__formAdmin-registration"
                                    type="password"
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                    placeholder="введите пароль..."
                                />
                            </div>
                            <div className="row__formAdmin-registration">
                                <label className="label__formAdmin-registration">
                                    Подтверждение пароля
                                </label>
                                <input
                                    className="input__formAdmin-registration"
                                    type="password"
                                    value={confirmPassword}
                                    onChange={e => setConfirmPassword(e.target.value)}
                                    placeholder="повторите пароль..."
                                />
                                {
                                    !errorSubmit ?
                                        <label className="label__form-color">''</label>
                                        :
                                        <label className="label__form-error">{error}</label>
                                }
                            </div>
                            {
                                !errorPassword ?
                                    <label className="label__form-color">''</label>
                                    :
                                    <label className="label__form-error">Пароли не совпадают</label>
                            }
                            <button
                                className="button__formAdmin"
                                onClick={onSubmitRegistration}
                            >
                                Отправить
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            {
                active ? <ModuleReviewSubmit/> : ''
            }
        </main>
    );
});

export default FormRegistration;