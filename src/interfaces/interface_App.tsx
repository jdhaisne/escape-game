export interface IEButtonProps {
  children?: React.ReactNode;
  onClick?: () => void;
  classArray?: string[];
}

export interface IERoom {
  _id: string;
  image: string;
  name: string;
  description: string;
  age_limit: string;
}

export type ERooms = IERoom[];