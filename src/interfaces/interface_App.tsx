export interface EButtonProps {
  children?: React.ReactNode;
  onClick?: () => void;
  classArray?: string[];
}

export enum EInputStatus {
  DEFAULT,
  ALERT,
  SUCCESS,
  WARNING,
  ERROR,
}
