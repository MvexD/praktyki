import React from "react";
import video from "../images/movie.mp4";

<script
  src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.8/ScrollMagic.min.js"
  integrity="sha512-8E3KZoPoZCD+1dgfqhPbejQBnQfBXe8FuwL4z/c8sTrgeDMFEnoyTlH3obB4/fV+6Sg0a0XF+L/6xS4Xx1fUEg=="
  crossorigin="anonymous"
></script>;
<script
  src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.8/plugins/animation.gsap.js"
  integrity="sha512-judXDFLnOTJsUwd55lhbrX3uSoSQSOZR6vNrsll+4ViUFv+XOIr/xaIK96soMj6s5jVszd7I97a0H+WhgFwTEg=="
  crossorigin="anonymous"
></script>;
<script
  src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.3/TweenMax.min.js"
  integrity="sha512-DkPsH9LzNzZaZjCszwKrooKwgjArJDiEjA5tTgr3YX4E6TYv93ICS8T41yFHJnnSmGpnf0Mvb5NhScYbwvhn2w=="
  crossorigin="anonymous"
></script>;

function Moviesection() {
  return (
    <div id="movie">
      <div className="intro">
        <video autoPlay muted>
          <source src={video} type="video/mp4"></source>
        </video>
      </div>
    </div>
  );
}

export default Moviesection;
