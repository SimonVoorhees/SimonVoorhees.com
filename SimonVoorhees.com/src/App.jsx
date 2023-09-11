import { useState } from 'react'

import { Rightpoint } from './components/Rightpoint'
import { RIT } from './components/RIT'
import { Title } from './components/Title'
import { Bio } from './components/Bio'
import { Navbar } from './components/Navbar'
import { Navlink } from './components/Navlink'
import './App.scss'

function App() {

  return (
    <div className="App">
      <Title/>
      <Navbar />
      {/* Overview */}
      <Bio />
      {/* Education */}
      <RIT />
      {/* Rightpoint */}
      <Rightpoint />
    </div>
  )
}

export default App
