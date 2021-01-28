import React from 'react';
import style from './Packs.module.css'
import {Table} from "../common/Table/Table";
import SuperButton from "../common/SuperButton/SuperButton";
import {getPacksTC} from '../../bll/packs-reducer';
import {useDispatch} from "react-redux";

type propsPacks = {
    cardPacks: any
    headers:any
}

export const Packs = (props:propsPacks) => {
    const {cardPacks,headers} = props

    const dispatch = useDispatch()
    const getAllPacks = () => {
        dispatch(getPacksTC())
    }


    return (
        <div className={style.wrap}>
            <div className={style.btnGroup}>
                <SuperButton>Get my packs</SuperButton>
                <SuperButton onClick={getAllPacks}>Get all packs</SuperButton>
                <SuperButton>Add pack</SuperButton>
            </div>

            <Table
                data={cardPacks}
                headers={headers[0]}/>

        </div>
    );
}
