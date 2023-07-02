import React from "react";
import { useFormContext } from "react-hook-form";
import { findInputError } from "../utils/findInputError";
import { isFormInvalid } from "../utils/isFormInvalid";
import { EInputError } from "./EInputError";



export const EInput: React.FC<IEInputForm> = ({
  label,
  id,
  type,
  placeholder,
  hasLabel,
  name,
  onChange,
  error
}) => {
  const { formState: { errors } } = useFormContext();
  const inputError = findInputError(errors, name);
  const isInvalid = isFormInvalid(inputError);

  return (
    <div>
      {hasLabel && <label htmlFor={id}>{label}</label>}
      {isInvalid && (
        <EInputError
        message={(inputError as any)?.error?.message || ""}
        key={(inputError as any)?.error?.message || ""}
      />
      )}
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
      />
      <p style={{color : 'red'}}>{error}</p>
    </div>
  );
};