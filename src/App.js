import React, { Component } from 'react'
import Navbar from 'components/navbartop'
import MainContent from 'components/maincontent'
import { BrowserRouter } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <MainContent />
        </BrowserRouter>
      </div>
    )
  }
}

export default App
