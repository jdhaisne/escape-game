import { useState } from "react";
import { API } from "../../services/ESAPI";
import { validateField } from "../../services/ESFieldValidation";
import { EButton } from "../button/EButton";
import { EInput } from "../input/EInput";
import { FormProvider, useForm } from "react-hook-form";
import { fieldValidations } from "../../utils/formValidation";
import { logger } from "../../services/ESLogger";
import { Navigate } from "react-router-dom";

import './style.scss'

export const ESubscribeForm = ({ className }: { className?: string }) => {
  const [registerData, setRegisterData] = useState<IUserPost>({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    birthday: ""
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirm: "",
    birthday: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const methods = useForm();
  const [redirectToLogin, setRedirectToLogin] = useState(false);

  const handleFieldChange = (field: string, value: string) => {
    const errorMessage = validateField(value, fieldValidations[field]);
    setErrors((prevErrors) => ({ ...prevErrors, [field]: errorMessage || "" }));
    setRegisterData((prevData) => ({ ...prevData, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = registerData;

    if (Object.values(errors).every((error) => error === "")) 
    {
      const payload = {
        firstname: formData.firstname,
        lastname: formData.lastname,
        email: formData.email,
        password: formData.password,
        birthday: formData.birthday,
      };

      try {
        await API.Post("auth/register", payload);
        setRedirectToLogin(true);
      } catch (e : any ) {
        logger.error(`Error registering user: ${e}`);
      }
    } else {
      logger.error("There are errors in the form");
    }
  };

  if (redirectToLogin) {
    return <Navigate replace to="/" />;
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit} className={"container " + className}>
        <EInput
          label="First name"
          id="firstname"
          type="text"
          placeholder="First name"
          hasLabel={false}
          onChange={(e) => handleFieldChange("firstname", e.target.value)}
          error={errors["firstname"]}
        />
        <EInput
          label="Last name"
          id="lastname"
          type="text"
          placeholder="Last name"
          hasLabel={false}
          onChange={(e) => handleFieldChange("lastname", e.target.value)}
          error={errors["lastname"]}
        />
        <EInput
          label="Email"
          id="mail"
          type="text"
          placeholder="Email"
          hasLabel={false}
          onChange={(e) => handleFieldChange("email", e.target.value)}
          error={errors["email"]}
        />

        <EInput
          label="Date of Birth"
          id="birthday"
          type="text"
          placeholder="Date of Birth"
          hasLabel={false}
          onChange={(e) => handleFieldChange("birthday", e.target.value)}
          error={errors["birthday"]}
        />

        <div className="form-register-password">
          <EInput
            label="Password"
            id="password"
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            hasLabel={false}
            onChange={(e) => handleFieldChange("password", e.target.value)}
            error={errors["password"]}
          />
          <button
            type="button"
            className="password-toggle"
            onClick={() => setShowPassword((prev) => !prev)}
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>

        <EButton classArray={["login__button"]}>
          Register
        </EButton>
      </form>
    </FormProvider>
  );
};
