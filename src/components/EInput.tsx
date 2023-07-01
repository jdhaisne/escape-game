import React from "react";
import { useFormContext } from "react-hook-form";
import { findInputError } from "../utils/findInputError";
import { isFormInvalid } from "../utils/isFormInvalid";
import { EInputError } from "./EInputError";

interface EInputProps {
  label: string;
  id: string;
  type: string;
  placeholder: string;
  hasLabel?: boolean;
  validation: any;
  name: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error : string;
}

export const EInput: React.FC<EInputProps> = ({
  label,
  id,
  type,
  placeholder,
  hasLabel,
  validation,
  name,
  onChange,
  error
}) => {
  const { register, formState: { errors } } = useFormContext();
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
        {...register(name, validation)}
        onChange={onChange}
      />
      <p style={{color : 'red'}}>{error}</p>
    </div>
  );
};