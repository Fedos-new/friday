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
	const [confirmedPassword, setConfirmedPassword] = useState<string>('')
	const [disabled, setDisabled] = useState<boolean>(true)
	const [matchError, setMatchError] = useState<boolean>(false)
	const dispatch = useDispatch();
	const {token} = useParams<ParamTypes>()

	const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
		setDisabled(false)
		setMatchError(false)
		setPassword(event.currentTarget.value)
		dispatch(setErrorAC(''))
	}

	const onChangeInputConfirmedHandler = (event: ChangeEvent<HTMLInputElement>) => {
		setMatchError(false)
		setConfirmedPassword(event.currentTarget.value)
	}

	const onClickButtonHandler = () => {
		if (password !== confirmedPassword) {
			return setMatchError(true)
		}

		dispatch(sendNewPasswordTC(password, token))
		setDisabled(true)
		setPassword('')
		setConfirmedPassword('')
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
			<h2>New password</h2>
			<SuperInputText placeholder='New password' value={password} onChange={onChangeInputHandler}
											error={props.error} onKeyPress={onKeyPressHandler} type='password'/>
			<div className={s.error}>{props.error}</div>
			{
				!props.error &&
					<>
						<SuperInputText placeholder='Confirm password' value={confirmedPassword}
														onChange={onChangeInputConfirmedHandler} type='password'/>
						<div className={s.error}>{matchError ? 'Passwords don\'t match!' : ''}</div>
					</>

			}
			<SuperButton disabled={disabled} onClick={onClickButtonHandler} className={s.newPassBtn}>Save</SuperButton>
		</div>
	);
}
