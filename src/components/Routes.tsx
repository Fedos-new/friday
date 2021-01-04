import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { LoginContainer } from "./login/LoginContainer";
import {ProfileContainer} from "./profile/ProfileContainer";
import {Test} from "./test/Test";
import {RegistrationContainer} from "./registration/RegistrationContainer";
import {Error404} from "./error404/Error404";
import {NewPasswordContainer} from "./newPassword/NewPasswordContainer";
import {PasswordRecoveryContainer} from "./passwordRecovery/PasswordRecoveryContainer";


export const PATH = {
    LOGIN:'/login',
    REGISTRATION:'/reg',
    PROFILE:'/profile',
    ERROR_404:'/404',
    RECOVERY_PASSWORD:'/rec_pass',
    NEW_PASSWORD:'/new_pass',
    TEST:'/test',
}

export const Routes = () => {
    return (
        <div>
            <Switch>
                <Route path={PATH.LOGIN} render={() => <LoginContainer/>}/>
                <Route path={PATH.REGISTRATION} render={() => <RegistrationContainer/>}/>
                <Route path={PATH.PROFILE} render={() => <ProfileContainer/>}/>
                <Route path={PATH.ERROR_404} render={() => <Error404/>}/>
                <Route path={PATH.RECOVERY_PASSWORD} render={() => <PasswordRecoveryContainer/>}/>
                <Route path={PATH.NEW_PASSWORD} render={() => <NewPasswordContainer/>}/>
                <Route path={PATH.TEST} render={() => <Test/>}/>
            </Switch>
        </div>
    )
}