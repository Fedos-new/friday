import React from 'react';
import preloader from '../../assets/preloader.svg'
import style from './Preloader.module.css'

export const Preloader = () => {
    return (
        <div>
            <img className={style.preload} src={preloader}/>
        </div>
    );
}
