import React from "react";
import Form from "../Form/Form";
import { useState } from "react";
import update from "react-addons-update";

const MandarinInfoContent = (props) => {
  const { name, info } = props.data[0];
  const textRecord = props.textRecord;
  const handleFormChange = props.handleFormChange;
  const handleAnswerCorrect = props.handleAnswerCorrect;
  const index = props.page - 1;
  //const [formValue, setFormValue] = useState(textRecord[index]);
  // const handleForm = (event) => {
  //   var newValue = update(formValue, {
  //     [event.target.id]: { $set: event.target.value },
  //   });
  //   setFormValue(newValue);
  // };

  var arr = [];
  arr = info[0].split(" ");
  const ansArr = arr.filter(
    (item) =>
      item != "," && item != "." && item != ":" && item != "(" && item != ")"
  );
  var formKey = 0;
  const tranlateForm = arr.map((data) => {
    if (data === ",") {
      return <h3 className="Punctuation-Mark">,</h3>;
    }
    if (data === ".") {
      return <h3 className="Punctuation-Mark">.</h3>;
    }
    if (data === ":") {
      return <h3 className="Punctuation-Mark">:</h3>;
    }
    if (data === "(") {
      return <h3 className="Punctuation-Mark-PurPle">(</h3>;
    }
    if (data === ")") {
      return <h3 className="Punctuation-Mark-PurPle">)</h3>;
    }
    return (
      <Form
        value={textRecord[index][formKey]}
        handleFormChange={handleFormChange}
        id={formKey}
        answer={ansArr[formKey++]}
        handleAnswerCorrect={handleAnswerCorrect}
      />
    );
  });
  return (
    <div className="MandarinInfo-Main">
      <div className="b-overflow"> {tranlateForm}</div>
    </div>
  );
};
export default MandarinInfoContent;
