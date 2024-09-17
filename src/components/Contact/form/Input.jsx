import React from "react";
import "./input.scss";

const Input = ({ label, id, type, handler, value, errors, required }) => {
  let errorMessage = "";
  const hasError = errors.find((error) => {
    if (error.idref === id) {
      errorMessage = error.message;
      return true;
    } else {
      return false;
    }
  });

  return (
    <div className="of-form-input">
      {hasError && <p className="of-form-input-error">{errorMessage}</p>}
      <label htmlFor={id}>
        {label}
        {required && <span className="required">&#42;</span>}
      </label>
      <input name={id} type={type} onChange={handler} value={value} id={id} />
    </div>
  );
};

export default Input;
