import { useState } from "react";

export const EModal = ({
  children,
  isShowing,
}: {
  children: React.ReactNode;
  isShowing: boolean;
}) => {
  const onClick = () => {
    isShowing = false;
  };
  return (
//     {isShowing ? (
//         <div className="modal">
//       <div onClick={onClick}>x</div>
//       {children}
//     </div>
//     ): 
//     (<></>)
//     }
    
//   );

};
