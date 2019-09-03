import React from 'react';
import logo from './logo.svg';
import './App.css';
// import file to be used
import Nav from './components/Nav';

class App extends React.Component {
  render () {
    return (
      <div className = "App">
        <Nav />
      </div>
    );
  }
}

export default App;
