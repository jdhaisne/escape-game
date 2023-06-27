import { useState } from "react";
import { EModal } from "./EModal";

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
        <button>bg</button>
      </EModal>
    </>
  );
};
