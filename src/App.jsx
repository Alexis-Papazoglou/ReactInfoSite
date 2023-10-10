import './App.css'
import Navbar from './Components/Navbar'
import MainContent from './Components/MainContent'
import { useState } from 'react'

function App() {

  const [darkMode,setDarkMode] = useState(true);

  function toggleDarkMode(){
    setDarkMode(prevMode => !prevMode)
    console.log(darkMode)
  }

  return (
    <>
      <Navbar mode = {darkMode} toggle = {toggleDarkMode}/>
      <MainContent mode = {darkMode}/>
    </>
  )
}

export default App
