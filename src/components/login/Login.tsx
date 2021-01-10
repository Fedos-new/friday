import React, {ChangeEvent, useState} from 'react';
import style from './Login.module.css'
import SuperInputText from "../common/SuperInputText/SuperInputText";
import SuperButton from "../common/SuperButton/SuperButton";
import SuperCheckbox from "../common/SuperCheckbox/SuperCheckbox";
import {NavLink, Redirect} from "react-router-dom";
import {PATH} from "../Routes";
import {useDispatch, useSelector} from "react-redux";
import {loginTC} from "../../bll/login-reducer";
import {AppRootState} from "../../bll/store";
import {Preloader} from "../common/Preloader/Preloader";

export const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [rememberMe, setRememberMe] = useState(true)
    const [error, setError] = useState('')
    const dispatch = useDispatch()
    const isLoggedIn = useSelector<AppRootState>(state => state.auth.isLoggedIn)
    const status = useSelector<AppRootState>(state => state.app.status)

    const stateFrom = {
        email,
        password,
        rememberMe
    }

    const enterEmail = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.currentTarget.value)
        setError('');
    }
    const enterPassword = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.currentTarget.value)
        setError('');
    }
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        setRememberMe(e.currentTarget.checked)
    }

    const clickLogin = () => {
        if (email !== '' || password !== '' || (email !== '' && password !== '')) {
            setEmail('')
            setPassword('')
            dispatch(loginTC(stateFrom))
            console.log(isLoggedIn);
        } else {
            setError('Необходимо заполнить все поля!')
        }
    }


    if (isLoggedIn) {
        return <Redirect to={PATH.PROFILE}/>
    }

    return (
        <div className={style.wrap}>
            <h2>Login</h2>
            {status === 'loading' && <Preloader/>}
            <div className={style.formLogin}>
                <SuperInputText placeholder='email'
                                onChange={enterEmail}
                                value={email}
                                error={error}
                />
                <SuperInputText placeholder='password'
                                type="password"
                                value={password}
                                error={error}
                                onChange={enterPassword}
                />
                <SuperButton onClick={clickLogin}>Login</SuperButton>
                <span>Remember me<SuperCheckbox onChange={onChangeCallback}/></span>
                <NavLink className={style.link} to={PATH.RECOVERY_PASSWORD}>Forgot password?</NavLink>
                <NavLink className={style.link} to={PATH.REGISTRATION}>Registration</NavLink>
            </div>
        </div>
    );
}
