import React, {useEffect, useState} from 'react';
import {BrowserRouter} from "react-router-dom";
import Navbar from "./components/UI/navbar/Navbar";
import AppRoutes from "./components/router/AppRoutes";
import {AppContext} from "./context/context";

const App = () => {
    const [isAuth, setIsAuth] = useState(false)
    const [areRoutesLoading, setAreRoutesLoading] = useState(false)

    useEffect(() => {
        if (localStorage.getItem("auth")){
            setIsAuth(true)
        }
        setAreRoutesLoading(true)
    }, [])

    return (
        <AppContext.Provider value={{
            isAuth: isAuth,
            setIsAuth : setIsAuth,
            areRoutesLoading : areRoutesLoading
        }}>
            <BrowserRouter>
                <Navbar/>

                <AppRoutes/>
            </BrowserRouter>
        </AppContext.Provider>

    );
};

export default App;