import React, {useState} from 'react';
import style from './Registration.module.css';
import {useFormik} from 'formik';
import {useDispatch} from 'react-redux';
import {NavLink} from "react-router-dom";
import {RequestErrorType, RequestStatusType} from "../../bll/app-reducer";
import {PATH} from "../Routes";
import {Preloader} from "../common/Preloader/Preloader";
import SuperInputText from "../common/SuperInputText/SuperInputText";
import SuperButton from "../common/SuperButton/SuperButton";
import {registrationTC} from "../../bll/registration-reducer";

type RegisterType = {
    status: RequestStatusType
    serverError: RequestErrorType
}

export const Registration = (props: RegisterType) => {

    const {status, serverError} = props
    const [disable, setDisable] = useState<boolean>(false)
    const dispatch = useDispatch()


    type  FormikErrorType = {
        email?: string
        password?: string
        checkPassword?: string
    }

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            checkPassword: ''
        },
        validate: (values) => {
            const errors: FormikErrorType = {}
            if (!values.email) {
                errors.email = 'Email is required';
                setDisable(true)
            }
            if (!values.password) {
                errors.password = 'Password is required';
                setDisable(true)
            } else setDisable(false)
            if (!values.checkPassword) {
                errors.checkPassword = 'Password is required';
                setDisable(true)
            } else setDisable(false)
            if (values.password !== values.checkPassword) {
                errors.checkPassword = 'Passwords are not equal';
                setDisable(true)
            } else setDisable(false)

            return errors;
        },
        onSubmit: values => {
            dispatch(registrationTC(values))

        }
    })

    if (status === 'loading') {
        return <Preloader/>
    }

    return (
        <div className={style.wrapper}>
            <h2>Registration</h2>
            <p>Please fill the form for registration</p>
            <form onSubmit={formik.handleSubmit}>
                <div className={style.formRegistration}>
                    <SuperInputText placeholder="email"
                                    id="email"
                                    type="email"
                                    {...formik.getFieldProps('email')}
                                    error={serverError}
                    />
                    {formik.touched.email && formik.errors.email
                        ? (<div className={style.error}>{formik.errors.email}</div>)
                        : null
                    }
                    <SuperInputText placeholder="password"
                                    id="password"
                                    type="password"
                                    error={serverError}
                                    {...formik.getFieldProps('password')}
                    />
                    {formik.touched.password && formik.errors.password
                        ? <div className={style.error}>{formik.errors.password}</div>
                        : null
                    }
                    <SuperInputText placeholder="confirm password"
                                    id="checkPassword"
                                    type="password"
                                    error={serverError}
                                    {...formik.getFieldProps('checkPassword')}
                    />
                    <label className={style.label}>password length must be at least 8 characters</label>
                    <SuperButton type={'submit'} disabled={disable}>Registration</SuperButton>
                    {serverError ? <div className={style.error}>{serverError}</div> : null}
                    <NavLink className={style.link} to={PATH.LOGIN}>Login page</NavLink>
                </div>
            </form>
        </div>
    );
}

