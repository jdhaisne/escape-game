import { API } from "./ESAPI";
import { ERooms } from "../interfaces/interface_App";


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