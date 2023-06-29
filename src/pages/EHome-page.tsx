import { useEffect } from "react";
import { getUsers } from "../services/ESUser-api";
import { logger } from "../services/ESLogger";
import { ERoom } from "../components/ERoom";

export const EHomePage: React.FunctionComponent = () => {
  useEffect(() => {
    getUsers()
      .then((users) => {
        logger.info(users);
        logger.debug(users);
        logger.warning(users);
        logger.error(users);
      })
      .catch((error) => {
        console.error("Error retrieving users:", error);
      });
  }, []);

  return (
    <>
      <h1>PAGE FROM HOME !</h1>
      <div>
        <ERoom
          title="test"
          desc="test test"
          imgPath="https://lockacademy.com/wp-content/uploads/2020/07/un-crime-presque-parfait-escape-game-lock-academy.jpg"
          age="10"
        ></ERoom>
        <ERoom
          title="test"
          desc="test test"
          imgPath="https://lockacademy.com/wp-content/uploads/2020/07/un-crime-presque-parfait-escape-game-lock-academy.jpg"
          age="10"
        ></ERoom>
        <ERoom
          title="test"
          desc="test test"
          imgPath="https://lockacademy.com/wp-content/uploads/2020/07/un-crime-presque-parfait-escape-game-lock-academy.jpg"
          age="10"
        ></ERoom>
      </div>
    </>
  );
};
