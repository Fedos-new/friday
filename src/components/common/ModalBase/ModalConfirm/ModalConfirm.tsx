import React, {FC} from 'react'
import SuperButton from '../../SuperButton/SuperButton';
import s from './ModalConfirm.module.css'
import {useParams} from 'react-router-dom';

type PropsType = {
	confirmHandler: (id: string) => void
	cancelHandler: () => void
	title: string
}

export const ModalConfirm: FC<PropsType> = ({

																							confirmHandler, cancelHandler,
																							title
																						}) => {

	const params = useParams<{ packId: string }>()
	const paramsCard = useParams<{ cardId: string }>()

	const successHandler = () => {
		if (params.packId) {
			confirmHandler(params.packId)
		} else if (paramsCard.cardId) {
			confirmHandler(paramsCard.cardId)
		}
	}


	return (
		<>
		<div className={s.wrapper}>
        <div className={s.modal}>
          <div className={s.closeBtnWrapper}>
            <SuperButton onClick={cancelHandler} className={s.btnClose}>&#x274C;</SuperButton>
          </div>
          <div className={s.title}>{title}</div>
          <div className={s.formWrapper}>
            <SuperButton onClick={successHandler}>Ok</SuperButton>
            <SuperButton onClick={cancelHandler}>Cancel</SuperButton>
          </div>
        </div>
      </div>
		</>
	)
}

