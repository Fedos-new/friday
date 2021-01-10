import React from 'react';
import './App.css';
import {Routes} from "./components/Routes";
import {Header} from "./components/header/Header";

const App = () => {

    return (
        <div className="App">
            <Header/>
            <Routes/>
        </div>
    );
}

export default App;
