// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';  // Important: "client" here!
import './index.css';   // If you have

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
