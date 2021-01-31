import React, {ChangeEvent, FC, ReactNode} from 'react'
import s from './ModalBase.module.css'
import SuperButton from '../SuperButton/SuperButton';
import SuperInputText from '../SuperInputText/SuperInputText';
import {useParams} from 'react-router-dom';

type PropsType = {
	// mode: boolean
	// openModal?: () => void
	closeModal: () => void
	input: string
	onChangeText: (value: string) => void
	addTextHandler: (id: string, value: string) => void
	title: string
}

export const ModalBase: FC<PropsType> = ({
																					 closeModal,
																					 input,
																					 onChangeText,
																					 addTextHandler,
																					 title
																				 }) => {
	const params = useParams<{ packId: string }>()

	const onChangeCallback = (event: ChangeEvent<HTMLInputElement>) => {
		onChangeText(event.currentTarget.value)
	}


	const successHandler= () => {
		addTextHandler(params.packId, input)
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
						<SuperInputText onChange={onChangeCallback} className={s.input} value={input}/>
						<SuperButton onClick={successHandler} disabled={!input}>Ok</SuperButton>
					</div>
				</div>
			</div>
		</>
	)
}

