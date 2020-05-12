import React from 'react';
import './style/App.scss';
import { BrowserRouter } from "react-router-dom"
import Routes from './Routes';
import Navbar from "./components/Navbar"


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
        </header>
        <Navbar />
        <Routes />




      </div>
    </BrowserRouter>
  );
}

export default App;