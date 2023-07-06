import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getRoomByID } from "../services/ESRooms";
import { ERoomTitle } from "../components/room/ERoomTitle";
import { ERoomImage } from "../components/room/ERoomImage";
import { ERoomBooking } from "../components/room/ERoomBooking";
import { IERoom } from "../interfaces/interface_App";

export const ERoomPage = () => {
  const { id } = useParams();
  const [room, setRoom] = useState<IERoom>({
    _id: "",
    image: "",
    name: "",
    description: "",
    age_limit: "",
    slots: 1,
    availability: {
      monday: {
        morning: true,
        afternoon: true
      },
      tuesday: {
        morning: true,
        afternoon: true
      },
      wednesday: {
        morning: true,
        afternoon: true
      },
      thursday: {
        morning: true,
        afternoon: true
      },
      friday: {
        morning: true,
        afternoon: true
      },
      saturday :
      {
        morning: true,
        afternoon: true
      }
    }
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
        availability: {
          monday: {
            morning: true,
            afternoon: true
          },
          tuesday: {
            morning: true,
            afternoon: true
          },
          wednesday: {
            morning: true,
            afternoon: true
          },
          thursday: {
            morning: true,
            afternoon: true
          },
          friday: {
            morning: true,
            afternoon: true
          },
          saturday :
          {
            morning: true,
            afternoon: true
          }
        }
      });
    }
  }, [id]);


  // TODO : MAKE A LOADING COMPONENT AND STYLE IT
  if (!room._id && id !== '404') {
    return <h1>Loading...</h1>;
  }

  if (id === '404') {
    return <h1>Room not found</h1>;
  }

  return (
    <>
      <div className="ERoomPage-container">
        <ERoomTitle title={room.name} />
        <ERoomImage image={room.image} />
        {id && <ERoomBooking room_id={id} />}
      </div>
    </>
  );
};
