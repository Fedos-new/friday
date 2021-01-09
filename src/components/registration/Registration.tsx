import React, { useState } from 'react'
import s from './Registration.module.css'
import {useFormik} from 'formik'
import { useDispatch, useSelector } from 'react-redux';
import {AppRootState} from '../../bll/store'
import {addUserAC} from '../../bll/registration-reducer'

type PropsType = {

}

export const Registration = (props:PropsType) => {

  const dispatch = useDispatch()

  const name = useSelector((state:AppRootState) => state.registration.name)
  const password = useSelector((state:AppRootState) => state.registration.password)
  const checkPassword = useSelector((state:AppRootState) => state.registration.checkPassword)

  console.log(name)
  console.log(password)
  console.log(checkPassword)

  const formik = useFormik({
    initialValues: {
      name: name,
      password: password,
      checkPassword: checkPassword
    },
    onSubmit: values => {
      if(values.password === values.checkPassword){
      setPass(s.formInput)
      setPassLabel(true)     
      dispatch(addUserAC(values.name, values.password, values.checkPassword))  
      }else{
        setPass(s.redLebel)
        setPassLabel(false)
      }
    }
  })

  let [pass, setPass] = useState(s.formInput)
  let[passLabel, setPassLabel] = useState(true)

  return (
    <div className={s.wrapper}> 
      <div className={s.formWrapper}>
          <h2 className={s.regTitle}>Регистрация</h2>

          <form onSubmit={formik.handleSubmit}>
            <div className={s.formItem}>
              <label htmlFor="nameInputLabel" className={s.label} >Введите своё имя</label>
              <input type="text" name="name" id="nameInputLabel" className={s.formInput} onChange={formik.handleChange} />
            </div>
            <div className={s.formItem}>
              <label htmlFor="nameInputLabel" className={s.label} >Введите пароль</label>
              <input type="password" name="password" id="nameInputLabel" className={pass} onChange={formik.handleChange} />
            </div>
            <div className={s.formItem}>
              <label htmlFor="nameInputLabel" className={s.label} >Подтвердите пароль</label>
              <input type="password" name="checkPassword" id="nameInputLabel" className={pass} onChange={formik.handleChange} />
              {passLabel? '' : <label htmlFor="nameInputLabel" className={s.labelRed} >Пароли не совпадают!</label>}
            </div>  
            <div className={s.formItemButton}>
                <button type="submit" className={s.formButton}>Отправить</button>
            </div>
          </form>

      </div>
    </div>
  );
}

