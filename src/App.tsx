import React from 'react';
import './App.css';
import {Routes} from "./components/Routes";
import {Header} from "./components/header/Header";
import Logout from './components/common/Logout/Logout';

const App = () => {

    return (
        <div className="App">
            <Header/>
            <Routes/>
            <Logout/>
        </div>
    );
}

export default App;
