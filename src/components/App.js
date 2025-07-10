// src/components/App.js

import React from "react";
import NavBar from "./NavBar";    // ✅ default import
import Home from "./Home";        // ✅ default import
import About from "./About";      // ✅ default import

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
    </div>
  );
}

export default App;
