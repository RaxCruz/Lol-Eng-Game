import React from "react";
import "./index.scss";
import EngInfo from "../EngInfo/EngInfo";
import MandarinInfo from "../MandarinInfo/MandarinInfo";
import Page from "../Page/Page";
import champions from "../Champion.json";
import { useState } from "react";

function Game(props) {
  const [currentPage, setCurrentPage] = useState(1);

  const perPage = 1;
  const indexOfLastData = currentPage * perPage;
  const indexOfFirstData = indexOfLastData - perPage;

  const currentData = props.mode.slice(indexOfFirstData, indexOfLastData);

  const addPage = () => {
    if (currentPage < props.mode.length) setCurrentPage(currentPage + 1);
  };
  const minusPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };
  return (
    <div className="Game-Out-Wrap">
      <EngInfo
        name={props.name}
        id={props.id}
        data={currentData}
        param={props.param}
      />
      <MandarinInfo
        name={props.name}
        id={props.id}
        data={currentData}
        page={currentPage}
      />
      <Page addPage={addPage} minusPage={minusPage} className="page" />
    </div>
  );
}

export default Game;
