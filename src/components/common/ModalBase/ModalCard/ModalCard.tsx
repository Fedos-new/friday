import React, {ChangeEvent, FC} from 'react'
import s from './ModalCard.module.css'
import {useParams} from 'react-router-dom';
import SuperButton from '../../SuperButton/SuperButton';
import SuperInputText from '../../SuperInputText/SuperInputText';

type PropsType = {
	closeModal: () => void
	inputFirst: string
	inputSecond: string
	onChangeTextFirst: (value: string) => void
	onChangeTextSecond: (value: string) => void
	addTextHandler: (id: string, value1: string, value2: string) => void
	title: string
}

export const ModalCard: FC<PropsType> = ({
																					 closeModal,
																					 inputFirst,
																					 onChangeTextFirst,
																					 onChangeTextSecond,
																					 addTextHandler,
																					 title, inputSecond
																				 }) => {
	const paramsCard = useParams<{ cardId: string }>()
	const params = useParams<{ packId: string }>()

	const onChangeCallbackForFirstInput = (event: ChangeEvent<HTMLInputElement>) => {
		onChangeTextFirst(event.currentTarget.value)
	}

	const onChangeCallbackForSecondInput = (event: ChangeEvent<HTMLInputElement>) => {
		onChangeTextSecond(event.currentTarget.value)
	}

	const successHandler = () => {

		if (paramsCard.cardId) {
			addTextHandler(paramsCard.cardId, inputFirst, inputSecond)
		} else if (params.packId) {
			addTextHandler(params.packId, inputFirst, inputSecond)
		}
	}


	return (
		<>
			<div className={s.wrapper}>
				<div className={s.modal}>
					<div className={s.closeBtnWrapper}>
						<SuperButton onClick={closeModal} className={s.btnClose}>&#x274C;</SuperButton>
					</div>
					<div className={s.title}>{title}</div>
					<div className={s.formWrapper}>
						<SuperInputText onChange={onChangeCallbackForFirstInput} className={s.input} value={inputFirst}
														placeholder='question'/>
						<SuperInputText onChange={onChangeCallbackForSecondInput} className={s.input} value={inputSecond}
														placeholder='answer'/>
						<SuperButton className={s.sendBtn} onClick={successHandler}
												 disabled={!(inputFirst || inputSecond)}>Ok</SuperButton>
					</div>
				</div>
			</div>
		</>
	)
}

