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
          <th>
            {booking.users.map((user) => {
              return (
                <span
                  key={user._id}
                >{`${user.firstname} ${user.lastname}`}</span>
              );
            })}
          </th>
        </tr>
      );
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      const res = await API.Get(`bookings/${userId}`);
      console.log(res.data);
      setBookings(res.data);
    };

    fetchData();
  }, []);

  return (
    <div className="history">
      <h2 className="history__title">Booking history of </h2>
      <table>
        <thead>
          <tr>
            <th>room</th>
            <th>date</th>
            <th>number of player</th>
            <th>player list</th>
          </tr>
        </thead>
        <tbody>{createbookingsList()}</tbody>
      </table>
    </div>
  );
};
