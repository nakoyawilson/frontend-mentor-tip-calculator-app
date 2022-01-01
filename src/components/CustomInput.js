import React from "react";

const CustomInput = (props) => {
  return (
    <div className={props.divClass}>
      <input
        type="number"
        className={props.inputClass}
        placeholder={props.inputValue}
        onChange={props.handleChange}
      />
    </div>
  );
};

export default CustomInput;
