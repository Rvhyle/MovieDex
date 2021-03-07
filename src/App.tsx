import React from 'react';
// Components
import Nav from './Components/HomePage/Nav-Component';
import Footer from './Components/Footer';
// Pages
import Home from './Pages/HomePage';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Home/>
      <Footer />
    </div>
  );
}

export default App;
