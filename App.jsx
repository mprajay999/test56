import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Menu from './pages/Menu'
import OurStory from './pages/OurStory'
import Reservations from './pages/Reservations'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/our-story" element={<OurStory />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Layout>
  )
}

export default App