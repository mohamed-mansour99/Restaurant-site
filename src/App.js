import React, { useEffect } from 'react';
import { Route, Routes } from "react-router-dom";
import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Laurels, SpecialMenu } from './container';
import { Navbar } from './components';
import './App.css';
import Home from './pages/Home';
import Chefs from './pages/Chefs';
import Aos from "aos"
import "aos/dist/aos.css"

const App = () =>{
  useEffect(() => {
    Aos.init({duration:2000})
  }, [])
  return(
   <div>
     <Navbar />
 
     <Routes>
       <Route path='/' element={<Home /> } />
       <Route path='/Menu' element={<SpecialMenu />} />
       <Route path='/Chef' element={<Chefs />} />
       <Route path='/Contact' element={ <FindUs />} />
       <Route path='/Award' element={      <Laurels/>} />
     </Routes>
     <Footer />
   </div>
 );
}

export default App;






