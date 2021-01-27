import React, {FC, ReactNode, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {getPacksTC, PackType, setMyIdAC} from '../../bll/searchPacks-reducer';
import Search from '../common/Search/Search';
import {Paginate} from '../common/Pagination/Paginate';
import Loader from '../common/Loader/Loader';
import {SortButton} from '../common/SortButton/SortButton';
import s from './Packs.module.css'
import {DoubleRangeSlider} from '../common/PriceRange/DoubleRangeSlider';
import {Table} from '../Table/Table';
import SuperButton from '../common/SuperButton/SuperButton';
import {CardType} from '../../bll/cards-reducer';

type PacksType = {
	cardPacks: Array<PackType>
	status: string
	error: string
	totalPacksCount: number
	packsPerPage: number
	page: number
	handlePageChange: (pageNumber: number) => void
	maxCardsCount: number
	minCardsCount: number
	minPrice: number
	maxPrice: number
	valueArray: Array<number>
	onChangeRange: (value: number | [number, number]) => void
	renderPacksBody: (cardPacks: Array<PackType>) => ReactNode
	headerElementPacks: Array<string>
}

export const Packs: FC<PacksType> = (
	{
		cardPacks, status, error,
		page, totalPacksCount, packsPerPage, handlePageChange,
		maxCardsCount, minCardsCount, minPrice, maxPrice, valueArray, onChangeRange,
		renderPacksBody, headerElementPacks
	}
) => {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getPacksTC())
		dispatch(setMyIdAC(null))
	}, [dispatch])

	const getMyPacks = () => {
		dispatch(getPacksTC())
		// dispatch(setMyIdAC(myID))
	}

	const getAllPacks = () => {
		dispatch(getPacksTC())
		dispatch(setMyIdAC(null))
	}


	if (status === 'loading') {
		return <Loader/>
	}

	console.log(cardPacks)

	return (
		<div className={s.packsBox}>
			<div className={s.packsContent}>
				<h2>Search packs</h2>
				<div className={s.searchBox}>
					<Search/>
					<SortButton/>
				</div>
				<div className={s.error}>{error && error}</div>
				<DoubleRangeSlider maxCardsCount={maxCardsCount} maxPrice={maxPrice}
													 minCardsCount={minCardsCount} minPrice={minPrice}
													 valueArray={valueArray} onChangeRange={onChangeRange}/>
				<SuperButton onClick={getMyPacks} className={s.myPacks}>My packs</SuperButton>
				<SuperButton onClick={getAllPacks} className={s.myPacks}>All packs</SuperButton>

				<Table headerElement={headerElementPacks} renderPacksBody={renderPacksBody} />

			</div>

			<div className={s.paginateBox}>
				<Paginate totalPacksCount={totalPacksCount} packsPerPage={packsPerPage}
									handlePageChange={handlePageChange} page={page}
				/>
			</div>
		</div>
	)
}