import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addCardTC, CardType, deleteCardTC, getCardsTC, updateCardTC} from '../../bll/cards-reducer';
import {Table} from '../Table/Table';
import s from '../Table/Table.module.css';
import SuperButton from '../common/SuperButton/SuperButton';
import {AppRootState} from '../../bll/store';
import {NavLink, Redirect, Route, useHistory} from 'react-router-dom';
import {PATH} from '../Routes';
import {ModalConfirm} from '../common/ModalBase/ModalConfirm/ModalConfirm';
import {ModalCard} from '../common/ModalBase/ModalCard/ModalCard';

export const Cards = () => {
	const dispatch = useDispatch()
	const history = useHistory()
	const cardsPackId = useSelector<AppRootState, string>(state => state.cards.cardsPackId)
	const isLoggedIn = useSelector<AppRootState, boolean>(state => state.auth.isLoggedIn)
	const [addValue, setAddValue] = useState<string>('')
	const [addValue2, setAddValue2] = useState<string>('')
	const [updateValue, setUpdateValue] = useState<string>('')
	const [updateValue2, setUpdateValue2] = useState<string>('')

	useEffect(() => {
		dispatch(getCardsTC())
	}, [dispatch])

	const onChangeTextAddHandlerFirst = (value: string) => {
		setAddValue(value)
	}
	const onChangeTextAddHandlerSecond = (value: string) => {
		setAddValue2(value)
	}

	const onChangeTextUpdateHandlerFirst = (value: string) => {
		setUpdateValue(value)
	}
	const onChangeTextUpdateHandlerSecond = (value: string) => {
		setUpdateValue2(value)
	}

	const headerElement = ['QUESTION', 'ANSWER', 'GRADE', 'ACTIONS']

	const closeModal = () => {
		history.push(PATH.CARDS + `/${cardsPackId}`)
	}

	const closeUpdateModal = () => {
		closeModal()
		setAddValue('')
		setAddValue2('')
	}

	const confirmRemoveCard = (cardId: string) => {
		dispatch(deleteCardTC(cardId))
		closeModal()
	}

	const updateCard = (cardId: string, value: string, value2: string) => {
		dispatch(updateCardTC(cardId, value, value2))
		closeModal()
		setUpdateValue('')
		setUpdateValue2('')
	}

	if (!isLoggedIn) {
		return <Redirect to={PATH.LOGIN}/>
	}

	const renderCardsBody = (cards: Array<CardType>) => {
		return cards && cards.map(({_id, question, answer, grade}) => {
			return (
				<tr key={_id}>
					<td>{question}</td>
					<td>{answer}</td>
					<td>{grade}</td>
					<td className={s.operation}>
						<NavLink to={PATH.CARDS + '/update/' + _id}>
							<SuperButton className={s.updBtn}>Update</SuperButton></NavLink>
						<NavLink to={PATH.CARDS + '/delete/' + _id}>
							<SuperButton className={s.delBtn}>Delete</SuperButton>
						</NavLink>
					</td>
				</tr>
			)
		})
	}
	const addNewCardHandler = () => {
		dispatch(addCardTC(cardsPackId, addValue, addValue2))
		closeModal()
		setAddValue('')
		setAddValue2('')
	}

	return (
		<div className={s.cardTableBox}>
			<NavLink to={PATH.CARDS + '/add/' + cardsPackId}>
				<SuperButton className={s.addBtn}>Add Card</SuperButton>
			</NavLink>
			<Table headerElement={headerElement} renderCardsBody={renderCardsBody} isTableCard={true}
						 key={new Date().getMinutes().toLocaleString()}/>
			<Route path={PATH.CARDS + '/delete/:cardId'}
						 render={() => <ModalConfirm confirmHandler={confirmRemoveCard} cancelHandler={closeModal}
																				 title='Are you sure you want to delete this card?'/>}/>
			<Route path={PATH.CARDS + '/update/:cardId'}
						 render={() => <ModalCard onChangeTextFirst={onChangeTextUpdateHandlerFirst}
																			onChangeTextSecond={onChangeTextUpdateHandlerSecond} closeModal={closeUpdateModal}
																			inputFirst={updateValue} inputSecond={updateValue2} addTextHandler={updateCard}
																			title='You can update '/>}/>

			<Route path={PATH.CARDS + '/add/:packId'}
						 render={() => <ModalCard onChangeTextFirst={onChangeTextAddHandlerFirst}
																			onChangeTextSecond={onChangeTextAddHandlerSecond} closeModal={closeModal}
																			inputFirst={addValue} inputSecond={addValue2} addTextHandler={addNewCardHandler}
																			title='Please, enter the name of the card'/>}/>
		</div>
	)
}