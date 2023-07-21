import { useState } from 'react'
import './App.scss'
import { Rightpoint } from './components/Rightpoint'
import { RIT } from './components/RIT'
import { Title } from './components/Title'
import { Bio } from './components/Bio'

function App() {

  return (
    <div className="App">
      <Title/>
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
