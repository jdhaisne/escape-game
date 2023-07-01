import React, { useState } from "react";
import { EInput } from "./EInput";
import { IBooking } from "../interfaces/IBooking";
import { name_validation, dateValidation } from "../utils/formValidation";

interface EFormBookingProps {
  bookingData: IBooking[];
  index: number;
  onChange: (index: number, field: string, value: string) => void;
}

export const EFormBooking: React.FC<EFormBookingProps> = ({
  bookingData,
  index,
  onChange
}) => {
  const [errors, setErrors] = useState<{ [key: string]: string }>({
    firstName: "",
    lastName: "",
    birthday: ""
  });

  const handleFieldChange = (field: string, value: string) => {
    let fieldValidation: any; // Use 'any' type assertion here
  
    if (field === "firstName" || field === "lastName") {
      fieldValidation = name_validation as {
        validation: {
          required: { value: boolean; message: string };
          minLength: { value: number; message: string };
          maxLength: { value: number; message: string };
        };
      };
    } else if (field === "birthday") {
      fieldValidation = {
        validation: {
          required: { value: true, message: "Invalid date format. Please use DD/MM/YYYY" },
          pattern: {
            value: /^\d{2}\/\d{2}\/\d{4}$/,
          },
        },
      };
    }
  
    const isValid = Object.keys(fieldValidation.validation).every((rule) => {
      const ruleValue = fieldValidation.validation[rule];
      if (rule === "required" && ruleValue) {
        return !!value.trim();
      }
      if (rule === "minLength" && ruleValue) {
        return value.length >= ruleValue.value;
      }
      if (rule === "maxLength" && ruleValue) {
        return value.length <= ruleValue.value;
      }
      if (rule === "pattern" && ruleValue) {
        return ruleValue.value.test(value);
      }
      return true;
    });
  
    if (isValid) {
      onChange(index, field, value);
      setErrors((prevErrors) => ({ ...prevErrors, [field]: "" }));
    } else {
      const errorMessage = Object.values(fieldValidation.validation).map(
        (rule : any) => rule.message
      )[0]; // Access the first error message
      setErrors((prevErrors) => ({
        ...prevErrors,
        [field]: errorMessage,
      }));
    }
  };
  

  return (
    <div>
      <h4>Participant {index + 1}</h4>
      <EInput
        label="Prénom"
        id={`firstName${index}`}
        type="text"
        placeholder="Prénom"
        hasLabel={true}
        validation={name_validation}
        name={`firstName${index}`}
        onChange={(e) => handleFieldChange("firstName", e.target.value)}
        error={errors["firstName"]}
      />
      <EInput
        label="Nom"
        id={`lastName${index}`}
        type="text"
        placeholder="Nom"
        hasLabel={true}
        validation={name_validation}
        name={`lastName${index}`}
        onChange={(e) => handleFieldChange("lastName", e.target.value)}
        error={errors["lastName"]}
      />
      <EInput
        label="Date de naissance"
        id={`birthday${index}`}
        type="text"
        placeholder="Date de naissance"
        hasLabel={true}
        validation={dateValidation}
        name={`birthday${index}`}
        onChange={(e) => handleFieldChange("birthday", e.target.value)}
        error={errors["birthday"]}
      />
    </div>
  );
};
