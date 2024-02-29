import { useState } from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Supersellers from './components/Supersellers';
import Menu from './components/Menu';
import Order from './components/Order';
import Feedbacks from './components/Feedbacks';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Supersellers />
      <Menu />
      <Order />
      <Feedbacks />
      <Contact />
      <Footer />
    </>
  )
}

export default App
