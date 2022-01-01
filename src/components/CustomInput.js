import React from "react";

const CustomInput = (props) => {
  return (
    <div className={props.divClass}>
      <input
        type="text"
        className={props.inputClass}
        // value={props.inputValue}
        placeholder={props.inputValue}
        onChange={props.handleChange}
        // disabled
      />
    </div>
  );
};

export default CustomInput;
