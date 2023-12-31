import React, {useContext, useState} from 'react';
import './FormAuthorization.css'
import {useHistory} from "react-router-dom";
import registrationImg from '../../images/registration.png'
import {login} from "../../http/AdminAPI";
import {observer} from "mobx-react-lite";
import {Context} from "../../index";


const FormAuthorization = observer(() => {

    const history = useHistory()
    const {user} = useContext(Context)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const [errorSubmit, setErrorSubmit] = useState(false)
    const [error, setError] = useState('')


    const signIn = async () => {
        try {
            let data;
            data = await login(email, password)
            user.setUser(user)
            user.setIsAuth(true)
            history.push("/admin/orders")
        } catch (error) {
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
        <div className="formAdmin__authorization">
            <div className="container__formAdmin-content">
                <h2 className="title__content">
                    Добро пожаловать
                </h2>
                <div className="container__formAdmin-image">
                    <img
                        src={registrationImg}
                        alt="image-registration"
                        className="img__formAdmin"
                    />
                </div>
            </div>
            <form>
                <div className="container__formAdmin-authorization">
                    <h2 className="title__registration">
                        Авторизация
                    </h2>
                    <div className="row__formAdmin-authorization">
                        <label className="label__formAdmin-authorization">
                            Email
                        </label>
                        <input
                            className="input__formAdmin-authorization"
                            type="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            placeholder="введите почту..."
                        />
                    </div>
                    <div className="row__formAdmin-authorization">
                        <label className="label__formAdmin-authorization">
                            Пароль
                        </label>
                        <input
                            className="input__formAdmin-authorization"
                            type="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            placeholder="введите пароль..."
                        />
                    </div>
                    {
                        !errorSubmit ?
                            <label className="label__form-color">''</label>
                            :
                            <label className="label__form-error">{error}</label>
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
    );
});

export default FormAuthorization;