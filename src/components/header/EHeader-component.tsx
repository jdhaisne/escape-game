import { NavLink, useNavigate } from "react-router-dom";
import { SUser } from "../../services/ESUser";

import './style.scss'


export const EHeader = () => {
  const isLoggedIn = SUser.isConnected();
  const navigate = useNavigate();

  const handleLogout: React.MouseEventHandler<HTMLAnchorElement> = (e) => {
    e.preventDefault();

    SUser.logout();

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
          {isLoggedIn && (<NavLink
            to={`history/${SUser.getId()}`}
            className={"header__button header__history"}
          >
            History
          </NavLink>)}
          
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
