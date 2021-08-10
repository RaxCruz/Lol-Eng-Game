import React from "react";
import champion from "../Champion.json";
import SelectCharContent from "./SelectCharContent";
import "./index.scss";

const SelectChar = () => {
  const championIcon = champion.map((lol) => {
    return <SelectCharContent icon={lol.icon} name={lol.name[0]} />;
  });
  return <div className="SelectChar-Out-Wrap">{championIcon}</div>;
};

export default SelectChar;
