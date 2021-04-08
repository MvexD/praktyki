import React from "react";
import FeatureBox from "./FeatureBox";
import image from "../images/1.png";

function Feature() {
  return (
    <div id="features">
      <p>Wybierz swój kolor!</p>
      <div className="a-container">
        <FeatureBox image={image} color="Nude" price="23,99 pln" />
        <FeatureBox image={image} color="Różowy" price="23,99 pln" />
        <FeatureBox image={image} color="Złoty kryształowy" price="23,99 pln" />
        <FeatureBox image={image} color="Fajny tęczowy" price="23,99 pln" />
      </div>
    </div>
  );
}

export default Feature;
