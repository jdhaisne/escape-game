import { postUSer } from "../services/ESUser-api";
import {
  mail_validation,
  name_validation,
  password_validation,
} from "../utils/formValidation";
import { EButton } from "./EButton";
import { EInput } from "./EInput";
import { FormProvider, useForm } from "react-hook-form";

// type formData = {};

export const ESubscribeForm = ({ className }: { className?: string }) => {
  const methods = useForm();

  const onSubmit = methods.handleSubmit(async (data) => {
    const res = await postUSer({
      firstName: data.first,
      lastName: data.last,
      mail: data.mail,
      password: data.password,
      dateOfBirth: data.date,
    });
    console.log(res);
  });
  return (
    <FormProvider {...methods}>
      <form
        onSubmit={(e) => e.preventDefault()}
        noValidate
        className={"container " + className}
      >
        <EInput
          label="first"
          type="text"
          id="first"
          placeholder="First name"
          name="first"
          {...name_validation}
        />
        <EInput
          label="last"
          type="text"
          id="last"
          placeholder="Last name"
          name="last"
          {...name_validation}
        />
        <EInput
          label="mail"
          type="text"
          id="mail"
          placeholder="mail"
          {...mail_validation}
        />
        <EInput
          label="password"
          type="password"
          id="password"
          placeholder="Password"
          {...password_validation}
        />
        <EInput
          label="confirm"
          type="password"
          id="confirm"
          placeholder="Confirm"
          name="confirm"
          validation={{
            required: {
              value: true,
              message: "required",
            },
            minLength: {
              value: 6,
              message: "Must be at least 6 characters long.",
            },
            maxLength: {
              value: 20,
              message: "Must be at max 20 characters long.",
            },
            validate: (val: any) =>
              val === methods.watch("password") || "Password does not match",
          }}
        />
        <EInput
          label="date"
          type="date"
          name="date"
          id="date"
          placeholder="date"
          validation={{
            required: {
              value: true,
              message: "required",
            },
          }}
        />
        <EButton classArray={["login__button"]} onClick={onSubmit}>Subscribe</EButton>
      </form>
    </FormProvider>
  );
};
