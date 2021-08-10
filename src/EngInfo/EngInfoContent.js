import { prop } from "cheerio/lib/api/attributes";
import React from "react";
import champions from "../Champion.json";
import { useParams } from "react-router";
const EngInfoContent = (props) => {
  return (
    <div className="Eng-Main">
      <div className="Eng-title">{props.data[0].name[1]}</div>
      {props.param === "skills" ? (
        <div className="Eng-title Eng-title-Eng">{props.data[0].name[0]}</div>
      ) : (
        <div className="space"></div>
      )}

      <div className="Eng-Img">
        <div className="Eng-Description">{props.data[0].info[1]}</div>
      </div>
    </div>
  );
};

export default EngInfoContent;
