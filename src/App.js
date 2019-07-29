import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Menu from './components/Menu';
import Story from './components/Story';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Story />
      <Menu />
    </div>
  );
}

export default App;
