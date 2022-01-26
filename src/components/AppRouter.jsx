import React, {useContext} from 'react';
import {Route, Routes} from "react-router-dom";
import {privateRoutes, publicRoutes} from "./router";
import {AuthContext} from "../context";
import Loader from "./UI/loader/Loader";

const AppRouter = () => {
    const {isAuth, isLoading} = useContext(AuthContext)

    if (isLoading){
        return <Loader/>
    }

    return (
        isAuth
        ? <Routes>
                {privateRoutes.map(route =>
                    <Route key={route.element}
                           path={route.path}
                           element={route.element}
                           exact={route.exact}
                    />)}
            </Routes>
        : <Routes>
                {publicRoutes.map(route =>
                    <Route key={route.element}
                           path={route.path}
                           element={route.element}
                           exact={route.exact}
                    />)}
          </Routes>

    );
};

export default AppRouter;