import React from "react";
import "../styles/hero.css";

const hero = () => {
  return (
    <div className="hero">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-8 title">
            <h1 className="hero__heading hero__heading--outline">
              Remember Your Triumph
            </h1>
            <span>You get Not Only Images,But Memories</span>
          </div>
        </div>
      </div>

      <div
        className="search-bar"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <div className="container">
          <div className="row"></div>
          <form style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
            <input
              id="typeahead-participants-with-postal-code"
              className="fnumber-input"
              placeholder="Enter Your BiB Number"
            />
            <button className="recherche">Rechercher Mes Photos</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default hero;
