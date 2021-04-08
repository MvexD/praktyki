import React from "react";

function FeatureBox(props) {
  return (
    <div className="a-box">
      <div className="a-b-img">
        <img src={props.image} />
      </div>
      <div className="s-b-text">
        <h2>{props.color}</h2>
      </div>
      <div className="p-b-text">
        <h2>{props.price}</h2>
      </div>
    </div>
  );
}

export default FeatureBox;
