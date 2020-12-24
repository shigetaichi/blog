import React from "react";

const TextInput = (props) => {
  return (
    <React.Fragment>
      <input
        type={props.type}
        defaultValue={props.defaultValue}
        onChange={(e) => props.onChange(e.target.value)}
        placeholder={props.placeholder}
      />
    </React.Fragment>
  );
};

export default TextInput;
