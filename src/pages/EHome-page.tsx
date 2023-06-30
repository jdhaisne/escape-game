import { useEffect, useState } from "react";
import { logger } from "../services/ESLogger";
import { getRooms } from "../services/ESRooms";
import { EShowRooms } from "../components/EShowRooms";
import { ERooms } from "../interfaces/interface_App";

export const EHomePage: React.FunctionComponent = () => {
  const [rooms, setRooms] = useState<ERooms>([]);
  // getRooms()
  //   .then((res) => {
  //     rooms = res;
  //     logger.info(rooms);
  //   })
  //   .catch((err) => logger.error(err));
  useEffect(() => {
    getRooms()
      .then((res) => {
        setRooms(res.data);
      })
      .catch((error) => {
        console.error("Error retrieving rooms:", error);
      });
  }, []);

  return (
    <>
      <div className="homepage">
        <h1 className="homepage__title">PAGE FROM HOME !</h1>
        <div className="homepage__rooms-wrapper">
          {rooms && <EShowRooms rooms={rooms}></EShowRooms>}
        </div>
      </div>
    </>
  );
};
