import React, {ChangeEvent, useState} from 'react'
import s from './ModalW.module.css'
import SuperButton from '../SuperButton/SuperButton';
import SuperInputText from '../SuperInputText/SuperInputText';

type PropsType = {
    activate: boolean
}

const ModalW = (props: PropsType) => {

    let [modal, setModal] = useState(props.activate)
    let [input, setInput] = useState('')

    const deactivateModal = () => {
        setModal(false)
    }

    const someFunc = () => {
        alert(`Вы ввели ${input}`)
    }

    const changeInput = (e: ChangeEvent<HTMLInputElement>) => {
        setInput(e.currentTarget.value)
    }

    return (
        <>
            {modal && <div className={s.wrapper}>
                <div className={s.modal}>
                    <div className={s.closeBtnWrapper}>
                        <SuperButton onClick={deactivateModal} className={s.btnClose}>close</SuperButton>
                    </div>
                    <div className={s.title}>Введите название карточки</div>
                    <div className={s.formWrapper}>
                        <SuperInputText onChange={changeInput} className={s.input}/>
                        <SuperButton onClick={someFunc} className={s.btnForm}>Отправить</SuperButton>
                    </div>
                </div>
            </div>}
        </>
    )
}

export default ModalW
