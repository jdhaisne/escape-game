import { NavLink } from "react-router-dom";
import { EPegi } from "./pegi-img/EPegi";
import { SUser } from "../../services/ESUser";
import { EModal } from "../modal/EModal";
import { useEffect, useState } from "react";
import { ERoomFormUpdate } from "./ERoomFormUpdate";
import { isRoomAvailable } from "../../services/ESRooms";
import { logger } from "../../services/ESLogger";


import "./style.scss";


export const ERoom = ({
  _id,
  imgPath,
  title,
  desc,
  age,
}: {
  _id: string;
  imgPath: string;
  title: string;
  desc: string;
  age: string;
}) => {
  const [isModalShowing, setIsModalShowing] = useState(false);
  const [isAvailable, setIsAvailable] = useState(false);

  const fetchAvailability = async () => {
    try {
      const available = await isRoomAvailable(_id);
      setIsAvailable(available);
    } catch (error) {
      logger.error(`Error fetching availability ${error}`);
    }
  };

  useEffect(() => {
    fetchAvailability();
  }, []);

  return (
    <>
      <div className="room">
        <img className="room__img" src={imgPath} width="100%" height="200px" />
        <div className="room__title__wrapper">
          <h2 className="room__title">{title}</h2>
        </div>
        <div className="room__desc">{desc}</div>
        <div className="room__footer">
          <div>

            {SUser.isConnected() ? (
              isAvailable ? (
                <NavLink className={"room__link"} to={`book/${_id}`}>
                  <p className="room__link__item">Booking</p>
                </NavLink>
              ) : (
                <p className="room__link__item full">Room fully booked</p>
              )
            ) : (
              <p className="room__link__item">Please log in to book</p>
            )}
         
            <NavLink className={"room__link"} to={`/room/${_id}`}>
              <p className="room__link__item">Details</p>
            </NavLink>
            {SUser.isAdmin() && (
              <p
                className="room__link__item"
                onClick={() => setIsModalShowing(true)}
              >
                Edit
              </p>
            )}
          </div>
          <div>
            <EPegi age={parseInt(age)}></EPegi>
          </div>
        </div>
      </div>


      <EModal
        onClickOutside={(e) => {
          if (e.target.classList.contains("modal__outside"))
            setIsModalShowing(false);
        }}
        isShowing={isModalShowing}
      >
        <ERoomFormUpdate
          roomId={_id}
          name={title}
          description={desc}
          age_limit={parseInt(age)}
          onSubmit={() => setIsModalShowing(false)}
        ></ERoomFormUpdate>
      </EModal>
    </>
  );
};
