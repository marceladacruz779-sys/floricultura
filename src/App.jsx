import { Routes, Route } from 'react-router-dom'

import Header from './components/Header/Header'
import Home from './pages/Home/Home'
import Sobre from './pages/Sobre/Sobre'
import Produtos from './pages/Produtos/Produtos'
import Contatos from './pages/Contatos/Contatos'
import Conjunto from './pages/Conjunto/Conjunto'

function App() {
  return (
    <>
    <Header />

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sobre" element={<Sobre />} />
      <Route path="/produtos" element={<Produtos />} />
      <Route path="/contato" element={<Contatos />} />
      <Route path="/conjunto" element={<Conjunto />} />
    </Routes>
    </>
  )
}

export default App
