import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Orders from './Orders';
import OrderDetails from './OrderDetails';
import CustomerDetails from './CustomerDetails';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
  <Routes>
    <Route exact path="/" element={<App/>} />
    <Route path="/orders" element={<Orders/>} />
    <Route path="/orders/:id" element={<OrderDetails/>} />
    <Route path="/customers/:id" element={<CustomerDetails/>} />
  </Routes>
  </Router>
);
