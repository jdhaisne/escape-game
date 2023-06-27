import { EButtonProps } from "../interfaces/interface_App";

export const EButton = ({ children, onClick, classArray }: EButtonProps) => {
    const classStr = classArray.join(' ')
    return (
        <>
            <button className={classStr + " ebutton"} onClick={onClick}>
                {children}
            </button>
        </>
    )
}
