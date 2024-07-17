import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'

function App() {
  
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element= {<Dashboard/>}/>
      <Route path='/produtos' element= {<p>Produtos</p>}/>
      <Route path='/produtosFiltrados' element= {<p>Produtos Filtrados</p>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
