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

export interface ERoom {
  _id: string;
  image: string;
  name: string;
  description: string;
  age_limit: string;
}

export type ERooms = ERoom[];
