import React from "react";
import EngInfoContent from "./EngInfoContent";
import "./index.scss";

const EngInfo = (props) => {
  return (
    <div className="Eng-Out-Wrap">
      <EngInfoContent
        id={props.id}
        name={props.name}
        data={props.data}
        param={props.param}
      />
    </div>
  );
};

export default EngInfo;
