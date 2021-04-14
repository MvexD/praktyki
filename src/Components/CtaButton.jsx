import React from "react";
import { css } from "@emotion/css";

function CtaButton() {
  return (
    <div
      className={css`
        width: 260px;
        height: 72px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #ff696a;
        box-sizing: 5px 10px 30px rgba(2, 238, 255, 0.336);
        border-radius: 20px;
        font-family: Mukta Regular;
        color: #ffffff;

        p {
          transform: all ease 0.5s;
          color: #ffffff;
          font-size: 28px;
          font-family: Mukta;
          font-weight: 600;
          text-decoration: none;
          width: 100%;
          display: flex;
          justify-content: center;
        }
        a {
          text-decoration: none;
          width: 100%;
        }
      `}
    >
      <a href="#">
        <p>Kup Teraz!</p>
      </a>
    </div>
  );
}

export default CtaButton;
