import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Riddles from './components/Riddles'
import Reveal from './components/Reveal'

function App() {
  return (
    <div className='App'>
      <h1 className='RealFont' style={{ marginTop: 100, fontSize: '8rem' }}>
        Nugetti-Masiina
      </h1>
      <Router>
        <Route path='/' exact component={Riddles} />
        <Route path='/RevealReal/' component={Reveal} />
      </Router>
    </div>
  )
}

export default App
