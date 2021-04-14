import React from "react";
import FeatureBox from "./FeatureBox";
import image from "../images/1.png";
import { css } from "@emotion/css";

function Feature() {
  return (
    <div
      className={css`
        width: 100%;
        font-family: Merriweather;
        display: flex;
        flex: 1;
        flex-direction: column;
        align-items: center;
        padding-top: 40px;

        p {
          font-family: Merriweather;
          font-style: normal;
          font-weight: 900;
          font-size: 96px;
          color: #2e3142;
          text-align: center;
        }
      `}
    >
      <p>Wybierz swój kolor!</p>
      <div
        className={css`
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
        `}
      >
        <FeatureBox image={image} color="Nude" price="23,99 pln" />
        <FeatureBox image={image} color="Różowy" price="23,99 pln" />
        <FeatureBox image={image} color="Złoty kryształowy" price="23,99 pln" />
        <FeatureBox image={image} color="Fajny tęczowy" price="23,99 pln" />
      </div>
    </div>
  );
}

export default Feature;
