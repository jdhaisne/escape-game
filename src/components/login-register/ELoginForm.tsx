import { useNavigate } from "react-router-dom";

import "./style.scss";
import { useContext, useState } from "react";
import { AppContext, IAppContext } from "../../context/app-ctx";
import { FormProvider, useForm } from "react-hook-form";
import { API } from "../../services/ESAPI";
import { logger } from "../../services/ESLogger";
import { validateField } from "../../services/ESFieldValidation";
import { fieldValidations } from "../../utils/formValidation";
import { EInput } from "../input/EInput";
import { EButton } from "../button/EButton";

import { EntypoEye, EntypoEyeWithLine } from '../EEye';

import { ENotifType } from "../../enums/ENotification-enum";


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

          const storedUserData = localStorage.getItem("userData");
          if (!storedUserData) {
            appContext && appContext.setCanStoreData(true);
            appContext && appContext.setUserData(res.data);

          }
          
          appContext?.setNotif({
            txt: "You have been connected",
            type: ENotifType.SUCCESS,
            bShow: true,
          });

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

            onChange={(e) => handleFieldChange("password", e.target.value)}
            error={errors["password"]}
          />
          <button
            type="button"
            className="password-toggle"

          >
            {showPassword ?
              (<EntypoEyeWithLine
                className='eye-icon'
                onClick={() => setShowPassword((prev) => !prev)} />)
              :
              (<EntypoEye
                className="eye-icon"
                onClick={() => setShowPassword((prev) => !prev)} />)}

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
