import React, { Component } from 'react';
import Navbar from 'components/navbartop'
import MainContent from 'components/maincontent'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <MainContent />
      </div>
    );
  }
}

export default App;
