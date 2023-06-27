import { ETextFieldStatus } from "../interfaces/interface_App";

export const ETextField = ({
  value,
  status,

  onChange,
  labelName,
  forName,
  placeholder,
}: {
  value: string;
  status?: ETextFieldStatus;

  onChange?: () => void;
  labelName?: string;
  forName?: string;
  placeholder?: string;
}) => {
  return (
    <>
      <input
        type="text"
        defaultValue={value}
        onChange={onChange}
        name={forName}
        placeholder={placeholder}
        className={status ? `input input--${status}` : "input"}
      />
      {labelName ? <label htmlFor={forName}>{labelName}</label> : <></>}
    </>
  );
};
