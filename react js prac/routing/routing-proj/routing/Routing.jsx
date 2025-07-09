import React from 'react'
import {BrowserRouter , Routes, Route} from 'react-router'
import Home from '../pages/home/Home'
import About from '../pages/about/About'
import Contact from '../pages/contact/Contact'
import Services from '../pages/services/Services'
function Routing() {
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/services' element={<Services/>} />
        <Route path='*' element={<h1>404 Error found</h1>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default Routing