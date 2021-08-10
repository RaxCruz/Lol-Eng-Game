import { prop } from "cheerio/lib/api/attributes";
import React from "react";
import { Link } from "react-router-dom";

const SelectCharContent = (props) => {
  return (
    <Link to={`/${props.name}/skills`} className="SelectCharContent-Out-Wrap">
      <img className="Champion-Icon" src={props.icon} alt="no-image" />
      <h3 className="Champion-Name">{props.name}</h3>
    </Link>
  );
};

export default SelectCharContent;
