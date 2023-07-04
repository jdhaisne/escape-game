import { NavLink, useNavigate } from "react-router-dom";
import { SUser } from "../services/ESUser";

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
        <NavLink
          to={isLoggedIn ? "/" : "/login"}
          className={"header__button " + (isLoggedIn ? "logout" : "login")}
          onClick={isLoggedIn ? handleLogout : undefined}
        >
          {isLoggedIn ? "logout" : "login"}
        </NavLink>
      </div>
    </>
  );
};
