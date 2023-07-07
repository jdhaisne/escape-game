import { IEButtonProps } from "../../interfaces/interface_App";

import './style.scss'

export const EButton = ({ children, onClick, classArray }: IEButtonProps) => {

  const classStr = classArray ? classArray.join(" ") : "";
  return (
    <>
      <button className={classStr + " ebutton"} onClick={onClick}>
        {children}
      </button>
    </>
  );
};

