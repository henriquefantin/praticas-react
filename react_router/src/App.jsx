import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Componentes
import Navbar from './components/Navbar'

// Pages
import Home from './pages/Home'
import Product from './pages/Product'
import Info from './pages/Info'
import About from './pages/About'
import NotFound from './pages/NotFound'

function App() {

  return (
    <>
      <div className="App">
        <h2>React Router</h2>

        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products/:id" element={<Product />} />
            <Route path="/products/:id/info" element={<Info />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
