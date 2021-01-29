import React from 'react';
import {Profile} from "./Profile";
import {useSelector} from "react-redux";
import {AppRootState} from "../../bll/store";
import {PATH} from "../Routes";
import {Redirect} from 'react-router-dom';


export const ProfileContainer = () => {
    const name = useSelector<AppRootState, string>((state) => state.profile.profile.name)
    const avatar = useSelector<AppRootState, string>((state) => state.profile.profile.avatar)
    const cardPacksCount = useSelector<AppRootState, number>((state) => state.profile.profile.publicCardPacksCount)
    const isLoggedIn = useSelector<AppRootState, boolean>(state => state.auth.isLoggedIn)


    if (!isLoggedIn) {
        return <Redirect to={PATH.LOGIN}/>
    }
    return (

        <div>
            <Profile name={name}
                     cardPacksCount={cardPacksCount}
                     avatar={avatar}
            />
        </div>
    );
}
