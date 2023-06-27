import { useState } from "react";

export const EModal = ({
  children,
  isShowing,
  setIsShowing,
}: {
  children: React.ReactNode;
  isShowing: boolean;
  setIsShowing: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  console.log(isShowing);
  const onClick = () => {
    setIsShowing(false);
  };
  return (
    <>
      {isShowing ? (
        <div className="modal">
          <div onClick={onClick}>x</div>
          {children}
          {isShowing}
        </div>
      ) : (
        <></>
      )}
    </>
  );
};
