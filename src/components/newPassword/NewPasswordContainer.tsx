import React from 'react';
import {NewPassword} from "./NewPassword";
import {useSelector} from 'react-redux';
import {AppRootState} from '../../bll/store';
import {RequestStatusType} from '../../bll/recoveryPassword-reducer';

export const NewPasswordContainer = () => {
  const error = useSelector<AppRootState, string>((state) => state.recoveryPassword.error)
  const success = useSelector<AppRootState, string>((state) => state.recoveryPassword.success)
  const status = useSelector<AppRootState, RequestStatusType>((state) => state.recoveryPassword.status)

  return (
    <div>
      <NewPassword error={error} success={success} status={status}/>
    </div>
  );
}
