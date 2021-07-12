import React from 'react';
import ReactDOM from 'react-dom';
import { AuthProvider } from './context/authContext';
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import App from './App';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.render(
    <BrowserRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>,
  document.getElementById('root')
);
