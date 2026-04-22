import React from 'react'
import {  Routes, Route } from 'react-router-dom'

import Landing from './pages/Landing.jsx'
import Login from './pages/Login.jsx'
import Aboutus from './pages/Aboutus.jsx'
import Register from './pages/Register.jsx'
import Home from './pages/Home.jsx'

const App = () => {
  return (
 
    <Routes>
    <Route path="/" element={<Landing />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="/about" element={<Aboutus />} />
    <Route path="/home" element={<Home />} />
    </Routes>

    
 
  )
}

export default App