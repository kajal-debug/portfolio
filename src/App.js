import React from "react";
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Dashboard from './component/dashboard';
import './App.css';
import Home from "./component/Home";

function App() {
  return (
    
      <BrowserRouter>
      <Routes>
     <Route exact path="/" element={<Home />} />
     <Route exact path="/dashboard" element={<Dashboard/>}/>
      </Routes>
      </BrowserRouter>
      
      
    
  );
}

export default App;
