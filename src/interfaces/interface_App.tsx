export interface EButtonProps {
  children?: React.ReactNode;
  onClick?: () => void;
  classArray?: string[];
}

export enum ETextFieldStatus {
  ALERT,
  SUCCES,
  WARNING,
  ERROR,
}
