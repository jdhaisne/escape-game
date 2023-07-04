import { ERooms } from "../interfaces/interface_App";
import { ERoom } from "./ERoom";

export const EShowRooms = ({ rooms }: { rooms: ERooms }) => {


  const roomsList = rooms.map((room) => (
    <ERoom
      key={room._id}
      _id={room._id}
      imgPath={room.image}
      title={room.name}
      desc={room.description}
      age={room.age_limit}
    ></ERoom>
  ));
  return <div className="showroom">{roomsList}</div>;
};
