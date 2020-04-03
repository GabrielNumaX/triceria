import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.css';

// import Header from './Component/Header/Header';
// import Main from './Component/Main/Main';
// import Foods from './Component/Foods/Foods';
// import Footer from './Component/Footer/Footer';

import Home from './Container/Home/Home';

import Order from './Container/Order/Order';


function App() {
  return (
    <div className="App">

      <BrowserRouter>

        <Switch>

          <Route path="/" exact component={Home}></Route>

          <Route path="/order" component={Order}></Route>

        </Switch>

      </BrowserRouter>

    </div>
  );
}

export default App;
