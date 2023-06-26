import "./App.scss";
import { RouterProvider } from "react-router-dom";
import { ERouter } from "./routes/ERouter";

function App() {
  return <RouterProvider router={ERouter} fallbackElement={<p>Loading...</p>} />;
}

export default App;