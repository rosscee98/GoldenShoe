import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import './App.css';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import AppNavbar from './components/AppNavbar';
import AppFooter from './components/AppFooter';
import BasketScreen from './screens/BasketScreen';
import FavouritesScreen from './screens/FavouritesScreen';
import ProductsScreen from './screens/ProductsScreen';
import FaqScreen from './screens/FaqScreen';

function App() {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column min-vh-100">
        <AppNavbar />
        <Route path="/" exact component={HomeScreen} />
        <Route path="/mens" render={props => (
          <ProductsScreen {...props} category="Mens" />
        )}/>
        <Route path="/womens" render={props => (
          <ProductsScreen {...props} category="Womens" />
        )}/>
        <Route path="/kids" render={props => (
          <ProductsScreen {...props} category="Kids" />
        )}/>
        <Route path="/product/:id" component={ProductScreen} />
        <Route path="/basket" component={BasketScreen} />
        <Route path="/favourites" component={FavouritesScreen} />
        <Route path="/faq" component={FaqScreen} />
        <AppFooter />
      </div>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
    </BrowserRouter>
  );
}

export default App;