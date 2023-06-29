import { useState } from "react";
import { EModal } from "./EModal";
import { EButton } from "./EButton";
import { ELoginForm } from "./ELoginForm";
import { ESubscribeForm } from "./ESubscribeForm";
import axios from "axios";

export const EHeader = () => {
  const [isShowing, setIsShowing] = useState<boolean>(false);
  const [isLoginForm, setIsLoginForm] = useState<boolean>(true);
  const onClick = () => {
    setIsShowing(!isShowing);
  };
  const onSubmitLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/users", {
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
  const onSubmitSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    console.log(e);
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
        {isLoginForm ? (
          <>
            <ELoginForm onSubmit={onSubmitLogin}></ELoginForm>
            <p>
              need an account ?{" "}
              <a href="#" onClick={() => setIsLoginForm(false)}>
                sign in
              </a>
            </p>
          </>
        ) : (
          <>
            <ESubscribeForm onSubmit={onSubmitSubscribe}></ESubscribeForm>
            <p>
              Already have an account ?{" "}
              <a href="#" onClick={() => setIsLoginForm(true)}>
                login
              </a>
            </p>
          </>
        )}
      </EModal>
    </>
  );
};
