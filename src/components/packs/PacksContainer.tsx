import React, {ChangeEvent} from 'react';
import {Packs} from './Packs';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootState} from '../../bll/store';
import {getPacksTC, PackType, setCurrentPageAC, setMinMaxPriceRangeAC, setSearchNameAC} from '../../bll/search-reducer';
import {RequestStatusType} from '../../bll/app-reducer';


export const PacksContainer = () => {
	const dispatch = useDispatch()
	const cardPacks = useSelector<AppRootState, Array<PackType>>(state => state.search.cardPacks)
	const status = useSelector<AppRootState, RequestStatusType>(state => state.search.status)
	const error = useSelector<AppRootState, string>(state => state.search.error)
	const totalPacksCount = useSelector<AppRootState, number>(state => state.search.totalPacksCount)
	const packsPerPage = useSelector<AppRootState, number>(state => state.search.packsPerPage)
	const page = useSelector<AppRootState, number>(state => state.search.page)
	const minCardsCount = useSelector<AppRootState, number>(state => state.search.minCardsCount)
	const maxCardsCount = useSelector<AppRootState, number>(state => state.search.maxCardsCount)
	const minPrice = useSelector<AppRootState, number>(state => state.search.min)
	const maxPrice = useSelector<AppRootState, number>(state => state.search.max)
	const valueArray = [minPrice, maxPrice]

	const onChangeRange = (value: number | [number, number]) => {
		if (Array.isArray(value)) {
			dispatch(setMinMaxPriceRangeAC(value[0], value[1]))
		}
	}

	const handlePageChange = (pageNumber: number) => {
		dispatch(setCurrentPageAC(pageNumber))
		dispatch(getPacksTC())
	}



	return (
		<div>
			<Packs cardPacks={cardPacks}
						 status={status} error={error} totalPacksCount={totalPacksCount} packsPerPage={packsPerPage} page={page}
						 handlePageChange={handlePageChange}
						 minCardsCount={minCardsCount}
						 maxCardsCount={maxCardsCount}
						 minPrice={minPrice}
						 maxPrice={maxPrice}
						 valueArray={valueArray}
						 onChangeRange={onChangeRange}
			/>
		</div>
	)
}