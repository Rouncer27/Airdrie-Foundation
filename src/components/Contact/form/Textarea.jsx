import React from "react";
import "./textarea.scss";

const Textarea = ({
  value,
  handler,
  errors,
  size,
  position,
  title,
  type,
  nameId,
  required,
  rows,
}) => {
  let errorMessage = "";
  const hasError = errors.find((error) => {
    if (error.idref === nameId) {
      errorMessage = error.message;
      return true;
    } else {
      return false;
    }
  });

  return (
    <div className="of-form-textarea">
      {hasError && <p className="of-form-textarea-error">{errorMessage}</p>}
      <label htmlFor={nameId}>
        {title} <span className="required">&#42;</span>
        <textarea
          name={nameId}
          type={type}
          value={value}
          id={nameId}
          onChange={handler}
          aria-required={required}
          required={required}
          rows={rows ? rows : "5"}
        />
      </label>
    </div>
  );
};

export default Textarea;
