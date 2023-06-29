import { FormProvider, useForm } from "react-hook-form";

export const EForm: React.FunctionComponent = () => {
  const methods = useForm();

  const onSubmit = methods.handleSubmit((data) => {
    console.log(data);
  });
  return (
    <FormProvider {...methods}>
      <form onSubmit={(e) => e.preventDefault()}></form>
    </FormProvider>
  );
};
