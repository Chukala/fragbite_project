import React from 'react';
//import logo from './logo.svg';
//import HomeMenu from './components/HomeMenu';
import './App.scss';
//import Login from './components/Login';
import Footer from './components/Footer';
//import Welcome from './components/Welcome';
//import Layout from './components/Layout';
//import Grid from './components/Grid';
import FragbiteHomeDark from './components/FragbiteHomeDark';
import HomeMenuDark from './components/HomeMenuDark';


function App() {
  return (
    <div className="App">
      <HomeMenuDark/>
      <FragbiteHomeDark/>
      <Footer/>
    </div>
  );
}

export default App;
