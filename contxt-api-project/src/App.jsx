import { useState } from 'react'
import UsrContxtProvidr from './context/UsrContxtProvidr'
import Login from './components/Login'
import Profile from './components/Profil'
import './App.css'
function App() {
  

  return (
    <UsrContxtProvidr>
      <h1>This is Pratik Guha</h1>
      <Login/>
      <Profile/>
    </UsrContxtProvidr>
  )
}

export default App
