import { useEffect, useState } from "react";
import { EShowRooms } from "../components/EShowRooms";
import { ERooms } from "../interfaces/interface_App";
import { API } from "../services/ESAPI";

export const EHomePage: React.FunctionComponent = () => {
  const [rooms, setRooms] = useState<ERooms>([]);
  useEffect(() => {
    API.Get("rooms")
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
