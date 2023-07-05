import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getRoomByID } from "../services/ESRooms";
import { ERoomTitle } from "../components/room/ERoomTitle";
import { ERoomImage } from "../components/room/ERoomImage";
import { ERoomBooking } from "../components/room/ERoomBooking";
import { IERoom } from "../interfaces/interface_App";

export const ERoomDetailPage = () => {
  const { id } = useParams();
  const [room, setRoom] = useState<IERoom>({
    _id: "",
    image: "",
    name: "",
    description: "",
    age_limit: "",
    slots: 1,
  });

  useEffect(() => {
    if (id) {
      getRoomByID(id, setRoom);
    } else {
      setRoom({
        _id: "",
        image: "",
        name: "",
        description: "",
        age_limit: "",
        slots: 1,
      });
    }
  }, [id]);

  if (!room._id && id !== '404') {
    return <h1>Loading...</h1>;
  }

  if (id === '404') {
    return <h1>Room not found</h1>;
  }

  return (
    <>
      <div className="ERoomPage-container">
        <ERoomTitle title={room.name} />
        <ERoomImage image={room.image} />
        {id && <ERoomBooking room_id={id} />}
      </div>
    </>
  );
};
