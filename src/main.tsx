import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { ShoppingCartProvider } from './context/ShoppingCart.tsx'
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ShoppingCartProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ShoppingCartProvider>
  </React.StrictMode>,
)
