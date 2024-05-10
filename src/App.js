import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/nav2";
//import Footer from "./components/footer";
import Home from "./Home";

import Upload from "./components/upload";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/Upload" element={<Upload />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/" element={<Home />} />
        </Routes>{" "}
      </div>
    </Router>
  );
}

export default App;
