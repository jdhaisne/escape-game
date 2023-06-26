import { createBrowserRouter} from "react-router-dom";
import { EHomePage } from "../pages/EHome-page";
import { EHeader } from "../components/EHeader-component";
import { EFooter } from "../components/EFooter-component";
import { ELoginPage } from "../pages/ELogin-page";

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
  ]);
  