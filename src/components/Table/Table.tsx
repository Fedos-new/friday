import React, {FC, ReactNode} from 'react';
import s from './Table.module.css'
import {useSelector} from 'react-redux';
import {AppRootState} from '../../bll/store';
import {PackType} from '../../bll/searchPacks-reducer';
import {CardType} from '../../bll/cards-reducer';
import {ModalConfirm} from '../common/ModalBase/ModalConfirm/ModalConfirm';
import {ModalBase} from '../common/ModalBase/ModalBase';


type TablePropsType = {
	headerElement: Array<string>
	renderPacksBody?: (cardPacks: Array<PackType>) => ReactNode
	renderCardsBody?: (cardPacks: Array<CardType>) => ReactNode
	isTableCard?: boolean
}

export const Table: FC<TablePropsType> = ({headerElement, renderPacksBody, renderCardsBody, isTableCard}) => {
	const cards = useSelector<AppRootState, Array<CardType>>(state => state.cards.cards)
	const cardPacks = useSelector<AppRootState, Array<PackType>>(state => state.search.cardPacks)
	const error = useSelector<AppRootState, string>(state => state.cards.error)
	const cardsPackId = useSelector<AppRootState, string>(state => state.cards.cardsPackId)


	const renderHeader = (headerElement: Array<string>) => {
		return headerElement.map((key, index) => {
			return <th key={index}>{key.toUpperCase()}</th>
		})
	}


	return (
		<div className={s.tableBox}>
			{isTableCard && error && !cardsPackId &&
      <div className={s.errorBox}>{error && <div className={s.error}>{error}</div>}</div>}
			<table className={s.table}  >
				<thead>
				  <tr>{renderHeader(headerElement)}</tr>
				</thead>
				<tbody>
				{renderPacksBody ? renderPacksBody(cardPacks) : null}
				{renderCardsBody && cardsPackId ? renderCardsBody(cards) : null}
				</tbody>
			</table>
		</div>
	)
}

{/*<ModalConfirm mode={mode} closeModal={closeModal} confirmHandler={() => {*/}
{/*	confirmRemovePack(_id)*/}
{/*}} cancelHandler={closeModal} title='Are you sure you want to delete this pack?'/>*/}

{/*<ModalBase mode={updateMode} closeModal={closeUpdateModal} input={value}*/}
{/*					 onChangeText={onChangeTextUpdateHandler}*/}
{/*					 addTextHandler={() => {*/}
{/*						 updatePack(_id, value)*/}
{/*					 }} title='Please, update name of pack'/>*/}