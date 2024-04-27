import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Frontend_English from './team76_english.js';
import HomePage from './HomePage.js';
import Frontend_Telugu from './team76_telugu.js';
import Frontend_Hindi from './team76_hindi.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/EnglishMovies" element={<Frontend_English />} />
        <Route path="/HindiMovies" element={<Frontend_Hindi />} />
        <Route path="/TeluguMovies" element={<Frontend_Telugu />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
