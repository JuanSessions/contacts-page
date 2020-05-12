import React, { useState } from 'react';
import './style/App.scss';
import { BrowserRouter } from "react-router-dom"
import Routes from './Routes.jsx';
import Navbar from "./components/Navbar"
import NavBar1 from './components/NavBar1';


function App() {
  const [logIn, setLogIn] = useState(false);
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
        </header>
        <Navbar />
        {logIn && <NavBar1 />}
        <Routes logIn={logIn} setLogIn={setLogIn} />




      </div>
    </BrowserRouter>
  );
}

export default App;