import React, {useState} from 'react';
import s from './SortButton.module.css'
import SuperButton from '../SuperButton/SuperButton';
import up from './../../../assets/image/up-arrow.svg'
import down from './../../../assets/image/down-arrow.svg'
import {useDispatch} from 'react-redux';
import {getPacksTC, setSortingAC} from '../../../bll/search-reducer';

export const SortButton: React.FC = () => {
	const dispatch = useDispatch();

	const sortPrice = (x: string) => {
		dispatch(setSortingAC(x))
		dispatch(getPacksTC())
	}
	const sortUp = () => sortPrice('1updated')
	const sortDown = () => sortPrice('0updated')

	return (
		<div className={s.box}>
			<div>
				<SuperButton className={s.btnUp} onClick={sortUp}>
					<img src={up} className={s.up}/>
				</SuperButton>
				<SuperButton className={s.btnDown} onClick={sortDown}>
					<img src={down} className={s.down}/>
				</SuperButton>
			</div>
		</div>
	)
}