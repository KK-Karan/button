import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Button from './Button.js';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Button />
  </React.StrictMode>
);

reportWebVitals();
