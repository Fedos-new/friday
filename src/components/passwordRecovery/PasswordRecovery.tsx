import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import SuperInputText from '../common/SuperInputText/SuperInputText';
import SuperButton from '../common/SuperButton/SuperButton';
import s from './PasswordRecovery.module.css';
import {useDispatch} from 'react-redux';
import {RequestStatusType, sendEmailTC, setErrorAC} from '../../bll/recoveryPassword-reducer';
import Loader from '../common/Loader/Loader';

type PasswordRecoveryType = {
	error: string
	success: string
	status: RequestStatusType
}

export const PasswordRecovery = (props: PasswordRecoveryType) => {
	const [email, setEmail] = useState<string>('')
	const [disabled, setDisabled] = useState<boolean>(true)
	const dispatch = useDispatch();


	const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
		setDisabled(false)
		event.currentTarget.value && setEmail(event.currentTarget.value)
		dispatch(setErrorAC(''))
	}

	const onClickButtonHandler = () => {
		dispatch(sendEmailTC(email))
		setDisabled(true)
		setEmail('')
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

	return (
		<div className={s.box}>
			{
				props.success ?
					<>
						<p>Success! The message was {props.success}</p>
						<p>Please, check your email.</p>
					</>
					:
					<>
						<h2>Recover Password</h2>
						<SuperInputText placeholder='Email' value={email} onKeyPress={onKeyPressHandler} onChange={onChangeInputHandler} type='text' error={props.error}/>
						<SuperButton onClick={onClickButtonHandler} disabled={disabled}
												 className={s.recoveryBtn}> Send </SuperButton>
					</>
			}
		</div>
	);
}
