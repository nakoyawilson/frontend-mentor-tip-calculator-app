import React from "react";

const Button = (props) => {
  return (
    <div>
      <button className={props.buttonClass}>{props.btnValue}</button>
    </div>
  );
};

export default Button;
