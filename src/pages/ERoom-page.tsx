import { useParams } from "react-router-dom";
import { ERoomTitle } from "../components/room/ERoomTitle";
import { ERoomImage } from "../components/room/ERoomImage";
import { ERoomBooking } from "../components/room/ERoomBooking";

export const ERoomPage = () =>
{
    let { id } = useParams();

    console.log(id);

    return <div>
        <ERoomTitle/>
        {/*  NEED TO ADD A FLEX AND STYLIZE HERE THE LEFT AND RIGHT CARD OF ROOMS
            LEFT : IMAGE 
            RIGHT : BOOKING FOR ROOMS
        */}
        <div style={{display: 'flex'}}>
            <ERoomImage/>
            <ERoomBooking/>
        </div>
    </div>
}