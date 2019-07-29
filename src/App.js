import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Header from './components/Header';
import Menu from './components/Menu';
import Story from './components/Story';
import Footer from './components/Footer';
import Location from './components/Location';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <Story />
      <Menu />
      <Location />
      <Footer />
    </div>
  );
}

export default App;
