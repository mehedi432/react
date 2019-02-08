import React, { Component } from 'react';
import './App.css';

// Custom imports
import Header from './components/Header';
import Home from './components/Home';

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <Header />
          <Home />
        </header>
      </div>
    );
  }
}

export default App;
