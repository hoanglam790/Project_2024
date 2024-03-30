import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import Home from './Designs/User/Home'
import Contact from './Designs/User/Contact'
import Cart from './Designs/User/Cart'
import Login from './Designs/User/Login'
import A from './Designs/User/a'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={<Login />} />
        <Route path='/a' element={<A />} />
      </Routes>     
    </Router>      
  </React.StrictMode>
);

