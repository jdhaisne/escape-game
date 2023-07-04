import { EButton } from "./EButton";
import { EInput } from "./EInput";
import { FormProvider, useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { validateField } from "../services/ESFieldValidation";
import { fieldValidations } from "../utils/formValidation";
import { logger } from "../services/ESLogger";
import { API } from "../services/ESAPI";
import { AppContext, IAppContext } from "../context/app-ctx";
import { useNavigate } from "react-router-dom";


interface FormData {
  email: string;
  password: string;
}

export const ELoginForm = ({ className }: { className?: string }) => {
  const navigate = useNavigate();
  const appContext = useContext<IAppContext | null>(AppContext);
  const [showPassword, setShowPassword] = useState(false);


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
      try {
        const res = await API.Post("auth/login", { email, password });
        if (res.status === 200) {
          const storedUserData = localStorage.getItem('userData');
          if (!storedUserData)  
          {
            appContext?.setCanStoreData(true);
            appContext?.setUserData(res.data);
          }
          navigate("/");
        } 
        else {
          logger.error("Login failed: Invalid credentials");
          setShowErrorMessage(true);
        }
      } catch (error) {
        logger.error("Login failed: Internal Server Error");
      }
    } else {
      logger.error("There are errors in the form");
    }
  }

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
