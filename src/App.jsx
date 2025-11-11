import './App.css'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Explore from './pages/Explore'
import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import ShoppingBag from './pages/ShoppingBag'

function App() {
  return (
    <>
      <div className='bg-black text-white'>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/login" element={<Login />} />
          <Route path="/shoppingbag" element={<ShoppingBag />} />
        </Routes>
        <Footer />
      </div>
    </>
  )
}

export default App
