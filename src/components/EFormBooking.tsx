import React, { useState } from "react";
import { EInput } from "./EInput";
import { validateField } from "../services/ESFieldValidation";
import { fieldValidations } from "../utils/formValidation";

export const EFormBooking: React.FC<IEFormBooking> = ({
  index,
  onChange
}) => {
  const [errors, setErrors] = useState<{ [key: string]: string }>({
    firstName: "",
    lastName: "",
    birthday: ""
  });

  const handleFieldChange = (field: string, value: string) => {
    const errorMessage = validateField(value, fieldValidations[field]);

    if (!errorMessage) {
      onChange(index, field, value);
      setErrors((prevErrors) => ({ ...prevErrors, [field]: "" }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, [field]: errorMessage }));
    }
  };

  return (
    <div>
      <h4>Participant {index + 1}</h4>
      <EInput
        label="First Name"
        id={`firstName`}
        type="text"
        placeholder="First Name"
        hasLabel={false}
        name={`firstName`}
        onChange={(e) => handleFieldChange("firstname", e.target.value)}
        error={errors["firstname"]}
      />
      <EInput
        label="Last Name"
        id={`lastName`}
        type="text"
        placeholder="Last Name"
        hasLabel={false}
        name={`lastName`}
        onChange={(e) => handleFieldChange("lastname", e.target.value)}
        error={errors["lastname"]}
      />
      <EInput
        label="Date of Birth"
        id={`birthday`}
        type="text"
        placeholder="Date of Birth"
        hasLabel={false}
        name={`birthday`}
        onChange={(e) => handleFieldChange("date", e.target.value)}
        error={errors["date"]}
      />
    </div>
  );
};