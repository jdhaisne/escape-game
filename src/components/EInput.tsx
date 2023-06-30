// import { EInputStatus } from "../interfaces/interface_App";
import { useFormContext } from "react-hook-form";
import { motion } from "framer-motion";
import { findInputError } from "../utils/findInputError";
import { isFormInvalid } from "../utils/isFormInvalid";

export const EInput = ({
  label,
  id,
  type,
  placeholder,
  hasLabel,
  validation,
  name,
}: {
  label: string;
  id: string;
  type: string;
  placeholder: string;
  hasLabel?: boolean;
  validation: any;
  name: any;
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const inputError = findInputError(errors, label);
  const isInvalid = isFormInvalid(inputError);
  return (
    <>
      <div>
        {" "}
        {hasLabel ? (
          <div>
            <label htmlFor={id}>{label}</label>
          </div>
        ) : (
          <></>
        )}
        {isInvalid && (
          <EInputError
            message={inputError.error.message}
            key={inputError.error.message}
          />
        )}
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          {...register(name, validation)}
        />
      </div>
    </>
  );
};

const EInputError = ({ message }: { message: string }) => {
  return <motion.p {...framer_error}>{message}</motion.p>;
};

const framer_error = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 10 },
  transition: { duration: 0.2 },
};
