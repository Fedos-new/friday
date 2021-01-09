import React from 'react';
import style from './Login.module.css'
import SuperInputText from "../common/SuperInputText/SuperInputText";
import SuperButton from "../common/SuperButton/SuperButton";
import SuperCheckbox from "../common/SuperCheckbox/SuperCheckbox";
import {NavLink} from "react-router-dom";
import {PATH} from "../Routes";

export const Login = () => {
    return (
        <div className={style.wrap}>
            <div className={style.formLogin}>
                <SuperInputText placeholder='email'/>
                <SuperInputText placeholder='password'/>
                <SuperButton>Login</SuperButton>
                <span>Remember me<SuperCheckbox/></span>
                <NavLink className={style.link} to={PATH.RECOVERY_PASSWORD}>Forgot password?</NavLink>
                <NavLink className={style.link} to={PATH.REGISTRATION}>Registration</NavLink>
            </div>
        </div>
    );
}
