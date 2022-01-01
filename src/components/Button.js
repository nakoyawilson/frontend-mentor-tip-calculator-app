import React from "react";

const Button = (props) => {
  return (
    <div className={props.divClass}>
      <input
        type="radio"
        id={props.btnID}
        name="tipValue"
        value={props.btnValue}
        onChange={props.handleChange}
      />
      <label htmlFor={props.btnID} className={props.buttonClass}>
        {props.btnName}
      </label>
    </div>
  );
};

export default Button;
