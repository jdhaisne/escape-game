import { createBrowserRouter } from "react-router-dom";
import { EHeader } from "../components/header/EHeader-component";
import { EFooter } from "../components/footer/EFooter-component";
import { ERoomPage } from "../pages/ERoom-page";
import { EHistory } from "../pages/EHistory-page";
import { ELoginPage } from "../pages/ELogin-page";
import { EHomePage } from "../pages/EHome-page";
import { ENotFoundPage } from "../pages/ENotFound-page";

export const ERouter = createBrowserRouter([
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
    path: "*",
    Component() {
      return (
        <>
          <EHeader />
          <ENotFoundPage />
          <EFooter />
        </>
      );
    },
  },
]);
