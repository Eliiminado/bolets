import Home from './Views/Home/Home';
import React from 'react';
import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Details from './Views/Details/Details';
import NotFound from './Views/NotFound/NotFound';



function App() {
  return (
    
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/details/:id" element={<Details/>} />
          <Route path="*" element ={<NotFound/>}/>
        </Routes>
      </HashRouter>
      <p>v4.0.1</p>
     
    </div>
  );
}

export default App;
