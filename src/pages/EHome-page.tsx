import { useEffect, useState } from "react";
import { ERooms } from "../interfaces/interface_App";

import { getRooms } from "../services/ESRooms";
import { EShowRooms } from "../components/room/EShowRooms";


export const EHomePage: React.FunctionComponent = () => {
  const [rooms, setRooms] = useState<ERooms>([]);

  // Get all rooms : 
  useEffect(() => getRooms(setRooms), []);

  return (
    <>

      {rooms && <EShowRooms rooms={rooms}></EShowRooms>}

    </>
  );
};
