// src/index.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import App from './App';
import './styles/App.css';
import { SpeedInsights } from "@vercel/speed-insights/next"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <SpeedInsights/>
    <App />
  </Router>
);
