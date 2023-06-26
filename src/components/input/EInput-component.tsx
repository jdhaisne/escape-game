import { IInputComponentProps } from "../../interfaces/IInputComponentProps";

export const InputComponent: React.FC<IInputComponentProps<any>> = ({ handleChange, type, placeholder, value }) => {
    return (
      <input
        onChange={handleChange}
        type={type}
        placeholder={placeholder}
        value={value}
      />
    );
  };


// EXAMPLE OF USAGE : 
// <InputComponent<string> handleChange={handleChangeName} type="text" placeholder="name" value={name} />
// <InputComponent<number> handleChange={handleChangeAge} type="number" placeholder="age" value={age} />
// <InputComponent<boolean> handleChange={handleChangeChecked} type="checkbox" placeholder="checkbox" value={isChecked} />