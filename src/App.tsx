import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import PageLoader from './components/ui/PageLoader'
import Home from './pages/Home'
import WhatWeSupply from './pages/WhatWeSupply'
import About from './pages/About'
import GlobalReach from './pages/GlobalReach'
import Contact from './pages/Contact'

export default function App() {
  return (
    <BrowserRouter>
      <PageLoader />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/what-we-supply" element={<WhatWeSupply />} />
            <Route path="/about" element={<About />} />
            <Route path="/global-reach" element={<GlobalReach />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
