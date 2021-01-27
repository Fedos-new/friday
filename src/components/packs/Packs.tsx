import React from 'react';
import style from './Packs.module.css'
import {Table} from "../common/Table/Table";
import SuperButton from "../common/SuperButton/SuperButton";
import { PacksType } from '../../bll/packs-reducer';

type propsPacks = {
    packs: PacksType
    header: string[]
}

export const Packs = (props:propsPacks) => {
 const {packs,header} = props

    return (
        <div className={style.wrap}>
            <div className={style.btnGroup}>
                <SuperButton>Get my packs</SuperButton>
                <SuperButton>Get all packs</SuperButton>
                <SuperButton>Add pack</SuperButton>
            </div>

            <Table header={header} data={packs}/>
        </div>
    );
}
