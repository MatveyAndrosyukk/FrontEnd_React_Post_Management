import React, {useContext, useEffect, useState} from 'react';
import MyInput from "../components/UI/input/MyInput";
import MyButton from "../components/UI/button/MyButton";
import {AppContext} from "../context/context";

const Login = () => {
    const [loginForm ,setLoginForm] = useState({loginInput: '', passwordInput: ''})
    const {setIsAuth} = useContext(AppContext)
    const [errorMessage, setErrorMessage] = useState('')
    const [user] = useState({login: 'user', password: '1111'})

    useEffect(() => {
        document.title = "Post Service: Login"
    })

    const logIn = event => {
        event.preventDefault()
        if (loginForm.loginInput === user.login && loginForm.passwordInput === user.password){
            localStorage.setItem("auth", "true")
            setIsAuth(true)
        }else {
            setErrorMessage("Неверный логин или пароль")
        }
    }

    return (
        <div>
            <div style={{width: 400}}>
                <h2>Страница для логина</h2>

                {errorMessage &&
                    <div style={{color: 'firebrick'}}>{errorMessage}</div>
                }

                <form onSubmit={logIn}>
                    <MyInput
                        value={loginForm.loginInput}
                        type="text" placeholder="Введите логин"
                        onChange={e => setLoginForm({...loginForm, loginInput: e.target.value})}
                    />
                    <MyInput
                        value={loginForm.passwordInput}
                        type="password"
                        placeholder="Введите пароль"
                        onChange={e => setLoginForm({...loginForm, passwordInput: e.target.value})}
                    />
                    <MyButton>
                        Войти
                    </MyButton>
                    {errorMessage &&
                        <span className="login-form-span">login: "user", password: "1111"</span>
                    }
                </form>
            </div>
        </div>
    );
};

export default Login;