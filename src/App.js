import React, { Component } from 'react';
import NavbarTop from 'components/navbartop'
import { Alert } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavbarTop />
        <Alert color="primary">
          This is a primary alert — check it out!
        </Alert>
      </div>
    );
  }
}

export default App;
