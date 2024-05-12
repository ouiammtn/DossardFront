import React, { useState, useEffect } from "react";
import { FaDownload } from 'react-icons/fa';
import "../styles/hero.css";
import Image1 from "../assets/1.jpg";

const Hero = () => {
  const [bibNumber, setBibNumber] = useState("");
  const [images, setImages] = useState([]);
  const [error, setError] = useState("");

  const backendBaseURL = "http://127.0.0.1:5000";

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`${backendBaseURL}/user/find_folder?number=${bibNumber}`);
      if (!response.ok) {
        throw new Error("Error fetching images");
      }
      const data = await response.json();
      
      const correctedImages = data.images.map(image => `${backendBaseURL}/${image.replace(/\\/g, '/')}`);
      
      setImages(correctedImages);
      setError("");
    } catch (error) {
      setError(error.message || "Error fetching images");
      setImages([]);
    }
  };

  useEffect(() => {
    const downloadImage = (url, filename) => {
      const anchor = document.createElement('a');
      anchor.href = url;
      anchor.download = filename;
      anchor.click();
    };

    const handleDownload = (imageUrl, index) => {
      fetch(imageUrl)
        .then(response => response.blob())
        .then(blob => {
          const url = window.URL.createObjectURL(blob);
          downloadImage(url, `image_${index}`);
          window.URL.revokeObjectURL(url);
        })
        .catch(error => console.error('Error downloading image:', error));
    };

    const downloadButtons = document.querySelectorAll('.download-overlay button');
    downloadButtons.forEach((button, index) => {
      button.addEventListener('click', () => {
        handleDownload(images[index], index);
      });
    });

    return () => {
      downloadButtons.forEach(button => {
        button.removeEventListener('click', () => {});
      });
    };
  }, [images]);

  return (
    <>
      <div className="hero">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-8 title">
              <h1 className="hero_heading hero_heading--outline">
                Remember Your Triumph
              </h1>
              <span>You get Not Only Images, But Memories</span>
            </div>
          </div>
        </div>
  
        <div className="search-bar" style={{ display: "flex", justifyContent: "center" }}>
          <div className="container">
            <div className="row">
              <form onSubmit={handleFormSubmit} style={{ display: "flex", gap: "6px", width: "100%" }}>
                <input
                  id="typeahead-participants-with-postal-code"
                  className="fnumber-input"
                  placeholder="Enter Your BiB Number"
                  value={bibNumber}
                  onChange={(e) => setBibNumber(e.target.value)}
                />
                <button type="submit" className="recherche">
                  Find my pictures
                </button>
              </form>
            </div>
          </div>
        </div>
  
        {error && <div className="error-message">{error}</div>}
      </div>

      <div className="container">
        <div className="row">
          {images.length === 0 && (
            <div className="col-md-12">
              <p className="no-images-message">Sadly you weren't captured in any images 😞</p>
            </div>
          )}
          {images.map((imageUrl, index) => (
            <div key={index} className="col-md-6 col-lg-4">
              <div className="image-container">
                <img
                  src={imageUrl}
                  alt={`Image ${index}`}
                  style={{ width: "350px", height: "350px", borderRadius: "5px" }}
                />
                <div className="download-overlay">
                  <button className="download"><FaDownload /></button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );  
};

export default Hero;
