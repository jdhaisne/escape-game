import React from "react";

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
        id={id}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
      />
      <p className="error-message">{error}</p>
    </div>
  );
};