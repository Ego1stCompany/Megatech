import React, {useContext} from "react";
import './index.css'
import {Switch, Route, BrowserRouter} from "react-router-dom";
import {authRoutes, userRoutes} from "./components/Routers/Routers";
import {Context} from "./index";
import {observer} from "mobx-react-lite";


const App = observer(() => {

    const {user} = useContext(Context)

    console.log(user)

    return (
        <BrowserRouter>
            <Switch>
                {
                    user.isAuth && authRoutes.map(({path, Component}) => {
                        return <Route path={path} key={path} exact>
                            {Component}
                        </Route>
                    })
                }
                {
                    userRoutes.map(({path, Component}) => {
                        return <Route path={path} key={path} exact>
                            {Component}
                        </Route>
                    })
                })
            </Switch>
        </BrowserRouter>
    );
})

export default App;
