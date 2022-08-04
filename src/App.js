
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
     
    </div>
  );
}

export default App;
