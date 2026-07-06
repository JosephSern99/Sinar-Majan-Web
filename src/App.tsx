import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import PageLoader from './components/ui/PageLoader'
import Home from './pages/Home'
import OilAndGas from './pages/OilAndGas'
import WhatWeSupply from './pages/WhatWeSupply'
import About from './pages/About'
import GlobalReach from './pages/GlobalReach'
import Contact from './pages/Contact'
import Aviation from './pages/Aviation'
import HedgeFund from './pages/HedgeFund'

export default function App() {
  return (
    <BrowserRouter>
      <PageLoader />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/oil-and-gas" element={<OilAndGas />} />
            <Route path="/what-we-supply" element={<WhatWeSupply />} />
            <Route path="/global-reach" element={<GlobalReach />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/aviation" element={<Aviation />} />
            <Route path="/hedge-fund" element={<HedgeFund />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
