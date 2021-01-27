import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {loginReducer} from "./login-reducer";
import { newPasswordReducer } from "./newPassword-reducer";
import { profileReducer } from "./profile-reducer";
import { recoveryPasswordReducer} from "./recoveryPassword-reducer";
import {registrationReducer} from "./registration-reducer";
import {appReducer} from "./app-reducer";
import {searchReducer} from './search-reducer';
import {packsReducer} from "./packs-reducer";

const rootReducer = combineReducers({
    auth : loginReducer,
    profile: profileReducer,
    recoveryPassword: recoveryPasswordReducer,
    newPassword: newPasswordReducer,
    registration: registrationReducer,
    app: appReducer,
    search: searchReducer,
    packs: packsReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))
export type AppRootState = ReturnType<typeof rootReducer> //автомачически подтягивает типы из combineReducers

// @ts-ignore
window.store = store
