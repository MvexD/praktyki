import React from "react";
import img1 from "../images/img1.jpg";
import img2 from "../images/img2.jpg";
import img3 from "../images/img3.jpg";
import { css } from "@emotion/css";

function Mozaique() {
  return (
    <div
      className={css`
        width: 90%;
        display: block;
        margin-left: auto;
        margin-right: auto;
        margin-top: 20px;
        img {
          border-radius: 20px;
        }
      `}
    >
      <div
        className={css`
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
          grid-gap: 20px;
          align-items: center;
          margin: auto;
          justify-content: center;
        `}
      >
        <div>
          <div
            className={css`
              img {
                height: 400px;
                object-fit: cover;
                width: 100%;
              }
            `}
          >
            <img src={img1} />
          </div>
        </div>
        <div>
          <div
            className={css`
              img {
                height: 400px;
                object-fit: cover;
                width: 100%;
              }
            `}
          >
            <img src={img2} />
          </div>
        </div>
      </div>
      <div
        className={css`
          img {
            margin-top: 20px;
            width: 100%;
            object-fit: cover;
            height: 600px;
          }
        `}
      >
        <img src={img3} />
      </div>
    </div>
  );
}

export default Mozaique;
