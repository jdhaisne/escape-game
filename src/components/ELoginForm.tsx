import { EButton } from "./EButton";
import { EInput } from "./EInput";
import { FormProvider, useForm } from "react-hook-form";

import {
  mail_validation,
  password_validation_login,
} from "../utils/formValidation";
import { logUser } from "../services/ESUser-api";

type formData = {
  mail: string;
  password: string;
};

export const ELoginForm = ({ className }: { className: string }) => {
  const methods = useForm<formData>();

  const onSubmit = methods.handleSubmit(async (data) => {
    const res = await logUser({ mail: data.mail, password: data.password });
    console.log(res);
  });

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        noValidate
        className={"container " + className}
      >
        <EInput
          label="mail"
          type="text"
          id="mail"
          placeholder="Type your mail..."
          {...mail_validation}
        />
        <EInput
          label="password"
          type="password"
          id="password"
          placeholder="type your password..."
          {...password_validation_login}
        />
        <EButton onClick={onSubmit}>login</EButton>
      </form>
    </FormProvider>
  );
};
