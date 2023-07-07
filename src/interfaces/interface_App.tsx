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
  availability: {
    monday: {
      morning: boolean,
      afternoon: boolean
    },
    tuesday: {
      morning: boolean,
      afternoon: boolean
    },
    wednesday: {
      morning: boolean,
      afternoon: boolean
    },
    thursday: {
      morning: boolean,
      afternoon: boolean
    },
    friday: {
      morning: boolean,
      afternoon: boolean
    },
    saturday :
    {
      morning: boolean,
      afternoon: boolean
    }
  };
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
export interface IEBooking {
  _id: string;
  user_id: string;
  room_id: string;
  date_and_time: string;
  number_of_players: number;
  list_of_participants: {
    _id: string;
    birthday: string;
    firstname: string;
    lastname: string;
  }[];
  __v?: number;
  users: IEUser[];
  rooms: ERooms;
}

export type IEBookings = IEBooking[];
