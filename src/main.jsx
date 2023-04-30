import { UserProvider } from './contexts/user.context';
import { ProductsProvider } from './contexts/products.context';
import { BrowserRouter } from "react-router-dom";
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
import { CartProvider } from './contexts/cart.context';
import { CategoriesProvider } from './contexts/categories.context';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <CategoriesProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </CategoriesProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
