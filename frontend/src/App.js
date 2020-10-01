import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import './App.css';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import MensScreen from './screens/MensScreen';
import AppNavbar from './components/AppNavbar';
import AppFooter from './components/AppFooter';

function App() {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column min-vh-100">
        <AppNavbar />
        <Route path="/" exact component={HomeScreen} />
        <Route path="/product/:id" component={ProductScreen} />
        <Route path="/mens" component={MensScreen} />
        <AppFooter />
      </div>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
    </BrowserRouter>
  );
}

export default App;