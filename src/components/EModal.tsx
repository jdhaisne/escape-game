export const EModal = ({
  children,
  isShowing,
  setIsShowing,
  classArray,
}: {
  children: React.ReactNode;
  isShowing: boolean;
  setIsShowing: React.Dispatch<React.SetStateAction<boolean>>;
  classArray?: string[];
}) => {
  const classStr = classArray ? classArray.join(" ") : "";
  const onClick = () => {
    setIsShowing(false);
  };

  return (
    <>
      {isShowing ? (
        <div className={classStr + " modal"}>
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
