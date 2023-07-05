import React, { useState } from "react";
import { EInput } from "../input/EInput";
import { validateField } from "../../services/ESFieldValidation";
import { fieldValidations } from "../../utils/formValidation";

import './style.scss'

export const EFormBooking: React.FC<IEFormBooking> = ({
  index,
  onChange
}) => {
  const [errors, setErrors] = useState<{ [key: string]: string }>({
    firstname: "",
    lastname: "",
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
    <div className="EFormBooking-card">
      <h4 className="EFormBooking-card__title">Participant {index + 1}</h4>
      <EInput
        label="First Name"
        id={`firstname`}
        type="text"
        placeholder="First Name"
        hasLabel={false}
        name={`firstname`}
        onChange={(e) => handleFieldChange("firstname", e.target.value)}
        error={errors["firstname"]}
      />
      <EInput
        label="Last Name"
        id={`lastname`}
        type="text"
        placeholder="Last Name"
        hasLabel={false}
        name={`lastname`}
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
        onChange={(e) => handleFieldChange("birthday", e.target.value)}
        error={errors["birthday"]}
      />
    </div>
  );
};
