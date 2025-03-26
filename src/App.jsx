import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import HomePage from './components/HomePage'
import Footer from './components/Footer'
import About from './components/About'
import CourseDetails from './components/CourseDetails'

export const App = () => {
  return (
    <>
    
    <Navbar />
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/trainings" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/course/:courseName" element={<CourseDetails />} />
    </Routes>
    <Footer />
    </>
  )
}
