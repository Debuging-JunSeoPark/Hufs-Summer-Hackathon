import React from 'react';
import ReactDOM from 'react-dom/client';
import {HeaderBar} from './components/HeaderBar.js'
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
