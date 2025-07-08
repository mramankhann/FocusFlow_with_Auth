import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router ,Routes,Route } from 'react-router-dom'
import Signup from './pages/Signup' ;
import Login from './pages/Login' ;
import Todos from './pages/Todos'

function App() {
  

  return (
  <>
  
<Router>
  <Routes>
    <Route path='/' element={<Todos/>} />
    <Route path='/signup' element={<Signup/>} />
    <Route path='/login' element={<Login/>} />
  </Routes>
</Router>
  </>
  )
}

export default App
