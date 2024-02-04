import './App.css';
import * as React from 'react';
import { Route, Routes } from "react-router-dom";
import { Welcome, Orders, OrderDetails, CustomerDetails } from "./pages";
import { ThemeProvider } from '@mui/material/styles';
import Theme from "./theme";

function App() {
  return (
    <div className="App">
        <ThemeProvider theme={Theme}>
            <Routes>
                <Route exact path="/" element={<Welcome/>} />
                <Route exact path="/orders" element={<Orders/>} />
                <Route path="/orders/:id" element={<OrderDetails/>} />
                <Route path="/customers/:id" element={<CustomerDetails/>} />
            </Routes>
        </ThemeProvider>
    </div>
  );
}

export default App;
