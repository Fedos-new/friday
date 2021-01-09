import React from 'react'
import s from './Registration.module.css'

type PropsType = {

}

export const Registration = (props:PropsType) => {
  return (
    <div className={s.wrapper}> 
      <div className={s.formWrapper}>
          <h2 className={s.regTitle}>Регистрация</h2>
          <form>
            <div className={s.formItem}>
              <label htmlFor="nameInputLabel" className={s.label} >Введите своё имя</label>
              <input type="text" id="nameInputLabel" className={s.formInput} />
            </div>
            <div className={s.formItem}>
              <label htmlFor="nameInputLabel" className={s.label} >Введите своё мыло</label>
              <input type="email" id="nameInputLabel" className={s.formInput} />
            </div>
            <div className={s.formItem}>
              <label htmlFor="nameInputLabel" className={s.label} >Введите свой пароль</label>
              <input type="password" id="nameInputLabel" className={s.formInput} />
            </div>  
            <div className={s.formItemButton}>
                <button className={s.formButton}>Зарегистрироваться</button>
            </div>
          </form>
      </div>
    </div>
  );
}

