import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css';
import UserContextProvider from './components/context/userToken.js';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <UserContextProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </UserContextProvider>
);


