import { EButton } from "../components/EButton";
import { ELoginForm } from "../components/ELoginForm";
import { ELogin } from "../components/login/ELogin-component";
import style from "../components/login/style.module.scss";

export const ELoginPage = () => {
  return (
    <div className="form-card">
      <div className="form-card__onglet__wrapper">
        <div className="form-card__onglet form-card__onglet--left">login</div>
        <div className="form-card__onglet form-card__onglet--right">
          register
        </div>
      </div>
      <ELoginForm className={`form-card__form`} />
    </div>
  );
};
