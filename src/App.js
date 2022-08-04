

import './App.css';
import NavBar from './Component/Navbar';
import { Outlet} from 'react-router-dom'

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
