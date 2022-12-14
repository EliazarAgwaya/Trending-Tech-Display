import React from "react"
import Home from "./Home";
import About from "./About";
import Trendlist from "./Trendlist";
import Contact from "./Contact";
import { Route, Routes } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div>
       <Routes >
       <Route exact path="/about" element={<About/>} />
         <Route exact path="/trendlist" element={<Trendlist/>} />
         <Route exact path="/contact" element={<Contact/>} />
         <Route exact path="/" element={<Home/>} />
      </Routes>
    </div>
  );
}

export default App;
