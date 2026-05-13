import './App.css'

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

// Componentes
import Navbar from './components/Navbar'

// Pages
import Home from './pages/Home'
import Info from './pages/Info'
import About from './pages/About'
import NotFound from './pages/NotFound'

function App() {

  return (
    <>
      <div className="App">
        <h2>Context API</h2>

        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/info" element={<Info />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
