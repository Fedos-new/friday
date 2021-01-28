import React from 'react';
import styleH from "../header/Header.module.css"
import SuperButton from '../common/SuperButton/SuperButton';
import { Menu } from '../common/Menu/Menu';
import { Modal } from '../common/Modal/Modal';
import { useState } from 'react';


export const Header: React.FC = () => {

    const [active, setActive] = useState(false)

    return (

        <div className={styleH.wrap}>
            <SuperButton className={active ? styleH.btnMenu : styleH.btnMenuActive}
                         onClick={() => setActive(true)}>
                Menu
            </SuperButton>
            {!active && <Menu className={styleH.nav}/>}


            {active &&   <Modal activeModal={active} setActiveModal={setActive}>
                <Menu className={styleH.navActive}/>
                </Modal>
            }
        </div>
    )
}
