import React from 'react';
import Home from './pages/Home';
import Aboutt from './pages/Aboutt';
import Services from './pages/Services';
import Cab from './pages/Cab';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Join from './pages/Join';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Aboutt />} />
        <Route path="/services" element={<Services />} />
        <Route path="/cab" element={<Cab />} />
        <Route path="/join" element={<Join/>} />
      </Routes>
    </Router>
      
    
  )
};

export default App;




