import React from "react";
import Image1 from "../assets/1.jpg";
import Image2 from "../assets/2.jpg";
import Image3 from "../assets/3.jpg";
import Image4 from "../assets/4.jpg";
import Image5 from "../assets/5.jpg";
import Image6 from "../assets/6.jpg";
import Image7 from "../assets/7.jpg";
import Image8 from "../assets/8.jpg";
import Image9 from "../assets/9.jpg";
import Image10 from "../assets/10.jpg";
import Image11 from "../assets/11.jpg";
import Image12 from "../assets/12.jpg";
import Image13 from "../assets/13.jpg";
import Image14 from "../assets/14.jpg";
import Image15 from "../assets/15.jpg";
import Image16 from "../assets/16.jpg";
function Gallery() {
  return (
    <div className="gallery">
      <h2>Gallery</h2>
      <div>
        <div className="image-container">
          <img src={Image1} alt="Image 1" />
          <img src={Image2} alt="Image 2" />
          <img src={Image3} alt="Image 3" />
          <img src={Image4} alt="Image 4" />
        </div>
        <div className="image-container">
          <img src={Image5} alt="Image 5" />
          <img src={Image6} alt="Image 6" />
          <img src={Image7} alt="Image 7" />
          <img src={Image8} alt="Image 8" />
        </div>
        <div className="image-container">
          <img src={Image9} alt="Image 9" />
          <img src={Image10} alt="Image 10" />
          <img src={Image11} alt="Image 11" />
          <img src={Image12} alt="Image 12" />
        </div>
        <div className="image-container">
          <img src={Image13} alt="Image 13" />
          <img src={Image14} alt="Image 14" />
          <img src={Image15} alt="Image 15" />
          <img src={Image16} alt="Image 16" />
        </div>
      </div>
    </div>
  );
}

export default Gallery;
