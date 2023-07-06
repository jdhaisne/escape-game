import { NavLink, useNavigate } from "react-router-dom";
import { SUser } from "../../services/ESUser";

import "./style.scss";
import { useContext } from "react";
import { AppContext, IAppContext } from "../../context/app-ctx";
import { ENotifType } from "../../enums/ENotification-enum";

export const EHeader = () => {
  const isLoggedIn = SUser.isConnected();
  const navigate = useNavigate();

  const appContext = useContext<IAppContext | null>(AppContext);


  const handleLogout: React.MouseEventHandler<HTMLAnchorElement> = (e) => {
    e.preventDefault();

    SUser.logout();

    appContext?.setNotif({
      txt: "You have been disconnected !",
      type: ENotifType.SUCCESS,
      bShow: true,
    });

    // Redirect the user to the login page after logout
    navigate("/login");
  };

  return (
    <>
      <div className="header">
        <NavLink to="/">
          <div className="header__logo"></div>
        </NavLink>

        <div className="header__wrapper">
          {isLoggedIn && (
            <NavLink
              to={`/history/${SUser.getId()}`}
              className={"header__button header__history"}
            >
              History
            </NavLink>
          )}

          <NavLink
            to={isLoggedIn ? "/" : "/login"}
            className={"header__button " + (isLoggedIn ? "logout" : "login")}
            onClick={isLoggedIn ? handleLogout : undefined}
          >
            {isLoggedIn ? "logout" : "login"}
          </NavLink>
        </div>
      </div>
    </>
  );
};
