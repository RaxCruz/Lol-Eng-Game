import React from "react";
import "./index.scss";

const Form = (props) => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  const getWidth = (aString) => {
    var factor = aString.length;
    return factor * 11;
  };

  return (
    <form className="TranslateFrom" onSubmit={handleSubmit}>
      <span>
        <input
          style={{ width: `${getWidth(props.answer)}px` }}
          className={props.answer === props.value ? "answer" : "wrong"}
          value={props.value}
          onChange={props.handleFormChange}
          type="text"
          id={props.id}
          accept={props.answer}
          autocomplete="off"
        />
      </span>
    </form>
  );
};

export default Form;
