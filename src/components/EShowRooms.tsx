import { ERooms } from "../interfaces/interface_App";
import { ERoom } from "./ERoom";

export const EShowRooms = ({ rooms }: { rooms: ERooms }) => {
  console.log(rooms);
  const roomsList = rooms.map((room) => (
    <ERoom
      imgPath={room.image}
      title={room.name}
      desc={room.description}
      age={room.age_limit}
      key={room._id}
    ></ERoom>
  ));
  return <div className="showroom">{roomsList}</div>;
};
