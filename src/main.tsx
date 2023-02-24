import React from 'react';
import ReactDOM from 'react-dom/client';
import '~/assets/style/normalize.scss';
import App from './App';
import './index.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
