import React, {useContext} from 'react';
import MyInput from "../components/UI/input/MyInput";
import MyButton from "../components/UI/button/MyButton";
import {AppContext} from "../context/context";

const Login = () => {
    const {isAuth, setIsAuth} = useContext(AppContext)

    const logIn = event => {
        event.preventDefault()
        localStorage.setItem("auth", "true")
        setIsAuth(true)
    }

    return (
        <div>
            <h2>Страница для логина</h2>

            <form onSubmit={logIn}>
                <MyInput type="text" placeholder="Введите логин"/>
                <MyInput type="text" placeholder="Введите пароль"/>
                <MyButton>
                    Войти
                </MyButton>
            </form>
        </div>
    );
};

export default Login;