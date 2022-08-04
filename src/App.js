<<<<<<< HEAD

import './App.css';
import NavBar from './Component/Navbar';
import {Navigate, Outlet, useNavigate} from 'react-router-dom'
import { useEffect } from 'react';
import Footer from './Component/Footer';




function App() {

  return (
    <div>
     
     <NavBar />
     <Outlet/>
     <Footer/>
     
=======
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
>>>>>>> 0780a58181d2724cb700ccfd852a5a795165117d
    </div>
  );
}

export default App;
