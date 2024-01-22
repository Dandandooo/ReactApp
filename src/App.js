import logo from './logo.svg';
import './App.css';
import * as React from 'react';
import OrdersTable from './Table';
import Header from './Nav';
import '@fontsource/roboto/700.css'

function App() {
  return (
    <div className="App">
        <div>
            <Header/>
        </div>
        <div style={{ alignItems: "center", verticalAlign: "center", display: "flex", justifyContent: "center", height: "86vh", fontFamily: "Roboto", fontSize:"min(10vw, 10vh)"}}>
          <center><h1>
            Welcome
          </h1></center>
        </div>
    </div>
  );
}

export default App;
