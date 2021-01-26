import React, {FC, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {getPacksTC, PackType} from '../../bll/search-reducer';
import Search from '../common/Search/Search';
import {Paginate} from '../common/Pagination/Paginate';
import Loader from '../common/Loader/Loader';
import {SortButton} from '../common/SortButton/SortButton';
import s from './Packs.module.css'
import {DoubleRangeSlider} from '../common/PriceRange/DoubleRangeSlider';

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
}

export const Packs: FC<PacksType> = (
	{
		cardPacks, status, error,
		page, totalPacksCount, packsPerPage, handlePageChange,
		maxCardsCount, minCardsCount, minPrice, maxPrice, valueArray, onChangeRange

	}
) => {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getPacksTC())
	}, [dispatch])

	if (status === 'loading') {
		return <Loader/>
	}

	return (
		<div className={s.packsBox}>
			<h2>Search packs</h2>
			<div className={s.searchBox}>
				<Search/>
				<SortButton/>
			</div>
			<DoubleRangeSlider maxCardsCount={maxCardsCount} maxPrice={maxPrice}
												 minCardsCount={minCardsCount} minPrice={minPrice}
												 valueArray={valueArray} onChangeRange={onChangeRange}/>

			<ul className={s.packsList}>
				{
					cardPacks.map(pack => (
						<>
							<li key={pack._id} className={s.packsItem}>
								<p>{pack.name}</p>
								<p>{pack.cardsCount}</p>
							</li>
						</>
					))
				}
			</ul>
			<div className={s.error}>{error && error}</div>
			<div className={s.paginateBox}>
				<Paginate totalPacksCount={totalPacksCount} packsPerPage={packsPerPage}
									handlePageChange={handlePageChange} page={page}
				/>
			</div>
		</div>
	)
}