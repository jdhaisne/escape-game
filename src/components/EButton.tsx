import { IEButtonProps } from "../interfaces/interface_App";

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

