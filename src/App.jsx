import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import HomePage from './components/HomePage'
import Footer from './components/Footer'
import About from './components/About'
import CourseDetails from './components/CourseDetails'
import ContactForm from './components/ContactForm'
import EnrollPage from './components/EnrollPage'
import PaymentSuccessPage from './components/PaymentSuccessPage'

export const App = () => {
  return (
    <>
    
    <Navbar />
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/trainings" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/course/:courseName" element={<CourseDetails />} />
        <Route path="/enroll/:courseName" element={<EnrollPage />} />
        <Route path="/payment-success" element={<PaymentSuccessPage />} />
    </Routes>
    <Footer />
    </>
  )
}
