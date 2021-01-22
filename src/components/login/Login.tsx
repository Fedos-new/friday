import React, {useState} from 'react';
import style from './Login.module.css'
import SuperInputText from "../common/SuperInputText/SuperInputText";
import SuperButton from "../common/SuperButton/SuperButton";
import SuperCheckbox from "../common/SuperCheckbox/SuperCheckbox";
import { NavLink } from "react-router-dom";
import {PATH} from "../Routes";
import {useDispatch} from "react-redux";
import {loginTC} from "../../bll/login-reducer";
import {Preloader} from "../common/Preloader/Preloader";
import {useFormik} from "formik";
import {RequestErrorType, RequestStatusType} from "../../bll/app-reducer";


type LoginType = {
    status: RequestStatusType
    serverError: RequestErrorType
}

export const Login = (props: LoginType) => {

    const { status, serverError} = props
    const [disable, setDisable] = useState<boolean>(false)
    const dispatch = useDispatch()

    type  FormikErrorType = {
        email?: string
        password?: string
        rememberMe?: boolean
    }

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false,
        },
        validate: (values) => {
            const errors: FormikErrorType = {};
            if (!values.email) {
                errors.email = 'Email is required';
                setDisable(true)
            }
            if (!values.password) {
                errors.password = 'Password is required';
                setDisable(true)
            } else setDisable(false)

            return errors;
        },
        onSubmit: values => {
            dispatch(loginTC(values))
        },
    });

    if (status === 'loading') {
        return <Preloader/>
    }

    return (
        <div className={style.wrap}>
            <h2>Login</h2>
            <form onSubmit={formik.handleSubmit}>
                <div className={style.formLogin}>
                    <SuperInputText placeholder='email'
                                    id="email"
                                    type="email"
                                    {...formik.getFieldProps('email')}
                                    error={serverError}
                    />
                    {formik.touched.email && formik.errors.email
                        ? (<div className={style.error}>{formik.errors.email}</div>)
                        : null
                    }
                    <SuperInputText placeholder='password'
                                    id="password"
                                    type="password"
                                    error={serverError}
                                    {...formik.getFieldProps('password')}
                    />
                    {formik.touched.password && formik.errors.password
                        ? <div className={style.error}>{formik.errors.password}</div>
                        : null
                    }

                    <SuperButton type={'submit'} disabled={disable}>Login</SuperButton>
                    <label>Remember me
                        <SuperCheckbox
                            id="rememberMe"
                            type="rememberMe"
                            {...formik.getFieldProps('rememberMe')}
                        />
                    </label>
                    {serverError ? <div className={style.error}>{serverError}</div> : null}
                    <NavLink className={style.link} to={PATH.RECOVERY_PASSWORD}>Forgot password?</NavLink>
                    <NavLink className={style.link} to={PATH.REGISTRATION}>Registration</NavLink>
                </div>
            </form>
        </div>
    );
}
