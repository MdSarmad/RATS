import React from 'react';
import ReactDOM from 'react-dom';
import { RatsProvider } from './Context/RatsContext';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <RatsProvider>
      <App />
    </RatsProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
