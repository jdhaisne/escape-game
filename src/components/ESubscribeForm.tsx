import { useState } from "react";
import { API } from "../services/ESAPI";
import { validateField } from "../services/ESFieldValidation";
import { EButton } from "./EButton";
import { EInput } from "./EInput";
import { FormProvider, useForm } from "react-hook-form";
import { fieldValidations } from "../utils/formValidation";
import { logger } from "../services/ESLogger";
import { useNavigate } from "react-router-dom";

export const ESubscribeForm = ({ className }: { className?: string }) => {
  const [registerData, setRegisterData] = useState<IUserPost>({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    birthday: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirm: "",
    birthday: "",
  });
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const methods = useForm();

  const handleFieldChange = (field: string, value: string) => {
    const errorMessage = validateField(value, fieldValidations[field]);
    setErrors((prevErrors) => ({ ...prevErrors, [field]: errorMessage || "" }));
    setRegisterData((prevData) => ({ ...prevData, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = registerData;

    if (Object.values(errors).every((error) => error === "")) {
      const payload = {
        firstname: formData.firstname,
        lastname: formData.lastname,
        email: formData.email,
        password: formData.password,
        birthday: formData.birthday,
      };

      await API.Post("auth/register", payload);
      navigate("/login");
    } else {
      logger.error("Il y a des erreurs dans le formulaire");
    }

    logger.debug(formData);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit} className={"container " + className}>
        <EInput
          label="First name"
          id="firstname"
          type="text"
          placeholder="First name"
          hasLabel={false}
          name="firstname"
          onChange={(e) => handleFieldChange("firstname", e.target.value)}
          error={errors["firstname"]}
        />
        <EInput
          label="Last name"
          id="lastname"
          type="text"
          placeholder="Last name"
          hasLabel={false}
          name="lastname"
          onChange={(e) => handleFieldChange("lastname", e.target.value)}
          error={errors["lastname"]}
        />
        <EInput
          label="Email"
          id="mail"
          type="text"
          placeholder="Email"
          hasLabel={false}
          name="email"
          onChange={(e) => handleFieldChange("email", e.target.value)}
          error={errors["email"]}
        />

        <EInput
          label="Date of Birth"
          id="date"
          type="text"
          placeholder="Date of Birth"
          hasLabel={false}
          name="date"
          onChange={(e) => handleFieldChange("date", e.target.value)}
          error={errors["date"]}
        />

        <div className="form-register-password">
          <EInput
            label="Password"
            id="password"
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            hasLabel={false}
            name="password"
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

        <EButton classArray={["login__button"]}>Register</EButton>
      </form>
    </FormProvider>
  );
};
