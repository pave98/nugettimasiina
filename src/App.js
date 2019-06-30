import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Riddles from './components/Riddles'
import Decoding from './components/Decoding'
import Reveal from './components/Reveal'

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={Riddles} />
        <Route path="/Decoding/" component={Reveal} />
        <Route path="/Reveal/" component={Decoding} />
      </Router>
    </div>
  )
}

export default App
