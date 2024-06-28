import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Main from './pages/main.js';
import Matchup from './pages/matchup.js';
import MatchupResult from './pages/matchup_result.js';
import PostMatch from './pages/post_match.js';
import Login from './pages/login.js';
import SignUp from './pages/signup.js';
import WholeList from './pages/wholelist.js';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/matchup" element={<Matchup />}></Route>
          <Route path="/matchup_result" element={<MatchupResult />}></Route>
          <Route path="/post_match" element={<PostMatch />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/wholelist" element={<WholeList />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
