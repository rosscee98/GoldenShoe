import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import './App.css';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/" className="navbar-brand">
          <img src="/images/logo192.png" width="35" height="35" alt="Golden Shoe" />
          <p>Golden Shoe</p>
        </Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/product/1" className="nav-link">Product #1</Link>
            </li>
          </ul>
        </div>
      </nav>
      <Route path="/" exact component={HomeScreen} />
      <Route path="/product/:id" component={ProductScreen} />
    </Router>
  );
}

export default App;