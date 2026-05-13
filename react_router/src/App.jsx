import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Componentes
import Navbar from './components/Navbar'
import SearchForm from './components/SearchForm'

// Pages
import Home from './pages/Home'
import Product from './pages/Product'
import Info from './pages/Info'
import About from './pages/About'
import NotFound from './pages/NotFound'
import Search from './pages/Search'

function App() {

  return (
    <>
      <div className="App">
        <h2>React Router</h2>

        <BrowserRouter>
          <Navbar />
          <SearchForm />
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/products/:id" element={<Product />} />
            <Route path="/products/:id/info" element={<Info />} /> {/* Rota dinâmica */}

            <Route path="/search" element={<Search />} /> {/* Rota para a página de busca */}

            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
