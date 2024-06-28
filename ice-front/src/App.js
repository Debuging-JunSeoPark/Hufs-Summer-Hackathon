import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Main from './pages/main.js';
import Matchup from './pages/matchup.js';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/matchup" element={<Matchup />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
