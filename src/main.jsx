import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import App from './App';
import './styles/App.css';
import { NotificationProvider } from './context/NotificationProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <NotificationProvider>
  <Router
    future={{
      v7_startTransition: true,
    }}
  >
    <App />
  </Router>
  </NotificationProvider>
);
