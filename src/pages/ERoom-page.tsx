import { useParams } from "react-router-dom";
import { ERoomTitle } from "../components/room/ERoomTitle";
import { ERoomImage } from "../components/room/ERoomImage";
import { ERoomBooking } from "../components/room/ERoomBooking";
import { IERoom } from "../interfaces/interface_App";
import { useEffect, useState } from "react";
import { getRoomByID } from "../services/ESRooms";

export const ERoomPage = () =>
{
    const [room, setRoom] = useState<IERoom>({
        _id: "",
        image: "",
        name: "",
        description: "",
        age_limit: "",
        slots: 1,
    });

    let { id } = useParams();

    id ??= '404';

    if (id === '404')
        return <h1>Room no found</h1>

    useEffect(() => getRoomByID(id!, setRoom), []);


    
    return <div>
        <ERoomTitle/>
        <div className="ERoomPage-container">
            <ERoomImage/>
            <ERoomBooking room_id={id || '404'}/>
        </div>
    </div>
}