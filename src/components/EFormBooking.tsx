import { useState } from "react";
import { EInput } from "./EInput";
import { name_validation } from "../utils/formValidation";
import { FormProvider, useForm } from "react-hook-form";
import { EButton } from "./EButton";

interface FormBookingProps {
    onChange: (value: string) => void;
}

type formData = {
    firstname: string;
    lastname: string;
    birthday: string;
  };
  
  
export const EFormBooking: React.FunctionComponent<FormBookingProps> = ({ onChange }) => {
    const methods = useForm<formData>();

    const [firstName, setFirstName] = useState("");

    const handleFirstNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value : string = event.target.value;
        setFirstName(value);
        onChange(value);
    };

    return (
        <FormProvider {...methods}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
            noValidate
            className={"container "}
          >
            <EInput
              label="firstname"
              type="text"
              id="firstname"
              placeholder="Type your firstname..."
              {...name_validation}
              name={"firstname"}
            />

            <EInput
              label="lastname"
              type="text"
              id="lastname"
              placeholder="Type your lastname..."
              {...name_validation}
              name={"lastname"}
            />
            <EInput
              label="date"
              type="date"
              id="date"
              placeholder="type your date..."
              {...name_validation}
              name={"date"}
            />
          </form>
        </FormProvider>
      );
};