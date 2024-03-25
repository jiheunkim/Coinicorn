import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import News from './components/pages/News';
import Ranks from './components/pages/Ranks';
import Services from './components/pages/Services';
import Detail from './components/pages/Detail';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<News />} />
        <Route path="/ranks" element={<Ranks />} />
        <Route path="/news" element={<News />} />
        <Route path="/services" element={<Services />} />
        <Route exact path="/news/detail/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
