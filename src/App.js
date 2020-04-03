import React from 'react';

import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';

import Header from './Component/Header/Header';
import Main from './Component/Main/Main';
import Footer from './Component/Footer/Footer';

function App() {
  return (
    <div className="App">

      <BrowserRouter>

        {/* <Route path="/" component={Header}/> */}

        <Header></Header>

        <Main></Main>

        <Footer></Footer>

      </BrowserRouter>

      {/* <Header></Header>

      <Main></Main> */}
      
    </div>
  );
}

export default App;
