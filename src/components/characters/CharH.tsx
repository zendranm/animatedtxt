import React from "react";
import "../../styles/CharH.scss";

const CharH = () => {
  return (
    <div className="character">
      <svg viewBox="0 0 590 140">
        <g>
          <line className="path" id="h1" x1="20" y1="0" x2="20" y2="140" />
          <line className="path" id="h2" x1="90" y1="0" x2="90" y2="140" />
          <line className="path" id="h3" x1="20" y1="70" x2="90" y2="70" />
        </g>
      </svg>
    </div>
  );
};

export default CharH;
