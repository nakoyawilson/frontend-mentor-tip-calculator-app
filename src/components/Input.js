import React from "react";

const Input = (props) => {
  return (
    <div className="form-input">
      <span className="input-icon">
        <img src={props.icon} alt="" />
      </span>
      <input
        id={props.inputID}
        type="number"
        placeholder="0"
        onChange={props.calculateFunction}
      />
    </div>
  );
};

export default Input;
