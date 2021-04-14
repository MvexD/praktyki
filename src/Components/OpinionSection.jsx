import React from "react";
import OpinionBox from "./OpinionBox";
import wizazlogo from "../images/wizaz.svg";
import biedronkalogo from "../images/biedronkalogo.png";
import blixlogo from "../images/blixlogo.svg";
import facebooklogo from "../images/facebooklogo3.png";
import { css } from "@emotion/css";

function OpinionSection() {
  return (
    <div
      className={css`
        iframe {
          background: black;
          width: 1280px;
          height: 720px;
          display: block;
          margin-left: auto;
          margin-right: auto;
          border-radius: 20px;
        }
        p {
          align-items: center;
          font-family: Merriweather;
          font-style: normal;
          font-weight: 900;
          font-size: 96px;
          line-height: 121px;
          text-align: center;
          letter-spacing: 0.05em;
          color: var(--maincolor);
        }
      `}
    >
      <p>Poznaj opinię innych!</p>
      <OpinionBox logo={wizazlogo} name="⭐" rating="5/5" />
      <OpinionBox logo={biedronkalogo} name="🔥" rating="HIT" />
      <OpinionBox logo={facebooklogo} name="👍" rating="150.000" />
      <OpinionBox logo={blixlogo} name="⭐" rating="4.5/5" />

      <div
        className={css`
           {
            height: 20px;
            width: 20px;
            background-color: black;
            background: black;
          }
        `}
      >
        <iframe
          src="https://www.youtube.com/embed/eqTsXJpJtSk"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}

export default OpinionSection;
