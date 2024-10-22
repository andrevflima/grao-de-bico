// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import QuemSomos from './components/QuemSomos';
import FaleConosco from './components/FaleConosco';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quem-somos" element={<QuemSomos />} />
        <Route path="/fale-conosco" element={<FaleConosco />} />
      </Routes>
    </Router>
  );
};

export default App;