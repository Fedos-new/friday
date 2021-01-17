import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import s from './NewPassword.module.css'
import SuperInputText from '../common/SuperInputText/SuperInputText';
import SuperButton from '../common/SuperButton/SuperButton';
import {useDispatch} from 'react-redux';
import {Redirect, useParams} from 'react-router-dom';
import Loader from '../common/Loader/Loader';
import {sendNewPasswordTC} from '../../bll/newPassword-reducer';
import {RequestStatusType, setErrorAC} from '../../bll/recoveryPassword-reducer';
import {PATH} from '../Routes';

type NewPasswordType = {
	error: string
	success: string
	status: RequestStatusType
}

type ParamTypes = {
	token: string
}

export const NewPassword = (props: NewPasswordType) => {
	const [password, setPassword] = useState<string>('')
	const [disabled, setDisabled] = useState<boolean>(true)
	const dispatch = useDispatch();
	const {token} = useParams<ParamTypes>()
	console.log(token)

	const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
		setDisabled(false)
		event.currentTarget.value && setPassword(event.currentTarget.value)
		dispatch(setErrorAC(''))
	}

	const onClickButtonHandler = () => {
		dispatch(sendNewPasswordTC(password, token))
		setDisabled(true)
		setPassword('')
	}


	const onEnter = () => {
		if (!props.error) {
			onClickButtonHandler()
		}
	}

	const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => e.key === 'Enter' && onEnter();


	if (props.status === 'loading') {
		return <Loader/>
	}

	if (props.success) {
		return <Redirect to={PATH.LOGIN}/>
	}

	return (
		<div className={s.box}>
			<h1>New password</h1>
			<SuperInputText placeholder='New password' value={password} onChange={onChangeInputHandler} type='password'
											error={props.error} onKeyPress={onKeyPressHandler}/>
			<SuperButton disabled={disabled} onClick={onClickButtonHandler} className={s.newPassBtn}>Save</SuperButton>
		</div>
	);
}
