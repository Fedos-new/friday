import React from 'react';
import style from './Profile.module.css'
import SuperButton from "../common/SuperButton/SuperButton";
import {PATH} from "../Routes";
import {NavLink} from "react-router-dom";


type ProfileType = {
    name: string
    cardPacksCount: number
    avatar:string
    logout: ()=> void
}

export const Profile = (props: ProfileType) => {

    const {name, cardPacksCount, logout} = props

    return (
        <div>
            <h2>Profile</h2>
            <div className={style.wrap}>
                <div className={style.content}>
                <img src="some avatar" alt="avatar" height="200px"/>
                <div> Name: {name}</div>
                <div>  <NavLink className={style.link} to={PATH.PACKS}>Public card packs count: {cardPacksCount}</NavLink></div>
                    <SuperButton onClick={logout}>Logout</SuperButton>
                </div>
            </div>
        </div>
    );
}
