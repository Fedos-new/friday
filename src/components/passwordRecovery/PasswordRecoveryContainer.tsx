import React from 'react';
import {PasswordRecovery} from "./PasswordRecovery";
import {useSelector} from 'react-redux';
import {AppRootState} from '../../bll/store';
import {RequestStatusType} from '../../bll/recoveryPassword-reducer';


export const PasswordRecoveryContainer = () => {
  const error = useSelector<AppRootState, string>((state) => state.recoveryPassword.error)
  const success = useSelector<AppRootState, string>((state) => state.recoveryPassword.success)
  const status = useSelector<AppRootState, RequestStatusType>((state) => state.recoveryPassword.status)

  return (
    <div>
      <PasswordRecovery error={error} success={success} status={status}/>
    </div>
  );
}
