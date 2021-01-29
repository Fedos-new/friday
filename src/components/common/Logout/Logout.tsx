import React from 'react'
import {useDispatch} from 'react-redux'
import {logoutTC} from '../../../bll/login-reducer'
import s from './Logout.module.css'
import SuperButton from "../SuperButton/SuperButton";


const Logout = () => {
    const dispatch = useDispatch()
    const logout = () => {
        dispatch(logoutTC())
    }

    return (
        <div>
            <SuperButton onClick={logout} className={s.logoutBtn}>Logout</SuperButton>
        </div>
    )
}

export default Logout
