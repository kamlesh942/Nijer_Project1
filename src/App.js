import React from 'react';
import  Header  from './component/Header/Header';
import Footer from './component/Footer/Footer';
import { Outlet } from 'react-router-dom';

const App = () => (
  <div>
   <Header/>
    <Outlet/>
   <Footer/>
  </div>
);

export default App;
