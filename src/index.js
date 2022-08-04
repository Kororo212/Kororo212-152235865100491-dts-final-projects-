import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
<<<<<<< HEAD
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import ListData from './Component/ListData'
import { DetailData } from './Component/DetailData';
import { Search } from './container/Search';
import { Upcoming } from './Component/Upcoming';
import DataSlice from './Reducer/DataGame';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import Login from './Config/Login';
import UserSlice from './Reducer/User';
import Profile from './container/Profile';
import UserLog from './Configure/UserLog';
import Register from './Config/Register';
import About from './Component/About';
import Notfound from './container/ErrPage';






const store = configureStore({
  reducer:{
    data:DataSlice,
    user:UserSlice,
  
   
  },

})


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
    <Routes>
      <Route path='/' element={
        <App />
      }>
      <Route path='/' element={
        <ListData />
      }/>
      <Route path='/detail/:data' element={
        <DetailData/>
      }/>
      <Route path='/profile' element={<UserLog inLogin={false}><Profile/></UserLog>}/>
      <Route path='/login' element={<UserLog><Login/></UserLog>}/>
      <Route path='/search/:slug' element={<Search />}/>
      <Route path='/register' element={<UserLog><Register/></UserLog>}/>
      <Route path="/about" element={<About/>}/>
      <Route path='/upcoming' element={<Upcoming />}/>
      <Route path='/*' element={<Notfound/>}/>
      </Route>
    </Routes>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>

 
=======

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
>>>>>>> 0780a58181d2724cb700ccfd852a5a795165117d
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
