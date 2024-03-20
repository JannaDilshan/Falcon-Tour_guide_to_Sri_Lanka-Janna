import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.css';
import { SearchContextProvider } from './context/searchcon.js';
import { AuthContextProvider } from './context/Authocon.js';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <AuthContextProvider>
      <SearchContextProvider>
        <App />
      </SearchContextProvider>
    </AuthContextProvider>
    
  </React.StrictMode>
);
