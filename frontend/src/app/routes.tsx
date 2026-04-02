import { createBrowserRouter } from "react-router";
import { Root } from "./components/Root";
import { Home } from "./components/Home";
import { Scanner } from "./components/Scanner";
import { History } from "./components/History";
import { Education } from "./components/Education";
import { NotFound } from "./components/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "scanner", Component: Scanner },
      { path: "history", Component: History },
      { path: "education", Component: Education },
      { path: "*", Component: NotFound },
    ],
  },
]);
