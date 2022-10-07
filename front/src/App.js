import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import Login from './pages/Login';
import Accueil from './pages/Accueil';
import Register from './pages/Register';
// import Error from './components/Error';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Accueil />} />
        <Route exact path='/Register' element={<Register />} />
        <Route exact path='/Home' element={<Home />} />
        <Route exact path='/Login' element={<Login />} />
        <Route exact path='/NotFound' element={<NotFound />} />
        {/* <Error/> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
