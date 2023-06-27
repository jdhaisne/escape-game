import { useState } from "react";
import { EModal } from "./EModal";
import { EButton } from "./EButton";

export const EHeader = () => {
  const [isShowing, setIsShowing] = useState<boolean>(false);
  const onClick = () => {
    setIsShowing(!isShowing);
  };
  return (
    <>
      <div className="header">
        <div className="header__logo">logo</div>
        <div className="header__button" onClick={onClick}>
          login/logout
        </div>
      </div>
      <EModal isShowing={isShowing} setIsShowing={setIsShowing}>
        <EButton
          onClick={() => alert("click")}
          classArray={["modal__button--close"]}
        >
          bg
        </EButton>
      </EModal>
    </>
  );
};
