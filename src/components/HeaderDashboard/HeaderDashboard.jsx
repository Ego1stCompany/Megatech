import React, {useContext} from 'react';
import './HeaderDashboard.css'
import Logo from "../Logo/Logo";

import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import {useHistory} from "react-router-dom";

const HeaderDashboard = observer(() => {

    const {user} = useContext(Context)
    const history = useHistory()


    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
        history.push("/admin/authorization")
    }


    return (
        <header className="header__dashboard">
            <div className="container__dashboard">
                <Logo/>
                <div className="admin__information">
                    <button
                        className="button__dashboard-exit"
                        onClick={() => logOut()}
                    >
                        Выйти
                    </button>
                </div>
            </div>
        </header>
    );
});

export default HeaderDashboard;