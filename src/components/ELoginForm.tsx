import { EButton } from "./EButton";
import { ETextField } from "./ETextField";

export const ELoginForm = ({
  onSubmit,
}: {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}) => {
  //   const mailRef = useRef("");
  //   const passwordRef = useRef("");
  return (
    <form onSubmit={onSubmit}>
      <ETextField placeholder="mail" forName="mail" value=""></ETextField>
      <ETextField
        placeholder="password"
        forName="password"
        value=""
      ></ETextField>
      <EButton>Login</EButton>
    </form>
  );
};
