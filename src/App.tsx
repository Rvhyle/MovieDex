import React from 'react';
import logo from './logo.svg';
// Components
import Nav from './Components/Nav-Component';
// Pages
import Home from './Pages/HomePage';

function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
    </div>
  );
}

export default App;
