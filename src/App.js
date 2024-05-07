import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/nav';
//import Footer from "./components/footer";
import Home from "./Home" ; 
import Browse from "./BrowsePhotos" ; 




function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Browse" element={<Browse />} />
      </Routes>
      {/* <Footer/> */}
    </Router>
  );
}

export default App;
