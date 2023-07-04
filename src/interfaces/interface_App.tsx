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
  slots: number;
  __v?: number;
}

export type ERooms = IERoom[];

export interface IEUser {
  _id: string;
  firstname: string;
  lastname: string;
  password: string;
  email: string;
  birthday: string;
  isAdmin: boolean;
  __v?: number;
}
export interface IEHistory {
  _id: string;
  user_id: string;
  room_id: string;
  date_and_time: string;
  number_of_players: number;
  __v?: number;
  users: IEUser[];
  rooms: ERooms;
}
