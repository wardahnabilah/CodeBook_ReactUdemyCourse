import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ScrollToTop } from './components';
import { CartProvider, FilterProvider } from './context';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <FilterProvider>
        <CartProvider>
          <ScrollToTop />
          <ToastContainer position="top-center" />
          <App />
        </CartProvider>
      </FilterProvider>
    </Router>
  </React.StrictMode>
);
