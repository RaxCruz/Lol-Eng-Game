import React from "react";
import "./index.scss";

function Hint(props) {
  return (
    <div className="Hint-Out-Wrap">
      <button onClick={props.handleHint}>
        <h3>提示</h3>
        <p>Hint</p>
      </button>
    </div>
  );
}

export default Hint;
