import React from 'react'
import { useDispatch } from 'react-redux'
import { logoutTC } from '../../../bll/login-reducer'
import s from './Logout.module.css'

   

const Logout = () => {

     const dispatch = useDispatch()

    const logout = () => {
        dispatch(logoutTC())
    }

    return (
        <div>
            <button onClick={logout} className={s.btn}>Logout</button>
        </div>
    )
}

export default Logout