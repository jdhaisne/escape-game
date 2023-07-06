import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getRoomByID } from "../services/ESRooms";
import { IERoom } from "../interfaces/interface_App";
import { EDetailImage } from "../components/detail/EDetailImage";
import { EDetailTitle } from "../components/detail/EDetailTitle";
import { EDetailDescription } from "../components/detail/EDetailDescription";
import { EAvailability } from "../components/detail/EAvailability/EAvailability";

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
    <div className="ERoomDetailPage-container">
      <div className="ERoomDetailPage-wrapper">
        <EDetailImage image={room.image} />
        <EDetailTitle title={room.name} />
        <EDetailDescription description={room.description}/>
      </div>

      <EAvailability/>
    </div>
  );
};
