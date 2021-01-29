import React, {useEffect} from 'react';
import './App.css';
import {Routes} from "./components/Routes";
import {Header} from "./components/header/Header";
import {useDispatch, useSelector} from 'react-redux';
import {initializeAppTC} from "./bll/app-reducer";
import {AppRootState} from "./bll/store";

const App = () => {
    const dispatch = useDispatch()
    const initialized = useSelector<AppRootState, boolean>(state => state.app.initialized)
    useEffect(() => {
        if (!initialized) {
            dispatch(initializeAppTC())
        }
    }, [initialized, dispatch])


    return (
        <div className="App">
            <Header/>
            <Routes/>
        </div>
    );
}

export default App;
