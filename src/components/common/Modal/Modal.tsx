import React from 'react';
import style from './Modal.module.css'
import SuperButton from "../SuperButton/SuperButton";


type ModalType = {
    activeModal: boolean
    setActiveModal: (activeModal: boolean) => void
    children: any
}


export const Modal = (props: ModalType) => {
    const {activeModal, setActiveModal, children} = props

    return (
        <div className={activeModal ? style.modalActive : style.modal}>
            <div className={style.modalContent}>
                {children}
                <SuperButton red
                             type={"button"}
                             onClick={() => setActiveModal(false)}
                             className={style.btnClose}>
                    x
                </SuperButton>
            </div>
        </div>
    )
}