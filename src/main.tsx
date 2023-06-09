import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App';

import 'bootstrap/dist/css/bootstrap.min.css';

import './assets/sass/index.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
