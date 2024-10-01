import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HeaderBar } from './components/HeaderBar.js';

import Main from './pages/main.js';

const App = () => {
  return (
    <div className="App">
      <headerBar/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          {/* <Route path="/login" element={<Login />}></Route> */}
          {/* <Route path="/signup" element={<Signup />}></Route> */}
          {/* <Route path="/matchup_result" element={<matchup_result />}></Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
