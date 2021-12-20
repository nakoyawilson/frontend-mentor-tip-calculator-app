import React from "react";

const CustomInput = (props) => {
  return (
    <div>
      <input
        type="text"
        className={props.inputClass}
        value={props.inputValue}
        disabled
      />
    </div>
  );
};

export default CustomInput;
