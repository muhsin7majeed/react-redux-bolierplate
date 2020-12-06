import React from 'react';
import Axios from 'axios';

import { baseUrl } from 'utils/defaults';
import logo from 'assets/logo.svg';
import Routes from 'routes';
import Navbar from 'components/Navbar';

import './App.css';

const App = () => {
  Axios.defaults.baseURL = baseUrl; // sets default base url

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Navbar />
        <Routes />
      </header>
    </div>
  );
};

export default App;
