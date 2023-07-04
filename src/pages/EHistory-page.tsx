import { useEffect, useState } from "react";
import { API } from "../services/ESAPI";
import { IEBookings } from "../interfaces/interface_App";
import { useParams } from "react-router-dom";
import { logger } from "../services/ESLogger";

export const EHistory = () => {
  let { userId } = useParams();
  const [bookings, setBookings] = useState<IEBookings>([]);
  const createbookingsList = () => {
    if (!bookings) return <></>;
    return bookings.map((booking) => {
      return (
        <tr key={booking.room_id}>
          <th>{booking.rooms[0].name}</th>
          <th>{booking.date_and_time}</th>
          <th>{booking.number_of_players}</th>
          {/* <th>{booking.users.map(() =>)}</th> */}
        </tr>
      );
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      const res = await API.Get(`bookings/${userId}`);
      setBookings(res.data);
      // console.log(bookings);
    };

    fetchData();
  }, []);
  // const historyList = history.map((cur) => {
  //   return (<tr>
  //     <th>{cur.roomID}</th>
  //   </tr>);
  // });
  return (
    <div className="history">
      <table>
        <thead>
          <tr>
            <th>room</th>
            <th>date</th>
            <th>number of player</th>
            {/* <th>player list</th> */}
          </tr>
        </thead>
        <tbody>{createbookingsList()}</tbody>
      </table>
    </div>
  );
};
