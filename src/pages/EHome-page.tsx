import { useEffect, useState } from "react";
import { EShowRooms } from "../components/EShowRooms";
import { ERooms } from "../interfaces/interface_App";
import { getRooms } from "../services/ESRooms";

export const EHomePage: React.FunctionComponent = () => {
  const [rooms, setRooms] = useState<ERooms>([]);

  // Get all rooms : 
  useEffect(() => getRooms(setRooms), []);

  return (
    <>
      <div className="homepage">
        <div className="homepage__rooms-wrapper">
          {rooms && <EShowRooms rooms={rooms}></EShowRooms>}
        </div>
      </div>
    </>
  );
};
