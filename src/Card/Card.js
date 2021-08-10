import React from "react";
import CardContent from "./CardContent";
import "./index.scss";

const Card = (props) => {
  return (
    <div className="Card-Out-Wrap">
      <CardContent name={props.name} id={props.id} />
    </div>
  );
};

export default Card;
