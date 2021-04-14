import React from "react";
import CtaButton from "./CtaButton";
import { css } from "@emotion/css";
import image from "../images/mainscreen.png";

const bigText = css`
  p {
    color: yellow;
    font-size: 50px;
  }
`;

function Header() {
  return (
    <div
      className={css`
        background-color: green;
        background: url(${image});
        width: 100%;
        height: 100vh;
        background-repeat: no-repeat;
        background-size: cover;
      `}
    >
      <div
        className={css`
          @import url("https://fonts.googleapis.com/css2?family=Merriweather:wght@900&display=swap");
          @import url("https://fonts.googleapis.com/css2?family=Mukta:wght@600;700&display=swap");
          left: 44%;
          position: absolute;
          width: 500px;
          height: 100%;
          h2 {
            font-size: 140px;
            font-family: Merriweather;
            font-weight: black;
            margin: 0px;
            margin-top: 50%;
          }
          p {
            font-family: Mukta Regular;
            font-size: 24px;
          }
        `}
      >
        <h2>Niuqi</h2>
        <p>
          Bazy kauczukowe przeznaczone w szczególności do łamliwych, kruchych,
          problematycznych paznokci. Bazą kauczukową można przedłużyć,
          nadbudować oraz wyrównać koloryt i nierówności powierzchni paznokcia.
        </p>
        <CtaButton />
      </div>
    </div>
  );
}

export default Header;
