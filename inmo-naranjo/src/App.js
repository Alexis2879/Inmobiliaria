import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <>
      <Navbar />
      <div className='Container'>
          <Outlet />
      </div>
      <Footer/>
    </>
  )
}

export default App;
