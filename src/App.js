import logo from './logo.svg';
import './App.css';
import * as React from 'react';
import {Route, Routes} from "react-router-dom";
import { Welcome } from "./pages/Welcome/Welcome";
import Orders from "./pages/Orders";
import OrderDetails from "./pages/OrderDetails";
import CustomerDetails from "./pages/CustomerDetails";

function App() {
  return (
    <div className="App">
        <Routes>
            <Route exact path="/" element={<Welcome/>} />
            <Route exact path="/orders" element={<Orders/>} />
            <Route path="/orders/:id" element={<OrderDetails/>} />
            <Route path="/customers/:id" element={<CustomerDetails/>} />
        </Routes>
    </div>
  );
}

export default App;
