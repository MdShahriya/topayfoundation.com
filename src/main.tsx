import React from 'react';
import ReactDOM from 'react-dom/client';
import ErrorBoundary from './context/ErrorBoundary';
import Maintenance from './Maintenance';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <Maintenance />
    </ErrorBoundary>
  </React.StrictMode>
);