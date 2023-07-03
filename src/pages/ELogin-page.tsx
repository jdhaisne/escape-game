import { useState } from "react";
import { ELoginForm } from "../components/ELoginForm";
import { ESubscribeForm } from "../components/ESubscribeForm";

export const ELoginPage = () => {
  const [stateLog, setStateLog] = useState<string>("login")
  const [styleTargetLogin, setStyleTargetLogin] = useState<string>("login")

  const [styleTargetRegister, setStyleTargetRegister] = useState<string>("")

  const handleClickLogin = () => {
    setStateLog("login")
    setStyleTargetLogin("login")
    setStyleTargetRegister("")
  }

  const handleClickRegister = () => {
    setStateLog("register")
    setStyleTargetRegister("register")
    setStyleTargetLogin("")
  }

  return (
    <div className="form-card">
      <div className="form-card__onglet__wrapper">
        <div onClick={handleClickLogin} className={`form-card__onglet form-card__onglet--left target-${styleTargetLogin}`}>login</div>
        <div onClick={handleClickRegister} className={`form-card__onglet form-card__onglet--left target-${styleTargetRegister}`}>
          register
        </div>
      </div>
      <div className={`form-card__form`}>
        {stateLog === "login" ? (
          <ELoginForm />
        ) :
          <ESubscribeForm />
        }
      </div>

    </div>
  );
};
