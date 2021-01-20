import React, {useState} from 'react';
import s from './PriceRange.module.css'
import {useDispatch, useSelector} from 'react-redux';
import {setMinMaxPriceRangeAC} from '../../../bll/search-reducer';
import {AppRootState} from '../../../bll/store';
import {DoubleRangeSlider} from './DoubleRangeSlider';

export const PriceRange = () => {
	const dispatch = useDispatch()
	const minPrice = useSelector<AppRootState, number>(state => state.search.settings.minPrice)
	const maxPrice = useSelector<AppRootState, number>(state => state.search.settings.maxPrice)
	const [minValue, setMinValue] = useState(minPrice);
	const [maxValue, setMaxValue] = useState(maxPrice);
	const valueArray = [minValue, maxValue]

	const onChangeRange = (value: number | [number, number]) => {
		if (Array.isArray(value)) {
			setMinValue(value[0])
			setMaxValue(value[1])
			dispatch(setMinMaxPriceRangeAC(value[0], value[1]))
		}
	}

	return (
		<div className={s.box}>
			<h1>Price Range</h1>
			<DoubleRangeSlider minPrice={minPrice} maxPrice={maxPrice} valueArray={valueArray} onChangeRange={onChangeRange}/>
		</div>
	);
}
