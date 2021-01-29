import React from 'react';
import {Profile} from "./Profile";
import {useDispatch, useSelector} from "react-redux";
import {AppRootState} from "../../bll/store";
import {PATH} from "../Routes";
import {Redirect} from 'react-router-dom';
import {setIsLoggedInAC} from "../../bll/login-reducer";


export const ProfileContainer = () => {
    const name = useSelector<AppRootState, string>((state) => state.profile.profile.name)
    const avatar = useSelector<AppRootState, string>((state) => state.profile.profile.avatar)
    const cardPacksCount = useSelector<AppRootState, number>((state) => state.profile.profile.publicCardPacksCount)
    const isLoggedIn = useSelector<AppRootState, boolean>(state => state.auth.isLoggedIn)
    const dispatch = useDispatch()

    console.log(name)

    const logout = () => {
        dispatch(setIsLoggedInAC(false))
    }

    if (!isLoggedIn) {
        return <Redirect to={PATH.LOGIN}/>
    }
    return (

        <div>
            <Profile  name={name}
                      cardPacksCount={cardPacksCount}
                      avatar={avatar}
                      logout={logout}

            />


        </div>
    );
}
