import React from "react";
import MandarinInfoContent from "./MandarinContent";
import "./index.scss";
import champion from "../Champion.json";
import Score from "../Score/Score";
import { useState } from "react";
import update from "react-addons-update";
import Hint from "../Hint/Hint";
import { useEffect } from "react";

const MandarinInfo = (props) => {
  const [currentScore, setCurrentScore] = useState([
    new Array(70).fill(false),
    new Array(70).fill(false),
    new Array(70).fill(false),
    new Array(70).fill(false),
    new Array(70).fill(false),
    new Array(70).fill(false),
    new Array(70).fill(false),
  ]);
  const [textRecord, setTextRecord] = useState([
    new Array(70).fill(""),
    new Array(70).fill(""),
    new Array(70).fill(""),
    new Array(70).fill(""),
    new Array(70).fill(""),
    new Array(70).fill(""),
    new Array(70).fill(""),
  ]);

  var arr = [];
  arr = props.data[0].info[0].split(" ");
  const ansArr = arr.filter(
    (item) =>
      item != "," && item != "." && item != ":" && item != "(" && item != ")"
  );
  const handleFormChange = (event) => {
    if (event.target.value === event.target.accept) {
      handleAnswerCorrect(event.target.id, true);
    } else handleAnswerCorrect(event.target.id, false);
    var newValue = update(textRecord[props.page - 1], {
      [event.target.id]: { $set: event.target.value },
    });
    var newTextValue = update(textRecord, {
      [props.page - 1]: { $set: newValue },
    });
    setTextRecord(newTextValue);
  };

  const handleHint = () => {
    var indexOfFirstFalse = currentScore[props.page - 1].indexOf(false);
    const total = ansArr.length;
    if (indexOfFirstFalse >= total) return;

    handleAnswerCorrect(indexOfFirstFalse, true);

    var newValue = update(textRecord[props.page - 1], {
      [indexOfFirstFalse]: { $set: ansArr[indexOfFirstFalse] },
    });
    var newTextValue = update(textRecord, {
      [props.page - 1]: { $set: newValue },
    });
    setTextRecord(newTextValue);
  };

  const handleAnswerCorrect = (id, bool_value) => {
    var newValue = update(currentScore[props.page - 1], {
      [id]: { $set: bool_value },
    });
    var newTextValue = update(currentScore, {
      [props.page - 1]: { $set: newValue },
    });
    setCurrentScore(newTextValue);
  };

  const getTotalScore = () => {
    return ansArr.length;
  };

  return (
    <div className="MandarinInfo-Out-Wrap">
      <MandarinInfoContent
        champion={champion}
        data={props.data}
        textRecord={textRecord}
        page={props.page}
        handleFormChange={handleFormChange}
        handleAnswerCorrect={handleAnswerCorrect}
      />
      <Score
        className="Score"
        currentScore={currentScore[props.page - 1]}
        getTotalScore={getTotalScore}
      />
      <Hint className="Hint" handleHint={handleHint} />
    </div>
  );
};

export default MandarinInfo;
