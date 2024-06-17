import React from "react";
import "./input.scss";

const Input = ({ label, id, type, handler, value, required, size }) => {
  return (
    <div className={`adcf-form-input adcf-form-input-${size}`}>
      <label htmlFor={id}>
        {label}
        {required && <span className="required">&#42;</span>}
      </label>
      <input name={id} type={type} onChange={handler} value={value} id={id} />
    </div>
  );
};

export default Input;
