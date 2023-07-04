import { createBrowserRouter } from "react-router-dom";
import { EHeader } from "../components/header/EHeader-component";
import { EFooter } from "../components/footer/EFooter-component";
import { ERoomPage } from "../pages/ERoom-page";
import { EHistory } from "../pages/EHistory-page";
import { ELoginPage } from "../pages/ELogin-page";
import { EHomePage } from "../pages/EHome-page";

export const ERouter = createBrowserRouter([
  {
    path: "/",
    Component() {
      return (
        <>
          <EHeader />
          <EHomePage />
          <EFooter />
        </>
      );
    },
  },
  {
    path: "/login",
    Component() {
      return (
        <>
          <EHeader />
          <ELoginPage />
          <EFooter />
        </>
      );
    },
  },

  {
    path: "/rooms/:id",
    Component() {
      return (
        <>
          <EHeader />
          <ERoomPage />
          <EFooter />
        </>
      );
    },

  },
  {
    path: "/history/:userId",
    Component() {
      return (
        <>
          <EHeader />
          <EHistory />
          <EFooter />
        </>
      );
    },
  },
]);

