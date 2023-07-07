import { useEffect, useState } from "react";
import { API } from "../services/ESAPI";
import { IEBookings } from "../interfaces/interface_App";
import { useParams } from "react-router-dom";

export const EHistory = () => {
  let { userId } = useParams();
  const [bookings, setBookings] = useState<IEBookings>([]);
  const createbookingsList = () => {
    if (!bookings) return <></>;
    return bookings.map((booking) => {
      // console.log(booking);
      const date = new Date(booking.date_and_time);
      return (
        <tr key={booking.room_id}>
          <th>{booking.rooms[0].name}</th>
          <th>{`${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`}</th>

          <th className="participants">
            {booking.list_of_participants.map((user) => {
              return (
                <span
                  key={user._id}
                  className="participant"
                >{`${user.firstname} ${user.lastname}`}</span>
              );
            })}
          </th>
          <th>{booking.number_of_players}</th>
        </tr>
      );
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      const res = await API.Get(`bookings/${userId}`);
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
            <th>player list</th>
            <th>number of player</th>
          </tr>
        </thead>
        <tbody>{createbookingsList()}</tbody>
      </table>
    </div>
  );
};
