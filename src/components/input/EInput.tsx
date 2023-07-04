import React from "react";

import './style.scss'

export const EInput: React.FC<IEInputForm> = ({
  label,
  id,
  type,
  placeholder,
  hasLabel,
  onChange,
  error
}) => {

  return (
    <div>
      {hasLabel && <label htmlFor={id}>{label}</label>}
      <input
        className="EInput"
        id={id}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
      />
      <p className="error-message">{error}</p>
    </div>
  );
};