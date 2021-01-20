import React, {ChangeEvent, useState} from 'react';
import {Slider} from '@material-ui/core';
import s from './PriceRange.module.css'
import {useDispatch, useSelector} from 'react-redux';
import {setMinMaxPriceRangeAC} from '../../../bll/search-reducer';
import {AppRootState} from '../../../bll/store';
import {withStyles} from '@material-ui/styles';

const StyledSlider = withStyles({
	root: {
		color: '#4c84e0',
	},
	thumb: {
		height: 16,
		width: 16,
		backgroundColor: '#4c84e0',
		border: '2px solid #4c84e0',
		marginTop: -8,
		marginLeft: -12,
		'&:focus, &:hover, &$active': {
			boxShadow: 'inherit',
		},
	}
})(Slider);

export const PriceRange = () => {
	const dispatch = useDispatch()
	const minPrice = useSelector<AppRootState, number>(state => state.search.settings.minPrice)
	const maxPrice = useSelector<AppRootState, number>(state => state.search.settings.maxPrice)
	const [value1, setValue1] = useState(1000);
	const [value2, setValue2] = useState(9000);
	const value = [value1, value2]

	const onChangeRange = (value: number | [number, number]) => {
		if (Array.isArray(value)) {
			setValue1(value[0])
			setValue2(value[1])
			dispatch(setMinMaxPriceRangeAC(value[0], value[1]))
		}
	}

	const onChangeHandler = (event: ChangeEvent<{}>, value: (number[] | number)) => {
		onChangeRange && onChangeRange(value as number)
	}

	return (
		<div className={s.box}>
			<p className={s.minPrice}>{minPrice}</p>
			<StyledSlider
				value={value}
				onChange={onChangeHandler}
				valueLabelDisplay="auto"
				aria-labelledby="range-slider"
				min={minPrice}
				max={maxPrice}
			/>
			<p className={s.maxPrice}>{maxPrice}</p>
		</div>
	);
}
