import { useEffect } from "react"
import { getUsers } from "../services/ESUser-api"
import { logger } from "../services/ESLogger";



export const EHomePage : React.FunctionComponent = () =>
{
  useEffect(() => 
  {
    getUsers()
      .then(users => {
        logger.info(users)
        logger.debug(users)
        logger.warning(users)
        logger.error(users)
      })
      .catch(error => {
        console.error('Error retrieving users:', error);
      });
  }, [])

return (
    <>
      <h1>PAGE FROM HOME !</h1>
    </>
    )
}