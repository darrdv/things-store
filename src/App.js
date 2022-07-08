import React from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Header from './components/Header'
import Products from './pages/Products';
import Wishlist from './pages/Wishlist';
import Cart from './pages/Cart';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Products />} />
        <Route exact path="/wishlist" element={<Wishlist />} />
        <Route exact path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;