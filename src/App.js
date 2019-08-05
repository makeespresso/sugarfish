import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Header from './components/Header';
import Story from './components/Story';
import Footer from './components/Footer';
import Location from './components/Location';
import PicCarousel from './components/PicCarousel';
import Menu from './components/Menu';

function App() {
  return (
    <div className="App">

      <NavBar />
      <Header />
      <PicCarousel />
      <Story />
      <Menu />
      <Location />
      <Footer />
    </div>
  );
}

export default App;
