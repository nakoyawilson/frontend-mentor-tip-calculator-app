import React from "react";

const Input = (props) => {
  return (
    <div className="form-input">
      <span className="input-icon">
        <img src={props.icon} alt="" />
      </span>
      <input type="text" />
    </div>
  );
};

export default Input;
