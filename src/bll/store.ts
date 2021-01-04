import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {loginReducer} from "./login-reducer";
import { newPasswordReducer } from "./newPassword-reducer";
import { profileReducer } from "./profile-reducer";
import { recoveryPasswordReducer} from "./recoveryPassword-reducer";
import {registrationReducer} from "./registration-reducer";


const rootReducer = combineReducers({
    auth : loginReducer,
    profile: profileReducer,
    recoveryPassword: recoveryPasswordReducer,
    newPassword: newPasswordReducer,
    registration: registrationReducer,

})


export type AppRootState = ReturnType<typeof rootReducer> //автомачически подтягивает типы из combineReducers
export const store = createStore(rootReducer, applyMiddleware(thunk))

// @ts-ignore
window.store = store