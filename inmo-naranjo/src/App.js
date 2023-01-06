import React from 'react';
import { Outlet } from 'react-router-dom';
import Router from './router';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';


import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <>
    <Router />
      <Navbar />
      <div className='Container'>
          <Outlet />
      </div>
      
      <Footer/>
    </>
  )
}

export default App;
