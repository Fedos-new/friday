import React from 'react';
import {NavLink} from "react-router-dom";
import {PATH} from "../Routes";
import style from "../header/Header.module.css"


export const Header: React.FC = () => {
    return (
        <div className={style.wrap}>
            <div >
                <NavLink to={PATH.REGISTRATION}>Registration</NavLink>
            </div>
            <div>
                <NavLink to={PATH.LOGIN}>Login</NavLink>
            </div>
            <div>
                <NavLink to={PATH.PROFILE}>Profile</NavLink>
            </div>
            <div>
                <NavLink to={PATH.RECOVERY_PASSWORD}>Recovery Password</NavLink>
            </div>
            <div>
                <NavLink to={PATH.NEW_PASSWORD}>NewPassword</NavLink>
            </div>
            <div>
                <NavLink to={PATH.TEST}>Test</NavLink>
            </div>
            <div>
                <NavLink to={PATH.ERROR_404}>Error404</NavLink>
            </div>
        </div>
    )
}