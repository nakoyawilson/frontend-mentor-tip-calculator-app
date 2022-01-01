// import React from "react";

const Reset = (props) => {
  return (
    <div className={props.divClass}>
      <button
        className={props.buttonClass}
        onClick={props.clickFunction}
        id={props.btnID}
        disabled={props.buttonState}
      >
        {props.btnName}
      </button>
    </div>
  );
};

export default Reset;
