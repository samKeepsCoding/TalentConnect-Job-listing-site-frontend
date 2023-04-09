import './App.css';
import React, {useState, useEffect} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Page Imports
import JobDetails from './Pages/Job';
import Jobs from './Pages/Jobs';
import Job from './Pages/Job';

// Component Imports
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

function App() {
 
  return (

    <BrowserRouter>
     <Navbar/>
        <Routes>
          <Route path='/' element={<Jobs/>}/>
          <Route path="job/:id" element={<Job />}/>
        </Routes>
      <Footer/>
    </BrowserRouter>
       

  );
}

export default App;
