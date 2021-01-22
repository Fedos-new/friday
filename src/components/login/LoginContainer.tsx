import React from 'react';
import {Login} from "./Login";
import {useSelector} from "react-redux";
import {AppRootState} from "../../bll/store";
import {RequestErrorType, RequestStatusType} from "../../bll/app-reducer";
import {Redirect} from "react-router-dom";
import {PATH} from "../Routes";


export const LoginContainer = () => {

    const isLoggedIn = useSelector<AppRootState, boolean>(state => state.auth.isLoggedIn)
    const status = useSelector<AppRootState, RequestStatusType>(state => state.app.status)
    const serverError = useSelector<AppRootState, RequestErrorType>(state => state.app.error)


    if (isLoggedIn) {
        return <Redirect to={PATH.PROFILE}/>
    }

    return (
            <Login
                status={status}
                serverError={serverError}
            />

    );
}
