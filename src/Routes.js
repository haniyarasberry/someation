// Routes.js
import React from 'react';
import { Switch, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/Home/About';

const Routess = () => {
  return (
    <Routes>
      <Route path="/home" exact component={Home} />
      <Route path="/about" component={About} />

    </Routes>
  );
};

export default Routess;
