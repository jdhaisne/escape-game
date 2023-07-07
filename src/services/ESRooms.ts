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


export const isRoomAvailable = (room_id: string): Promise<boolean> => {
  return new Promise((resolve, reject) => {
    API.Get(`rooms/${room_id}`)
      .then((res) => {
        const room: IERoom = res.data; // Supposons que les données de la chambre soient renvoyées dans la propriété "data" de la réponse

        // Vérifier s'il y a des disponibilités dans n'importe quel jour ou créneau horaire
        const isAvailable = Object.values(room.availability).some((day) =>
          Object.values(day).some((timeSlot) => timeSlot === true)
        );
        resolve(isAvailable);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des chambres :", error);
        reject(error);
      });
  });
};