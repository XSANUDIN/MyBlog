import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import './css/style.css'
import { Navbar } from '@material-tailwind/react'
import Blog from './pages/Blog'
import About from './pages/About'
import AImk from './components/Article/AImk'
function App() {

  return (
    <>
      <div>
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route index element = {<Home/>}/>
            <Route path="/home" element = {<Home/>}/>
            <Route path="/blog" element = {<Blog/>}/>
            <Route path="/about" element = {<About/>}/>
            <Route path="/aimk" element = {<AImk/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
