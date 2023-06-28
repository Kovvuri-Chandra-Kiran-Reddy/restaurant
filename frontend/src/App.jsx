import React from 'react'
import './App.css'
import Contact from './components/Contact/Contact'
import Stepperr from './components/Steps/Stepperr'
import StepContext from './components/Steps/StepContext'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Displayer from './components/Displayer/Displayer'


function App() {

  return (

    <> 
      <StepContext>
        <Stepperr />
      </StepContext>
      {/* <Displayer/> */}
    </>

  )
}

export default App
