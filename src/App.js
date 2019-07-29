import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Menu from './components/Menu';
import Story from './components/Story';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Story />
      <Menu />

      <Footer />
    </div>
  );
}

export default App;
