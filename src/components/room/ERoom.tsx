import { NavLink } from "react-router-dom";
import { EPegi } from "./pegi-img/EPegi";
import { logger } from "../../services/ESLogger";
import { SUser } from "../../services/ESUser";

import "./style.scss";
import { EModal } from "../modal/EModal";
import { useState } from "react";
import { ERoomFormUpdate } from "./ERoomFormUpdate";

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
  logger.debug(_id);
  const [isModalShowing, setIsModalShowing] = useState(false);

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
            <NavLink className={"room__link"} to={`rooms/${_id}`}>
              <p className="room__link__item">book</p>
            </NavLink>

            <NavLink className={"room__link"} to={`/`}>
              <p className="room__link__item">[soon]</p>
            </NavLink>
            {SUser.isAdmin() && (
              <p
                className="room__link__item"
                onClick={() => setIsModalShowing(true)}
              >
                edit
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
          // console.log(e.target.classList.c);
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
