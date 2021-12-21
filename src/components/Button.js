import React from "react";

const Button = (props) => {
  return (
    <div className={props.divClass}>
      <button
        className={props.buttonClass}
        value={props.btnValue}
        onClick={props.clickFunction}
      >
        {props.btnName}
      </button>
    </div>
  );
};

export default Button;
