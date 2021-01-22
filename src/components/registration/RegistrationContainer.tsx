import React from 'react';
import {Registration} from "./Registration";
import {useSelector} from 'react-redux';
import {AppRootState} from '../../bll/store'
import {RequestErrorType, RequestStatusType} from "../../bll/app-reducer";
import {Redirect} from "react-router-dom";
import {PATH} from "../Routes";

export const RegistrationContainer = () => {

    const status = useSelector<AppRootState, RequestStatusType>(state => state.app.status)
    const serverError = useSelector<AppRootState, RequestErrorType>(state => state.app.error)
    const isRegistration = useSelector<AppRootState, boolean>(state => state.registration.isRegistration)

    if (isRegistration) {
        return <Redirect to={PATH.LOGIN}/>
    }
    return (
        <Registration
            serverError={serverError}
            status={status}
        />
    );
}
