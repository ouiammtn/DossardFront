import React, { useState } from "react";
import { Link } from 'react-router-dom';
import "../styles/nav.css";
import Image from 'react-bootstrap/Image';

function Navbar() {
  const [showResponsiveNav, setShowResponsiveNav] = useState(false);

  const toggleNavbar = () => {
    setShowResponsiveNav(!showResponsiveNav);
  };

  return (
    <header style={{ position: "relative", zIndex: "9999" }}> 
      <Link to="/Home" style={{textDecoration:"none", margin:0}}>
        <div className="logoPage">
          <h3 style={{margin:"0",marginTop:"10px",color:"#ffff",letterSpacing:"1px", fontSize:"35px"}}>DossardSearch</h3>
        </div>
      </Link>
      {/* <Image src="camera.png" style={{ width: '50px', height: '50px'}} /> */}
      <nav className={showResponsiveNav ? "responsive_nav" : ""}>
        <Link to="/Home">Home</Link>
        <Link to="/BrowsePhotos">Browse Photos</Link>
      </nav>
    </header>
  );
}

export default Navbar;
