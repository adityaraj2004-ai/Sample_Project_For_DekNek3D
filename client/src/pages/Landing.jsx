import React from 'react'
import Navbar from '../components/Navbar.jsx'
import Hero from '../components/Hero.jsx'
import Footer from '../components/Footer.jsx'
import Slider from '../components/Slider.jsx'
import Pricing from '../components/Pricing.jsx'


const Landing = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Slider/>
    <Pricing/>
    <Footer/>
    </>
  )
}

export default Landing