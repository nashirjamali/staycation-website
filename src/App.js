import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "assets/scss/style.scss";
import LandingPages from "pages/LandingPages";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPages />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
