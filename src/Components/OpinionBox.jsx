import React from "react";
import { css } from "@emotion/css";

function OpinionBox(props) {
  return (
    <div
      className={css`
        background-color: #ffffff;
        border-radius: 20px;
        box-shadow: 0px 10px 12px rgba(0, 0, 0, 0.1);
        transition: 0.3s ease-in-out;
        position: relative;
        width: 90%;
        height: 100px;
        margin: 20px;
        display: flex;
        border-radius: 10px;
        align-items: center;
        margin-left: auto;
        margin-right: auto;

        img {
          height: 100%;
          width: max(150px);
          object-fit: contain;
          margin: 30px;
        }
        h2 {
          float: right;
          font-size: 60px;
          font-family: Mukta;
          margin-right: 30px;
        }
      `}
    >
      <div
        className={css`
          width: 100%;
        `}
      >
        <img src={props.logo} />
      </div>

      <div>
        <h2>{props.name}</h2>
      </div>

      <div>
        <h2>{props.rating}</h2>
      </div>
    </div>
  );
}

export default OpinionBox;
