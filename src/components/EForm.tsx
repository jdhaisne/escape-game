import { FormProvider, useForm } from "react-hook-form";

export const EForm: React.FunctionComponent = () => {
  const methods = useForm();

  return (
    <FormProvider {...methods}>
      <form onSubmit={(e) => e.preventDefault()}></form>
    </FormProvider>
  );
};
