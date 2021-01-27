import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import SuperButton from '../SuperButton/SuperButton';
import SuperInputText from '../SuperInputText/SuperInputText';
import {useDispatch} from 'react-redux';
import {getPacksTC, setSearchNameAC} from '../../../bll/searchPacks-reducer';
import s from './Search.module.css'


const Search = () => {
	const [value, setValue] = useState<string>('')
	const dispatch = useDispatch()

	const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
		event.currentTarget.value && setSearchNameAC(event.currentTarget.value)
		event.currentTarget.value && dispatch(setSearchNameAC(event.currentTarget.value))
	}

	const onSearchHandler = () => {
		dispatch(getPacksTC())
		setValue('')
	}

	const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => e.key === 'Enter' && onSearchHandler();

	return (
		<div>
			<SuperInputText onKeyPress={onKeyPressHandler} onChange={onChangeInputHandler}
											placeholder={'product name'}/>


			<SuperButton className={s.searchBtn} onClick={onSearchHandler}>Search</SuperButton>
		</div>
	);
};

export default Search;
