import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {CardType, getCardsTC} from '../../bll/cards-reducer';
import {Table} from '../Table/Table';
import s from '../Table/Table.module.css';
import SuperButton from '../common/SuperButton/SuperButton';

export const Cards = () => {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getCardsTC())
	}, [dispatch])

	const headerElement= ['QUESTION', 'ANSWER', 'GRADE', 'ACTIONS']

	const updateCard = () => {

	}

	const removeCard = () => {

	}

	const renderCardsBody = (cards: Array<CardType>) => {
		return cards && cards.map(({_id, question, answer, grade }) => {
			return (
				<tr key={_id}>
					<td>{question}</td>
					<td>{answer}</td>
					<td>{grade}</td>
					<td className={s.operation}>
						<SuperButton onClick={updateCard} className={s.updBtn}>Update</SuperButton>
						<SuperButton onClick={removeCard} className={s.delBtn}>Delete</SuperButton>
					</td>
				</tr>
			)
		})
	}

	return (
		<div>
			<Table headerElement={headerElement} renderCardsBody={renderCardsBody} isTableCard={true}/>
		</div>
	)
}