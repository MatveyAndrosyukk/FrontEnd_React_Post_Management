import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import MyButton from "../button/MyButton";
import {AppContext} from "../../../context/context";

const Navbar = () => {
    const {setIsAuth} = useContext(AppContext)

    const logout = () =>{
        setIsAuth(false)
        localStorage.removeItem("auth")
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light navbar__changes">
            <span className="navbar-brand">Post Service</span>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link className="nav-link" to={'/posts'}>Список постов</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={'/about'}>О сайте</Link>
                    </li>
                </ul>
                {localStorage.getItem("auth") &&
                    <MyButton style={{marginLeft: 'auto', border: '1px solid black', color: 'black'}}
                              className="nav-link"
                              onClick={logout}
                    >
                        Выйти
                    </MyButton>}
            </div>
        </nav>
    );
};

export default Navbar;