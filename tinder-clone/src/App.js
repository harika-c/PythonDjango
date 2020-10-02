import React from 'react';
import Header from './Header';
import TinderCards from './TinderCards';
import SwipeButtons from './SwipeButtons.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <h2></h2>
      <TinderCards />
      <SwipeButtons />
    </div>
  );
}

export default App;
