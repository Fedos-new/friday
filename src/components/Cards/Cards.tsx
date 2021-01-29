import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {CardType, deleteCardTC, getCardsTC, updateCardTC} from '../../bll/cards-reducer';
import {Table} from '../Table/Table';
import s from '../Table/Table.module.css';
import SuperButton from '../common/SuperButton/SuperButton';
import {AppRootState} from '../../bll/store';
import {Redirect} from 'react-router-dom';
import {PATH} from '../Routes';

export const Cards = () => {
	const dispatch = useDispatch()
	const isLoggedIn = useSelector<AppRootState, boolean>(state => state.auth.isLoggedIn)

	useEffect(() => {
		dispatch(getCardsTC())
	}, [dispatch])

	const headerElement= ['QUESTION', 'ANSWER', 'GRADE', 'ACTIONS']

	const updateCard = (cardId: string) => {
		dispatch(updateCardTC(cardId))
	}

	const removeCard = (cardId: string) => {
		dispatch(deleteCardTC(cardId))
	}

	if (!isLoggedIn) {
		return <Redirect to={PATH.LOGIN}/>
	}

	const renderCardsBody = (cards: Array<CardType>) => {
		return cards && cards.map(({_id, question, answer, grade }) => {
			return (
				<tr key={_id}>
					<td>{question}</td>
					<td>{answer}</td>
					<td>{grade}</td>
					<td className={s.operation}>
						<SuperButton onClick={() => {updateCard(_id)}} className={s.updBtn}>Update</SuperButton>
						<SuperButton onClick={() => {removeCard(_id)}} className={s.delBtn}>Delete</SuperButton>
					</td>
				</tr>
			)
		})
	}

	return (
		<div className={s.cardTableBox}>
			<Table headerElement={headerElement} renderCardsBody={renderCardsBody} isTableCard={true}/>
		</div>
	)
}