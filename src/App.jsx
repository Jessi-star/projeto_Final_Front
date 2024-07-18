import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Filter from './components/Filter/Index'
import Categoria from './components/Categoria/Index'

function App() {
  
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element= {<Dashboard/>}/>
      <Route path='/produtos' element= {<Filter/>}/>
      <Route path='/produtosFiltrados' element= {<Categoria/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
