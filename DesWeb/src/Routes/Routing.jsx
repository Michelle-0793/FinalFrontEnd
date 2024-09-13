import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../Pages/Login';
import Home from "../Pages/Home";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Location from "../Pages/Location";
import ServiciosProductos  from '../Pages/ServiciosProductos';
import Administration from "../Pages/Administration";
import ProtectedRoute from '../ProtectedRoute'; 

const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/ServiciosProductos" element={<ServiciosProductos />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Location" element={<Location />} />
        <Route path="/Login" element={<Login />}/>
        <Route path="/Administration" element={<ProtectedRoute><Administration /></ProtectedRoute>}/>

      </Routes>
    </Router>
  );
};

export default Routing;