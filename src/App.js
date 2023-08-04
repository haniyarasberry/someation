
import "./App.css";
import React from 'react';
import Home from "./pages/Home/Home";
import About from "./pages/Home/About"; 
import Routess from './Routes';
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";


function App() {
  return (
    
    <div className="App">
      <Home />
      
    
    </div>

  );
}

export default App;
