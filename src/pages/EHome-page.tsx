import { useEffect } from "react"
import { logger } from "../services/ESLogger";
import { getRooms } from "../services/ESRooms";



export const EHomePage : React.FunctionComponent = () =>
{
  useEffect(() => 
  {
    getRooms()
      .then(room => {
        logger.debug(room)
      })
      .catch(error => {
        console.error('Error retrieving rooms:', error);
      });
  }, [])

return (
    <>
      <h1>PAGE FROM HOME !</h1>
    </>
    )
}