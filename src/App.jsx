import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

function App() {
  
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element= {<p>Dashboard</p>}/>
      <Route path='/produrtos' element= {<p>Produtos</p>}/>
      <Route path='/produtosFiltrados' element= {<p>Produtos Filtrados</p>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
