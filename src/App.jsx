import React from 'react'
import Navbar from './components/Navbar'
import HomePage from './components/HomePage'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import About from './components/About'

export const App = () => {
  return (
    <>
    
    <Navbar />
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/trainings" element={<HomePage />} />
        <Route path="/about" element={<About />} />
    </Routes>
    <Footer />
    </>
  )
}
