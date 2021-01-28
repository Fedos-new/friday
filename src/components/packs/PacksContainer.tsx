import React from 'react';
import {Packs} from "./Packs";
import {useSelector} from "react-redux";
import {AppRootState} from "../../bll/store";
import {RequestErrorType, RequestStatusType} from "../../bll/app-reducer";
import {PacksType, PackType} from '../../bll/packs-reducer';

export const PacksContainer = () => {

    const isLoggedIn = useSelector<AppRootState, boolean>(state => state.auth.isLoggedIn)
    const status = useSelector<AppRootState, RequestStatusType>(state => state.app.status)
    const serverError = useSelector<AppRootState, RequestErrorType>(state => state.app.error)
    const packs = useSelector<AppRootState,PacksType>(state => state.packs)
    const myId = useSelector<AppRootState>(state => state.auth)

    const headers =  packs.cardPacks.map((pack) => ({
            "User Name": pack.user_name,
            "Name Packs": pack.name,
            "Cards Count": pack.cardsCount,
            "Updated": pack.updated,
            "Created": pack.created,
            "Id pack": pack._id,
        }))

    return (
            <Packs
                cardPacks={headers}
                headers={headers}
            />
    );
}
