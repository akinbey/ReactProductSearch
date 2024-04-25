
import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom'
import { Home } from './pages/Home'
import { Detail } from './pages/Detail'
import Login from './pages/Login'
import SignIn from './pages/SignIn'



function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/detail/:id' element={<Detail />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signin' element={<SignIn />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
