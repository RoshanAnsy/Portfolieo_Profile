import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './component/common/Navbar';
import About from './pages/About';
import Skill from './pages/TSkill';
import Projects from './pages/Projects';

function App() {
  return (
    <div className="flex-row justify-center mt-16  min-h-screen">
      <Navbar />
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skill" element={<Skill/>} />
          <Route path="/project" element={<Projects/>} />
        </Routes>
    
    </div>
  );
}

export default App;
