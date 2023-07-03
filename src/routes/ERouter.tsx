import { createBrowserRouter} from "react-router-dom";
import { EHomePage } from "../pages/EHome-page";
import { EHeader } from "../components/EHeader-component";
import { EFooter } from "../components/EFooter-component";
import { ELoginPage } from "../pages/ELogin-page";
import { ERoomPage } from "../pages/ERoom-page";

export const ERouter = createBrowserRouter([
    {
      path: "/",
      Component() {
        return <>
            <EHeader/>
            <EHomePage/>
            <EFooter/>
        </>
      },
    },
    {
      path: "/login",
      Component() {
        return <>
          <EHeader/>
          <ELoginPage/>
          <EFooter/>
        </>
      },
    },

    {
      path: "/rooms/:id",
      Component() {
        return <>
          <EHeader/>
          <ERoomPage/>
          <EFooter/>
        </>
      },
    },
]);
  