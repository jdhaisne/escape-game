import { API } from "./ESAPI";
import { ERooms, IERoom } from "../interfaces/interface_App";


export const getRooms = (setRooms : React.Dispatch<React.SetStateAction<ERooms>>): void => 
{
    API.Get("rooms")
    .then((res) => {
        setRooms(res.data);
    })
    .catch((error) => {
      console.error("Error retrieving rooms:", error);
    });
}

export const getRoomByID = (room_id : string, setRoom : React.Dispatch<React.SetStateAction<IERoom>>): void => 
{
    API.Get(`rooms/${room_id}`)
    .then((res) => {
      setRoom(res.data)
    })
    .catch((error) => {
      console.error("Error retrieving rooms:", error);
    });
}