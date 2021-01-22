import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import SuperButton from '../SuperButton/SuperButton';
import SuperInputText from '../SuperInputText/SuperInputText';
import {useDispatch} from 'react-redux';
import {setSearchNameAC} from '../../../bll/search-reducer';
import s from './Search.module.css'

const Search: React.FC = () => {
	const [value, setValue] =useState<string>('')
	const [disabled, setDisabled] = useState<boolean>(true)
	const dispatch = useDispatch()

	const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
		setDisabled(false)
		event.currentTarget.value && setValue(event.currentTarget.value)
	}

	const onSearchHandler = () => {
		dispatch(setSearchNameAC(value))
		setValue('')
		setDisabled(true)
	}

	const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => e.key === 'Enter' && onSearchHandler();

	return (
		<div>
			<h1>Search</h1>

			<SuperInputText value={value} onKeyPress={onKeyPressHandler} onChange={onChangeInputHandler}
											placeholder={'product name'}/>


			<SuperButton className={s.searchBtn} onClick={onSearchHandler} disabled={disabled}>Search</SuperButton>
		</div>
	);
};

export default Search;
