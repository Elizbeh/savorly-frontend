import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));

// Set basename to match your GitHub Pages path
const basename = import.meta.env.MODE === 'production' ? '/savorly-frontend' : '/';

root.render(
  <React.StrictMode>
    <Router basename={basename}>
      <AuthProvider>
        <App />
      </AuthProvider>
    </Router>
  </React.StrictMode>
);
