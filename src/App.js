import './App.css';
import * as React from 'react';
import { Route, Routes } from "react-router-dom";
import { Welcome, Orders, OrderDetails, CustomerDetails } from "./pages";
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import {Theme} from "./theme";

function App() {
  return (
    <div className="App">
            <StyledThemeProvider theme={Theme}>
                <MuiThemeProvider theme={Theme}>
                    <Routes>
                        <Route exact path="/" element={<Welcome/>} />
                        <Route exact path="/orders" element={<Orders/>} />
                        <Route path="/orders/:id" element={<OrderDetails/>} />
                        <Route path="/customers/:id" element={<CustomerDetails/>} />
                    </Routes>
                </MuiThemeProvider>
            </StyledThemeProvider>
    </div>
  );
}

export default App;
