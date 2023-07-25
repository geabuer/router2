import { useState } from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css';
import Home from './views/Home';
import { Navbar } from 'react-bootstrap';
import Navbarprincipal from './components/Navbarprincipal';
import { Detalle } from './views/Detalle';
import Pokemones from './views/Pokemones';
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
    <div className='App'>
          
      <BrowserRouter>
       <Navbarprincipal  />
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/Pokemones" element={<Pokemones />}></Route>
        <Route path="/Pokemones/:name" element={<Detalle />}></Route>
        
      </Routes>
      </BrowserRouter>
      </div>
  );
}

export default App;
