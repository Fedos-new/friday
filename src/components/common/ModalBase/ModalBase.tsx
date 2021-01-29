import React, {ChangeEvent, FC} from 'react'
import s from './ModalBase.module.css'
import SuperButton from '../SuperButton/SuperButton';
import SuperInputText from '../SuperInputText/SuperInputText';

type PropsType = {
	mode: boolean
	openModal?: () => void
	closeModal: () => void
	input: string
	onChangeText: (value: string) => void
	addTextHandler: () => void
	title: string
}

export const ModalBase: FC<PropsType> = ({
																					 mode,
																					 openModal,
																					 closeModal,
																					 input,
																					 onChangeText,
																					 addTextHandler,
																					 title
																				 }) => {

	const onChangeCallback = (event: ChangeEvent<HTMLInputElement>) => {
		onChangeText(event.currentTarget.value)
	}

	return (
		<>
			{mode && <div className={s.wrapper}>
        <div className={s.modal}>
          <div className={s.closeBtnWrapper}>
            <SuperButton onClick={closeModal} className={s.btnClose}>&#x274C;</SuperButton>
          </div>
          <div className={s.title}>{title}</div>
          <div className={s.formWrapper}>
            <SuperInputText onChange={onChangeCallback} className={s.input} value={input}/>
            <SuperButton onClick={addTextHandler} disabled={!input}>Ok</SuperButton>
          </div>
        </div>
      </div>}
		</>
	)
}

