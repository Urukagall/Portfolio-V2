import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './NavBar.jsx'
import HomePage from "./HomePage.jsx";
import AProposDeMoi from "./AProposDeMoi.jsx";
import Competences from "./Competences.jsx";
import Project from "./Project.jsx";
import Footer from "./Footer.jsx";

function App() {

  return (
      <>
          <NavBar/>
          <HomePage/>
          <AProposDeMoi/>
          <Competences/>
          <Project/>
          <Footer/>
      </>
  )
}

export default App
