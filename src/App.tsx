import React from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Pokemon, Pokemons  } from './api/pages';


function App() {
  return (
    <Router>
    <div className="app">
     <Routes>
      <Route path="/pokemons" element={<Pokemon />} />
      <Route path="/pokemons/:name" element={<Pokemon />} />
      <Route path="/" element={<Pokemons />} />
     </Routes>
    </div>
    </Router>
  );
}

export default App;
