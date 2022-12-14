import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'assets/scss/style.scss';
import LandingPage from 'pages/LandingPage';
import Example from 'pages/Example';
import DetailPage from 'pages/DetailsPage';
import Checkout from 'pages/Checkout';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/properties/:id" element={<DetailPage />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/example" element={<Example />} />
        </Routes>
        <ToastContainer></ToastContainer>
      </div>
    </Router>
  );
}

export default App;
