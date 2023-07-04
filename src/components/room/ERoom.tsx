import { NavLink } from "react-router-dom";
import { EPegi } from "./pegi-img/EPegi";
import { logger } from "../../services/ESLogger";

import './style.scss'

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
  logger.debug(_id)

  return (
    <div className="room">
      <img
        className="room__img"
        src={imgPath}
        width="100%"
        height="200px"
      />
      <div className="room__title__wrapper">
        <h2 className="room__title">{title}</h2>
      </div>
      <div className="room__desc">{desc}</div>
      <div className="room__footer">
        <div>
          <NavLink className={"room__link"} to={`rooms/${_id}`}>
            <p className="room__link__item">book</p>
          </NavLink>

          <NavLink className={"room__link"} to={`/`}>
            <p className="room__link__item">[soon]</p>
          </NavLink>
        </div>
        <div>
          <EPegi age={parseInt(age)}></EPegi>
        </div>
      </div>
    </div>
  );
};
