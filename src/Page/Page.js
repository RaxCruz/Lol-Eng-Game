import React from "react";
import "./index.scss";
function Page(props) {
  return (
    <div className="Page-Out-Wrap">
      <button onClick={props.minusPage} className="arrow left"></button>
      <button onClick={props.addPage} className="arrow right"></button>
    </div>
  );
}

export default Page;
