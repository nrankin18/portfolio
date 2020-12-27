import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Components/Header';
import Home from './Components/Home';
import Footer from './Components/Footer';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Home />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);