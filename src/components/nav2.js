import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/nav.css";

function Navbar() {
  const [showResponsiveNav, setShowResponsiveNav] = useState(false);

  const toggleNavbar = () => {
    setShowResponsiveNav(!showResponsiveNav);
  };

  return (
    <header style={{ position: "relative", zIndex: "9999" }}>
      <Link to="/Home" style={{ textDecoration: "none", margin: 0 }}>
        <div className="logoPage">
          <h3
            style={{
              margin: "0",
              marginTop: "10px",
              letterSpacing: "1px",
              fontSize: "35px",
            }}
          >
            Dossard<span>Search</span>
          </h3>
        </div>
      </Link>
      {/* <Image src="camera.png" style={{ width: '50px', height: '50px'}} /> */}
      <nav className={showResponsiveNav ? "responsive_nav" : ""}>
        <Link to="/Home">Home</Link>
        <Link to="/Upload">Upload Photos</Link>
      </nav>
    </header>
  );
}

export default Navbar;
