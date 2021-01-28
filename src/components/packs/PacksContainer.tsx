import React from 'react';
import {Packs} from './Packs';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootState} from '../../bll/store';
import {
	deletePackTC,
	getPacksTC,
	PackType,
	setCurrentPageAC,
	setMinMaxPriceRangeAC
} from '../../bll/searchPacks-reducer';
import {RequestStatusType} from '../../bll/app-reducer';
import {NavLink} from 'react-router-dom';
import {PATH} from '../Routes';
import s from '../Table/Table.module.css';
import SuperButton from '../common/SuperButton/SuperButton';
import { setCardsPackIdAC} from '../../bll/cards-reducer';


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
	const headerElementPacks = ['USERNAME', 'NAME', 'CARDSCOUNT',  'UPDATED', 'CARDS', 'OPERATIONS']

	const onChangeRange = (value: number | [number, number]) => {
		if (Array.isArray(value)) {
			dispatch(setMinMaxPriceRangeAC(value[0], value[1]))
		}
	}

	const handlePageChange = (pageNumber: number) => {
		dispatch(setCurrentPageAC(pageNumber))
		dispatch(getPacksTC())

	}

	const onClickLinkHandler = (id: string) => {
		dispatch(setCardsPackIdAC(id))
	}
	const removePack = (_id: string | null) => {
		console.log('delete', _id)
		dispatch(deletePackTC(_id))
	}

	const updatePack = () => {
		console.log('updateData',)
	}


	const renderPacksBody = (cardPacks: Array<PackType>) => {
		return cardPacks && cardPacks.map(({ _id, name, cardsCount,user_name, updated }) => {
			return (
				<tr key={_id}>
					<td>{user_name}</td>
					<td>{name}</td>
					<td>{cardsCount}</td>
					<td>{updated}</td>
					<td>
						<NavLink to={PATH.CARDS} className={s.cardLink} onClick={() => {onClickLinkHandler(_id)}}>Cards</NavLink>
					</td>
					<td className={s.operation}>
						<SuperButton onClick={() => updatePack()} className={s.updBtn}>Update</SuperButton>
						<SuperButton onClick={() => removePack(_id)} className={s.delBtn}>Delete</SuperButton>
					</td>
				</tr>
			)
		})
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
						 renderPacksBody={renderPacksBody}
						 headerElementPacks={headerElementPacks}
			/>
		</div>
	)
}