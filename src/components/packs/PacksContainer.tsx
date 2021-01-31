import React, {useState} from 'react';
import {Packs} from './Packs';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootState} from '../../bll/store';
import {
	addPackTC,
	deletePackTC,
	getPacksTC,
	PackType,
	setCurrentPageAC,
	setMinMaxPriceRangeAC, updatePackTС
} from '../../bll/searchPacks-reducer';
import {RequestStatusType} from '../../bll/app-reducer';
import {NavLink, Redirect, Route, useHistory} from 'react-router-dom';
import {PATH} from '../Routes';
import s from '../Table/Table.module.css';
import SuperButton from '../common/SuperButton/SuperButton';
import {setCardsPackIdAC} from '../../bll/cards-reducer';
import {ModalConfirm} from '../common/ModalBase/ModalConfirm/ModalConfirm';
import {ModalBase} from '../common/ModalBase/ModalBase';


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
	const disabled = useSelector<AppRootState, boolean>(state => state.search.disabled)
	const valueArray = [minPrice, maxPrice]
	const headerElementPacks = ['USERNAME', 'NAME', 'CARDSCOUNT', 'UPDATED', 'CARDS', 'OPERATIONS']
	const isLoggedIn = useSelector<AppRootState, boolean>(state => state.auth.isLoggedIn)
	const [value, setValue] = useState<string>('')
	const history = useHistory()

	const onChangeTextUpdateHandler = (value: string) => { setValue(value)}

	const onChangeRange = (value: number | [number, number]) => {
		if (Array.isArray(value)) {
			dispatch(setMinMaxPriceRangeAC(value[0], value[1]))
		}
	}

	const handlePageChange = (pageNumber: number) => {
		dispatch(setCurrentPageAC(pageNumber))
		dispatch(getPacksTC())
	}

	const onClickLinkHandler = (packId: string) => dispatch(setCardsPackIdAC(packId))

	const updatePack = (packId: string, value: string) => {
		dispatch(updatePackTС(packId, value))
		closeModal()
		setValue('')
	}

	const addPack = (name: string) => dispatch(addPackTC(name))

	const closeModal = () => { history.push(PATH.PACKS)}

	const closeUpdateModal = () => {
		closeModal()
		setValue('')
	}

	const confirmRemovePack = (packId: string) => {
		dispatch(deletePackTC(packId))
		closeModal()
	}


	if (!isLoggedIn) {
		return <Redirect to={PATH.LOGIN}/>
	}

	const renderPacksBody = (cardPacks: Array<PackType>) => {

		return cardPacks && cardPacks.map(({_id, name, cardsCount, user_name, updated}) => {
			return (
				<tr key={_id} id={_id}>

					<td>{user_name}</td>
					<td>{name}</td>
					<td>{cardsCount}</td>
					<td>{updated}</td>
					<td>
						<NavLink to={PATH.CARDS + `/${_id}`} className={s.cardLink} onClick={() => {
							onClickLinkHandler(_id)
						}}>Cards</NavLink>
					</td>
					<td className={s.operation}>
						<NavLink to={PATH.PACKS + '/update/' + _id}>
							<SuperButton  className={s.updBtn} disabled={disabled}>Update</SuperButton>
						</NavLink>
						<NavLink to={PATH.PACKS + '/delete/' + _id}>
							<SuperButton  className={s.delBtn} disabled={disabled}>Delete</SuperButton>
						</NavLink>
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
						 addPack={addPack}
						 isLoggedIn={isLoggedIn}
						 disabled={disabled}
			/>
			<Route path={PATH.PACKS + '/delete/:packId'}
						 render={() => <ModalConfirm confirmHandler={confirmRemovePack}
																				 cancelHandler={closeModal}
																				 title='Are you sure you want to delete this pack?'/>}/>
			<Route path={PATH.PACKS + '/update/:packId'}
						 render={() => <ModalBase closeModal={closeUpdateModal} input={value}
																			onChangeText={onChangeTextUpdateHandler}
																			addTextHandler={updatePack}
																			title='Please, update name of pack'/>}/>
		</div>
	)
}

