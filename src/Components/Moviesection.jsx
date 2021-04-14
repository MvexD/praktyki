import { css } from "@emotion/css";
import React from "react";
import video from "../images/movie.mp4";

function Moviesection() {
  return (
    <div
      className={css`
        background-color: green;
      `}
    >
      <div>
        <video
          autoPlay
          muted
          className={css`
            width: 100%;
            height: 110vh;
            object-fit: cover;
          `}
        >
          <source src={video} type="video/mp4"></source>
        </video>
      </div>
    </div>
  );
}

export default Moviesection;
