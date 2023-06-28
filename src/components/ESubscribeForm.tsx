import { ETextField } from "./ETextField";

export const SubscribeFront = ({
  onSubmit,
}: {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}) => {
  return (
    <form onSubmit={onSubmit}>
      <ETextField
        placeholder="First Name"
        forName="firstname"
        value=""
      ></ETextField>
      <ETextField
        placeholder="Last Name"
        forName="lastname"
        value=""
      ></ETextField>
    </form>
  );
};
