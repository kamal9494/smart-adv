import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import Navbar from './Navbar';
import Camera from './Camera';
import Ads from './Ads';
import Contact from './Contact';

const App = () => {
  return(
    <>
    <Navbar />
    <Routes>
      <Route exact path='/' element={<Camera/>}/>
      <Route exact path='/liveAds' element={<Ads />}/>
      <Route exact path='/contact' element={<Contact />}/>
      <Route path='*' element={<Navigate to="/"/>}/>
    </Routes>
    </>
  );
}

export default App;
