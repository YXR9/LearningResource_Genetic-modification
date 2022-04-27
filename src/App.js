import React from 'react';
import { Routes, Route, HashRouter } from 'react-router-dom';
import './App.css';
import Home from './page/home'

function App() {
  return (
    <HashRouter  basename={process.env.PUBLIC_URL}>
        <Routes>
            <Route exact path="/" element={<Home/>}/>
        </Routes>
    </HashRouter>
  );
}

export default App;
