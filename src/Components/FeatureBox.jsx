import React from "react";
import { css } from "@emotion/css";

function FeatureBox(props) {
  return (
    <div
      className={css`
        background-color: #ffffff;
        width: 300px;
        height: 450px;
        margin: 10px;
        border-radius: 10px;
        overflow: hidden;
        box-shadow: 0px 10px 12px rgba(0, 0, 0, 0.1);
        transition: 0.3s ease-in-out;
        position: relative;
      `}
    >
      <div
        className={css`
          width: 75%;
          height: 50%;
          margin-left: 10%;

          img {
            padding: 15px;
            width: 100%;
            height: 100%;
          }
        `}
      >
        <img src={props.image} />
      </div>
      <div
        className={css`
          width: 100%;
          height: 20%;
          background-color: #ffffff;
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
          flex-direction: column;
          h2 {
            margin: 0px;
            color: var(--maincolor);
            font-size: 32px;
            font-family: Mukta;
            font-weight: bold;
            display: block;
            display: -webkit-box;
            max-width: 80%;
            margin-top: 25px;
            -webkit-line-clamp: 4;
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-overflow: ellipsis;
          }
        `}
      >
        <h2>{props.color}</h2>
      </div>
      <div
        className={css`
          width: 100%;
          height: 20%;
          background-color: #ffffff;
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
          flex-direction: column;
          font-family: Mukta;

          h2 {
            font-size: 20px;
            color: var(--secondarycolor);
          }
        `}
      >
        <h2>{props.price}</h2>
      </div>
    </div>
  );
}

export default FeatureBox;
