import React from 'react';
import ReactDOM from 'react-dom/client';
import ErrorBoundary from './context/ErrorBoundary';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);