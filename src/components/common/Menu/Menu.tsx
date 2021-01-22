import React from "react";
import {NavLink} from "react-router-dom";
import {PATH} from "../../Routes";
import style from "./Menu.module.css"

type MenuType = {
    className: string | undefined
}

export const Menu: React.FC<MenuType> = ({className}) => {

    return (
        <div className={`${className}`}>
            <div className={style.wrapLink}>
                <NavLink className={style.link} to={PATH.REGISTRATION}>Registration</NavLink>
            </div>
            <div className={style.wrapLink}>
                <NavLink className={style.link} to={PATH.LOGIN}>Login</NavLink>
            </div>
            <div className={style.wrapLink}>
                <NavLink className={style.link} to={PATH.PROFILE}>Profile</NavLink>
            </div>
            <div className={style.wrapLink}>
                <NavLink className={style.link} to={PATH.RECOVERY_PASSWORD}>Recovery Password</NavLink>
            </div>
            <div className={style.wrapLink}>
                <NavLink className={style.link} to={PATH.NEW_PASSWORD}>NewPassword</NavLink>
            </div>
            <div className={style.wrapLink}>
            </div>
        </div>
    )
}