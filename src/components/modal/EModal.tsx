import React from "react";
import "./style.scss";

export const EModal = ({
  children,
  isShowing,
  onClickOutside,
}: {
  children: React.ReactNode;
  isShowing: boolean;
  onClickOutside: (e: any) => void;
}) => {
  if (isShowing)
    return (
      <div className="modal__outside" onClick={onClickOutside}>
        <div className="modal">{children}</div>
      </div>
    );
  return <></>;
};
