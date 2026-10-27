import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { router } from './routes/index.jsx';

import GlobalStyles from './styles/globalStyles';
import { CartProvider } from './contexts/CartContext';
console.log(
     "Rotas carregadas:",
     JSON.stringify(router.routes.map((route) => route.path))
);

ReactDOM.createRoot(document.getElementById('root')).render(
     <React.StrictMode>
          <CartProvider>
               <RouterProvider router={router} />
               <GlobalStyles />
               <ToastContainer autoClose={2000} theme="colored" />
          </CartProvider>
     </React.StrictMode>
);