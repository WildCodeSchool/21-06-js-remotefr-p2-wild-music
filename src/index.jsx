import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import FavState from './components/context/cart/FavState'

ReactDOM.render(
  <BrowserRouter>
    <FavState>
      <App />
    </FavState>    
  </BrowserRouter>,
  document.getElementById('root')
);