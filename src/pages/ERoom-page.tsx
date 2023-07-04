import { useParams } from "react-router-dom";
import { ERoomTitle } from "../components/room/ERoomTitle";
import { ERoomImage } from "../components/room/ERoomImage";
import { ERoomBooking } from "../components/room/ERoomBooking";

export const ERoomPage = () =>
{
    let { id } = useParams();

    if (id === '404')
    return <h1>Room no found</h1>
    return <div>
        <ERoomTitle/>
        <div style={{display: 'flex'}}>
            <ERoomImage/>
            <ERoomBooking room_id={id || '404'}/>
        </div>
    </div>
}