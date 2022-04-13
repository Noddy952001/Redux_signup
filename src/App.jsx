import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import {Login} from  "./Components/login"
import { Signup } from './Components/Signup'
import { Routes , Route } from 'react-router-dom'
import {Product} from "./Components/product"
import {Home} from "./Components/home"



function App() {
  
  return (
    
    <div className="App">

      <Routes>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/product' element={<Product/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
      </Routes>

    </div>
  )
}

export default App
