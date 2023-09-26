import React from 'react';
import { Route, Routes } from "react-router-dom";
import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Laurels, SpecialMenu } from './container';
import { Navbar } from './components';
import './App.css';
import Home from './pages/Home';
import Chefs from './pages/Chefs';

const App = () => (
  <div>
    <Navbar />

    <Routes>
      <Route path='/' element={<Home /> } />
      <Route path='/Menu' element={<SpecialMenu />} />
      <Route path='/Chef' element={<Chefs />} />
      <Route path='/Contact' element={ <FindUs />} />
      <Route path='/Award' element={      <Laurels/>} />



    </Routes>
    <Gallery />
    <Footer />
  </div>
);

export default App;






