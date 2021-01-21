import React from 'react';
import {Registration} from "./Registration";
import { useDispatch, useSelector } from 'react-redux';
import {AppRootState} from '../../bll/store'

export const RegistrationContainer = () => {
  
  const name = useSelector((state:AppRootState) => state.registration.name)
  const password = useSelector((state:AppRootState) => state.registration.password)
  const checkPassword = useSelector((state:AppRootState) => state.registration.checkPassword)

  return (
    <div>
      <Registration
      name={name}
      password={password}
      checkPassword={checkPassword}
      />
    </div>
  );
}
