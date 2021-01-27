import React from 'react';
import {NavLink} from "react-router-dom";
import {PATH} from "../Routes";
import style from "../header/Header.module.css"


export const Header: React.FC = () => {
    return (
        <div className={style.wrap}>
            <div>
                <NavLink className={style.link} to={PATH.REGISTRATION}>Registration</NavLink>
            </div>
            <div>
                <NavLink className={style.link} to={PATH.LOGIN}>Login</NavLink>
            </div>
            <div>
                <NavLink className={style.link} to={PATH.PROFILE}>Profile</NavLink>
            </div>
            <div>
                <NavLink className={style.link} to={PATH.RECOVERY_PASSWORD}>Recovery Password</NavLink>
            </div>
            <div>
                <NavLink className={style.link} to={PATH.NEW_PASSWORD}>NewPassword</NavLink>
            </div>
            <div>
                <NavLink className={style.link} to={PATH.TEST}>Test</NavLink>
            </div>
          <div>
            <NavLink className={style.link} to={PATH.PACKS}>Packs</NavLink>
          </div>
          <div>
            <NavLink className={style.link} to={PATH.CARDS}>Cards</NavLink>
          </div>
        </div>
    )
}