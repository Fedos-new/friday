import React, {useEffect} from 'react';
import SuperInputText from '../common/SuperInputText/SuperInputText';
import SuperButton from '../common/SuperButton/SuperButton';
import SuperCheckbox from '../common/SuperCheckbox/SuperCheckbox';
import {getPacksTC} from '../../bll/searchPacks-reducer';
import {useDispatch} from 'react-redux';

export const Test = () => {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getPacksTC())
	}, [dispatch])

	return (
		<div>
			<SuperButton>Button</SuperButton>
			<SuperInputText/>
			<SuperCheckbox/>
		</div>
	);
}
