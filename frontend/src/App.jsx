import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Pages/home'
import Signup from './Pages/signup'
import Login from './Pages/login'
import Upload from './Pages/upload'
function App() {
  
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path ={'/'} element={<Home></Home>} ></Route>
        <Route path ={'/login'} element={<Login></Login>} ></Route>
        <Route path ={'/signup'} element={<Signup></Signup>} ></Route>
        <Route path ={'/upload'} element={<Upload></Upload>} ></Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
