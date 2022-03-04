import React, {useContext} from 'react';
import {Route, Routes} from "react-router-dom";
import {privateRoutes, publicRoutes} from "./routeList";
import {AppContext} from "../../context/context";
import Loader from "../UI/loader/Loader";


const AppRoutes = () => {
    const {isAuth} = useContext(AppContext)
    const {areRoutesLoading} = useContext(AppContext)

    if (areRoutesLoading){
        return <Loader/>
    }else {
        return (
            isAuth
                ?
                <Routes>
                    {privateRoutes.map(route =>
                        <Route
                            key={route.path}
                            exact={route.exact}
                            path={route.path}
                            element={route.element}
                        />
                    )}
                </Routes>
                :
                <Routes>
                    {publicRoutes.map(route =>
                        <Route
                            key={route.path}
                            exact={route.exact}
                            path={route.path}
                            element={route.element}
                        />
                    )}
                </Routes>
        );
    }
};

export default AppRoutes;