import { EButton } from "./EButton";
import { EInput } from "./EInput";
import { FormProvider, useForm } from "react-hook-form";
import { useState } from "react";
import { validateField } from "../services/ESFieldValidation";
import { fieldValidations } from "../utils/formValidation";
import { logger } from "../services/ESLogger";
import { API } from "../services/ESAPI";

interface FormData {
  email: string;
  password: string;
}

export const ELoginForm = ({ className }: { className?: string }) => {
  const [loginData, setLoginData] = useState<FormData>({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({
    email: "",
    password: "",
  });

  const [showErrorMessage, setShowErrorMessage] = useState(false);


  const methods = useForm<FormData>();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { email, password } = loginData;

    if (Object.values(errors).every((error) => error === "")) {
        const res = await API.Post("auth/login", { email, password });
        if (res.status === 200) {
          logger.debug("Logged in successfully");
          // TODO : redirecting to another page
        } else {
          logger.error("Login failed: Invalid credentials");
          setShowErrorMessage(true);
        }
    } else {
      logger.error("There are errors in the form");
    }

    logger.debug(loginData);
  };

  const handleFieldChange = (field: string, value: string) => {
    const errorMessage = validateField(value, fieldValidations[field]);

    setErrors((prevErrors) => ({
      ...prevErrors,
      [field]: errorMessage || "",
    }));
    setLoginData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit} className={"container " + className}>
        <EInput
          label="Email"
          id="email"
          type="text"
          placeholder="Type your email..."
          hasLabel={false}
          name="email"
          onChange={(e) => handleFieldChange("email", e.target.value)}
          error={errors["email"]}
        />
        <EInput
          label="Password"
          id="password"
          type="password"
          placeholder="Type your password..."
          hasLabel={false}
          name="password"
          onChange={(e) => handleFieldChange("password", e.target.value)}
          error={errors["password"]}
        />

        {showErrorMessage && (
          <p className="error-message">Invalid credentials</p>
        )}

        <EButton classArray={["login__button"]}>
          Login
        </EButton>
     
      </form>
    </FormProvider>
  );
};
