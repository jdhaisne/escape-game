import { useState } from "react";
import { EModal } from "./EModal";
import { EButton } from "./EButton";
import { ELoginForm } from "./ELoginForm";
import axios from "axios";

export const EHeader = () => {
  const [isShowing, setIsShowing] = useState<boolean>(false);
  const onClick = () => {
    setIsShowing(!isShowing);
  };
  const onSubmitLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios
      .post("localhost:3000/user", {
        mail: e.target.mail.value,
        password: e.target.password.value,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <>
      <div className="header">
        <div className="header__logo">logo</div>
        <EButton classArray={["header__button"]} onClick={onClick}>
          login/logout
        </EButton>
      </div>
      <EModal
        isShowing={isShowing}
        setIsShowing={setIsShowing}
        classArray={["header__modal"]}
      >
        <ELoginForm onSubmit={onSubmitLogin}></ELoginForm>
      </EModal>
    </>
  );
};
