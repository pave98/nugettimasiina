import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Riddles from './components/Riddles'
import Reveal from './components/Reveal'

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={Riddles} />
        <Route path="/Reveal/" component={Reveal} />
      </Router>
    </div>
  )
}

export default App
