import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Header from './components/Header';
import HowItWorks from './components/HowItWorks';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Header/>
      <HowItWorks/>
    </div>
  );
}

export default App;
