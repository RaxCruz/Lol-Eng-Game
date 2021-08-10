import React from "react";
import CardContentLol from "./CardContentLol";
import "./index.scss";

const CardLol = (props) => {
  return (
    <div className="Card-Out-Wrap">
      <CardContentLol imgName={props.imgName} id={props.id} />
    </div>
  );
};

export default CardLol;
