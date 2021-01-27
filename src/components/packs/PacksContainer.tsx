import React from 'react';
import {Packs} from "./Packs";
import {useSelector} from "react-redux";
import {AppRootState} from "../../bll/store";
import {RequestErrorType, RequestStatusType} from "../../bll/app-reducer";
import { PacksType } from '../../bll/packs-reducer';


export const PacksContainer = () => {

    const isLoggedIn = useSelector<AppRootState, boolean>(state => state.auth.isLoggedIn)
    const status = useSelector<AppRootState, RequestStatusType>(state => state.app.status)
    const serverError = useSelector<AppRootState, RequestErrorType>(state => state.app.error)
    const packs = useSelector<AppRootState,PacksType>(state => state.packs)

    const header = ['Name','user', 'CardCount']
    return (
            <Packs
                packs={packs}
                header={header}
            />
    );
}
