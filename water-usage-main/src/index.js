import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import App from './App';
import NavbarComponent from './components/partials/Navbar';
import About from './components/About.js';
import FooterComponent from './components/partials/Footer';
import Header from './components/partials/Header';
import Articles from './components/Articles';
import Brands from './components/brands/Brands';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Router>
      <NavbarComponent />
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/brands" element={<Brands />} />
      </Routes>
      {/* <App /> */}
      <FooterComponent />
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
