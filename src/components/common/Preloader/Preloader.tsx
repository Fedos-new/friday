import React from 'react';
import preloader from '../../assets/preloader.svg'
import style from './Preloader.module.css'

export const Preloader = () => {
    return (
        <div>
            <img alt={"Loading..."} className={style.preload} src={preloader}/>
        </div>
    );
}
