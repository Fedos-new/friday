import React from 'react';
import style from './Profile.module.css'
import {PATH} from "../Routes";
import {NavLink} from "react-router-dom";
import Logout from "../common/Logout/Logout";


type ProfileType = {
    name: string
    cardPacksCount: number
    avatar:string
}

export const Profile = (props: ProfileType) => {

    const {name, cardPacksCount} = props

    return (
        <div>
            <h2>Profile</h2>
            <div className={style.wrap}>
                <div className={style.content}>
                <img src="some avatar" alt="avatar" height="200px"/>
                <div> Name: {name}</div>
                <div>  <NavLink className={style.link} to={PATH.PACKS}>Public card packs count: {cardPacksCount}</NavLink></div>
                    <Logout/>
                </div>
            </div>
        </div>
    );
}
