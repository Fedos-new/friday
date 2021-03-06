import React, {ChangeEvent} from 'react';
import {Slider} from '@material-ui/core';
import s from './DoubleRangeSlider.module.css'
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

type DoubleRangeSliderType = {
	maxCardsCount: number
	minCardsCount: number
	minPrice: number
	maxPrice: number
	valueArray:  Array<number>
	onChangeRange: (value: number | [number, number]) => void
}
export const DoubleRangeSlider: React.FC<DoubleRangeSliderType> = (
	{
		minPrice, maxPrice, valueArray, onChangeRange, minCardsCount,maxCardsCount
	}

	) => {

	const onChangeHandler = (event: ChangeEvent<{}>, value: (number[] | number)) => {
		onChangeRange && onChangeRange(value as number)
	}


	return (
		<div className={s.box}>
			<div className={s.wrap}>
				<p className={s.minPrice}>{minPrice}</p>
				<StyledSlider
					value={valueArray}
					onChange={onChangeHandler}
					valueLabelDisplay="auto"
					aria-labelledby="range-slider"
					min={minCardsCount}
					max={maxCardsCount}
				/>
				<p className={s.maxPrice}>{maxPrice}</p>
			</div>
		</div>

	);
}
