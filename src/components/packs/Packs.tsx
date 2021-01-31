import React, {FC, ReactNode, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getPacksTC, PackType} from '../../bll/searchPacks-reducer';
import Search from '../common/Search/Search';
import {Paginate} from '../common/Pagination/Paginate';
import Loader from '../common/Loader/Loader';
import {SortButton} from '../common/SortButton/SortButton';
import s from './Packs.module.css'
import {DoubleRangeSlider} from '../common/PriceRange/DoubleRangeSlider';
import {Table} from '../Table/Table';
import SuperButton from '../common/SuperButton/SuperButton';
import {AppRootState} from '../../bll/store';
import {setMyIdAC} from '../../bll/profile-reducer';
import {ModalBase} from '../common/ModalBase/ModalBase';
import {NavLink, Route, useHistory, useParams} from 'react-router-dom';
import {PATH} from '../Routes';

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
	addPack: (name: string) => void
	isLoggedIn: boolean
	disabled: boolean
}

export const Packs: FC<PacksType> = (
	{
		cardPacks, status, error,
		page, totalPacksCount, packsPerPage, handlePageChange,
		maxCardsCount, minCardsCount, minPrice, maxPrice, valueArray, onChangeRange,
		renderPacksBody, headerElementPacks,
		addPack, isLoggedIn,
		disabled
	}
) => {
	const dispatch = useDispatch()
	const myID = useSelector<AppRootState, string | null>(state => state.profile.profile._id)
	let [input, setInput] = useState<string>('')
	let [isTouched, setTouched] = useState<boolean>(false)
	const params = useParams<{ packId: string }>()
	const history = useHistory()

	useEffect(() => {
		if (!isLoggedIn) return
		setTouched(true)
		dispatch(setMyIdAC(null))
		dispatch(getPacksTC())
	}, [dispatch])

	const getMyPacks = () => {
		dispatch(setMyIdAC(myID))
		dispatch(getPacksTC())
	}

	const getAllPacks = () => {
		dispatch(setMyIdAC(null))
		dispatch(getPacksTC())
	}

	const closeModal = () => {
		history.push(PATH.PACKS)
		setInput('')
	}
	const onChangeText = (value: string) => setInput(value)

	const onClickAddPackHandler = () => {
		addPack(input)
		closeModal()
		setInput('')
	}

	if (status === 'loading') {
		return <Loader/>
	}

	return (
		<div className={s.packsBox}>
			<div className={s.packsContent}>
				<h2>Search packs</h2>
				<div className={s.searchBox}>
					<Search/>
					<SortButton/>
				</div>
				{error && <div className={s.error}>{error}</div>}
				<DoubleRangeSlider maxCardsCount={maxCardsCount} maxPrice={maxPrice}
													 minCardsCount={minCardsCount} minPrice={minPrice}
													 valueArray={valueArray} onChangeRange={onChangeRange}/>
				<SuperButton onClick={getMyPacks} className={s.myPacks} disabled={disabled}>My packs</SuperButton>
				<SuperButton onClick={getAllPacks} className={s.myPacks} disabled={disabled}>All packs</SuperButton>

				<NavLink to={PATH.PACKS + '/add'}>
					<SuperButton className={s.myPacks} disabled={isTouched && disabled}>Add pack</SuperButton></NavLink>

				<Route path={PATH.PACKS + '/add'}
							 render={() => <ModalBase closeModal={closeModal} input={input} onChangeText={onChangeText}
																				addTextHandler={onClickAddPackHandler}
																				title='Please, enter the name of the pack'/>}/>

				<Table headerElement={headerElementPacks} renderPacksBody={renderPacksBody}
							 key={new Date().getDate().toLocaleString()}/>

			</div>

			<div className={s.paginateBox}>
				<Paginate totalPacksCount={totalPacksCount} packsPerPage={packsPerPage}
									handlePageChange={handlePageChange} page={page}
				/>
			</div>
		</div>
	)
}