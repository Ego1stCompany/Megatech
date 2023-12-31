import React, {createContext} from 'react';
import './index.css';
import App from './App';
import {createRoot} from "react-dom/client";
import userStore from './store/UserStore'

export const Context = createContext(null)

createRoot(document.getElementById("root")).render(
    <Context.Provider value={
        {user: new userStore()}
    }>
        <App/>
    </Context.Provider>
);
