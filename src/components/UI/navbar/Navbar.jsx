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
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <span className="navbar-brand">Post Management</span>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link className="nav-link" to={'/posts'}>Список постов</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={'/about'}>О сайте</Link>
                    </li>
                    <li className="nav-item">
                        <MyButton style={{marginLeft: 'auto', border: '1px solid black', color: 'black'}}
                                  className="nav-link"
                        onClick={logout}>
                            Выйти
                        </MyButton>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled" href="#"></a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;