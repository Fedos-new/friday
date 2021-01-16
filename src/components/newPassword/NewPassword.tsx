import React from 'react';
import s from './NewPassword.module.css'
import SuperInputText from '../common/SuperInputText/SuperInputText';
import SuperButton from '../common/SuperButton/SuperButton';


export const NewPassword = () => {
	return (
		<div className={s.box}>
			<h1>New password</h1>
			<SuperInputText placeholder='New password'/>
			<SuperInputText placeholder='Confirm password' />
			<SuperButton>Save</SuperButton>
		</div>
	);
}
