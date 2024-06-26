import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import Home from './Designs/User/Home'
import Contact from './Designs/User/Contact'
import Cart from './Designs/User/Cart'
import Login from './Designs/User/Login'
import A from './Designs/User/a'
import Product from './Designs/User/Product'
import ProductByCate from './Designs/User/ProductByCate'
import ProductDetail from './Designs/User/Product_Details'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={<Login />} />
        <Route path='/a' element={<A />} />
        <Route path='/product' element={<Product />} />
        <Route path='/category' element={<ProductByCate />} />
        <Route path='/product/:id' element={<ProductDetail />} />
      </Routes>     
    </Router>      
  </React.StrictMode>
);

