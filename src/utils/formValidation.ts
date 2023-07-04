import { IFieldValidation } from "../interfaces/IFieldValidation";

export const fieldValidations: { [key: string]: IFieldValidation } = {
    email: {
      required: { value: true, message: "Field is required" },
      pattern: {
        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message: "Invalid email format",
      },
    },
    password: {
      required: { value: true, message: "Field is required" },
      minLength: { value: 6, message: "Must contain at least 6 characters" },
      maxLength: { value: 20, message: "Must contain at most 20 characters" },
      pattern: {
        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,20}$/,
        message: "Your password must contain special characters, at least one uppercase letter, and be between 6 and 20 characters long",
      },
    },
    date: {
      required: { value: true, message: "Field is required" },
      pattern: {
        value: /^\d{2}\/\d{2}\/\d{4}$/,
        message: "Invalid date format. Please use DD/MM/YYYY",
      },
    },
    firstname: {
      required: { value: true, message: "Field is required" },
      minLength: { value: 2, message: "Must contain at least 2 characters" },
      maxLength: {
        value: 50,
        message: "Must contain at most 50 characters",
      },
      pattern: {
        value: /^[A-Za-zÀ-ÖØ-öø-ÿ]+$/,
        message: "Invalid firstname format. Please use letters only.",
      },
    },
    lastname: {
      required: { value: true, message: "Field is required" },
      minLength: { value: 2, message: "Must contain at least 2 characters" },
      maxLength: {
        value: 50,
        message: "Must contain at most 50 characters",
      },
      pattern: {
        value: /^[A-Za-zÀ-ÖØ-öø-ÿ]+$/,
        message: "Invalid lastname format. Please use letters only.",
      },
    },
    birthday: {
      required: { value: true, message: "Field is required" },
      pattern: {
        value: /^\d{2}\/\d{2}\/\d{4}$/,
        message: "Invalid date format. Please use DD/MM/YYYY",
      },
    },
};
