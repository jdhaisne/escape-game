import { ChangeEvent } from "react";

export interface IInputComponentProps<T> {
    handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
    type: string;
    placeholder: string;
    value: T;
  }