import React from "react";
import "./index.scss";

function Score(props) {
  return (
    <div className="Score-Out-Wrap">
      <p className="up">{props.currentScore.filter(Boolean).length}</p>
      <div></div>
      <p className="down">{props.getTotalScore()}</p>
    </div>
  );
}

export default Score;
